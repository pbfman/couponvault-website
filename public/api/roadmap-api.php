<?php
/**
 * Roadmap API Backend
 * 
 * Handles fetching roadmap items and processing anonymous upvotes.
 * Deployment: Upload this file to your web server (e.g., Netcup public directory).
 * 
 * Database Table Structure:
 * CREATE TABLE `roadmap` (
 *   `id` INT AUTO_INCREMENT PRIMARY KEY,
 *   `title` TEXT NOT NULL,
 *   `description` TEXT,
 *   `votes` BIGINT DEFAULT 0,
 *   `status` VARCHAR(50) DEFAULT 'planned',
 *   `is_visible` TINYINT(1) DEFAULT 1
 * );
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Adjust for production security if needed
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Database Configuration
// Try to load from config.local.php first, otherwise use placeholder values
$config = file_exists(__DIR__ . '/../../config.local.php') 
    ? require __DIR__ . '/../../config.local.php'
    : [];

$db_host = $config['DB_HOST'] ?? 'DB_HOST';
$db_name = $config['DB_NAME'] ?? 'DB_NAME';
$db_user = $config['DB_USER'] ?? 'DB_USER';
$db_pass = $config['DB_PASS'] ?? 'DB_PASS';

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Bot Protection: Simple User-Agent Block
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
$botKeywords = ['bot', 'crawl', 'spider', 'slurp', 'facebookexternalhit'];
foreach ($botKeywords as $keyword) {
    if (stripos($userAgent, $keyword) !== false) {
        http_response_code(403);
        echo json_encode(['error' => 'Bots are not allowed to vote.']);
        exit;
    }
}

$action = $_GET['action'] ?? $_POST['action'] ?? '';

switch ($action) {
    case 'get':
        try {
            // Fetch all visible features, sorted by votes
            $stmt = $pdo->prepare("SELECT id, title, description, votes, status FROM roadmap WHERE is_visible = 1 ORDER BY votes DESC");
            $stmt->execute();
            $features = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['features' => $features]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to fetch features.']);
        }
        break;

    case 'vote':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(['error' => 'Method Not Allowed']);
            exit;
        }

        // Get ID from POST body (JSON or Form Data)
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'] ?? $_POST['id'] ?? null;

        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'Missing Feature ID']);
            exit;
        }

        try {
            // Increment vote count anonymously
            $stmt = $pdo->prepare("UPDATE roadmap SET votes = votes + 1 WHERE id = :id");
            $stmt->execute([':id' => $id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'id' => $id]);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Feature not found or invisible']);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Voting failed.']);
        }
        break;

    default:
        http_response_code(400);
        echo json_encode(['error' => 'Invalid action']);
        break;
}
?>
