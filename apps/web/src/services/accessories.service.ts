import { http } from '../shared/api/http'
import type { ApiResponse } from '../shared/api/response'

export interface AccessoryItem {
  id: string
  title: string
  category: string
  capacities: string[]
  description: string
}

export async function getAccessories() {
  const response = await http.get<ApiResponse<{ items: AccessoryItem[] }>>('/accessories')
  return response.data.data.items
}
