export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-lg shadow-primary/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black text-primary">עדי</span>
          <div className="hidden xl:flex items-center gap-6">
            <a className="text-primary border-b-2 border-primary font-bold text-sm tracking-wide transition-colors duration-200" href="#">ניהול לקוחות</a>
            <a className="text-slate-600 hover:text-primary transition-colors duration-200 font-bold text-sm tracking-wide" href="#">ניהול מסמכים</a>
            <a className="text-slate-600 hover:text-primary transition-colors duration-200 font-bold text-sm tracking-wide" href="#">ניהול יומנים</a>
            <a className="text-slate-600 hover:text-primary transition-colors duration-200 font-bold text-sm tracking-wide" href="#">הופעות בבבמ&quot;ש</a>
            <a className="text-slate-600 hover:text-primary transition-colors duration-200 font-bold text-sm tracking-wide" href="#">ניהול מטלות</a>
            <a className="text-slate-600 hover:text-primary transition-colors duration-200 font-bold text-sm tracking-wide" href="#">הנהלת חשבונות</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-primary font-bold text-sm transition-transform active:scale-90">צור קשר</button>
          <button className="primary-gradient text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm transition-transform active:scale-90 shadow-md">בקשת דמו</button>
        </div>
      </div>
    </nav>
  )
}
