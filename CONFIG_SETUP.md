# Sichere Konfiguration für Roadmap-API

## Setup-Anleitung

### Lokal (Entwicklung):
1. Kopiere `config.local.example.php` zu `config.local.php`
2. Füge deine echten Datenbank-Credentials ein
3. Die `config.local.php` ist im `.gitignore` und wird nicht ins Git gepusht

### Auf Netcup-Server (Produktion):
1. SSH auf deinen Server verbinden
2. Navigiere zum Root-Verzeichnis deines Projekts (wo auch dieses README ist)
3. Erstelle `config.local.php`:
   ```bash
   nano config.local.php
   ```
4. Füge ein:
   ```php
   <?php
   return [
       'DB_HOST' => 'deine-host.netcup.com',
       'DB_NAME' => 'deine_db',
       'DB_USER' => 'dein_user',
       'DB_PASS' => 'dein_passwort',
   ];
   ?>
   ```
5. Speichern (`Ctrl+O`, `Enter`, `Ctrl+X`)
6. Setze die Berechtigungen: `chmod 600 config.local.php`

## Wichtig:
- ⚠️ `config.local.php` NIEMALS ins Git commiten
- ✅ Nur `config.local.example.php` wird versioniert (als Vorlage)
- ✅ Jeder Entwickler/Server hat seine eigene `config.local.php`
- ✅ Die API (`public/api/roadmap-api.php`) lädt automatisch die Konfiguration
