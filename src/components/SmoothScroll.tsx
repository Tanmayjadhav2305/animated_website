import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const isMobile = useIsMobile()

    // Native touch scrolling is already smooth on mobile —
    // Lenis can actually cause jank by overriding it.
    if (isMobile) {
        return <>{children}</>
    }

    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}
