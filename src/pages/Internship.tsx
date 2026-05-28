import { useState } from 'react';
import { useForm } from '@formspree/react'; // ✅ Formspree hook import
import { Briefcase, FolderGit2, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const benefits = [
  {
    icon: Briefcase,
    title: 'Real Projects',
    desc: 'Work on actual client projects, not just tutorials. Build real solutions that businesses use every day.',
    color: 'from-blue-500/20 to-cyan/10',
  },
  {
    icon: FolderGit2,
    title: 'GitHub Portfolio',
    desc: 'Build an impressive GitHub portfolio with production-quality code. Showcase your skills to future employers.',
    color: 'from-green-500/20 to-cyan/10',
  },
  {
    icon: TrendingUp,
    title: 'LinkedIn Growth',
    desc: 'Grow your professional network and build your personal brand. Get endorsed and recommended by industry pros.',
    color: 'from-purple-500/20 to-cyan/10',
  },
];

const skillOptions = [
  'HTML/CSS',
  'JavaScript',
  'TypeScript',
  'Python',
  'React / Next.js',
  'Node.js',
  'PHP / Laravel',
  'WordPress',
  'Shopify',
  'SEO Basics',
  'Graphic Design',
  'None / Beginner'
];

export default function Internship() {
  // ✅ Formspree hook - aapka endpoint ID
  const [formState, handleSubmit] = useForm('mdajpkog');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    skills: '',
    why: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Local submit handler (formspree ke saath kaam karega)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.submitting) return;

    // ✅ Form data Formspree ko bhejna
    handleSubmit(formData);
  };

  // ✅ Submission complete hone par success message dikhana
  if (formState.succeeded && !submitted) {
    setSubmitted(true);
  }

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Start Your Tech Career With Us"
            subtitle="Join our internship program and gain hands-on experience working on real-world projects with industry professionals."
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${b.color} border border-white/5 hover:border-cyan/20 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <b.icon className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-light/30 border border-white/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              What You'll <span className="text-cyan">Gain</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Hands-on coding experience',
                'Code review & mentorship',
                'Version control with Git',
                'Team collaboration skills',
                'Project management basics',
                'Industry best practices',
                'Certificate of completion',
                'Job referral opportunities',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Application Form - Updated */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-2 text-center">
              Apply <span className="text-cyan">Now</span>
            </h3>
            <p className="text-white/50 text-center mb-8">
              Fill out the form below and we'll get back to you within 48 hours
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-cyan" />
                </div>
                <h4 className="text-2xl font-bold mb-3">Thank You!</h4>
                <p className="text-white/60 text-lg">
                  Your application has been received. Our team will contact you within 48 hours.
                </p>
              </div>
            ) : (
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      placeholder=""
                      className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Email *
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Current Skills *
                    </label>
                    <select
                      name="skills"
                      required
                      value={formData.skills}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors appearance-none"
                    >
                      <option value="" disabled>Select your skill level</option>
                      {skillOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Why do you want to join? *
                  </label>
                  <textarea
                    name="why"
                    required
                    rows={4}
                    value={formData.why}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and what you hope to achieve..."
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-navy font-semibold rounded-xl text-lg hover:bg-cyan-light transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState.submitting ? 'Submitting...' : 'Apply Now'}
                  {!formState.submitting && <ArrowRight size={20} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}