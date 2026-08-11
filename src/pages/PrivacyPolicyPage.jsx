import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicyPage.css'

const SUPPORT_EMAIL = 'happypalmary@gmail.com'

const TRANSLATIONS = {
  fr: {
    langLabel: 'Langue',
    navDelete: 'Suppression de compte',
    title: 'Politique de confidentialité',
    lastUpdate: 'Dernière mise à jour : juin 2026',
    intro: [
      "Chez Happy, nous accordons une grande importance à la protection de la vie privée de nos utilisateurs, en particulier celle des enfants. La présente Politique de confidentialité décrit les informations collectées lors de l'utilisation de l'application Happy Arcade, les raisons de cette collecte, ainsi que les mesures mises en œuvre pour assurer leur protection.",
      'En téléchargeant et en utilisant Happy Arcade, vous acceptez les conditions de cette Politique de confidentialité.',
    ],
    sections: [
      {
        title: "1. Informations sur l'éditeur",
        type: 'info',
        items: [
          { label: "Nom de l'application", value: 'Happy Arcade' },
          { label: 'Éditeur', value: 'Happy' },
          { label: 'Développeur', value: '—' },
          { label: 'Adresse', value: '—' },
          { label: 'Email de contact', value: SUPPORT_EMAIL, isEmail: true },
        ],
      },
      {
        title: '2. Données personnelles collectées',
        type: 'text-list',
        paragraphs: [
          "Afin de permettre la participation aux concours organisés dans le cadre du jeu et d'assurer une bonne gestion des récompenses, Happy Arcade peut collecter les informations suivantes :",
        ],
        list: [
          'Nom et prénom',
          'Âge',
          'Adresse e-mail',
          'Numéro de téléphone personnel ou, lorsque le joueur est mineur, celui de son parent ou représentant légal',
          'Adresse de résidence',
          'Wilaya de résidence',
        ],
        afterList: [
          'Ces informations sont demandées uniquement lorsque cela est nécessaire pour participer à une opération promotionnelle ou pour contacter les gagnants.',
        ],
      },
      {
        title: '3. Pourquoi ces informations sont-elles collectées ?',
        type: 'text-list',
        paragraphs: ['Les données personnelles sont utilisées exclusivement pour :'],
        list: [
          'Identifier les participants aux concours Happy',
          "Vérifier l'éligibilité des participants",
          'Contacter les gagnants',
          'Organiser la remise des cadeaux',
          'Assurer le suivi des campagnes promotionnelles',
          'Répondre aux demandes des utilisateurs',
        ],
        afterList: [
          'Les données ne sont jamais utilisées à des fins illégales ni revendues à des tiers.',
        ],
      },
      {
        title: '4. Protection des enfants',
        type: 'paragraphs',
        paragraphs: [
          'Happy Arcade est destiné à un public familial.',
          "Lorsque le joueur est mineur, certaines informations peuvent être demandées au parent ou au représentant légal afin d'assurer la bonne gestion des concours et la remise des lots.",
          "Happy encourage les parents à accompagner leurs enfants lors de l'utilisation de l'application.",
        ],
      },
      {
        title: '5. Utilisation des données',
        type: 'paragraphs',
        paragraphs: [
          "Les informations collectées sont utilisées uniquement par Happy ou par les prestataires techniques agissant pour son compte, dans le strict cadre de l'exploitation de l'application et des opérations promotionnelles.",
          "Aucune donnée personnelle n'est vendue, louée ou cédée à des fins commerciales.",
        ],
      },
      {
        title: '6. Conservation des données',
        type: 'text-list',
        paragraphs: ['Les données personnelles sont conservées uniquement pendant la durée nécessaire :'],
        list: [
          'à la gestion des concours ;',
          'à la remise des cadeaux ;',
          'au respect des obligations légales.',
        ],
        afterList: [
          "À l'issue de cette période, elles sont supprimées ou anonymisées conformément à la réglementation applicable.",
        ],
      },
      {
        title: '7. Sécurité des données',
        type: 'text-list',
        paragraphs: [
          'Happy met en œuvre des mesures de sécurité techniques et organisationnelles afin de protéger les données personnelles contre :',
        ],
        list: [
          "l'accès non autorisé ;",
          'la perte ;',
          'la destruction ;',
          'la modification ;',
          'la divulgation accidentelle.',
        ],
      },
      {
        title: '8. Partage des données',
        type: 'text-list',
        paragraphs: ['Les informations peuvent être communiquées uniquement :'],
        list: [
          'aux équipes internes de Happy ;',
          "au développeur technique de l'application lorsque cela est nécessaire ;",
          'aux partenaires logistiques chargés de la livraison des cadeaux.',
        ],
        afterList: [
          "Aucune donnée n'est vendue à des sociétés tierces à des fins publicitaires.",
        ],
      },
      {
        title: '9. Droits des utilisateurs',
        type: 'text-list',
        paragraphs: [
          'Conformément à la réglementation applicable en matière de protection des données, chaque utilisateur ou son représentant légal dispose des droits suivants :',
        ],
        list: [
          "droit d'accès ;",
          'droit de rectification ;',
          'droit de suppression ;',
          "droit d'opposition lorsque la réglementation le permet.",
        ],
        afterList: ['Toute demande peut être adressée à :'],
        email: SUPPORT_EMAIL,
      },
      {
        title: '10. Cookies et technologies similaires',
        type: 'paragraphs',
        paragraphs: [
          "L'application peut utiliser des technologies techniques permettant d'améliorer son fonctionnement, de mesurer les performances et de garantir une meilleure expérience utilisateur.",
        ],
      },
      {
        title: '11. Modifications',
        type: 'paragraphs',
        paragraphs: [
          'Happy se réserve le droit de modifier la présente Politique de confidentialité à tout moment.',
          "Toute modification sera publiée dans l'application et prendra effet dès sa mise en ligne.",
        ],
      },
      {
        title: '12. Contact',
        type: 'paragraphs',
        paragraphs: [
          'Pour toute question relative à cette Politique de confidentialité ou au traitement des données personnelles, veuillez contacter Happy :',
        ],
        email: SUPPORT_EMAIL,
      },
    ],
  },
  ar: {
    langLabel: 'اللغة',
    navDelete: 'حذف الحساب',
    title: 'سياسة الخصوصية',
    lastUpdate: 'آخر تحديث: يونيو 2026',
    intro: [
      'في Happy، نولي أهمية كبيرة لحماية خصوصية مستخدمينا، لا سيما خصوصية الأطفال. تصف سياسة الخصوصية هذه المعلومات التي يتم جمعها عند استخدام تطبيق Happy Arcade، وأسباب هذا الجمع، بالإضافة إلى التدابير المتخذة لضمان حمايتها.',
      'بتحميل واستخدام Happy Arcade، فإنك توافق على شروط سياسة الخصوصية هذه.',
    ],
    sections: [
      {
        title: '1. معلومات الناشر',
        type: 'info',
        items: [
          { label: 'اسم التطبيق', value: 'Happy Arcade' },
          { label: 'الناشر', value: 'Happy' },
          { label: 'المطوّر', value: '—' },
          { label: 'العنوان', value: '—' },
          { label: 'البريد الإلكتروني للتواصل', value: SUPPORT_EMAIL, isEmail: true },
        ],
      },
      {
        title: '2. البيانات الشخصية التي يتم جمعها',
        type: 'text-list',
        paragraphs: [
          'من أجل تمكين المشاركة في المسابقات المنظمة في إطار اللعبة وضمان حسن إدارة المكافآت، قد يجمع تطبيق Happy Arcade المعلومات التالية:',
        ],
        list: [
          'الاسم واللقب',
          'العمر',
          'عنوان البريد الإلكتروني',
          'رقم الهاتف الشخصي، أو عند كون اللاعب قاصراً رقم هاتف ولي الأمر أو الممثل القانوني',
          'عنوان السكن',
          'ولاية الإقامة',
        ],
        afterList: [
          'تُطلب هذه المعلومات فقط عندما يكون ذلك ضرورياً للمشاركة في عملية ترويجية أو للاتصال بالفائزين.',
        ],
      },
      {
        title: '3. لماذا يتم جمع هذه المعلومات؟',
        type: 'text-list',
        paragraphs: ['تُستخدم البيانات الشخصية حصرياً من أجل:'],
        list: [
          'تحديد هوية المشاركين في مسابقات Happy',
          'التحقق من أهلية المشاركين',
          'الاتصال بالفائزين',
          'تنظيم تسليم الهدايا',
          'متابعة الحملات الترويجية',
          'الرد على طلبات المستخدمين',
        ],
        afterList: [
          'لا تُستخدم البيانات أبداً لأغراض غير قانونية ولا تُباع لأطراف ثالثة.',
        ],
      },
      {
        title: '4. حماية الأطفال',
        type: 'paragraphs',
        paragraphs: [
          'تطبيق Happy Arcade موجه لجمهور عائلي.',
          'عندما يكون اللاعب قاصراً، قد تُطلب بعض المعلومات من ولي الأمر أو الممثل القانوني لضمان حسن إدارة المسابقات وتسليم الجوائز.',
          'تشجع Happy الآباء على مرافقة أطفالهم أثناء استخدام التطبيق.',
        ],
      },
      {
        title: '5. استخدام البيانات',
        type: 'paragraphs',
        paragraphs: [
          'تُستخدم المعلومات المجمّعة فقط من قبل Happy أو من قبل مقدمي الخدمات التقنية الذين يعملون لحسابه، في الإطار الصارم لتشغيل التطبيق والعمليات الترويجية.',
          'لا تُباع أي بيانات شخصية ولا تُؤجَّر ولا تُتنازل عنها لأغراض تجارية.',
        ],
      },
      {
        title: '6. الاحتفاظ بالبيانات',
        type: 'text-list',
        paragraphs: ['تُحفظ البيانات الشخصية فقط طوال المدة اللازمة من أجل:'],
        list: [
          'إدارة المسابقات؛',
          'تسليم الهدايا؛',
          'الامتثال للالتزامات القانونية.',
        ],
        afterList: [
          'عند انتهاء هذه الفترة، يتم حذفها أو إخفاء هويتها وفقاً للتشريعات المعمول بها.',
        ],
      },
      {
        title: '7. أمن البيانات',
        type: 'text-list',
        paragraphs: [
          'تطبّق Happy تدابير أمنية تقنية وتنظيمية لحماية البيانات الشخصية من:',
        ],
        list: [
          'الوصول غير المصرح به؛',
          'الفقدان؛',
          'التدمير؛',
          'التعديل؛',
          'الإفصاح العرضي.',
        ],
      },
      {
        title: '8. مشاركة البيانات',
        type: 'text-list',
        paragraphs: ['يمكن إبلاغ المعلومات فقط إلى:'],
        list: [
          'الفرق الداخلية لدى Happy؛',
          'المطوّر التقني للتطبيق عند الضرورة؛',
          'الشركاء اللوجستيين المكلفين بتسليم الهدايا.',
        ],
        afterList: [
          'لا تُباع أي بيانات لشركات ثالثة لأغراض إعلانية.',
        ],
      },
      {
        title: '9. حقوق المستخدمين',
        type: 'text-list',
        paragraphs: [
          'وفقاً للتشريعات المعمول بها في مجال حماية البيانات، يتمتع كل مستخدم أو ممثله القانوني بالحقوق التالية:',
        ],
        list: [
          'حق الوصول؛',
          'حق التصحيح؛',
          'حق الحذف؛',
          'حق الاعتراض عندما تسمح بذلك التشريعات.',
        ],
        afterList: ['يمكن توجيه أي طلب إلى:'],
        email: SUPPORT_EMAIL,
      },
      {
        title: '10. ملفات تعريف الارتباط والتقنيات المماثلة',
        type: 'paragraphs',
        paragraphs: [
          'قد يستخدم التطبيق تقنيات تقنية لتحسين عمله، وقياس الأداء، وضمان تجربة مستخدم أفضل.',
        ],
      },
      {
        title: '11. التعديلات',
        type: 'paragraphs',
        paragraphs: [
          'تحتفظ Happy بحق تعديل سياسة الخصوصية هذه في أي وقت.',
          'سيتم نشر أي تعديل في التطبيق ويسري مفعوله فور نشره.',
        ],
      },
      {
        title: '12. الاتصال',
        type: 'paragraphs',
        paragraphs: [
          'لأي سؤال يتعلق بسياسة الخصوصية هذه أو بمعالجة البيانات الشخصية، يرجى التواصل مع Happy:',
        ],
        email: SUPPORT_EMAIL,
      },
    ],
  },
}

