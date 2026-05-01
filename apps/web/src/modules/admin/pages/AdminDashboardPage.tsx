import { NeonStatCard } from '../../dashboard/components/NeonStatCard'

export default function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      <div className="glass-panel rounded-2xl border border-white/10 p-6">
        <h1 className="text-2xl font-semibold text-white">Enterprise Admin Control Center</h1>
        <p className="mt-2 text-on-surface-variant">Manage users, subscriptions, referral analytics, security logs, and audit trails.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <NeonStatCard label="Total Users" value="18,204" hint="+4.3% this month" />
        <NeonStatCard label="Revenue" value="$42,980" hint="Active subscriptions" />
        <NeonStatCard label="Promo Conversions" value="2,940" hint="Campaign efficiency high" />
        <NeonStatCard label="Security Events" value="12" hint="All monitored and resolved" />
      </div>
    </section>
  )
}
