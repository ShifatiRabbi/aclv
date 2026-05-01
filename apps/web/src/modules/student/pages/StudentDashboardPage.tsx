import { FlaskConical, Sparkles, Trophy, Zap } from 'lucide-react'
import { NeonStatCard } from '../../dashboard/components/NeonStatCard'

export default function StudentDashboardPage() {
  return (
    <section className="space-y-6">
      <div className="glass-panel rounded-2xl border border-white/10 p-6">
        <h1 className="text-2xl font-semibold text-white">Student Lab Control Panel</h1>
        <p className="mt-2 text-on-surface-variant">Track XP, streaks, assignments, lab activities, and simulation achievements.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <NeonStatCard label="XP Points" value="2,480" hint="+120 from experiments" />
        <NeonStatCard label="Rank" value="#12" hint="Top 5% laboratory students" />
        <NeonStatCard label="Daily Streak" value="18 days" hint="Keep simulation momentum" />
        <NeonStatCard label="Wallet Credits" value="540" hint="Usable for premium lab kits" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="glass-panel rounded-2xl border border-white/10 p-5">
          <h2 className="text-lg font-semibold text-white">Recommended Experiments</h2>
          <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">
            <li className="flex items-center gap-2"><FlaskConical className="h-4 w-4 text-primary" /> Acid-Base Titration Precision Drill</li>
            <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> Reaction Discovery: Oxidation Pathways</li>
            <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Toxic Gas Safety Response Simulation</li>
          </ul>
        </article>
        <article className="glass-panel rounded-2xl border border-white/10 p-5">
          <h2 className="text-lg font-semibold text-white">Achievements & Leaderboard</h2>
          <p className="mt-3 text-sm text-on-surface-variant">Unlocked badges: Catalyst Master, Safe Operator, Rapid Mixer.</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-primary"><Trophy className="h-4 w-4" /> Leaderboard position improving this week.</p>
        </article>
      </div>
    </section>
  )
}
