import { gsap } from 'gsap'

type GsapTarget = gsap.TweenTarget
const presets = {
  fadeIn:     { opacity: 0, y: 30, duration: 2.0, ease: 'power2.in' },
  fadeOut:    { opacity: 0, duration: 2.0, ease: 'power2.in' },
  fadeInUp:   { opacity: 0, y: 30, duration: 2.0, ease: 'power2.out' },
  fadeInDown: { opacity: 0, y: -30, duration: 2.0, ease: 'power2.out' },
  fadeInLeft: { opacity: 0, x: -30, duration: 2.0, ease: 'power2.out' },
  fadeInRight:{ opacity: 0, x: 30, duration: 2.0, ease: 'power2.out' },
  zoomOut:    { opacity: 0, scale: 0, duration: 2.0, ease: 'back.in' },
  zoomIn:     { opacity: 0, scale: 0.5, duration: 2.0, ease: 'back.out' },
  flipInX:    { opacity: 0, rotationX: -90, duration: 2.0, ease: 'back.out' },
  pulse:      { scale: 1.1, duration: 2, repeat: 1, yoyo: true, ease: 'power1.inOut' },
  shakeX:     { x: '-=10', duration: 1, repeat: 5, yoyo: true, ease: 'power1.inOut' },
  shakeY:     { y: '-=10', duration: 1, repeat: 5, yoyo: true, ease: 'power1.inOut' },
  shake:      { duration: 2, repeat: 5, yoyo: true, rotateX: 0, rotateY: 0, rotate: -45, ease: 'power1.inOut' },
} as const

type AnimationPreset = keyof typeof presets
type AnimationMode = 'from' | 'to' | 'fromTo'

export const useAnimations = () => {
  const animate = (
    target: GsapTarget,
    preset: AnimationPreset,
    options: Partial<gsap.TweenVars> = {},
    mode: AnimationMode = 'from'
  ) => {
    const config = presets[preset]
    if (!config) {
      console.warn(`Preset '${preset}' not found.`)
      return
    }

    if (mode === 'fromTo') {
      const { fromVars, toVars } = options as {
        fromVars: gsap.TweenVars
        toVars: gsap.TweenVars
      }

      if (!fromVars || !toVars) {
        console.warn(`'fromTo' mode requires both 'fromVars' and 'toVars' inside 'options'.`)
        return
      }

      return gsap.fromTo(target, fromVars, toVars)
    }

    return gsap[mode](target, { ...config, ...options })
  }

  return { animate }
}
