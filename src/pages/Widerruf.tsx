import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Widerruf: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #1C1B1F 0%, #2B2930 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <IconButton
          onClick={() => navigate('/')}
          sx={{
            color: '#D0BCFF',
            mb: 2,
            '&:hover': {
              background: 'rgba(208, 188, 255, 0.1)',
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
          Widerrufsbelehrung / Right of Withdrawal
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(230, 225, 229, 0.5)', mb: 4, display: 'block' }}>
          Zuletzt aktualisiert: 20.12.2025
        </Typography>

        {/* German Section */}
        <Box sx={{ mb: 6, color: 'text.secondary' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white', mt: 2 }}>
            Widerrufsbelehrung
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Widerrufsrecht
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Patrick Brösamle, Blumenstr. 91, 01307 Dresden, E-Mail: <Link href="mailto:support@coupontresor.de" sx={{ color: '#D0BCFF' }}>support@coupontresor.de</Link>) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Hinweis zu In-App-Käufen
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            Da Sie die digitalen Inhalte (AI Quota Pakete) über einen App Store (Apple App Store oder Google Play Store) erworben haben, empfehlen wir Ihnen, den Widerruf und die Rückerstattung direkt über den jeweiligen App Store abzuwickeln, da wir keinen direkten Zugriff auf Ihre Zahlungsdaten haben und die Rückabwicklung dort in der Regel automatisiert erfolgt.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Folgen des Widerrufs
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Erlöschen des Widerrufsrechts
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            Das Widerrufsrecht erlischt bei einem Vertrag über die Lieferung von nicht auf einem körperlichen Datenträger befindlichen digitalen Inhalten (z.B. AI Credits) vorzeitig, wenn wir mit der Ausführung des Vertrags begonnen haben, nachdem Sie
            <ol style={{ paddingLeft: '20px', marginTop: '8px' }}>
              <li>ausdrücklich zugestimmt haben, dass wir mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnen, und</li>
              <li>Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung mit Beginn der Ausführung des Vertrags Ihr Widerrufsrecht verlieren.</li>
            </ol>
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Muster-Widerrufsformular
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6, fontStyle: 'italic' }}>
            (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
          </Typography>
          <Box sx={{ border: '1px solid rgba(255,255,255,0.1)', p: 2, borderRadius: 1, bgcolor: 'rgba(255,255,255,0.05)' }}>
            <Typography component="div" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
              An<br/>
              Patrick Brösamle<br/>
              Blumenstr. 91<br/>
              01307 Dresden<br/>
              E-Mail: support@coupontresor.de<br/><br/>
              Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)<br/><br/>
              Bestellt am (*)/erhalten am (*)<br/><br/>
              Name des/der Verbraucher(s)<br/><br/>
              Anschrift des/der Verbraucher(s)<br/><br/>
              Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)<br/><br/>
              Datum<br/>
              ___<br/>
              (*) Unzutreffendes streichen.
            </Typography>
          </Box>
        </Box>

        {/* English Section */}
        <Box sx={{ color: 'text.secondary', pt: 4, borderTop: '1px solid rgba(208, 188, 255, 0.2)' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white', mt: 4 }}>
            Right of Withdrawal
          </Typography>

          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            Consumers have a fourteen-day right of withdrawal.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Right of Withdrawal
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            You have the right to withdraw from this contract within fourteen days without giving any reason.
            The withdrawal period will expire after fourteen days from the day of the conclusion of the contract.
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            To exercise the right of withdrawal, you must inform us (Patrick Brösamle, Blumenstr. 91, 01307 Dresden, Germany, Email: <Link href="mailto:support@coupontresor.de" sx={{ color: '#D0BCFF' }}>support@coupontresor.de</Link>) of your decision to withdraw from this contract by an unequivocal statement (e.g. a letter sent by post or an e-mail). You may use the attached model withdrawal form, but it is not obligatory.
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Note on In-App Purchases
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            Since you purchased the digital content (AI Quota packages) via an App Store (Apple App Store or Google Play Store), we recommend that you process the withdrawal and refund directly via the respective App Store, as we do not have direct access to your payment data and the reversal is usually automated there.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Effects of withdrawal
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than 14 days from the day of your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Expiry of the right of withdrawal
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6 }}>
            The right of withdrawal expires prematurely in the case of a contract for the supply of digital content which is not supplied on a tangible medium (e.g. AI Credits) if we have begun with the performance of the contract after you have
            <ol style={{ paddingLeft: '20px', marginTop: '8px' }}>
              <li>expressly consented to our beginning the performance of the contract before the expiry of the withdrawal period, and</li>
              <li>acknowledged that by your consent you lose your right of withdrawal upon the beginning of the performance of the contract.</li>
            </ol>
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Model Withdrawal Form
          </Typography>
          <Typography sx={{ marginBottom: '16px', lineHeight: 1.6, fontStyle: 'italic' }}>
            (If you wish to withdraw from the contract, please complete and return this form.)
          </Typography>
          <Box sx={{ border: '1px solid rgba(255,255,255,0.1)', p: 2, borderRadius: 1, bgcolor: 'rgba(255,255,255,0.05)' }}>
            <Typography component="div" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
              To<br/>
              Patrick Brösamle<br/>
              Blumenstr. 91<br/>
              01307 Dresden<br/>
              Germany<br/>
              Email: support@coupontresor.de<br/><br/>
              I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract of sale of the following goods (*)/for the provision of the following service (*),<br/><br/>
              Ordered on (*)/received on (*),<br/><br/>
              Name of consumer(s),<br/><br/>
              Address of consumer(s),<br/><br/>
              Signature of consumer(s) (only if this form is notified on paper),<br/><br/>
              Date<br/>
              ___<br/>
              (*) Delete as appropriate.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Widerruf;
