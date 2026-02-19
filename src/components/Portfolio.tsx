import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

import FintechMockup from '../assets/fintech_dashboard_mockup_1771535393616.png'
import FashionMockup from '../assets/fashion_store_mockup_1771535409258.png'
import CryptoMockup from '../assets/crypto_landing_mockup_1771535424906.png'
import SaasMockup from '../assets/saas_platform_mockup_1771535441440.png'

export default function Portfolio() {
    const works = [
        { title: "FinTech Dashboard", category: "Web App", color: "bg-blue-500", image: FintechMockup },
        { title: "Fashion Store", category: "eCommerce", color: "bg-pink-500", image: FashionMockup },
        { title: "Crypto Landing", category: "Marketing", color: "bg-green-500", image: CryptoMockup },
        { title: "SaaS Platform", category: "Web App", color: "bg-indigo-500", image: SaasMockup }
    ]

    return (
        <section id="portfolio" className="py-20 container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <div className="inline-block bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">OUR WORK</div>
                    <h2 className="text-5xl md:text-7xl font-display font-black">Selected <br />Projects</h2>
                </div>
                <button className="hidden md:flex items-center gap-2 text-lg font-bold hover:text-orange-400 transition-colors group">
                    View All Work <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {works.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                    >
                        {/* Mockup Background */}
                        <div className={`absolute inset-0 ${work.color} opacity-20 transition-opacity`} />
                        <img
                            src={work.image}
                            alt={work.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300`} />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-orange-400 font-bold mb-1 uppercase text-sm tracking-wider">{work.category}</p>
                                    <h3 className="text-4xl font-display font-bold leading-none">{work.title}</h3>
                                </div>
                                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    <ExternalLink size={20} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 flex justify-center md:hidden">
                <button className="flex items-center gap-2 text-lg font-bold hover:text-orange-400 transition-colors group">
                    View All Work <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    )
}
