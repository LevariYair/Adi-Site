import { useState } from 'react'

export default function SupportTicketForm() {
  const [name, setName] = useState('')
  const [caseNumber, setCaseNumber] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent('קריאת שירות')
    const body = encodeURIComponent(
      `שם מלא: ${name}\nמספר תיק: ${caseNumber}\nתיאור התקלה / הבקשה:\n${description}`,
    )
    window.location.href = `mailto:adi4clients@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-surface-container p-10 rounded-2xl">
      <div className="flex items-center gap-4 mb-8">
        <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
        <h2 className="text-2xl font-black text-primary">פתיחת קריאת שירות</h2>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-bold text-primary mb-2">שם מלא</label>
          <input
            className="w-full bg-surface-container-high border-0 rounded-lg focus:ring-2 focus:ring-primary/40 py-3 px-3"
            placeholder="ישראל ישראלי"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-primary mb-2">מספר תיק (אופציונלי)</label>
          <input
            className="w-full bg-surface-container-high border-0 rounded-lg focus:ring-2 focus:ring-primary/40 py-3 px-3"
            placeholder="12345/24"
            type="text"
            value={caseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-primary mb-2">תיאור התקלה / הבקשה</label>
          <textarea
            className="w-full bg-surface-container-high border-0 rounded-lg focus:ring-2 focus:ring-primary/40 py-3 px-3 h-32"
            placeholder="כיצד נוכל לעזור?"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="w-full py-4 bg-primary text-white font-bold rounded-lg transition-transform active:scale-95"
          type="submit"
        >
          שלח בקשה
        </button>
      </form>
    </div>
  )
}
