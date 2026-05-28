import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { LinkedinIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy-dark border-t border-white/10">
      {/* Trust Banner */}
      <div className="bg-cyan/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>Trusted by clients worldwide</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>15+ projects delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>100% client satisfaction</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand with Logo Image */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.jpeg"
                alt="Digital Services Marketplace"
                className="h-10 w-auto rounded-lg"
              />
              <span className="text-lg font-semibold">
                Digital Services <span className="text-cyan">Marketplace</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              We build digital solutions that drive real business growth. From custom websites to SEO strategies, our team delivers results that matter.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://linkedin.com/company/digital-services-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-cyan hover:text-navy transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1ERgtxzgbP/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-cyan hover:text-navy transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://wa.me/923016975723"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-cyan hover:text-navy transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-white/60 hover:text-cyan transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Services</h4>
            <div className="space-y-2">
              {['Web Development', 'SEO Optimization', 'Python Automation', 'Shopify Stores'].map((s) => (
                <Link
                  key={s}
                  to="/services"
                  className="block text-sm text-white/60 hover:text-cyan transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Digital Services Marketplace. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-cyan hover:text-navy transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}