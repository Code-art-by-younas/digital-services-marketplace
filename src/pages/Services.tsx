import { Link } from 'react-router-dom';
import {
  Globe,
  Search,
  Code2,
  ShoppingBag,
  Zap,
  Bug,
  ArrowRight,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    subtitle: 'WordPress, Shopify, Custom',
    desc: 'We create stunning, responsive websites using WordPress, Shopify, and custom code. Whether you need a corporate website, landing page, or complex web application, we deliver pixel-perfect designs that convert visitors into customers.',
    features: ['Custom WordPress Themes', 'Shopify Store Setup', 'Landing Pages', 'Responsive Design'],
    gradient: 'from-blue-500 to-cyan',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    subtitle: 'On-page, Off-page, Technical',
    desc: 'Drive organic traffic and boost your search engine rankings with our comprehensive SEO services. We handle everything from keyword research and on-page optimization to link building and technical SEO audits.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical Audits', 'Link Building'],
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    subtitle: 'React, Node.js, Python',
    desc: 'End-to-end web application development using cutting-edge technologies. From frontend interfaces built with React to robust backend systems with Node.js and Python, we build scalable solutions.',
    features: ['React & Next.js', 'Node.js APIs', 'Database Design', 'Cloud Deployment'],
    gradient: 'from-orange-500 to-yellow-400',
  },
  {
    icon: Zap,
    title: 'Python Automation',
    subtitle: 'Scripts, APIs, Web Apps',
    desc: 'Automate your business processes with custom Python solutions. From web scraping and data analysis to API integrations and automated workflows, we help you work smarter, not harder.',
    features: ['Web Scraping', 'API Development', 'Data Processing', 'Task Automation'],
    gradient: 'from-yellow-500 to-amber-400',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Stores',
    subtitle: 'Custom themes, product setup',
    desc: 'Launch your e-commerce business with a professional Shopify store. We handle custom theme development, product catalog setup, payment integration, and everything you need to start selling online.',
    features: ['Custom Themes', 'Product Setup', 'Payment Integration', 'Store Optimization'],
    gradient: 'from-purple-500 to-violet-400',
  },
  {
    icon: Bug,
    title: 'Bug Fixing & Speed Optimization',
    subtitle: 'Performance & Reliability',
    desc: 'Is your website slow or broken? We diagnose and fix bugs, optimize loading speeds, and ensure your site runs smoothly across all devices and browsers. Get back on track fast.',
    features: ['Bug Diagnosis', 'Speed Optimization', 'Cross-Browser Fix', 'Performance Tuning'],
    gradient: 'from-red-500 to-rose-400',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What We Offer"
            subtitle="Comprehensive digital services to help your business grow. From web development to SEO, we've got you covered."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-navy-light/50 border border-white/5 rounded-2xl p-8 hover:border-cyan/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan/5 overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-cyan" />
                </div>

                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-cyan/80 text-sm font-medium mb-4">{service.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.desc}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-cyan text-sm font-medium hover:gap-3 transition-all group-hover:text-cyan-light">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-dark/50 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a <span className="text-cyan">Custom Solution</span>?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Don't see exactly what you need? Contact us and we'll create a tailored solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-xl text-lg hover:bg-cyan-light transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
          >
            Get Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
