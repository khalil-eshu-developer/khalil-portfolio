import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ✅ Digital Marketing Projects
const marketingProjects = [
  {
    title: 'Mobile Shop – Awareness Campaign',
    desc: 'Meta Ads awareness campaign for a local mobile shop in Islamabad. Increased local visibility & walk-in customers.',
    tech: ['Meta Ads', 'Canva', 'Targeting'],
    category: 'marketing',
    image: '/projects/mobile-shop.png',
  },
  {
    title: 'Real Estate – Sales Campaign',
    desc: 'Meta Ads awareness + sales campaign for real estate business. Generated quality property leads.',
    tech: ['Meta Ads', 'Lead Forms', 'A/B Testing'],
    category: 'marketing',
    image: '/projects/realestate.png',
  },
  {
    title: 'UAE – Loading & Unloading Campaign',
    desc: 'UAE-targeted Meta Ads campaign for loading & unloading service. Increased brand awareness & leads.',
    tech: ['Meta Ads', 'UAE Targeting', 'A/B Testing'],
    category: 'marketing',
    image: '/projects/uae.png',
  },
]

// ✅ Web Development Projects
const webProjects = [
  {
    title: 'Business Website (MERN Stack)',
    desc: 'Full-stack business website with contact form, MongoDB database & admin panel. Built with MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://business-website-sigma-plum.vercel.app/',
    category: 'web',
    image: '/projects/business-website.png',
  },
  {
    title: 'MERN Portfolio Website',
    desc: 'My personal portfolio built with MERN Stack — fully responsive, modern UI, and deployed on Vercel.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: 'https://mern-portfolio-five.vercel.app/',
    category: 'web',
    image: '/projects/portfolio.png',
  },
  {
    title: 'MERN Weather App',
    desc: 'Real-time weather application using OpenWeather API, built with React & Node.js backend.',
    tech: ['React', 'Node.js', 'API', 'CSS3'],
    link: 'https://mern-weather-app-psi.vercel.app/',
    category: 'web',
    image: '/projects/weather.png',
  },
  {
    title: 'MERN Task Manager',
    desc: 'Full-stack task management app with authentication, CRUD operations, and MongoDB database.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://mern-task-manager-gilt.vercel.app/',
    category: 'web',
    image: '/projects/taskmanager.png',
  },
]

const allProjects = [...marketingProjects, ...webProjects]

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: '📊 Digital Marketing', value: 'marketing' },
  { label: '💻 Web Development', value: 'web' },
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          My <span className="gradient-text">Portfolio</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-8"
        >
          A selection of my recent work
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'glass border border-secondary/30 text-gray-300 hover:border-secondary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden border border-secondary/20 card-hover group"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 relative z-10"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-2xl font-bold text-white/70 text-center px-4">' +
                        p.title +
                        '</div>'
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-xs glass px-2 py-1 rounded border border-secondary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.link && (
                    <motion.a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="text-secondary hover:underline text-sm font-semibold inline-block"
                    >
                      View Project →
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio