import React from 'react';
import { Box, Container, Typography, IconButton, Link, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const AGBEmail: React.FC = () => {
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
          E-Mail-Feature: Nutzungsbedingungen / E-Mail Feature: Terms of Use
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(230, 225, 229, 0.5)', mb: 4, display: 'block' }}>
          Zuletzt aktualisiert: 04.02.2026
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
                Auf einen Blick: E-Mail-Funktion
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                Die wichtigsten Punkte zur E-Mail-Verarbeitung:
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🤖 KI-Verarbeitung
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        E-Mails werden mit Google Gemini AI analysiert, um automatisch Gutscheine zu erkennen.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🗑️ Sofortige Löschung
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Gesendete E-Mails werden unmittelbar nach der Verarbeitung vollständig gelöscht.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🔒 Datenschutz
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Personenbezogene Daten werden vor der KI-Verarbeitung automatisch entfernt.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        ⚠️ Ihre Verantwortung
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Senden Sie keine hochsensiblen oder vertraulichen Informationen an diese E-Mail-Adresse.
                    </Typography>
                </Box>
            </Box>
            
            <Typography variant="caption" sx={{ display: 'block', mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'rgba(255,255,255,0.1)', color: 'text.disabled', fontStyle: 'italic' }}>
                Hinweis: Dies ist eine vereinfachte Zusammenfassung. Rechtlich bindend sind die ausführlichen Bedingungen unten.
            </Typography>
        </Paper>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            1. Gegenstand und Funktionsweise
          </Typography>
          <Typography paragraph>
            Das E-Mail-Feature von CouponTresor ermöglicht es Nutzern, eine personalisierte E-Mail-Adresse zu generieren. 
            E-Mails, die an diese Adresse gesendet werden, werden automatisch mittels künstlicher Intelligenz (Google Gemini AI) 
            analysiert, um Gutscheine und Coupons zu extrahieren und dem Nutzerkonto hinzuzufügen.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            2. Verarbeitung durch künstliche Intelligenz
          </Typography>
          <Typography paragraph>
            <strong>2.1 KI-Anbieter:</strong> Für die E-Mail-Analyse setzen wir Google Gemini AI ein. Die Verarbeitung erfolgt über die 
            API-Schnittstelle von Google.
          </Typography>
          <Typography paragraph>
            <strong>2.2 Datenminimierung:</strong> Vor der Übermittlung an die KI werden personenbezogene Daten soweit technisch möglich 
            automatisch entfernt oder anonymisiert. Dazu gehören insbesondere: Name, vollständige E-Mail-Adressen, Telefonnummern, 
            Anschriften und ähnliche Identifikationsmerkmale.
          </Typography>
          <Typography paragraph>
            <strong>2.3 Verarbeitungszweck:</strong> Die KI dient ausschließlich der Erkennung von Gutscheininformationen 
            (Shop, Wert, Code, Ablaufdatum, Nutzungsbedingungen).
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            3. AI Credits und Kosten
          </Typography>
          <Typography paragraph>
            <strong>3.1 Verbrauch von AI Credits:</strong> Bei erfolgreicher Erkennung und Erstellung eines Gutscheins aus einer 
            E-Mail wird automatisch ein kostenpflichtiger AI Credit verbraucht. AI Credits können über In-App-Käufe im Apple App Store 
            oder Google Play Store erworben werden.
          </Typography>
          <Typography paragraph>
            <strong>3.2 Keine Credits verfügbar:</strong> Sollten zum Zeitpunkt des E-Mail-Eingangs keine AI Credits auf dem 
            Nutzerkonto verfügbar sein, erfolgt keine Verarbeitung der E-Mail. Die gesendete E-Mail wird in diesem Fall sofort gelöscht, 
            ohne dass eine Analyse oder Gutschein-Extraktion durchgeführt wird.
          </Typography>
          <Typography paragraph>
            <strong>3.3 Verbrauchte Credits:</strong> Einmal verbrauchte AI Credits können nicht erstattet werden, auch wenn die 
            Gutschein-Erkennung nicht den Erwartungen entspricht oder fehlerhaft ist.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            4. Datenspeicherung und Löschung
          </Typography>
          <Typography paragraph>
            <strong>4.1 Keine dauerhafte Speicherung:</strong> E-Mails werden ausschließlich zur unmittelbaren Verarbeitung temporär 
            gespeichert und unmittelbar nach erfolgreicher Analyse vollständig gelöscht.
          </Typography>
          <Typography paragraph>
            <strong>4.2 Löschfristen:</strong> Die Löschung erfolgt spätestens 24 Stunden nach Eingang der E-Mail, in der Regel jedoch 
            bereits innerhalb weniger Minuten nach der Verarbeitung.
          </Typography>
          <Typography paragraph>
            <strong>4.3 Extrahierte Daten:</strong> Nur die aus der E-Mail extrahierten Gutscheininformationen werden dauerhaft im 
            Nutzerkonto gespeichert. Die Original-E-Mail wird nicht gespeichert.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            5. Pflichten und Verantwortung des Nutzers
          </Typography>
          <Typography paragraph>
            <strong>5.1 Keine sensiblen Daten:</strong> Der Nutzer verpflichtet sich, keine hochsensiblen oder vertraulichen 
            Informationen an die generierte E-Mail-Adresse zu senden. Dazu gehören insbesondere:
          </Typography>
          <ul>
            <li>Finanzdaten (Kreditkartennummern, Bankverbindungen, Passwörter)</li>
            <li>Gesundheitsdaten</li>
            <li>Vertrauliche geschäftliche Informationen</li>
            <li>Persönliche Ausweisdokumente</li>
            <li>Politische oder religiöse Überzeugungen</li>
          </ul>
          <Typography paragraph>
            <strong>5.2 Eigenverantwortung:</strong> Obwohl technische Maßnahmen zur Datenminimierung getroffen werden, liegt die 
            Verantwortung für den Inhalt der gesendeten E-Mails beim Nutzer. Der Anbieter übernimmt keine Haftung für die 
            versehentliche Übermittlung sensibler Informationen durch den Nutzer.
          </Typography>
          <Typography paragraph>
            <strong>5.3 Zweckbindung:</strong> Die E-Mail-Adresse darf ausschließlich zum Empfang von Gutscheinen und verwandten 
            Marketing-E-Mails verwendet werden. Missbräuchliche Nutzung (z.B. Spam-Versand, illegale Inhalte) ist untersagt.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            6. Haftungsausschluss und Gewährleistung
          </Typography>
          <Typography paragraph>
            <strong>6.1 Keine Garantie für Genauigkeit:</strong> Die KI-gestützte Analyse erfolgt nach bestem Wissen und Gewissen, 
            jedoch kann keine Garantie für die vollständige Richtigkeit oder Vollständigkeit der extrahierten Daten übernommen werden. 
            Der Nutzer ist verpflichtet, extrahierte Gutscheindaten selbst zu überprüfen.
          </Typography>
          <Typography paragraph>
            <strong>6.2 Keine Haftung für Datenverlust:</strong> Der Anbieter haftet nicht für den Verlust von E-Mails durch 
            technische Fehler, Serverausfälle oder andere Umstände. Es wird empfohlen, wichtige Gutscheine auch anderweitig zu sichern.
          </Typography>
          <Typography paragraph>
            <strong>6.3 Keine Haftung für Drittanbieter:</strong> Der Anbieter haftet nicht für die Datenverarbeitungspraktiken 
            von Google (Gemini AI) oder anderen involvierten Dritten, soweit gesetzlich zulässig.
          </Typography>
          <Typography paragraph>
            <strong>6.4 Verfügbarkeit:</strong> Das E-Mail-Feature wird ohne Gewähr für ununterbrochene Verfügbarkeit bereitgestellt. 
            Wartungsarbeiten, technische Störungen oder Änderungen am Service können jederzeit erfolgen.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            7. Datenschutz und Compliance
          </Typography>
          <Typography paragraph>
            Die Verarbeitung personenbezogener Daten im Rahmen des E-Mail-Features erfolgt gemäß unserer 
            <Link component={RouterLink} to="/datenschutz-app" sx={{ color: '#D0BCFF' }}> Datenschutzerklärung</Link> und den 
            Vorgaben der DSGVO (Datenschutz-Grundverordnung) sowie des Schweizer DSG.
          </Typography>
          <Typography paragraph>
            <strong>7.1 Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung 
            (Art. 6 Abs. 1 lit. a DSGVO).
          </Typography>
          <Typography paragraph>
            <strong>7.2 Widerruf:</strong> Sie können Ihre Einwilligung zur E-Mail-Verarbeitung jederzeit widerrufen, indem Sie 
            die E-Mail-Funktion in den App-Einstellungen deaktivieren oder Ihr E-Mail-Konto löschen.
          </Typography>
          <Typography paragraph>
            <strong>7.3 Betroffenenrechte:</strong> Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der 
            Verarbeitung, Datenübertragbarkeit und Widerspruch gemäß DSGVO.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            8. Newsletter-Anmeldung
          </Typography>
          <Typography paragraph>
            Nutzer können ihre E-Mail-Adresse optional für den Empfang von Newslettern verwenden. Die Anmeldung und Verwaltung 
            von Newsletter-Abonnements erfolgt über die App-Einstellungen. Newsletter können jederzeit abbestellt werden.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            9. Änderungen dieser Nutzungsbedingungen
          </Typography>
          <Typography paragraph>
            Der Anbieter behält sich das Recht vor, diese speziellen Nutzungsbedingungen für das E-Mail-Feature jederzeit zu ändern. 
            Änderungen werden in der App veröffentlicht. Die fortgesetzte Nutzung des E-Mail-Features nach Änderungen gilt als 
            Zustimmung zu den aktualisierten Bedingungen.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            10. Kündigung und Löschung
          </Typography>
          <Typography paragraph>
            Der Nutzer kann die E-Mail-Funktion jederzeit in den App-Einstellungen deaktivieren. Bei Deaktivierung wird die 
            E-Mail-Adresse ungültig und kann nicht mehr zum Empfang von E-Mails verwendet werden. Bereits extrahierte Gutscheine 
            bleiben im Nutzerkonto erhalten, sofern nicht separat gelöscht.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            11. Anwendbares Recht
          </Typography>
          <Typography paragraph>
            Für diese Nutzungsbedingungen gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts, 
            soweit dem keine zwingenden Verbraucherschutzvorschriften entgegenstehen.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            12. Salvatorische Klausel
          </Typography>
          <Typography paragraph>
            Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam sein oder werden, bleibt die Wirksamkeit der 
            übrigen Bestimmungen unberührt.
          </Typography>
        </Box>

        {/* English Section */}
        <Box sx={{ color: 'text.secondary', pt: 4, borderTop: '1px solid rgba(208, 188, 255, 0.2)' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white', mt: 4 }}>
            E-Mail Feature: Terms of Use
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
                At a Glance: E-Mail Function
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                The most important points about e-mail processing:
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🤖 AI Processing
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        E-mails are analyzed with Google Gemini AI to automatically detect coupons.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🗑️ Immediate Deletion
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Sent e-mails are completely deleted immediately after processing.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        🔒 Privacy Protection
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Personal data is automatically removed before AI processing.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        ⚠️ Your Responsibility
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Do not send highly sensitive or confidential information to this e-mail address.
                    </Typography>
                </Box>
            </Box>
            
            <Typography variant="caption" sx={{ display: 'block', mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'rgba(255,255,255,0.1)', color: 'text.disabled', fontStyle: 'italic' }}>
                Note: This is a simplified summary. The detailed terms below are legally binding.
            </Typography>
        </Paper>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            1. Purpose and Functionality
          </Typography>
          <Typography paragraph>
            CouponTresor's e-mail feature allows users to generate a personalized e-mail address. E-mails sent to this address 
            are automatically analyzed using artificial intelligence (Google Gemini AI) to extract coupons and vouchers and add 
            them to the user account.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            2. Processing by Artificial Intelligence
          </Typography>
          <Typography paragraph>
            <strong>2.1 AI Provider:</strong> We use Google Gemini AI for e-mail analysis. Processing is performed through 
            Google's API interface.
          </Typography>
          <Typography paragraph>
            <strong>2.2 Data Minimization:</strong> Before transmission to the AI, personal data is automatically removed or 
            anonymized as far as technically possible. This includes in particular: names, complete e-mail addresses, phone 
            numbers, postal addresses, and similar identification features.
          </Typography>
          <Typography paragraph>
            <strong>2.3 Processing Purpose:</strong> The AI serves exclusively for the recognition of coupon information 
            (shop, value, code, expiration date, terms of use).
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            3. AI Credits and Costs
          </Typography>
          <Typography paragraph>
            <strong>3.1 Consumption of AI Credits:</strong> Upon successful recognition and creation of a coupon from an e-mail, 
            a paid AI Credit is automatically consumed. AI Credits can be purchased via in-app purchases in the Apple App Store 
            or Google Play Store.
          </Typography>
          <Typography paragraph>
            <strong>3.2 No Credits Available:</strong> If no AI Credits are available on the user account at the time of e-mail 
            receipt, no processing of the e-mail will occur. In this case, the sent e-mail will be immediately deleted without any 
            analysis or coupon extraction being performed.
          </Typography>
          <Typography paragraph>
            <strong>3.3 Consumed Credits:</strong> Once consumed, AI Credits cannot be refunded, even if the coupon recognition 
            does not meet expectations or is faulty.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            4. Data Storage and Deletion
          </Typography>
          <Typography paragraph>
            <strong>4.1 No Permanent Storage:</strong> E-mails are stored temporarily exclusively for immediate processing and 
            completely deleted immediately after successful analysis.
          </Typography>
          <Typography paragraph>
            <strong>4.2 Deletion Periods:</strong> Deletion occurs at the latest 24 hours after receipt of the e-mail, but 
            typically within a few minutes after processing.
          </Typography>
          <Typography paragraph>
            <strong>4.3 Extracted Data:</strong> Only the coupon information extracted from the e-mail is permanently stored 
            in the user account. The original e-mail is not stored.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            5. User Obligations and Responsibility
          </Typography>
          <Typography paragraph>
            <strong>5.1 No Sensitive Data:</strong> Users commit to not sending highly sensitive or confidential information 
            to the generated e-mail address. This includes in particular:
          </Typography>
          <ul>
            <li>Financial data (credit card numbers, bank details, passwords)</li>
            <li>Health data</li>
            <li>Confidential business information</li>
            <li>Personal identification documents</li>
            <li>Political or religious beliefs</li>
          </ul>
          <Typography paragraph>
            <strong>5.2 Personal Responsibility:</strong> Although technical measures for data minimization are implemented, 
            the responsibility for the content of sent e-mails lies with the user. The provider assumes no liability for the 
            accidental transmission of sensitive information by the user.
          </Typography>
          <Typography paragraph>
            <strong>5.3 Purpose Limitation:</strong> The e-mail address may only be used for receiving coupons and related 
            marketing e-mails. Abusive use (e.g., spam, illegal content) is prohibited.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            6. Disclaimer and Warranty
          </Typography>
          <Typography paragraph>
            <strong>6.1 No Guarantee of Accuracy:</strong> AI-supported analysis is performed to the best of our knowledge, 
            but no guarantee can be given for the complete accuracy or completeness of extracted data. Users are obliged to 
            verify extracted coupon data themselves.
          </Typography>
          <Typography paragraph>
            <strong>6.2 No Liability for Data Loss:</strong> The provider is not liable for the loss of e-mails due to 
            technical errors, server failures, or other circumstances. It is recommended to secure important coupons elsewhere.
          </Typography>
          <Typography paragraph>
            <strong>6.3 No Liability for Third Parties:</strong> The provider is not liable for the data processing practices 
            of Google (Gemini AI) or other involved third parties, to the extent legally permissible.
          </Typography>
          <Typography paragraph>
            <strong>6.4 Availability:</strong> The e-mail feature is provided without guarantee of uninterrupted availability. 
            Maintenance work, technical disruptions, or service changes may occur at any time.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            7. Data Protection and Compliance
          </Typography>
          <Typography paragraph>
            The processing of personal data within the e-mail feature is carried out in accordance with our 
            <Link component={RouterLink} to="/datenschutz-app" sx={{ color: '#D0BCFF' }}> privacy policy</Link> and the 
            requirements of GDPR (General Data Protection Regulation) as well as the Swiss DPA.
          </Typography>
          <Typography paragraph>
            <strong>7.1 Legal Basis:</strong> Processing is based on your explicit consent (Art. 6 para. 1 lit. a GDPR).
          </Typography>
          <Typography paragraph>
            <strong>7.2 Revocation:</strong> You can revoke your consent to e-mail processing at any time by deactivating 
            the e-mail function in the app settings or deleting your e-mail account.
          </Typography>
          <Typography paragraph>
            <strong>7.3 Data Subject Rights:</strong> You have the right to access, rectification, deletion, restriction of 
            processing, data portability, and objection according to GDPR.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            8. Newsletter Subscription
          </Typography>
          <Typography paragraph>
            Users can optionally use their e-mail address to receive newsletters. Newsletter subscription and management are 
            handled through the app settings. Newsletters can be unsubscribed at any time.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            9. Changes to These Terms of Use
          </Typography>
          <Typography paragraph>
            The provider reserves the right to change these special terms of use for the e-mail feature at any time. Changes 
            will be published in the app. Continued use of the e-mail feature after changes constitutes agreement to the 
            updated terms.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            10. Termination and Deletion
          </Typography>
          <Typography paragraph>
            Users can deactivate the e-mail function at any time in the app settings. Upon deactivation, the e-mail address 
            becomes invalid and can no longer be used to receive e-mails. Already extracted coupons remain in the user account 
            unless separately deleted.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            11. Applicable Law
          </Typography>
          <Typography paragraph>
            These terms of use are governed by the laws of the Federal Republic of Germany, excluding the UN Sales Convention, 
            unless mandatory consumer protection regulations oppose this.
          </Typography>

          <Typography variant="h6" sx={{ color: 'white', mt: 2, mb: 1 }}>
            12. Severability Clause
          </Typography>
          <Typography paragraph>
            Should individual provisions of these terms of use be or become invalid, the validity of the remaining provisions 
            remains unaffected.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AGBEmail;
