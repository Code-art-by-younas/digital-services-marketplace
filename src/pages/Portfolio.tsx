import { useState } from 'react';
import {
  ExternalLink,
  Globe,
  Code2,
  TrendingUp,
  Search,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const projects = [
  {
    id: 1,
    title: 'Thrones Tech',
    subtitle: 'SEO Services Platform',
    desc: 'A comprehensive SEO services platform offering on-page optimization, keyword research, link building, and technical audits. Built with modern web technologies for a fast, responsive user experience.',
    tags: ['SEO', 'Web Development', 'WordPress'],
    category: 'Web Development',
    gradient: 'from-blue-600 to-cyan-400',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    stats: { client: 'TechStart', timeline: '2 weeks', tech: 'React, WordPress' },
    link: 'https://fa-thrones-tech.vercel.app/',
  },
  {
    id: 2,
    title: 'Qatar Charity Platform',
    subtitle: 'Blockchain & Sandi Integration',
    desc: 'A secure, transparent charity donation platform leveraging blockchain technology and Sandi integration. Features real-time tracking of donations and automated reporting for full transparency.',
    tags: ['Blockchain', 'React', 'Node.js', 'API'],
    category: 'Blockchain',
    gradient: 'from-purple-600 to-pink-400',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=500&fit=crop',
    stats: { client: 'Charity Hub', timeline: '3 weeks', tech: 'React, Node.js, Blockchain' },
    link: 'https://fa-charity-website.vercel.app/',
  },
  {
    id: 3,
    title: 'RankRanger',
    subtitle: 'SEO Audit Tool',
    desc: 'An instant, no-signup SEO audit tool that analyzes 120+ technical, content, and UX signals. Provides an actionable plan with prioritized fixes and impact estimates to boost search visibility.',
    tags: ['SEO Tool', 'SaaS', 'Analytics'],
    category: 'SEO',
    gradient: 'from-emerald-500 to-teal-400',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    stats: { client: 'RankRanger', timeline: '4 weeks', tech: 'React, Python, API' },
    link: 'https://rankranger-audit-tool.vercel.app/',
  },
  // 🆕 Last 3 Projects (No Button)
  {
    id: 4,
    title: 'EcoTrack Dashboard',
    subtitle: 'Sustainability Analytics Platform',
    desc: 'A real-time sustainability tracking dashboard for businesses to monitor carbon footprint, energy usage, and environmental impact. Features interactive charts and AI-powered recommendations.',
    tags: ['Analytics', 'AI', 'Python', 'Dashboard'],
    category: 'Analytics',
    gradient: 'from-green-500 to-emerald-400',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    stats: { client: 'GreenTech', timeline: '3 weeks', tech: 'React, Python, AI' },
    link: '#',
  },
  {
    id: 5,
    title: 'AI Chat Assistant',
    subtitle: 'Gemini API Powered Chatbot',
    desc: 'An intelligent AI-powered chatbot built with Gemini API. Handles customer queries, automates responses, and provides 24/7 support with natural language understanding.',
    tags: ['AI', 'Gemini API', 'Chatbot', 'Automation'],
    category: 'AI',
    gradient: 'from-orange-500 to-yellow-400',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    stats: { client: 'TechCorp', timeline: '2 weeks', tech: 'React, Gemini API' },
    link: '#',
  },
  {
    id: 6,
    title: 'LeadGen Pro',
    subtitle: 'Lead Generation Automation System',
    desc: 'An automated lead generation system that extracts business contacts from Google Places, websites, and directories. Features lead scoring, email extraction, and automated outreach.',
    tags: ['Automation', 'Python', 'Lead Generation', 'API'],
    category: 'Automation',
    gradient: 'from-red-500 to-rose-400',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    stats: { client: 'GrowthAgency', timeline: '3 weeks', tech: 'Python, Flask, API' },
    link: '#',
  },
];

const categories = ['All', 'Web Development', 'Blockchain', 'SEO', 'Analytics', 'AI', 'Automation'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

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

      {/* Filter + Search */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan text-navy'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-navy-light/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-white/50 text-lg">No projects found</p>
              </div>
            ) : (
              filteredProjects.map((project, i) => (
                <div
                  key={project.id}
                  className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-navy-light/30 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan/20 transition-all duration-300 hover:-translate-y-1 ${
                    i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative h-64 lg:h-full min-h-[300px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium mb-3`}>
                      {project.category}
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-medium mb-4">
                      {project.subtitle}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-white/50 leading-relaxed mb-6">{project.desc}</p>

                    <div className="grid grid-cols-3 gap-3 mb-6 bg-navy/30 rounded-xl p-4 border border-white/5">
                      <div>
                        <p className="text-white/30 text-xs uppercase">Client</p>
                        <p className="text-white text-sm font-medium">{project.stats.client}</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-xs uppercase">Timeline</p>
                        <p className="text-white text-sm font-medium">{project.stats.timeline}</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-xs uppercase">Tech</p>
                        <p className="text-white text-sm font-medium truncate">{project.stats.tech}</p>
                      </div>
                    </div>

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

                    {/* ✅ Button ONLY for first 3 projects (id: 1, 2, 3) */}
                    {project.id <= 3 && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy font-semibold rounded-xl hover:bg-cyan-light transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
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
