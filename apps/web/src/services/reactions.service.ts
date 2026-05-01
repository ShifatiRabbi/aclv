import { http } from '../shared/api/http'
import type { ApiResponse } from '../shared/api/response'
import type { Experiment } from '../modules/vlab/types'

export async function getReactions() {
  const response = await http.get<ApiResponse<{ items: Experiment[] }>>('/reactions')
  return response.data.data.items
}
