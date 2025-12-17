import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'de' | 'en';

interface Translations {
  [key: string]: string;
}

const translations: Record<Language, Translations> = {
  de: {
    // Navbar
    navFeatures: 'Funktionen',
    navHowItWorks: 'So funktioniert\'s',
    navGamification: 'Belohnungen',
    navDownload: 'Download',
    getApp: 'Zur App',

    // Hero
    aiPoweredSavings: 'KI-gestütztes Sparen',
    heroTitle: 'Verpasse nie wieder ein Angebot',
    heroSubtitle: 'CouponTresor organisiert all deine Coupons mit KI-gestützter Extraktion. Mach ein Foto und wir erledigen den Rest. Verfolge Ablaufdaten, verdiene Belohnungen und spare mühelos Geld.',
    downloadForAndroid: 'Für Android herunterladen',
    learnMore: 'Mehr erfahren',
    freeToUse: 'Kostenlos nutzbar',
    aiOCR: 'KI OCR',
    unlimited: 'Unbegrenzt',

    // Development Banner
    inDevelopment: 'In Entwicklung',
    inDevelopmentDesc: 'CouponTresor befindet sich derzeit in aktiver Entwicklung. Die App wird bald im Google Play Store verfügbar sein!',
    comingSoon: 'Bald verfügbar',

    // Features
    powerfulFeatures: 'Leistungsstarke Funktionen',
    featuresSubtitle: 'Alles was du brauchst um deine Coupons zu organisieren, zu verfolgen und deine Ersparnisse zu maximieren.',
    featureOCR: 'Smarte OCR-Extraktion',
    featureOCRDesc: 'Fotografiere deine Coupons oder importiere Bilder aus der Galerie. Unsere KI extrahiert automatisch alle relevanten Informationen.',
    featureAI: 'KI-gestützte Verarbeitung',
    featureAIDesc: 'Fortschrittliche KI erkennt Shop-Namen, Werte, Codes, Ablaufdaten und Nutzungsbedingungen automatisch.',
    featureReminders: 'Ablauf-Erinnerungen',
    featureRemindersDesc: 'Lass nie wieder einen Coupon ungenutzt ablaufen. Erhalte smarte Benachrichtigungen bevor deine Coupons ablaufen.',
    featureBarcode: 'Barcode & QR-Support',
    featureBarcodeDesc: 'Volle Unterstützung für Barcode- und QR-Code-Coupons. Scanne an der Kasse direkt von deinem Handy.',
    featureSharing: 'Coupon-Teilen',
    featureSharingDesc: 'Teile nicht-personengebundene Coupons mit Freunden und Familie. Verdiene Belohnungen wenn deine geteilten Coupons genutzt werden.',
    featureOrganization: 'Smarte Organisation',
    featureOrganizationDesc: 'Filtere und gruppiere deine Coupons nach Shop, Kategorie, Ablaufdatum oder Wert. Finde sofort was du brauchst.',
    featureEmail: 'E-Mail-Integration',
    featureEmailDesc: 'Sammle automatisch Coupons aus deinen Newsletter-E-Mails. Richte E-Mail-Weiterleitung ein und lass die KI den Rest erledigen.',
    featureCloudSync: 'Cloud-Synchronisierung',
    featureCloudSyncDesc: 'Deine Coupons und Einstellungen werden geräteübergreifend synchronisiert. Verliere nie deine Ersparnisse beim Handywechsel.',

    // How It Works
    howItWorks: 'So funktioniert\'s',
    howItWorksSubtitle: 'Vier einfache Schritte um deine Coupons zu organisieren und heute noch Geld zu sparen.',
    stepCapture: 'Erfassen',
    stepCaptureDesc: 'Mach ein Foto deines Coupons oder importiere Bilder aus der Galerie. Mehrere Bilder gleichzeitig werden unterstützt.',
    stepAIExtraction: 'KI-Extraktion',
    stepAIExtractionDesc: 'Unsere KI liest und extrahiert automatisch alle Coupon-Details: Shop, Wert, Code, Ablaufdatum und mehr.',
    stepOrganize: 'Organisieren',
    stepOrganizeDesc: 'Coupons werden automatisch kategorisiert und gespeichert. Bearbeite Details bei Bedarf und stelle Erinnerungen ein.',
    stepSave: 'Geld sparen',
    stepSaveDesc: 'Erhalte Benachrichtigungen vor dem Ablauf, finde den richtigen Coupon an der Kasse und verpasse nie wieder ein Angebot.',

    // Gamification
    gamificationSystem: 'Belohnungssystem',
    earnRewardsTitle: 'Verdiene Belohnungen beim Sparen',
    earnRewardsSubtitle: 'Steige auf, indem du deine Coupons organisierst und der Community hilfst. Schalte Badges frei und greife auf exklusive Funktionen zu.',
    earnXP: 'XP verdienen',
    xpAddPrivate: 'Privaten Coupon hinzufügen',
    xpAddPrivateDesc: 'Speichere deine persönlichen Coupons',
    xpSharePublic: 'Öffentlichen Coupon teilen',
    xpSharePublicDesc: 'Hilf anderen zu sparen',
    xpConfirmCoupon: 'Coupon bestätigen',
    xpConfirmCouponDesc: 'Verifiziere geteilte Coupons',
    xpReportInvalid: 'Ungültigen Coupon melden',
    xpReportInvalidDesc: 'Halte die Community sauber',
    levelUp: 'Aufsteigen',
    levelUpDesc: 'Fortschritt um neue Funktionen freizuschalten',
    levelExample: 'Level 7 - Schnäppchenjäger',
    collectBadges: 'Badges sammeln',
    badgeCategories: 'Badge-Kategorien mit je 3 Stufen',
    joinCommunity: 'Tritt der Community bei',
    communityDescription: 'Teile Coupons mit der Community und hilf anderen zu sparen. Höhere Level schalten Zugang zu mehr öffentlichen Coupons und exklusiven Deals frei.',
    shareAndEarn: 'Teilen & Verdienen',
    validateCoupons: 'Coupons validieren',
    unlockRewards: 'Belohnungen freischalten',

    // Badge Names (from actual app)
    badgePrivateCouponCreator: 'Privater Coupon-Ersteller',
    badgePublicCouponSharer: 'Öffentlicher Coupon-Teiler',
    badgeCouponValidator: 'Coupon-Validator',
    badgeFriendConnector: 'Freunde-Vernetzer',
    badgeQualityController: 'Qualitätskontrolleur',
    badgeTrustedContributor: 'Vertrauenswürdiger Beitragender',
    badgeXPMaster: 'XP-Meister',

    // Download
    availableOnAndroid: 'Bald für Android verfügbar',
    downloadTitle: 'Lade CouponTresor herunter',
    downloadSubtitle: 'Starte heute mit dem Organisieren deiner Coupons. CouponTresor ist kostenlos zum Herunterladen und Nutzen. KI-Funktionen wie Premium-OCR benötigen In-App-Credits.',
    downloadSecure: 'Sicher & Privat',
    downloadUpdates: 'Regelmäßige Updates',
    downloadFree: 'Kostenlose Kernfunktionen + optionale Credits für KI',
    getOnGooglePlay: 'Bei Google Play erhältlich',
    requiresAndroid: 'Erfordert Android 8.0 oder höher',

    // Footer
    footerProduct: 'Produkt',
    footerLegal: 'Rechtliches',
    footerSupport: 'Support',
    footerPrivacy: 'Datenschutz',
    footerTerms: 'Nutzungsbedingungen',
    footerImprint: 'Impressum',
    footerFAQ: 'FAQ',
    footerContact: 'Kontakt',
    footerBugReport: 'Fehler melden',
    footerDescription: 'Dein KI-gestützter Coupon-Organizer. Verpasse nie wieder ein Angebot mit smarter OCR-Extraktion, automatischen Erinnerungen und Gamification-Belohnungen.',
    footerRights: 'Alle Rechte vorbehalten.',
    footerMadeWith: 'Mit ❤️ für clevere Sparfüchse gemacht',

    // Coupon Card
    expiresIn: 'Läuft ab in',
    days: 'Tagen',
    storedIn: 'Gespeichert in CouponTresor',

    // About Developer
    aboutDeveloperChip: 'Über den Entwickler',
    aboutTitle: 'Die Geschichte hinter der App',
    aboutHello: 'Hallo, ich bin Patrick',
    aboutRole: 'Entwickler & Gründer von CouponTresor',
    aboutStoryTitle: 'Warum ich diese App entwickelt habe',
    aboutStoryPart1: 'Ich selbst habe eine volle Pinnwand und ein volles E-Mail-Postfach mit Gutscheinen, die man vielleicht mal braucht. Ich vergesse diese dann einzulösen oder dass ich sie überhaupt habe. Manchmal schmeiße ich welche weg, von denen ich denke, dass ich sie nie brauchen werde – und genau dann brauche ich sie doch!',
    aboutStoryPart2: 'Deshalb habe ich diese App entwickelt. Ich möchte sie auch mit anderen teilen und versuche, sie zu fairen Preisen bereitzustellen.',
    aboutHope: 'Ich hoffe, sie hilft dir auch, Geld zu sparen!',
  },
  en: {
    // Navbar
    navFeatures: 'Features',
    navHowItWorks: 'How It Works',
    navGamification: 'Rewards',
    navDownload: 'Download',
    getApp: 'Get App',

    // Hero
    aiPoweredSavings: 'AI-Powered Savings',
    heroTitle: 'Never Miss a Deal Again',
    heroSubtitle: 'CouponTresor organizes all your coupons with AI-powered extraction. Snap a photo, and we\'ll do the rest. Track expiration dates, earn rewards, and save money effortlessly.',
    downloadForAndroid: 'Download for Android',
    learnMore: 'Learn More',
    freeToUse: 'Free to Use*',
    aiOCR: 'AI OCR',
    unlimited: 'Unlimited',

    // Development Banner
    inDevelopment: 'In Development',
    inDevelopmentDesc: 'CouponTresor is currently in active development. The app will be available on Google Play Store soon!',
    comingSoon: 'Coming Soon',

    // Features
    powerfulFeatures: 'Powerful Features',
    featuresSubtitle: 'Everything you need to organize, track, and maximize your savings with smart coupon management.',
    featureOCR: 'Smart OCR Extraction',
    featureOCRDesc: 'Capture coupon images with your camera or import from gallery. Our AI automatically extracts all relevant information.',
    featureAI: 'AI-Powered Processing',
    featureAIDesc: 'Advanced AI parses text to identify shop names, values, codes, expiration dates, and usage restrictions automatically.',
    featureReminders: 'Expiration Reminders',
    featureRemindersDesc: 'Never let a coupon expire unused. Get smart notifications before your coupons reach their expiration date.',
    featureBarcode: 'Barcode & QR Support',
    featureBarcodeDesc: 'Full support for barcode and QR code coupons. Scan at checkout directly from your phone.',
    featureSharing: 'Coupon Sharing',
    featureSharingDesc: 'Share non-personal coupons with friends and family. Earn rewards when your shared coupons are used.',
    featureOrganization: 'Smart Organization',
    featureOrganizationDesc: 'Filter and group your coupons by shop, category, expiration date, or value. Find what you need instantly.',
    featureEmail: 'Email Integration',
    featureEmailDesc: 'Automatically collect coupons from your newsletter emails. Set up email forwarding and let AI do the rest.',
    featureCloudSync: 'Cloud Sync',
    featureCloudSyncDesc: 'Your coupons and preferences sync across devices. Never lose your savings when switching phones.',

    // How It Works
    howItWorks: 'How It Works',
    howItWorksSubtitle: 'Four simple steps to organize your coupons and start saving money today.',
    stepCapture: 'Capture',
    stepCaptureDesc: 'Take a photo of your coupon or import images from your gallery. Support for multiple images at once.',
    stepAIExtraction: 'AI Extraction',
    stepAIExtractionDesc: 'Our AI automatically reads and extracts all coupon details: shop, value, code, expiration date, and more.',
    stepOrganize: 'Organize',
    stepOrganizeDesc: 'Coupons are automatically categorized and stored. Edit details if needed and set reminder preferences.',
    stepSave: 'Save Money',
    stepSaveDesc: 'Get notified before expiration, find the right coupon at checkout, and never miss a deal again.',

    // Gamification
    gamificationSystem: 'Gamification System',
    earnRewardsTitle: 'Earn Rewards While Saving',
    earnRewardsSubtitle: 'Level up by organizing your coupons and helping the community. Unlock badges and access exclusive features.',
    earnXP: 'Earn XP',
    xpAddPrivate: 'Add Private Coupon',
    xpAddPrivateDesc: 'Store your personal coupons',
    xpSharePublic: 'Share Public Coupon',
    xpSharePublicDesc: 'Help others save money',
    xpConfirmCoupon: 'Confirm Coupon Works',
    xpConfirmCouponDesc: 'Verify shared coupons',
    xpReportInvalid: 'Report Invalid Coupon',
    xpReportInvalidDesc: 'Keep the community clean',
    levelUp: 'Level Up',
    levelUpDesc: 'Progress to unlock new features',
    levelExample: 'Level 7 - Deal Hunter',
    collectBadges: 'Collect Badges',
    badgeCategories: 'Badge categories with 3 tiers each',
    joinCommunity: 'Join the Community',
    communityDescription: 'Share coupons with the community and help others save money. Higher levels unlock access to more public coupons and exclusive deals.',
    shareAndEarn: 'Share & Earn',
    validateCoupons: 'Validate Coupons',
    unlockRewards: 'Unlock Rewards',

    // Badge Names (from actual app)
    badgePrivateCouponCreator: 'Private Coupon Creator',
    badgePublicCouponSharer: 'Public Coupon Sharer',
    badgeCouponValidator: 'Coupon Validator',
    badgeFriendConnector: 'Friend Connector',
    badgeQualityController: 'Quality Controller',
    badgeTrustedContributor: 'Trusted Contributor',
    badgeXPMaster: 'XP Master',

    // Download
    availableOnAndroid: 'Coming Soon for Android',
    downloadTitle: 'Download CouponTresor',
    downloadSubtitle: 'Start organizing your coupons today. CouponTresor is free to download and use. AI features like premium OCR require in-app credits.',
    downloadSecure: 'Secure & Private',
    downloadUpdates: 'Regular Updates',
    downloadFree: 'Free Core Features + Optional AI Credits',
    getOnGooglePlay: 'Get it on Google Play',
    requiresAndroid: 'Requires Android 8.0 or higher',

    // Footer
    footerProduct: 'Product',
    footerLegal: 'Legal',
    footerSupport: 'Support',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
    footerImprint: 'Imprint',
    footerFAQ: 'FAQ',
    footerContact: 'Contact',
    footerBugReport: 'Report Bug',
    footerDescription: 'Your AI-powered coupon organizer. Never miss a deal again with smart OCR extraction, automatic reminders, and gamification rewards.',
    footerRights: 'All rights reserved.',
    footerMadeWith: 'Made with ❤️ for savvy shoppers',

    // Coupon Card
    expiresIn: 'Expires in',
    days: 'days',
    storedIn: 'Stored in CouponTresor',

    // About Developer
    aboutDeveloperChip: 'About the Developer',
    aboutTitle: 'The Story Behind the App',
    aboutHello: 'Hello, I\'m Patrick',
    aboutRole: 'Developer & Founder of CouponTresor',
    aboutStoryTitle: 'Why I built this app',
    aboutStoryPart1: 'I have a pinboard full of coupons and an inbox overflowing with vouchers that I might need someday. I keep forgetting to redeem them or even that I have them. Sometimes I throw some away thinking I\'ll never need them – and that\'s exactly when I do!',
    aboutStoryPart2: 'That\'s why I developed this app. I want to share it with others and try to offer it at fair prices.',
    aboutHope: 'I hope it helps you save money too!',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // 1. Check if language was explicitly set (via URL or user preference)
    const stored = localStorage.getItem('language') as Language | null;
    if (stored) return stored;

    // 2. Check domain-based language preference
    const hostname = window.location.hostname.toLowerCase();
    if (hostname.includes('coupontresor.de')) {
      return 'de';
    }
    if (hostname.includes('couponvault.de')) {
      return 'de';
    }
    if (hostname.includes('coupontresor.com') || hostname.includes('couponvault.com')) {
      return 'en';
    }

    // 3. Detect browser language as fallback
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('de') ? 'de' : 'en';
  });

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  const updateLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
