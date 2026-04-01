import DemoRequestForm from './DemoRequestForm'
import SupportTicketForm from './SupportTicketForm'

export default function LeadGenSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        <SupportTicketForm />
        <DemoRequestForm />
      </div>
    </section>
  )
}
