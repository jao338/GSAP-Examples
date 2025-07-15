import { gsap } from 'gsap'

type GsapTarget = gsap.TweenTarget

export const useAnimations = () => {
  const animate = (target: GsapTarget, preset: string, options: Partial<gsap.TweenVars> = {}) => {
    const presets: Record<string, gsap.TweenVars> = {
      fadeIn:     { opacity: 0, y: 30, duration: 2.0, ease: 'power2.in' },
      fadeOut:      { opacity: 0, duration: 2.0, ease: 'power2.in' },
      fadeInUp:     { opacity: 0, y: 30, duration: 2.0, ease: 'power2.out' },
      fadeInDown:   { opacity: 0, y: -30, duration: 2.0, ease: 'power2.out' },
      fadeInLeft:   { opacity: 0, x: -30, duration: 2.0, ease: 'power2.out' },
      fadeInRight:  { opacity: 0, x: 30, duration: 2.0, ease: 'power2.out' },
      zoomOut:      { opacity: 0, scale: 0, duration: 2.0, ease: 'back.in' },
      zoomIn:       { opacity: 0, scale: 0.5, duration: 2.0, ease: 'back.out' },
      flipInX:      { opacity: 0, rotationX: -90, duration: 2.0, ease: 'back.out' },
      pulse:        { scale: 1.1, duration: 2, repeat: 1, yoyo: true, ease: 'power1.inOut' },
      shakeX:       { x: '-=10', duration: 1, repeat: 5, yoyo: true, ease: 'power1.inOut' },
      shakeY:       { y: '-=10', duration: 1, repeat: 5, yoyo: true, ease: 'power1.inOut' },
      shake:       { duration: 2, repeat: 5, yoyo: true, rotateX: 0, rotateY: 0, rotate: -45, ease: 'power1.inOut' },
    }

    const config = presets[preset]
    if (!config) {
      console.warn(`Preset '${preset}' not found.`)
      return
    }

    gsap.from(target, { ...config, ...options })
  }

  return { animate }
}
