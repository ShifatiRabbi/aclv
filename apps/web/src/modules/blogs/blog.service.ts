import { http } from '../../shared/api/http'
import type { BlogItem } from './types'

export const blogApi = {
  async list(includeDrafts = false) {
    const response = await http.get('/blogs', { params: includeDrafts ? { includeDrafts: 'true' } : undefined })
    return (response.data?.data?.items ?? []) as BlogItem[]
  },

  async getBySlug(slug: string) {
    const response = await http.get(`/blogs/${slug}`)
    return response.data?.data?.item as BlogItem
  },

  async generate() {
    const response = await http.post('/blogs/generate', {})
    return response.data?.data
  },

  async publish(id: string) {
    const response = await http.post(`/blogs/publish/${id}`, {})
    return response.data?.data?.item as BlogItem
  },

  async remove(id: string) {
    await http.delete(`/blogs/${id}`)
  }
}
