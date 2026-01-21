import React from 'react';
import { Box, Container, Typography, IconButton, Link, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const AGB: React.FC = () => {
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
          AGB & Nutzungsbedingungen / Terms & Conditions
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(230, 225, 229, 0.5)', mb: 4, display: 'block' }}>
          Zuletzt aktualisiert: 20.12.2025
        </Typography>

        <Box sx={{ mb: 6, color: 'text.secondary' }}>

          <Paper 
            elevation={0}
            sx={{ 
                p: 3, 
                mb: 4, 
                borderRadius: 1, 
                border: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
            }}
        >
            <Typography variant="h5" gutterBottom sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
                Auf einen Blick: Die Spielregeln
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                Das Kleingedruckte kurz & knapp zusammengefasst:
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🎯 Worum geht's?
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        CouponTresor hilft beim Verwalten von Gutscheinen. Manuell oder vollautomatisch per KI-Analyse.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        👤 Dein Account
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Für die Nutzung ist ein Account nötig. Du kannst ihn (und deine Daten) jederzeit löschen.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        💎 KI & Credits
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        KI-Analyse kostet Credits (In-App-Kauf). Einmal verbrauchte Credits können nicht erstattet werden.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🤝 Fair Play
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Sei nett zur Community. Keine illegalen oder beleidigenden Inhalte teilen.
                    </Typography>
                </Box>
                <Box sx={{ gridColumn: { sm: '1 / -1' } }}>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        ⚠️ Wichtig zur Haftung
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Die KI ist schlau, aber nicht perfekt. Bitte prüfe erkannte Daten (z.B. Ablaufdatum) immer selbst, bevor du an der Kasse stehst. Wir übernehmen keine Garantie für die Richtigkeit.
                    </Typography>
                </Box>
            </Box>
            
            <Typography variant="caption" sx={{ display: 'block', mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'rgba(255,255,255,0.1)', color: 'text.disabled', fontStyle: 'italic' }}>
                Hinweis: Dies ist eine vereinfachte Zusammenfassung. Rechtlich bindend sind die ausführlichen Bedingungen unten.
            </Typography>
        </Paper>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            1. Gegenstand der App
          </Typography>
          <Typography paragraph>
            CouponTresor bietet dem Nutzer die Möglichkeit, Gutscheine und Coupons digital zu verwalten. Dies umfasst die manuelle Eingabe sowie die KI-gestützte Analyse von Coupon-Bildern zur automatischen Datenerfassung.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            2. Registrierung und Account
          </Typography>
          <Typography paragraph>
            Die Nutzung der App erfordert die Erstellung eines Benutzerkontos. Der Nutzer ist verpflichtet, seine Zugangsdaten geheim zu halten. Ein Anspruch auf Registrierung besteht nicht.
            Der Nutzer kann sein Konto jederzeit über die App-Einstellungen löschen. Dabei werden alle personenbezogenen Daten gemäß unserer <Link component={RouterLink} to="/datenschutz-app" sx={{ color: '#D0BCFF' }}>Datenschutzerklärung</Link> entfernt.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            3. KI-Analyse und Credits
          </Typography>
          <Typography paragraph>
            Für die automatisierte Analyse von Coupons werden „AI Credits“ benötigt. Diese Credits können über In-App-Käufe im Apple App Store oder Google Play Store erworben werden.
          </Typography>
          <Typography paragraph>
            <strong>Leistungserbringung:</strong> Mit dem Kauf von AI Credits und dem Hochladen eines Bildes zur KI-Analyse stimmt der Nutzer zu, dass die Vertragserfüllung (Bereitstellung der Credits bzw. Durchführung der Analyse) unmittelbar beginnt. Der Nutzer bestätigt seine Kenntnis davon, dass sein <Link component={RouterLink} to="/widerruf" sx={{ color: '#D0BCFF' }}>Widerrufsrecht</Link> mit Beginn der Vertragserfüllung vorzeitig erlischt.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            4. Community-Funktionen
          </Typography>
          <Typography paragraph>
            Nutzer können Coupons bewerten (Up/Down-Vote) und Informationen teilen. Es ist untersagt, rechtswidrige, beleidigende oder irreführende Inhalte zu veröffentlichen.
          </Typography>
          <Typography paragraph>
            <strong>Wichtig – Beachten Sie die Gutscheinbedingungen:</strong> Der Nutzer ist verpflichtet, die Bedingungen und Einschränkungen der Gutscheine sowie die Vorgaben des Herausgebers zu beachten, bevor er diese mit der Community teilt oder vervielfältigt. Falls die Gutscheinbedingungen oder der Herausgeber eine Veröffentlichung, Vervielfältigung, Weitergabe oder sonstige Nutzung untersagen, darf der Nutzer diesen Gutschein nicht über die Community-Funktionen verbreiten, mit anderen teilen oder generell in die Anwendung einpflegen.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            5. Löschung von Inhalten und des Kontos ohne Vorankündigung
          </Typography>
          <Typography paragraph>
            Der Anbieter behält sich das Recht vor, Inhalte bei Verstößen ohne Vorankündigung zu löschen. Ebenso kann der Anbieter Konten sperren oder löschen, wenn gegen die Nutzungsbedingungen verstoßen wird.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            6. In-App-Käufe und Abonnements
          </Typography>
          <Typography paragraph>
            Sämtliche Zahlungen werden über die Zahlungssysteme von Apple oder Google abgewickelt. Es gelten ergänzend die Bedingungen der jeweiligen Store-Betreiber. Preise verstehen sich inklusive der geltenden Umsatzsteuer.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            7. Haftungsbeschränkung
          </Typography>
          <Typography paragraph>
            Der Anbieter übernimmt keine Gewähr für die Richtigkeit der durch die KI analysierten Daten. Ausgenommen hiervon ist Vorsatz und grobe Fahrlässigkeit auf Seiten des Anbieters. Der Nutzer ist verpflichtet, die erkannten Daten (z. B. Ablaufdatum) vor der Einlösung eines Coupons selbst zu prüfen. 
Wir haften nicht für die Verfügbarkeit oder Akzeptanz der Coupons bei den jeweiligen Einzelhändlern.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            8. Widerrufsrecht
          </Typography>
          <Typography paragraph>
            Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Details hierzu finden sich in der separaten <Link component={RouterLink} to="/widerruf" sx={{ color: '#D0BCFF' }}>Widerrufsbelehrung</Link>.
            Hinweis: Das Widerrufsrecht für digitale Inhalte erlischt vorzeitig, wenn der Nutzer ausdrücklich zugestimmt hat, dass der Anbieter mit der Ausführung des Vertrages vor Ende der Widerrufsfrist beginnt und der Verbraucher Kenntnis darüber hat, dass er durch die Zustimmung mit Beginn der Lieferung des digitalen Inhalts sein Widerrufsrecht verliert.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            9. Verfügbarkeit
          </Typography>
          <Typography paragraph>
            Wir bemühen uns um eine möglichst unterbrechungsfreie Verfügbarkeit der App. Ausfallzeiten durch Wartung, Updates oder technische Probleme können jedoch nicht vollständig ausgeschlossen werden.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            10. Anwendbares Recht
          </Typography>
          <Typography paragraph>
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts, soweit dem keine zwingenden Verbraucherschutzvorschriften entgegenstehen.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            11. Streitbeilegung
          </Typography>
          <Typography paragraph>
            Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <Link href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener" sx={{ color: '#D0BCFF' }}>https://ec.europa.eu/consumers/odr/</Link>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            12. Änderungen der Nutzungsbedingungen
          </Typography>
          <Typography paragraph>
            Der Anbieter behält sich das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Alle Änderungen werden in unserer App veröffentlicht, und wir empfehlen Ihnen, diese Nutzungsbedingungen regelmäßig auf Aktualisierungen zu überprüfen. Ihre fortgesetzte Nutzung des Dienstes nach Änderungen dieser Nutzungsbedingungen bedeutet Ihre Akzeptanz dieser Änderungen.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            13. Salvatorische Klausel
          </Typography>
          <Typography paragraph>
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </Typography>
        </Box>

        {/* English Section */}
        <Box sx={{ color: 'text.secondary', pt: 4, borderTop: '1px solid rgba(208, 188, 255, 0.2)' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white', mt: 4 }}>
            Terms & Conditions
          </Typography>

          <Paper 
            elevation={0}
            sx={{ 
                p: 3, 
                mb: 4, 
                borderRadius: 1, 
                border: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
            }}
        >
            <Typography variant="h5" gutterBottom sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
                At a Glance: The Rules
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                The fine print, summarized for you:
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🎯 What is it?
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        CouponTresor helps manage vouchers. Manually or fully automatically via AI analysis.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        👤 Your Account
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        An account is required. You can delete it (and your data) at any time.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        💎 AI & Credits
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        AI analysis costs credits (In-App Purchase). Used credits cannot be refunded.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🤝 Fair Play
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Be nice to the community. Do not share illegal or offensive content.
                    </Typography>
                </Box>
                <Box sx={{ gridColumn: { sm: '1 / -1' } }}>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        ⚠️ Liability Notice
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        The AI is smart but not perfect. Please verify detected data (e.g., expiration date) yourself before using a coupon. We do not guarantee accuracy.
                    </Typography>
                </Box>
            </Box>
            
            <Typography variant="caption" sx={{ display: 'block', mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'rgba(255,255,255,0.1)', color: 'text.disabled', fontStyle: 'italic' }}>
                Note: This is a simplified summary. The detailed terms below are legally binding.
            </Typography>
        </Paper>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            1. Subject of the App
          </Typography>
          <Typography paragraph>
            CouponTresor offers users the ability to manage vouchers and coupons digitally. This includes manual entry as well as AI-supported analysis of coupon images for automatic data collection.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            2. Registration and Account
          </Typography>
          <Typography paragraph>
            Use of the app requires the creation of a user account. The user is obliged to keep their login credentials confidential. There is no legal entitlement to registration.
            Users can delete their account at any time via the app settings. All personal data will be removed in accordance with our <Link component={RouterLink} to="/datenschutz-app" sx={{ color: '#D0BCFF' }}>privacy policy</Link>.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            3. AI Analysis and Credits
          </Typography>
          <Typography paragraph>
            "AI Credits" are required for the automated analysis of coupons. These credits can be purchased via in-app purchases in the Apple App Store or Google Play Store.
          </Typography>
          <Typography paragraph>
            <strong>Service Provision:</strong> By purchasing AI Credits and uploading an image for AI analysis, the user agrees that the contract performance (provision of credits or execution of the analysis) begins immediately. The user acknowledges that their <Link component={RouterLink} to="/widerruf" sx={{ color: '#D0BCFF' }}>right of withdrawal</Link> expires prematurely upon commencement of the contract performance.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            4. Community Features
          </Typography>
          <Typography paragraph>
            Users can rate coupons (up/down vote) and share information. It is prohibited to publish illegal, offensive, or misleading content.
          </Typography>
          <Typography paragraph>
            <strong>Important – Respect Coupon Terms:</strong> Users are obligated to respect the terms, conditions, and restrictions of coupons as well as the issuer's stipulations before sharing or duplicating them with the community. If the coupon terms or issuer prohibit publication, duplication, sharing, or any other use, users must not distribute the coupon via community features, share it with others, or add it to the application in general.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            5. Removal of Content and Accounts Without Notice
          </Typography>
          <Typography paragraph>
            The provider reserves the right to delete content without prior notice in case of violations. The provider may also suspend or delete accounts if the terms of use are violated.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            6. In-App Purchases and Subscriptions
          </Typography>
          <Typography paragraph>
            All payments are processed through Apple's or Google's payment systems. The terms and conditions of the respective store operators apply additionally. Prices include applicable VAT.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            7. Limitation of Liability
          </Typography>
          <Typography paragraph>
            The provider assumes no warranty for the accuracy of data analyzed by the AI, except in cases of intent or gross negligence on the part of the provider. The user must verify detected data (e.g., expiration date) themselves before redeeming a coupon. We are not liable for the availability or acceptance of coupons by the respective retailers.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            8. Right of Withdrawal
          </Typography>
          <Typography paragraph>
            Consumers have a statutory right of withdrawal. Details can be found in the separate <Link component={RouterLink} to="/widerruf" sx={{ color: '#D0BCFF' }}>cancellation policy</Link>.
            Note: The right of withdrawal for digital content expires prematurely if the user has expressly agreed that the provider begins the execution of the contract before the end of the withdrawal period and the consumer is aware that this will cause them to lose their right of withdrawal.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            9. Availability
          </Typography>
          <Typography paragraph>
            We strive for the most uninterrupted availability of the app possible. However, downtime due to maintenance, updates, or technical issues cannot be completely ruled out.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            10. Applicable Law
          </Typography>
          <Typography paragraph>
            The law of the Federal Republic of Germany applies, excluding the UN Sales Convention, unless mandatory consumer protection regulations oppose this.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            11. Dispute Resolution
          </Typography>
          <Typography paragraph>
            The EU Commission provides a platform for online dispute resolution (ODR): <Link href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener" sx={{ color: '#D0BCFF' }}>https://ec.europa.eu/consumers/odr/</Link>. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            12. Changes to the Terms of Use
          </Typography>
          <Typography paragraph>
            The provider reserves the right to change these terms of use at any time. All changes will be published in our app, and we recommend reviewing these terms regularly for updates. Continued use of the service after changes signifies acceptance of the updated terms.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            13. Severability Clause
          </Typography>
          <Typography paragraph>
            Should individual provisions of these Terms & Conditions be or become invalid, the validity of the remaining provisions remains unaffected.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AGB;