function SectionBody({ section }) {
  if (section.type === 'info') {
    return (
      <dl className="privacy-info-list">
        {section.items.map((item) => (
          <div key={item.label} className="privacy-info-row">
            <dt>{item.label}</dt>
            <dd>
              {item.isEmail ? (
                <a href={`mailto:${item.value}`}>{item.value}</a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    )
  }

  return (
    <>
      {section.paragraphs?.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {section.list && (
        <ul>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.afterList?.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {section.email && (
        <p className="privacy-email">
          <a href={`mailto:${section.email}`}>{section.email}</a>
        </p>
      )}
    </>
  )
}

function PrivacyPolicyPage() {
  const [lang, setLang] = useState('fr')
  const t = TRANSLATIONS[lang]
  const isRtl = lang === 'ar'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
    document.title =
      lang === 'ar'
        ? 'سياسة الخصوصية — Happy Arcade'
        : 'Politique de confidentialité — Happy Arcade'
  }, [lang, isRtl])

  return (
    <div className={`privacy-page${isRtl ? ' privacy-page--rtl' : ''}`}>
      <div className="privacy-topbar">
        <div className="privacy-lang-switch" role="group" aria-label={t.langLabel}>
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
        <Link to="/" className="privacy-nav-link">
          {t.navDelete}
        </Link>
      </div>

      <header className="privacy-header">
        <img
          src="/images/LOGO HAPPY ARCADE.png"
          alt="Happy Arcade"
          className="privacy-logo"
        />
        <h1>{t.title}</h1>
        <p className="privacy-update">{t.lastUpdate}</p>
      </header>

      <div className="privacy-intro">
        {t.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="privacy-sections">
        {t.sections.map((section) => (
          <section key={section.title} className="privacy-section">
            <h2>{section.title}</h2>
            <SectionBody section={section} />
          </section>
        ))}
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
