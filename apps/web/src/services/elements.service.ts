import { http } from '../shared/api/http'
import type { Element, Reaction } from '../modules/elements/types'
import type { ApiResponse } from '../shared/api/response'

export async function getElements(): Promise<Element[]> {
  const response = await http.get<Element[]>('/elements')
  return response.data
}

export async function getElementById(id: number): Promise<Element> {
  const response = await http.get<Element>(`/elements/${id}`)
  return response.data
}

export async function getElementReactions(id: number): Promise<Reaction[]> {
  const response = await http.get<Reaction[]>(`/elements/${id}/fulldata`)
  return response.data
}

export async function getHealthStatus() {
  const response = await http.get<ApiResponse<{ status: string }>>('/health')
  return response.data.data.status
}
