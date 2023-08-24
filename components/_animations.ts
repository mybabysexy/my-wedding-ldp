export const SECTION_ANIMATIONS = {
    variants: {
        offscreen: {
            opacity: 0,
            y: 100,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                mass: 0.5,
                delayChildren: 0.5,
            }
        }
    },
    viewport: {
        once: true
    },
    initial: 'offscreen',
    whileInView: 'onscreen'
}

export const POP_FROM_CENTER = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    visible: {
        opacity: 1,
        scale: [0.5, 1.1, 1],
        transition: {
            duration: 0.5,
        }
    },
}

export const SLIDE_FROM_BOTTOM = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    },
}
