function toUrlSafePrompt(prompt: string) {
  return encodeURIComponent(prompt.replace(/\s+/g, ' ').trim())
}

const CHEMISTRY_VISUAL_SUFFIX =
  ', educational chemistry magazine cover style, modern scientific illustration, soft studio lighting, molecules and glassware hints, no text, no watermark, high detail'

export const imageService = {
  generateFeaturedImageUrl(prompt: string) {
    const enriched = `${prompt.replace(/\s+/g, ' ').trim()}${CHEMISTRY_VISUAL_SUFFIX}`
    const safePrompt = toUrlSafePrompt(enriched)
    return `https://image.pollinations.ai/prompt/${safePrompt}`
  }
}
