import { useState } from 'react'

export default function DemoRequestForm() {
  const [name, setName] = useState('')
  const [firmName, setFirmName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent('בקשת דמו')
    const body = encodeURIComponent(
      `שם מלא: ${name}\nשם המשרד: ${firmName}\nטלפון: ${phone}\nדואר אלקטרוני: ${email}`,
    )
    window.location.href = `mailto:adi4clients@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-primary text-white p-10 rounded-2xl shadow-xl shadow-primary/20">
      <div className="flex items-center gap-4 mb-8">
        <span className="material-symbols-outlined text-white text-3xl">drive_presentation</span>
        <h2 className="text-2xl font-black">תיאום דמו והצגת המערכת</h2>
      </div>
      <p className="mb-8 opacity-80">
        גלה כיצד &quot;עדי&quot; יכולה לשדרג את המשרד שלך. השאר פרטים ונחזור אליך בהקדם.
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2">שם מלא</label>
            <input
              className="w-full bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/40 py-3 px-3 text-white placeholder:text-white/40"
              placeholder="ישראל ישראלי"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">שם המשרד</label>
            <input
              className="w-full bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/40 py-3 px-3 text-white placeholder:text-white/40"
              placeholder='כהן ושות&apos; עו"ד'
              type="text"
              value={firmName}
              onChange={(e) => setFirmName(e.target.value)}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2">טלפון ליצירת קשר</label>
            <input
              className="w-full bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/40 py-3 px-3 text-white placeholder:text-white/40"
              placeholder="050-0000000"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">דואר אלקטרוני</label>
            <input
              className="w-full bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/40 py-3 px-3 text-white placeholder:text-white/40"
              placeholder="office@law-firm.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button
          className="w-full py-4 bg-white text-primary font-bold rounded-lg transition-transform active:scale-95"
          type="submit"
        >
          תיאום שיחת דמו
        </button>
      </form>
    </div>
  )
}
