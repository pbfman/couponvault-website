import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Link,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      scroll="paper"
      maxWidth="md"
      fullWidth
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          bgcolor: '#1C1B1F',
          backgroundImage: 'none',
          border: '1px solid rgba(208, 188, 255, 0.1)',
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
          Impressum / Legal Notice
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ borderColor: 'rgba(208, 188, 255, 0.1)' }}>
        {/* German Section */}
        <Box sx={{ mb: 4, color: 'text.secondary' }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 2 }}>
            Angaben gemäß § 5 TMG
          </Typography>
          <Typography paragraph>
            Patrick Brösamle<br />
            Blumenstr. 91<br />
            01307 Dresden
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Kontakt
          </Typography>
          <Typography paragraph>
            E-Mail: <Link href="mailto:patrick@broesamle.dev" sx={{ color: '#D0BCFF' }}>patrick@broesamle.dev</Link>
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </Typography>
          <Typography paragraph>
            Patrick Brösamle<br />
            Blumenstr. 91<br />
            01307 Dresden
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Haftungsausschluss (Disclaimer)
          </Typography>
          
          <Typography variant="subtitle1" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
            Haftung für Inhalte
          </Typography>
          <Typography paragraph>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </Typography>

          <Typography variant="subtitle1" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
            Haftung für Links
          </Typography>
          <Typography paragraph>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </Typography>

          <Typography variant="subtitle1" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
            Urheberrecht
          </Typography>
          <Typography paragraph>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </Typography>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(208, 188, 255, 0.2)' }} />

        {/* English Section */}
        <Box sx={{ color: 'text.secondary' }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 2 }}>
            Information according to § 5 TMG
          </Typography>
          <Typography paragraph>
            Patrick Brösamle<br />
            Blumenstr. 91<br />
            01307 Dresden<br />
            Germany
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Contact
          </Typography>
          <Typography paragraph>
            Email: <Link href="mailto:patrick@broesamle.dev" sx={{ color: '#D0BCFF' }}>patrick@broesamle.dev</Link>
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Responsible for content according to § 55 Abs. 2 RStV
          </Typography>
          <Typography paragraph>
            Patrick Brösamle<br />
            Blumenstr. 91<br />
            01307 Dresden<br />
            Germany
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ color: 'white', mt: 3 }}>
            Disclaimer
          </Typography>
          
          <Typography variant="subtitle1" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
            Liability for Contents
          </Typography>
          <Typography paragraph>
            As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Sect. 1 TMG. However, according to §§ 8 to 10 TMG, we as service providers are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general laws remain unaffected by this. However, liability in this regard is only possible from the time of knowledge of a concrete infringement. Upon becoming aware of such legal violations, we will remove this content immediately.
          </Typography>

          <Typography variant="subtitle1" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
            Liability for Links
          </Typography>
          <Typography paragraph>
            Our offer contains links to external third-party websites on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent content control of the linked pages is not reasonable without concrete evidence of an infringement. Upon becoming aware of legal violations, we will remove such links immediately.
          </Typography>

          <Typography variant="subtitle1" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
            Copyright
          </Typography>
          <Typography paragraph>
            The content and works on these pages created by the site operators are subject to German copyright law. The reproduction, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use. Insofar as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, we ask for a corresponding note. Upon becoming aware of legal violations, we will remove such content immediately.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
