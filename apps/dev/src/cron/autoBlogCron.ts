import cron from 'node-cron'
import { blogService } from '../modules/blogs/blog.service.ts'

let isRunning = false

/** ISO timestamp of last successful hybrid run that produced at least one blog */
export let lastAutoBlogSuccessAt: string | null = null

/** Summary payload from the last completed run */
export let lastAutoBlogSummary: Record<string, unknown> | null = null

export function startAutoBlogCron() {
  const enabled = process.env.AUTO_BLOG_ENABLED === 'true'
  const schedule = process.env.AUTO_BLOG_SCHEDULE ?? '0 */6 * * *'
  const autoPublish = process.env.AUTO_PUBLISH === 'true'

  if (!enabled) {
    console.log('[cron:auto-blog] disabled by env')
    return
  }

  if (!cron.validate(schedule)) {
    console.error('[cron:auto-blog] invalid schedule expression', { schedule })
    return
  }

  cron.schedule(schedule, async () => {
    if (isRunning) {
      console.log('[cron:auto-blog] skipped due to overlapping run')
      return
    }

    isRunning = true
    const startedAt = Date.now()
    console.log('[cron:auto-blog] started', { schedule, autoPublish, startedAt: new Date().toISOString() })

    try {
      const result = await blogService.generateFromLatestNews({ autoPublish })
      const summary = {
        generated: result.generated,
        skipped: result.skipped,
        fetched: result.fetched,
        publishMode: autoPublish ? 'auto' : 'draft',
        durationMs: Date.now() - startedAt,
        slugs: result.items.map((item: { slug?: string; contentSource?: string; topicKey?: string }) => ({
          slug: item.slug,
          contentSource: item.contentSource,
          topicKey: item.topicKey
        }))
      }
      lastAutoBlogSummary = summary
      if (result.generated > 0) {
        lastAutoBlogSuccessAt = new Date().toISOString()
      }
      console.log('[cron:auto-blog] completed', summary)
    } catch (error) {
      console.error('[cron:auto-blog] failed', { error, durationMs: Date.now() - startedAt })
    } finally {
      isRunning = false
    }
  })

  console.log('[cron:auto-blog] scheduled', { schedule, autoPublish })
}
