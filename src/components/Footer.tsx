import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
]

const services = [
    'SEO Optimization',
    'Social Media Marketing',
    'Brand Strategy',
    'Content Creation',
    'Paid Advertising',
    'Analytics & Insights',
]

const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative mt-20 overflow-hidden">
            {/* Decorative top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-24 bg-orange-500/10 blur-[80px]" />

            {/* CTA Banner */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 mb-16"
            >
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 md:p-14 overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-900/20 rounded-full blur-2xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-2">
                                Ready to Grow?
                            </h3>
                            <p className="text-white/80 text-lg max-w-md">
                                Let's turn your vision into results. Start your growth journey today.
                            </p>
                        </div>
                        <a href="#contact" className="bg-white text-orange-600 font-black px-8 py-4 rounded-full text-lg shadow-xl shadow-orange-900/20 hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group shrink-0">
                            Book a Free Call
                            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Main Footer Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="container mx-auto px-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-white/10">
                    {/* Brand Column */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center rotate-3">
                                <span className="text-2xl font-display font-bold text-white">G</span>
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight">
                                Growth<span className="text-orange-500">Agency</span>
                            </span>
                        </div>
                        <p className="text-purple-300/70 leading-relaxed mb-6 max-w-xs">
                            We help ambitious brands scale with data-driven marketing strategies and creative storytelling.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-purple-300/60 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-display font-bold text-lg mb-5 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-purple-300/60 hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 rounded-full" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-display font-bold text-lg mb-5 text-white">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-purple-300/60 hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1.5 group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 rounded-full" />
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-display font-bold text-lg mb-5 text-white">Get in Touch</h4>
                        <div className="space-y-4">
                            <a href="mailto:hello@growthagency.com" className="flex items-center gap-3 text-purple-300/60 hover:text-orange-400 transition-colors group">
                                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm">hello@growthagency.com</span>
                            </a>
                            <a href="tel:+15551234567" className="flex items-center gap-3 text-purple-300/60 hover:text-orange-400 transition-colors group">
                                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-300">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </a>
                            <div className="flex items-center gap-3 text-purple-300/60">
                                <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-orange-400">
                                    <MapPin size={16} />
                                </div>
                                <span className="text-sm">New York, NY</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
                    <p className="text-purple-300/40 text-sm font-medium tracking-wide">
                        © {new Date().getFullYear()} Growth Agency. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-purple-300/40 text-sm">
                        <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-purple-300/60 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                        aria-label="Back to top"
                    >
                        <ArrowUpRight size={18} className="-rotate-45" />
                    </button>
                </div>
            </motion.div>
        </footer>
    )
}
