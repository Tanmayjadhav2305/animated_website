import { motion } from 'framer-motion'

export default function Process() {
    const steps = [
        { num: "01", title: "Strategy & Planning", desc: "We align your digital strategy with measurable growth objectives." },
        { num: "02", title: "Design & Dev", desc: "Crafting intuitive, conversion-focused experiences." },
        { num: "03", title: "Testing & Optimization", desc: "Rigorous testing for performance, security, and SEO." },
        { num: "04", title: "Launch & Support", desc: "Continuous monitoring and strategic enhancements." }
    ]

    return (
        <section id="process" className="py-20 bg-white text-purple-900 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-5xl md:text-7xl font-display font-black text-center mb-20">
                    Our Process
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-purple-100 transform -translate-x-1/2" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center gap-8 mb-16 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[20px] md:left-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white transform -translate-x-1/2 z-20 shadow-lg" />

                            {/* Content Card */}
                            <div className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'
                                }`}>
                                <div className="text-6xl font-display font-black text-purple-100 absolute -top-10 z-0 select-none pointer-events-none transform -translate-y-4 opacity-50">
                                    {step.num}
                                </div>
                                <h3 className="text-3xl font-bold mb-2 relative z-10">{step.title}</h3>
                                <p className="text-lg text-purple-800/70 relative z-10">{step.desc}</p>
                            </div>

                            {/* Empty side for layout balance */}
                            <div className="hidden md:block w-[calc(50%-40px)]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
