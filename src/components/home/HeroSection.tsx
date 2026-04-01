export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-black text-primary leading-tight">
            עדי: הפתרון המקיף לניהול משרד עורכי דין והנהלת חשבונות.
          </h1>
          <p className="text-xl text-on-secondary-fixed-variant max-w-lg leading-relaxed">
            מערכת חכמה ואינטואיטיבית המייעלת את זרימת העבודה המשפטית שלך, החל מניהול תיקים ועד
            להפקת דוחות פיננסיים מורכבים במקום אחד.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button className="primary-gradient text-on-primary px-8 py-4 rounded-lg font-bold text-lg transition-transform active:scale-90 shadow-xl">
              צור קשר עכשיו
            </button>
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-3xl">call</span>
              {/* TODO: replace with real phone number */}
              <span className="text-2xl font-black tracking-tight" dir="ltr">
                03-1234567
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl -z-10" />
          <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-2xl border border-outline-variant/20">
            {/* TODO: replace with a local asset — this external URL may become unavailable */}
            <img
              alt="Legal Dashboard Interface"
              className="rounded-xl w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiu6OKyF3z4cqWd3-eVHfScnF1qzGT8zRysS5mImHK4GnikMDgZoLRFMtjnSqyi2qsCDpwByA5BhyPceakpuMWiznshICDo9taNqslXj3xbq7MDKeOa_oETxveJj3BhN1ydL7ls76G6HSw-Cw3CSR431ig7uSaYDhgc8t188HbwpmVBnNboh0UoNUa-nDfUnjcIEwpKoH06SHIvq_7MMC5BJ0M8z1Pe7LIIzMq1Xh1uSof3gcCF791f8aotJ8kBZoK2udMOS4Tcy-C"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
