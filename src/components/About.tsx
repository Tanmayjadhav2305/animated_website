import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import AboutTeam from '../assets/about_team_v2.png'

export default function About() {
    return (
        <section id="about" className="py-20 container mx-auto px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] -z-10" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <img
                        src={AboutTeam}
                        alt="Our Team"
                        className="relative z-10 w-full max-w-[500px] mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-0 right-4 md:-bottom-6 md:right-10 bg-white text-purple-900 p-4 md:p-6 rounded-2xl shadow-xl z-20 flex flex-col items-center text-center border-4 border-purple-900/10"
                    >
                        <div className="text-3xl md:text-5xl font-black font-display text-orange-500 leading-none mb-1">5+</div>
                        <div className="font-bold text-xs md:text-sm uppercase tracking-wider text-purple-900/70">Years of<br />Excellence</div>
                    </motion.div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block bg-orange-500/20 text-orange-400 font-bold px-4 py-1.5 rounded-full mb-6 border border-orange-500/30">
                        WHO WE ARE
                    </div>
                    <h2 className="text-5xl md:text-6xl font-display font-black mb-6 leading-tight">
                        We Are More Than Just A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Digital Agency</span>
                    </h2>
                    <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                        We are a team of visionary creators, tech enthusiasts, and strategic thinkers dedicated to transforming your digital presence. Our mission is to bridge the gap between imagination and reality.
                    </p>

                    <div className="space-y-4 mb-10">
                        {[
                            "Creative Strategy & Direction",
                            "Award-Winning Web Design",
                            "High-Performance Development",
                            "Data-Driven Growth Marketing"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-orange-500 flex-shrink-0" />
                                <span className="font-bold text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#contact" className="bg-white text-purple-900 px-8 py-4 rounded-full font-black text-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 group inline-flex">
                        Get In Touch <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
