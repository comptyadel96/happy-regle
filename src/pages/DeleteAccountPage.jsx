import { useEffect, useState } from 'react'
import './DeleteAccountPage.css'

const SUPPORT_EMAIL = 'happypalmary@gmail.com'

const TRANSLATIONS = {
  fr: {
    langLabel: 'Langue',
    title: 'Suppression de compte',
    intro:
      'Happy Arcade vous permet de supprimer votre compte et toutes les données associées directement depuis le jeu. Suivez les étapes ci-dessous pour effectuer la suppression.',
    warningLabel: 'Avertissement',
    warning:
      'Important : la suppression du compte est irréversible. Vous perdrez définitivement votre progression, vos achats et toutes les données liées à votre compte.',
    stepsLabel: 'Étapes de suppression',
    stepLabel: 'Étape',
    footerPrefix: "Besoin d'aide ? Contactez notre support à",
    steps: [
      {
        number: 1,
        title: 'Ouvrez le menu principal',
        description:
          'Depuis l\'écran d\'accueil du jeu, repérez le bouton « Paramètres du compte » dans le menu principal pour accéder aux options de votre compte.',
        image: '/images/1fr.jpeg',
        alt: 'Menu principal Happy Arcade — bouton Paramètres du compte',
      },
      {
        number: 2,
        title: 'Accédez aux paramètres du compte',
        description:
          'Dans les paramètres du compte, vous pouvez modifier votre mot de passe, votre numéro de téléphone ou supprimer votre compte. Appuyez sur « Supprimer le compte ».',
        image: '/images/parametres-compte.png',
        alt: 'Écran Paramètres du compte — boutons Changer le mot de passe, Supprimer le compte et Retour',
      },
      {
        number: 3,
        title: 'Confirmez la suppression',
        description:
          'Saisissez votre mot de passe puis appuyez sur « Confirmer ». Attention : cette action est définitive et entraînera la perte de toutes vos informations et données sauvegardées.',
        image: '/images/supprimer-compte.png',
        alt: 'Écran Supprimer le compte — saisie du mot de passe avec boutons Confirmer et Retour',
      },
    ],
  },
  ar: {
    langLabel: 'اللغة',
    title: 'حذف الحساب',
    intro:
      'يتيح لك Happy Arcade حذف حسابك وجميع البيانات المرتبطة به مباشرة من داخل اللعبة. اتبع الخطوات أدناه لإتمام عملية الحذف.',
    warningLabel: 'تحذير',
    warning:
      'مهم: حذف الحساب نهائي ولا رجعة فيه. ستفقد تقدمك ومشترياتك وجميع البيانات المرتبطة بحسابك بشكل دائم.',
    stepsLabel: 'خطوات الحذف',
    stepLabel: 'خطوة',
    footerPrefix: 'تحتاج مساعدة؟ تواصل مع الدعم على',
    steps: [
      {
        number: 1,
        title: 'افتح القائمة الرئيسية',
        description:
          'من شاشة الترحيب في اللعبة، اضغط على زر «إعدادات الحساب» في القائمة الرئيسية للوصول إلى خيارات حسابك.',
        image: '/images/1-ar.jpeg',
        alt: 'القائمة الرئيسية Happy Arcade — زر إعدادات الحساب',
      },
      {
        number: 2,
        title: 'الوصول إلى إعدادات الحساب',
        description:
          'في إعدادات الحساب، يمكنك تغيير كلمة المرور أو رقم الهاتف أو حذف حسابك. اضغط على «حذف الحساب».',
        image: '/images/phase-1ar.jpeg',
        alt: 'شاشة إعدادات الحساب — أزرار تغيير كلمة المرور وحذف الحساب والعودة',
      },
      {
        number: 3,
        title: 'تأكيد الحذف',
        description:
          'أدخل كلمة المرور ثم اضغط على «تأكيد». تنبيه: هذا الإجراء نهائي وسيؤدي إلى فقدان جميع معلوماتك وبياناتك المحفوظة.',
        image: '/images/phase-2ar.jpeg',
        alt: 'شاشة حذف الحساب — إدخال كلمة المرور مع أزرار التأكيد والعودة',
      },
    ],
  },
}

function DeleteAccountPage() {
  const [lang, setLang] = useState('fr')
  const t = TRANSLATIONS[lang]
  const isRtl = lang === 'ar'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  }, [lang, isRtl])

  return (
    <div className={`delete-account-page${isRtl ? ' delete-account-page--rtl' : ''}`}>
      <div className="delete-account-lang-switch" role="group" aria-label={t.langLabel}>
        <button
          type="button"
          className={lang === 'fr' ? 'active' : ''}
          onClick={() => setLang('fr')}
          aria-pressed={lang === 'fr'}
        >
          Français
        </button>
        <button
          type="button"
          className={lang === 'ar' ? 'active' : ''}
          onClick={() => setLang('ar')}
          aria-pressed={lang === 'ar'}
        >
          العربية
        </button>
      </div>

      <header className="delete-account-header">
        <img
          src="/images/LOGO HAPPY ARCADE.png"
          alt="Happy Arcade"
          className="delete-account-logo"
        />
        <h1>{t.title}</h1>
        <p className="delete-account-intro">{t.intro}</p>
      </header>

      <section className="delete-account-warning" aria-label={t.warningLabel}>
        <p>{t.warning}</p>
      </section>

      <section className="delete-account-steps" aria-label={t.stepsLabel}>
        {t.steps.map((step) => (
          <article key={step.number} className="delete-account-step">
            <div className="delete-account-step-content">
              <span className="delete-account-step-number">
                {t.stepLabel} {step.number}
              </span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
            <figure className="delete-account-step-figure">
              <img src={step.image} alt={step.alt} loading="lazy" />
            </figure>
          </article>
        ))}
      </section>

      <footer className="delete-account-footer">
        <p>
          {t.footerPrefix}{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </footer>
    </div>
  )
}

export default DeleteAccountPage
