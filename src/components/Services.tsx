import { motion } from 'framer-motion'
// import { Rocket, ShoppingCart, TrendingUp } from 'lucide-react'
import RocketIcon from '../assets/rocket_icon_v3.png'
import CartIcon from '../assets/cart_icon.png'
import ChartIcon from '../assets/chart_icon_v3.png'

export default function Services() {
    const services = [
        {
            title: "Strategic Web Dev",
            desc: "High-performance websites engineered for conversions.",
            icon: <img src={RocketIcon} alt="Rocket" className="w-32 h-32 object-contain" />,
            color: "bg-purple-900"
        },
        {
            title: "eCommerce Solutions",
            desc: "Robust online stores designed to maximize sales.",
            icon: <img src={CartIcon} alt="Cart" className="w-32 h-32 object-contain" />,
            color: "bg-white text-purple-900"
        },
        {
            title: "SEO & Growth",
            desc: "Data-driven strategies to increase visibility.",
            icon: <img src={ChartIcon} alt="Chart" className="w-32 h-32 object-contain" />,
            color: "bg-orange-500"
        }
    ]

    return (
        <section id="services" className="py-20 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-7xl font-display font-black mb-6">Our Services</h2>
                <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                    We deliver end-to-end digital solutions designed to build, scale, and optimize your online presence.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative p-8 rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-xl ${service.color === 'bg-white text-purple-900' ? 'bg-white text-purple-900' : 'bg-white/5 backdrop-blur-lg border border-white/10'
                            }`}
                    >
                        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 flex justify-center">
                            {service.icon}
                        </div>
                        <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                        <p className="text-lg opacity-80">{service.desc}</p>

                        {/* Decorative background element */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-current opacity-10 rounded-full blur-2xl" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
