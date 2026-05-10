function toUrlSafePrompt(prompt: string) {
  return encodeURIComponent(prompt.replace(/\s+/g, ' ').trim())
}

export const imageService = {
  generateFeaturedImageUrl(prompt: string) {
    const safePrompt = toUrlSafePrompt(prompt)
    return `https://image.pollinations.ai/prompt/${safePrompt}`
  }
}
