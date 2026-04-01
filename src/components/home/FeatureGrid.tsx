const features = [
  {
    icon: 'group',
    title: 'ניהול לקוחות ותיקים',
    description: 'תיעוד מלא של כל היסטוריית הלקוח, פרטי הקשר והקשרים בין התיקים השונים במשרד.',
  },
  {
    icon: 'description',
    title: 'ניהול מסמכים',
    description:
      'ארכיון דיגיטלי חכם הכולל סריקה, תיוק אוטומטי וחיפוש טקסטואלי מהיר בתוך כל מסמכי התיק.',
  },
  {
    icon: 'calendar_month',
    title: 'ניהול יומנים',
    description: 'סנכרון מלא עם Outlook, ניהול מועדי בית משפט ופגישות צוות עם תזכורות אוטומטיות.',
  },
  {
    icon: 'gavel',
    title: 'ניהול הופעות בבהמ"ש',
    description: 'ריכוז כל המידע לקראת דיונים, פרוטוקולים והחלטות שיפוטיות בצורה מסודרת ונגישה.',
  },
  {
    icon: 'task_alt',
    title: 'ניהול מטלות',
    description: 'הקצאת משימות לצוות, מעקב אחר לוחות זמנים ובדיקת סטטוס ביצוע בזמן אמת.',
  },
  {
    icon: 'schedule',
    title: 'ניהול שעות עבודה',
    description: 'דיווח שעות קל ומהיר לפי לקוח ותיק, המאפשר חיוב מדויק ומעקב אחר רווחיות.',
  },
  {
    icon: 'receipt_long',
    title: 'ניהול חשבונות עסקה',
    description: 'הפקת חשבונות עסקה, מעקב גבייה ושליחת תזכורות תשלום בצורה אוטומטית ומקצועית.',
  },
  {
    icon: 'calculate',
    title: 'חישובים',
    description: 'מחשבונים משפטיים מובנים לריבית, הצמדה, אגרות בית משפט ופיצויי פיטורין.',
  },
  {
    icon: 'account_balance',
    title: 'הנהלת חשבונות',
    description: 'מערכת הנהלת חשבונות מלאה המותאמת לצרכי עורכי דין ומאושרת על ידי רשות המסים.',
  },
]

export default function FeatureGrid() {
  return (
    <section className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-black text-primary">כל מה שהמשרד שלך צריך, במערכת אחת</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.icon}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-on-secondary-fixed-variant leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
