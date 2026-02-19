import { motion } from 'framer-motion'
import { Rocket, Zap, Briefcase } from 'lucide-react'
import HeroMascot from '../assets/hero_mascot_final.png'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-32 md:pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full font-bold mb-6 border border-orange-500/30 backdrop-blur-sm">
                        <Zap size={20} className="fill-orange-400" /> We Build High-Converting Websites
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8 drop-shadow-xl">
                        GROW YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 pr-2">
                            BUSINESS
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-200 mb-10 max-w-lg leading-relaxed">
                        We build websites that generate leads and revenue. Clean design, fast performance, and SEO optimization.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold px-8 py-5 rounded-full shadow-2xl shadow-orange-500/40 transform hover:scale-105 transition-all flex items-center justify-center gap-3">
                            <Rocket size={24} /> Get Free Consultation
                        </a>
                        <a href="#portfolio" className="bg-white/10 hover:bg-white/20 text-white text-xl font-bold px-8 py-5 rounded-full backdrop-blur-md border border-white/10 transition-all flex items-center justify-center gap-3">
                            <Briefcase size={24} /> View Our Work
                        </a>
                    </div>
                </motion.div>

                {/* 3D Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center mt-10 md:mt-0"
                >
                    {/* Pulsing Glow Effect */}
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute z-0 w-[500px] h-[500px] bg-orange-500/40 rounded-full blur-[100px]"
                    />

                    {/* Placeholder for 3D Asset */}
                    <motion.div
                        initial={{ y: 0, rotate: 0 }}
                        animate={{
                            y: [-30, 30, -30],
                            rotateX: [0, 5, 0, -5, 0],
                            rotateY: [0, 10, 0, -10, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                        className="relative z-10 w-full max-w-[400px] md:max-w-[550px] aspect-square flex items-center justify-center cursor-pointer perspective-1000"
                    >
                        <img src={HeroMascot} alt="Growth Mascot" className="w-full h-auto drop-shadow-2xl" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
