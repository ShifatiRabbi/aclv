import { NeonStatCard } from '../../dashboard/components/NeonStatCard'

export default function StaffDashboardPage() {
  return (
    <section className="space-y-6">
      <div className="glass-panel rounded-2xl border border-white/10 p-6">
        <h1 className="text-2xl font-semibold text-white">Staff Operations Hub</h1>
        <p className="mt-2 text-on-surface-variant">Moderation, support tickets, promo/referral management, and experiment content workflow.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <NeonStatCard label="Open Tickets" value="37" hint="Priority queue stabilized" />
        <NeonStatCard label="Moderation Cases" value="11" hint="3 high priority" />
        <NeonStatCard label="Promo Campaigns" value="8" hint="2 expiring this week" />
        <NeonStatCard label="Chem DB Updates" value="54" hint="Validated by staff" />
      </div>
    </section>
  )
}
