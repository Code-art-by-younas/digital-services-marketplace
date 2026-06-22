import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Send,
  MessageCircle,
  Globe,
  Clock,
  // ❌ Linkedin import hata diya
} from 'lucide-react';

// ✅ LinkedIn Icon - Inline SVG
const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form Data:', formData);
    fetch('https://formspree.io/f/mbdbplll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's <span className="text-cyan">Talk</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            Have a project in mind? Want to discuss a potential collaboration? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-2">
                  Send Us a <span className="text-cyan">Message</span>
                </h3>
                <p className="text-white/50 mb-8">
                  Fill out the form and we'll get back to you within 2-4 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-cyan" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">🎉 Message Sent!</h4>
                    <p className="text-white/60 text-lg">
                      Thank you for reaching out. We'll respond within 2-4 hours.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm">
                      <MessageCircle className="w-4 h-4 text-cyan" />
                      <span>Need urgent help? WhatsApp us at +923016975723</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and requirements..."
                        className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-blue-400 text-navy font-bold rounded-xl text-lg hover:shadow-lg hover:shadow-cyan/25 transition-all duration-200"
                    >
                      Send Message 🚀
                      <Send size={20} />
                    </button>

                    <p className="text-white/30 text-xs text-center mt-2">
                      We respect your privacy. Your information is safe with us.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+923016975723"
                  className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-green-400 hover:bg-green-500/20 transition-all text-sm font-medium"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/923016975723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-green-400 hover:bg-green-500/20 transition-all text-sm font-medium"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="mailto:digitalservicesmarketplace@gmail.com"
                  className="flex items-center justify-center gap-2 bg-cyan/10 border border-cyan/20 rounded-xl p-3 text-cyan hover:bg-cyan/20 transition-all text-sm font-medium"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href="https://linkedin.com/company/digital-services-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-blue-400 hover:bg-blue-500/20 transition-all text-sm font-medium"
                >
                  <LinkedInIcon size={16} /> {/* ✅ Inline SVG */}
                  LinkedIn
                </a>
              </div>

              {/* Email */}
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 hover:border-cyan/20 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <Mail className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <a
                      href="mailto:digitalservicesmarketplace@gmail.com"
                      className="text-white/50 text-sm hover:text-cyan transition-colors break-all"
                    >
                      digitalservicesmarketplace@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 hover:border-cyan/20 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <Phone className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/923016975723"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 text-sm hover:text-cyan transition-colors"
                    >
                      +923016975723
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 hover:border-cyan/20 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <LinkedInIcon size={24} /> {/* ✅ Inline SVG */}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/company/digital-services-marketplace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 text-sm hover:text-cyan transition-colors break-all"
                    >
                      linkedin.com/company/digital-services-marketplace
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 hover:border-cyan/20 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <MapPin className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-white/50 text-sm">
                      Remote – Serving clients worldwide
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-white/30 text-xs">
                      <Globe size={12} />
                      <span>Available globally</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 hover:border-cyan/20 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <Clock className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-white/50 text-sm">
                      Monday – Friday: 9:00 AM – 6:00 PM (PKT)
                    </p>
                    <p className="text-white/30 text-xs mt-1">
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-gradient-to-r from-cyan/10 to-blue-500/10 border border-cyan/20 rounded-2xl p-6 text-center">
                <p className="text-cyan font-semibold text-lg mb-1">⚡ Fast Response</p>
                <p className="text-white/50 text-sm">
                  We typically respond within 2-4 hours during business days
                </p>
                <div className="flex items-center justify-center gap-2 mt-3 text-white/30 text-xs">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Online now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
