import { NeonStatCard } from '../../dashboard/components/NeonStatCard'

export default function TeacherDashboardPage() {
  return (
    <section className="space-y-6">
      <div className="glass-panel rounded-2xl border border-white/10 p-6">
        <h1 className="text-2xl font-semibold text-white">Teaching Control Center</h1>
        <p className="mt-2 text-on-surface-variant">Classroom management, assignment creation, experiment builder, and performance heatmaps.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <NeonStatCard label="Active Classrooms" value="14" hint="4 live sessions running" />
        <NeonStatCard label="Pending Grading" value="126" hint="Auto-assist available" />
        <NeonStatCard label="Experiment Queue" value="22" hint="Awaiting approval" />
        <NeonStatCard label="Weak Topic Alerts" value="9" hint="Stoichiometry and kinetics" />
      </div>
    </section>
  )
}
