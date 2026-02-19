import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? 'max-w-6xl' : ''
                    }`}>
                    <div className={`bg-white/10 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl ${isScrolled ? 'bg-purple-900/80' : 'bg-transparent border-transparent shadow-none'
                        }`}>

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center rotate-3 hover:rotate-6 transition-transform">
                                <span className="text-2xl font-display font-bold">G</span>
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight">Growth<span className="text-orange-500">Agency</span></span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
                            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
                            <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
                            <a href="#process" className="hover:text-orange-400 transition-colors">Process</a>
                            <a href="#portfolio" className="hover:text-orange-400 transition-colors">Work</a>
                            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-500/30 transform hover:scale-105 transition-all">
                                Book Consultation
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-[60] bg-purple-900/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <div className="flex flex-col items-center gap-8 text-2xl font-display font-bold">
                            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
                            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                            <a href="#process" onClick={() => setMobileMenuOpen(false)}>Our Process</a>
                            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl shadow-xl shadow-orange-500/20">
                                Book Consultation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
