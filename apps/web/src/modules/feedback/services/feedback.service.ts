import { http } from '../../../shared/api/http'
import type { ApiResponse } from '../../../shared/api/response'
import type { FeedbackPage, FeedbackReport, FeedbackStatus } from '../types'

export interface FeedbackListResponse {
  items: FeedbackReport[]
  pagination: {
    total: number
    pageNumber: number
    pageSize: number
    totalPages: number
  }
}

export const feedbackService = {
  async submit(payload: { page: FeedbackPage; description: string; anonymousId: string; image?: File }) {
    const formData = new FormData()
    formData.append('page', payload.page)
    formData.append('description', payload.description)
    formData.append('anonymousId', payload.anonymousId)
    formData.append('timestamp', new Date().toISOString())
    if (payload.image) {
      formData.append('image', payload.image)
    }

    const response = await http.post<ApiResponse<{ item: FeedbackReport }>>('/feedback', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data.data.item
  },

  async listAdmin(query: {
    page?: FeedbackPage | ''
    status?: FeedbackStatus | ''
    pageNumber?: number
    pageSize?: number
  }) {
    const response = await http.get<ApiResponse<FeedbackListResponse>>('/feedback/admin/feedback', { params: query })
    return response.data.data
  },

  async updateStatus(id: string, status: FeedbackStatus) {
    const response = await http.patch<ApiResponse<{ item: FeedbackReport }>>(`/feedback/admin/feedback/${id}`, { status })
    return response.data.data.item
  }
}

