export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <span className="text-3xl font-black text-primary">עדי</span>
          <p className="text-on-secondary-fixed-variant leading-relaxed text-sm">
            המערכת המתקדמת ביותר בישראל לניהול משרדי עורכי דין, המשלבת טכנולוגיה עילית עם הבנה
            מעמיקה של הצרכים המשפטיים והחשבונאיים.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">social_leaderboard</span>
            </a>
            <a
              className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">link</span>
            </a>
            <a
              className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-primary">ניווט מהיר</h4>
          <ul className="space-y-3 text-sm text-on-secondary-fixed-variant">
            <li><a className="hover:text-primary transition-colors" href="#">אודות המערכת</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">מרכז הדרכה</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">בלוג וחדשות</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">צור קשר</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-primary">תמיכה ושירות</h4>
          <ul className="space-y-3 text-sm text-on-secondary-fixed-variant">
            <li><a className="hover:text-primary transition-colors" href="#">תמיכה טכנית</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">שאלות ותשובות</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">הורדות ותוכנות עזר</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">נגישות</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-primary">פרטי התקשרות</h4>
          <ul className="space-y-4 text-sm text-on-secondary-fixed-variant">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              <span>
                רחוב המנור 4, תל אביב יפו
                <br />
                בניין העסקים, קומה 12
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">call</span>
              <span dir="ltr">03-1234567</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
              <span>support@adi-legal.co.il</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} עדי - ניהול משרד עורכי דין והנהלת חשבונות. כל הזכויות
          שמורות. |{' '}
          <a className="underline" href="#">
            תנאי שימוש
          </a>{' '}
          |{' '}
          <a className="underline" href="#">
            מדיניות פרטיות
          </a>
        </p>
      </div>
    </footer>
  )
}
