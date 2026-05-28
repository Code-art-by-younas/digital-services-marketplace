import { useState } from 'react';
import { useForm } from '@formspree/react'; // ✅ Formspree hook import
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react';
import { LinkedinIcon } from '../components/SocialIcons';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  // ✅ Formspree hook - aapka endpoint ID
  const [formState, handleSubmit] = useForm('mbdbplll');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Local submit handler
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.submitting) return;
    handleSubmit(formData);
  };

  // ✅ Submission complete hone par success message dikhana
  if (formState.succeeded && !submitted) {
    setSubmitted(true);
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Let's Talk"
            subtitle="Have a project in mind? Want to discuss a potential collaboration? We'd love to hear from you."
          />
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
                  Fill out the form and we'll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-cyan" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Message Sent!</h4>
                    <p className="text-white/60 text-lg">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=""
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
                        placeholder=""
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
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState.submitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-xl text-lg hover:bg-cyan-light transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState.submitting ? 'Sending...' : 'Send Message'}
                      {!formState.submitting && <Send size={20} />}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
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
                    <div className="text-cyan">
                      <LinkedinIcon size={24} />
                    </div>
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

              {/* Location / Map Placeholder */}
              <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 hover:border-cyan/20 transition-colors group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <MapPin className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-white/50 text-sm">
                      Remote – Serving clients worldwide
                    </p>
                  </div>
                </div>
                {/* Map placeholder */}
                <div className="h-40 rounded-xl bg-navy border border-white/5 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-6 h-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-white/10" />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-8 h-8 text-cyan mx-auto mb-2" />
                    <p className="text-white/30 text-xs">Interactive map coming soon</p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-gradient-to-r from-cyan/10 to-blue-500/10 border border-cyan/20 rounded-2xl p-6 text-center">
                <p className="text-cyan font-semibold text-lg mb-1">⚡ Fast Response</p>
                <p className="text-white/50 text-sm">
                  We typically respond within 2-4 hours during business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}