import { useState } from 'react';
import { useForm } from '@formspree/react';
import {
  Briefcase,
  FolderGit2,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Calendar,
  Award,
  Target,
  Rocket,
  Star,
  Clock,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
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

const successStories = [
  {
    name: 'Muhammad Ali',
    role: 'Now Full-Stack Developer at TechCorp',
    story: 'This internship gave me real-world experience. Within 2 months, I was working on live client projects using React and Node.js. I got hired immediately after completion!',
    image: '👨‍💻',
    rating: 5,
  },
  {
    name: 'Fatima Noor',
    role: 'Now SEO Specialist at GrowthAgency',
    story: 'I learned SEO from scratch and now I manage campaigns for major brands. The mentorship was incredible. Best decision I ever made for my career!',
    image: '👩‍💻',
    rating: 5,
  },
  {
    name: 'Usman Ahmed',
    role: 'Now Python Developer at DataLogic',
    story: 'The Python automation projects I worked on during this internship helped me land my dream job. The experience was priceless.',
    image: '👨‍💼',
    rating: 5,
  },
];

const timeline = [
  { week: 'Week 1', title: 'Onboarding & Setup', desc: 'Get to know the team, tools, and project goals', icon: Users },
  { week: 'Week 2-3', title: 'Training & Learning', desc: 'Hands-on training with your chosen tech stack', icon: BookOpen },
  { week: 'Week 4-6', title: 'Live Projects', desc: 'Work on real client projects with mentorship', icon: Target },
  { week: 'Week 7-8', title: 'Final Project', desc: 'Complete your final project and present it', icon: Rocket },
];

// ✅ SKILLS WITH CATEGORIES
const skillCategories = [
  {
    category: '🌐 Web Development',
    skills: [
      'HTML / CSS',
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js / Next.js',
      'Vue.js / Nuxt.js',
      'Angular',
      'Node.js / Express.js',
      'Python (Django / Flask)',
      'PHP / Laravel',
      'Ruby on Rails',
      'C# / .NET',
      'Java / Spring Boot',
    ],
  },
  {
    category: '🛒 E-Commerce & CMS',
    skills: [
      'WordPress',
      'Shopify',
      'Wix / Webflow',
      'Magento',
      'Drupal / Joomla',
    ],
  },
  {
    category: '📊 Database',
    skills: [
      'MySQL / PostgreSQL',
      'MongoDB / Firebase',
      'Oracle Database',
      'SQLite',
    ],
  },
  {
    category: '📈 SEO & Marketing',
    skills: [
      'SEO (On-page / Off-page)',
      'Google Analytics / GTM',
      'Content Writing / Copywriting',
      'Social Media Marketing',
      'Email Marketing',
      'Google Ads / PPC',
    ],
  },
  {
    category: '🤖 Automation & AI',
    skills: [
      'Python Automation',
      'Web Scraping (BeautifulSoup / Scrapy)',
      'AI / Machine Learning',
      'ChatGPT / Gemini API',
      'RPA (Robotic Process Automation)',
    ],
  },
  {
    category: '🎨 Design & UI/UX',
    skills: [
      'UI/UX Design (Figma / Adobe XD)',
      'Graphic Design (Photoshop / Illustrator)',
      'Video Editing / Motion Graphics',
      'Canva / Adobe Premiere',
    ],
  },
  {
    category: '☁️ DevOps & Cloud',
    skills: [
      'Docker / Kubernetes',
      'AWS / Azure / GCP',
      'CI/CD (Jenkins / GitHub Actions)',
      'Linux / Bash Scripting',
      'Vercel / Netlify',
    ],
  },
  {
    category: '📱 Mobile Development',
    skills: [
      'React Native',
      'Flutter',
      'Android (Kotlin / Java)',
      'iOS (Swift)',
    ],
  },
  {
    category: '🧠 Soft Skills',
    skills: [
      'Project Management',
      'Team Leadership',
      'Client Communication',
      'Freelancing / Remote Work',
    ],
  },
  {
    category: '🆕 Beginners',
    skills: [
      'None / Just Starting Out',
    ],
  },
];

const faqs = [
  {
    q: 'Is this internship paid?',
    a: 'This is a remote internship program focused on skill development and real-world experience. Top performers may receive stipends and job offers.',
  },
  {
    q: 'What is the duration?',
    a: 'The internship program runs for 8 weeks (2 months). Flexible timings available for students and working professionals.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'No! We welcome beginners who are passionate about learning. We have different tracks for different skill levels.',
  },
  {
    q: 'What is the selection process?',
    a: 'Apply with the form below. Selected candidates will be contacted for a short interview within 48 hours.',
  },
];

export default function Internship() {
  const [formState, handleSubmit] = useForm('mdajpkog');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    skills: '',
    why: '',
    experience: '',
    availability: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.submitting) return;
    handleSubmit(formData);
  };

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

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
            {[
              { number: '50+', label: 'Interns Trained' },
              { number: '90%', label: 'Job Placement Rate' },
              { number: '8', label: 'Weeks Duration' },
              { number: '4.9', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-navy-light/30 border border-white/5 rounded-xl p-4">
                <div className="text-2xl font-bold text-cyan">{stat.number}</div>
                <p className="text-white/40 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
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

      {/* Success Stories */}
      <section className="py-20 bg-navy-dark/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎓 Success <span className="text-cyan">Stories</span>
            </h2>
            <p className="text-white/50 text-lg">
              Hear from our interns who built successful careers
            </p>
            <div className="mt-4 h-1 w-20 bg-cyan rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <div
                key={story.name}
                className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 hover:border-cyan/20 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{story.image}</span>
                  <div>
                    <p className="font-semibold text-sm">{story.name}</p>
                    <p className="text-cyan text-xs">{story.role}</p>
                  </div>
                </div>
                <div className="flex text-cyan text-xs mb-2">{'★'.repeat(story.rating)}</div>
                <p className="text-white/50 text-sm italic leading-relaxed">
                  "{story.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📅 Internship <span className="text-cyan">Timeline</span>
            </h2>
            <p className="text-white/50 text-lg">What to expect during the 8-week program</p>
            <div className="mt-4 h-1 w-20 bg-cyan rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.week} className="relative">
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-cyan/20" />
                  )}
                  <div className="text-center bg-navy-light/30 border border-white/5 rounded-xl p-6 hover:border-cyan/20 transition-all">
                    <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-7 h-7 text-cyan" />
                    </div>
                    <div className="text-xs text-cyan font-bold mb-1">{item.week}</div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-20">
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

      {/* FAQ Section */}
      <section className="py-20 bg-navy-dark/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ❓ Frequently Asked <span className="text-cyan">Questions</span>
            </h2>
            <p className="text-white/50 text-lg">Everything you need to know</p>
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
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6 inline-flex">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm">We respond within 48 hours</span>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-center">
              Apply <span className="text-cyan">Now</span>
            </h3>
            <p className="text-white/50 text-center mb-8">
              Fill out the form below and start your journey today
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-cyan" />
                </div>
                <h4 className="text-2xl font-bold mb-3">🎉 Application Submitted!</h4>
                <p className="text-white/60 text-lg">
                  Your application has been received. Our team will contact you within 48 hours.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm">
                  <MessageCircle className="w-4 h-4 text-cyan" />
                  <span>Questions? WhatsApp us at +923016975723</span>
                </div>
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
                      placeholder="+92 300 1234567"
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

                      {/* ✅ CATEGORIES WITH SKILLS */}
                      {skillCategories.map((category) => (
                        <optgroup key={category.category} label={category.category}>
                          {category.skills.map((skill) => (
                            <option key={skill} value={skill}>
                              {skill}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Years of Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors appearance-none"
                  >
                    <option value="">Select your experience level</option>
                    <option value="0-1">0-1 year</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
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
                    placeholder="Tell us about your goals, what you hope to achieve, and why you're passionate about tech..."
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-blue-400 text-navy font-bold rounded-xl text-lg hover:shadow-lg hover:shadow-cyan/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState.submitting ? 'Submitting...' : 'Apply Now '}
                  {!formState.submitting && <ArrowRight size={20} />}
                </button>

                <p className="text-white/30 text-xs text-center mt-4">
                  By submitting, you agree to our privacy policy. Your information is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
