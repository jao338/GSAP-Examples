import { gsap } from 'gsap';

type GsapTarget = gsap.TweenTarget

const presets = {
  fadeIn:     { opacity: 0, y: 30, duration: 2.0, ease: 'power2.in' },
  fadeOut:    { opacity: 0, duration: 2.0, ease: 'power2.in' },
  fadeInUp:   { opacity: 0, y: 15, duration: 2.0, ease: 'power2.out' },
  fadeInDown: { opacity: 0, y: -15, duration: 2.0, ease: 'power2.out' },
  fadeInLeft: { opacity: 0, x: -15, duration: 2.0, ease: 'power2.out' },
  fadeInRight:{ opacity: 0, x: 15, duration: 2.0, ease: 'power2.out' },
  zoomOut:    { opacity: 0, scale: 0, duration: 2.0, ease: 'back.in' },
  zoomIn:     { opacity: 0, scale: 0.5, duration: 2.0, ease: 'back.out' },
  flipInX:    { opacity: 0, rotationX: -90, duration: 4.0, ease: 'back.out' },
  flipInY:    { opacity: 0, rotationY: -90, duration: 4.0, ease: 'back.out' },
  flipInZ:    { opacity: 0, rotationZ: -90, duration: 4.0, ease: 'back.out' },
  pulse:      { scale: 1.3, duration: 2, repeat: 1, yoyo: true, ease: 'power1.inOut' },
  shakeX:     { x: '-=10', duration: 1, repeat: 5, yoyo: true, ease: 'power1.inOut' },
  shakeY:     { y: '-=10', duration: 1, repeat: 5, yoyo: true, ease: 'power1.inOut' },
  shake:      { duration: 2, repeat: 5, yoyo: true, rotateX: 0, rotateY: 0, rotate: -45, ease: 'power1.inOut' },
} as const

type AnimationPreset = keyof typeof presets
type AnimationMode = 'from' | 'to' | 'fromTo'

type TimelineOptions = {
  steps: gsap.TweenVars[]
  repeat?: number
  yoyo?: boolean
  delay?: number
  defaults?: gsap.TweenVars
  onComplete?: gsap.Callback
}

export const useAnimations = () => {
  const animate = (
    target: GsapTarget,
    preset: AnimationPreset | null = null,
    options: Partial<gsap.TweenVars> | TimelineOptions = {},
    mode: AnimationMode = 'from'
  ) => {
    if ('steps' in options && Array.isArray(options.steps)) {
      const {
        steps,
        repeat = 0,
        yoyo = false,
        delay = 0,
        defaults,
        onComplete
      } = options as TimelineOptions

      const tl = gsap.timeline({
        repeat,
        yoyo,
        delay,
        ...(defaults ? { defaults } : {}),
        ...(onComplete ? { onComplete } : {})
      })

      for (const step of steps) {
        tl.to(target, step)
      }

      return tl
    }

    // Config via preset (ou vazio)
    const config = preset ? presets[preset] : {}

    // Animação do tipo fromTo
    if (mode === 'fromTo') {
      const { fromVars, toVars } = options as {
        fromVars: gsap.TweenVars
        toVars: gsap.TweenVars
      }

      if (!fromVars || !toVars) {
        console.warn(`'fromTo' mode requires both 'fromVars' and 'toVars'`)
        return
      }

      return gsap.fromTo(target, fromVars, toVars)
    }

    // from ou to
    return gsap[mode](target, {
      ...config,
      ...(options as gsap.TweenVars),
    })
  }

  return { animate }
}
