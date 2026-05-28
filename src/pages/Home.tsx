import { Link } from 'react-router-dom';
import {
  Globe,
  Search,
  Code2,
  ShoppingBag,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom websites built with modern technologies for optimal performance.',
    color: 'from-blue-500/20 to-cyan/10',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Data-driven strategies to boost your search rankings and visibility.',
    color: 'from-green-500/20 to-cyan/10',
  },
  {
    icon: Code2,
    title: 'Python Automation',
    desc: 'Automate workflows and processes with powerful Python solutions.',
    color: 'from-yellow-500/20 to-cyan/10',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Stores',
    desc: 'Complete e-commerce solutions with custom Shopify store setups.',
    color: 'from-purple-500/20 to-cyan/10',
  },
];

const stats = [
  { icon: CheckCircle, number: '15+', label: 'Projects Delivered' },
  { icon: Users, number: '10+', label: 'Happy Clients' },
  { icon: TrendingUp, number: '99%', label: 'Client Satisfaction' },
  { icon: Award, number: '3+', label: 'Years Experience' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/3 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-8 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            Trusted by clients worldwide
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Digital Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">
              That Drive Growth
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 animate-fade-in-up animation-delay-200">
            We build powerful digital experiences that transform businesses
            and accelerate growth.
          </p>

          <p className="text-sm md:text-base text-cyan/80 font-medium tracking-widest uppercase mb-10 animate-fade-in-up animation-delay-300">
            Web Development • SEO • Shopify • Python • Full-Stack
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Link
              to="/services"
              className="group px-8 py-4 bg-cyan text-navy font-semibold rounded-xl text-lg hover:bg-cyan-light transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25 flex items-center gap-2"
            >
              View Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl text-lg hover:border-cyan hover:text-cyan transition-all duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-cyan" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-dark/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-cyan mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-cyan mb-1">{stat.number}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What We <span className="text-cyan">Offer</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
            <div className="mt-4 h-1 w-20 bg-cyan rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${service.color} border border-white/5 hover:border-cyan/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan/5`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-5 group-hover:bg-cyan/20 transition-colors">
                  <service.icon className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-cyan text-sm font-medium mt-4 group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-dark via-navy to-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-cyan">Transform</span> Your Business?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss your project and find the perfect solution for your digital needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-xl text-lg hover:bg-cyan-light transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
