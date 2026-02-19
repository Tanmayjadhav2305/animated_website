import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import MashaMascot from '../assets/masha_mascot.png'
import { useIsMobile } from '../hooks/useIsMobile'

export default function Contact() {
    const isMobile = useIsMobile()

    return (
        <section id="contact" className="py-20 container mx-auto px-4 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] -z-10" />

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: isMobile ? 0.4 : 0.6 }}
                    className="relative bg-purple-900/50 p-10 rounded-3xl backdrop-blur-sm border border-white/10"
                >
                    {/* Masha Mascot beside the text block */}
                    <div className="absolute -top-48 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0 md:translate-x-0 md:-left-48 md:top-10 w-48 md:w-80 z-20 pointer-events-none">
                        <img src={MashaMascot} alt="Masha Mascot" className="w-full h-auto drop-shadow-2xl" />
                    </div>

                    <h2 className="text-5xl font-display font-black mb-6">Let's Build Something <span className="text-orange-500">Amazing</span></h2>
                    <p className="text-xl text-purple-200 mb-8">
                        Ready to scale your business? Fill out the form below and let's get started.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-lg">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-400">
                                <Mail />
                            </div>
                            <p>hello@growthagency.com</p>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-400">
                                <Phone />
                            </div>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-400">
                                <MapPin />
                            </div>
                            <p>New York, NY</p>
                        </div>
                    </div>
                </motion.div>

                {/* Form Side */}
                <motion.form
                    initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: isMobile ? 0.4 : 0.6 }}
                    className="relative"
                >
                    <div className="bg-white text-purple-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden z-10">
                        {/* Decorative */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-20" />

                        <div className="space-y-6 relative z-10">
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-purple-900/60">Name</label>
                                <input type="text" className="w-full bg-purple-50 border-2 border-purple-100 p-4 rounded-xl focus:outline-none focus:border-orange-500 transition-colors font-bold" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-purple-900/60">Email</label>
                                <input type="email" className="w-full bg-purple-50 border-2 border-purple-100 p-4 rounded-xl focus:outline-none focus:border-orange-500 transition-colors font-bold" placeholder="hello@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-purple-900/60">Project Details</label>
                                <textarea rows={4} className="w-full bg-purple-50 border-2 border-purple-100 p-4 rounded-xl focus:outline-none focus:border-orange-500 transition-colors font-bold" placeholder="Tell us about your project..." />
                            </div>

                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl shadow-lg shadow-orange-500/30 transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group">
                                SEND MESSAGE <Send size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.form>
            </div>
        </section>
    )
}
