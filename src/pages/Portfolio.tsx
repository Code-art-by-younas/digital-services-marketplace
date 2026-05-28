import { ExternalLink, Globe, Code2, TrendingUp } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const projects = [
  {
    title: 'Thrones Tech',
    subtitle: 'SEO Services Platform',
    desc: 'A comprehensive SEO services platform offering on-page optimization, keyword research, link building, and technical audits. Built with modern web technologies for a fast, responsive user experience.',
    tags: ['SEO', 'Web Development', 'WordPress'],
    icon: Globe,
    gradient: 'from-blue-600 to-cyan-400',
    bgGradient: 'from-blue-500/10 to-cyan/5',
    link: 'https://fa-thrones-tech.vercel.app/',
    image: '/portfolio/thrones-tech.jpg',
  },
  {
    title: 'Qatar Charity Platform',
    subtitle: 'Blockchain & Sandi Integration',
    desc: 'A secure, transparent charity donation platform leveraging blockchain technology and Sandi integration. Features real-time tracking of donations and automated reporting for full transparency.',
    tags: ['Blockchain', 'React', 'Node.js', 'API'],
    icon: Code2,
    gradient: 'from-purple-600 to-pink-400',
    bgGradient: 'from-purple-500/10 to-pink-500/5',
    link: 'https://fa-charity-website.vercel.app/',
    image: '/portfolio/qatar-charity.jpg',
  },
  {
    title: 'RankRanger',
    subtitle: 'SEO Audit Tool',
    desc: 'An instant, no-signup SEO audit tool that analyzes 120+ technical, content, and UX signals. Provides an actionable plan with prioritized fixes and impact estimates to boost search visibility.',
    tags: ['SEO Tool', 'SaaS', 'Analytics'],
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-400',
    bgGradient: 'from-emerald-500/10 to-teal-500/5',
    link: 'https://rankranger-audit-tool.vercel.app/',
    image: '/portfolio/rankranger.jpg',
  },
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Recent Work"
            subtitle="Take a look at some of the projects we've delivered, from custom development platforms to innovative SEO tools. Each one crafted with care, precision, and a focus on results."
          />
        </div>
      </section>

      {/* Projects */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-navy-light/30 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan/20 transition-all duration-300 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section - Now with real image */}
                <div className={`relative h-64 lg:h-full min-h-[300px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient for text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium mb-4`}>
                    {project.subtitle}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-white/50 leading-relaxed mb-6">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy font-semibold rounded-xl hover:bg-cyan-light transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-navy-light/30 border border-white/5 rounded-2xl p-12">
            <div className="w-16 h-16 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-6">
              <Code2 className="w-8 h-8 text-cyan" />
            </div>
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-white/50 max-w-md mx-auto">
              We're constantly working on new exciting projects. Check back soon to see our latest work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}