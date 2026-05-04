import { useReveal } from '../hooks/useReveal'

/**
 * Reveal — wraps children with a fade-up scroll animation.
 * @param {number} delay — stagger delay in seconds (default 0)
 */
export default function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.55s ${delay}s ease, transform 0.55s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  )
}