import { http } from '../shared/api/http'
import type { ApiResponse } from '../shared/api/response'
import type { Chemical } from '../modules/vlab/types'

export async function getChemicals() {
  const response = await http.get<ApiResponse<{ items: Chemical[] }>>('/chemicals')
  return response.data.data.items
}
