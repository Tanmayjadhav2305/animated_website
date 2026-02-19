import { motion } from 'framer-motion'

export default function Marquee() {
    const items = [
        "WEB DEVELOPMENT", "SEO OPTIMIZATION", "ECOMMERCE SOLUTIONS", "UI/UX DESIGN",
        "WEB DEVELOPMENT", "SEO OPTIMIZATION", "ECOMMERCE SOLUTIONS", "UI/UX DESIGN"
    ]

    return (
        <div className="relative bg-orange-500 py-6 overflow-hidden -rotate-2 transform scale-105 border-y-4 border-black z-20">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {[...items, ...items, ...items].map((item, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-4xl font-display font-black text-white stroke-black tracking-tighter">
                                {item}
                            </span>
                            <div className="w-4 h-4 bg-purple-900 rounded-full" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
