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
  Star,
  Quote,
  MessageCircle,
  Zap,
  Shield,
  Clock,
  Briefcase,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom websites built with modern technologies for optimal performance.',
    color: 'from-blue-500/20 to-cyan/10',
    features: ['WordPress', 'Shopify', 'React', 'Custom'],
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Data-driven strategies to boost your search rankings and visibility.',
    color: 'from-green-500/20 to-cyan/10',
    features: ['On-Page SEO', 'Technical SEO', 'Keyword Research', 'Link Building'],
  },
  {
    icon: Code2,
    title: 'Python Automation',
    desc: 'Automate workflows and processes with powerful Python solutions.',
    color: 'from-yellow-500/20 to-cyan/10',
    features: ['Web Scraping', 'API Integration', 'Data Processing', 'Chatbots'],
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Stores',
    desc: 'Complete e-commerce solutions with custom Shopify store setups.',
    color: 'from-purple-500/20 to-cyan/10',
    features: ['Custom Themes', 'Product Setup', 'Payment Integration', 'Optimization'],
  },
];

const stats = [
  { icon: CheckCircle, number: '15+', label: 'Projects Delivered' },
  { icon: Users, number: '12+', label: 'Happy Clients' },
  { icon: TrendingUp, number: '99%', label: 'Client Satisfaction' },
  { icon: Award, number: '3+', label: 'Years Experience' },
  { icon: Briefcase, number: '20+', label: 'Team Members' },
  { icon: Clock, number: '2hr', label: 'Response Time' },
];

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'CEO, TechStart Pakistan',
    text: 'Digital Services Marketplace transformed our online presence completely. Our website traffic increased by 200% and conversions doubled within 3 months.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Sana Khan',
    role: 'Founder, Charity Hub',
    text: 'The team built a beautiful, functional website for our charity platform. They understood our mission and delivered beyond expectations. Highly recommended!',
    rating: 5,
    image: '👩‍💼',
  },
  {
    name: 'Usman Ali',
    role: 'Business Owner, RankRanger',
    text: 'Professional, timely, and affordable. Best digital agency we have worked with. They helped us launch our SEO tool successfully.',
    rating: 5,
    image: '👨‍💻',
  },
];

const faqs = [
  {
    q: 'What is your typical project timeline?',
    a: 'Timeline depends on project scope. Basic websites take 7-10 days, medium projects 2-3 weeks, and complex solutions 4-6 weeks.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes! All projects come with 1-6 months warranty depending on your chosen plan. We also offer ongoing maintenance packages.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out the contact form, WhatsApp us, or request a free quote. We\'ll schedule a consultation to understand your needs.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We specialize in React, Next.js, Python, Flask, Node.js, WordPress, Shopify, and modern web technologies.',
  },
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

          {/* Quick Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/40">
              <Shield className="w-4 h-4 text-cyan" />
              <span>100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Zap className="w-4 h-4 text-cyan" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <MessageCircle className="w-4 h-4 text-cyan" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-cyan" />
          </div>
        </div>
      </section>

      {/* Trust Badges / Clients Logos */}
      <section className="py-12 bg-navy-dark/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/30 text-xs uppercase tracking-wider mb-6">
            Trusted by businesses and startups worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Shopify'].map((brand) => (
              <span key={brand} className="text-white/10 text-2xl md:text-3xl font-bold tracking-wider hover:text-white/20 transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-16 bg-navy-dark/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan/20 transition-all group-hover:scale-110">
                  <stat.icon className="w-6 h-6 text-cyan" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-cyan mb-0.5">{stat.number}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary - Enhanced */}
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
                <p className="text-white/50 text-sm leading-relaxed mb-3">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs bg-white/5 text-white/40 px-2 py-0.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-cyan text-sm font-medium group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cyan/20 text-cyan rounded-xl hover:bg-cyan/10 transition-all"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-20 bg-navy-dark/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-cyan">Clients Say</span>
            </h2>
            <p className="text-white/50 text-lg">Real feedback from real clients</p>
            <div className="mt-4 h-1 w-20 bg-cyan rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 hover:border-cyan/20 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-cyan mb-3">
                  <Quote className="w-4 h-4 opacity-50" />
                  <div className="flex text-cyan">{'★'.repeat(testimonial.rating)}</div>
                </div>
                <p className="text-white/60 text-sm italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{testimonial.image}</span>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-white/40 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-cyan">Questions</span>
            </h2>
            <p className="text-white/50 text-lg">Quick answers to common questions</p>
            <div className="mt-4 h-1 w-20 bg-cyan rounded-full mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-navy-light/30 border border-white/5 rounded-xl hover:border-cyan/20 transition-all"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium hover:text-cyan transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-cyan group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-white/60 text-sm px-5 pb-5 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-white/40 text-sm mb-4">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 text-cyan rounded-xl hover:bg-cyan/20 transition-all"
            >
              <MessageCircle size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-dark via-navy to-navy-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-cyan">Transform</span> Your Business?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss your project and find the perfect solution for your digital needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-xl text-lg hover:bg-cyan-light transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl text-lg hover:border-cyan hover:text-cyan transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
