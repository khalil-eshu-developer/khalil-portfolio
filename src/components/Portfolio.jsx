import { motion } from 'framer-motion'

// ✅ Digital Marketing Projects (pehle show honge)
const marketingProjects = [
  {
    title: 'Mobile Shop – Awareness Campaign',
    desc: 'Meta Ads awareness campaign for a local mobile shop in Islamabad. Increased local visibility & walk-in customers.',
    tech: ['Meta Ads', 'Canva', 'Targeting'],
    image: '/projects/mobile-shop.png',
  },
  {
    title: 'Real Estate – Sales Campaign',
    desc: 'Meta Ads awareness + sales campaign for real estate business. Generated quality property leads.',
    tech: ['Meta Ads', 'Lead Forms', 'A/B Testing'],
    image: '/projects/realestate.png',
  },
  {
    title: 'UAE – Loading & Unloading Campaign',
    desc: 'UAE-targeted Meta Ads campaign for loading & unloading service. Increased brand awareness & leads.',
    tech: ['Meta Ads', 'UAE Targeting', 'A/B Testing'],
    image: '/projects/uae.png',
  },
]

// ✅ Web Development Projects (baad me show honge)
const webProjects = [
  // 🆕 NAYA PROJECT — SABSE PEHLE
  {
    title: 'Business Website (MERN Stack)',
    desc: 'Full-stack business website with contact form, MongoDB database & admin panel. Built with MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://business-website.vercel.app/',
    image: '/projects/business-website.png',
  },
  // ⬇️ Purane projects
  {
    title: 'MERN Portfolio Website',
    desc: 'My personal portfolio built with MERN Stack — fully responsive, modern UI, and deployed on Vercel.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: 'https://mern-portfolio-five.vercel.app/',
    image: '/projects/portfolio.png',
  },
  {
    title: 'MERN Weather App',
    desc: 'Real-time weather application using OpenWeather API, built with React & Node.js backend.',
    tech: ['React', 'Node.js', 'API', 'CSS3'],
    link: 'https://mern-weather-app-psi.vercel.app/',
    image: '/projects/weather.png',
  },
  {
    title: 'MERN Task Manager',
    desc: 'Full-stack task management app with authentication, CRUD operations, and MongoDB database.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://mern-task-manager-gilt.vercel.app/',
    image: '/projects/taskmanager.png',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="gradient-text">Portfolio</span>
        </motion.h2>

        {/* 🎯 SECTION 1: DIGITAL MARKETING */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8 text-secondary flex items-center gap-3"
        >
          📊 Digital Marketing Projects
          <span className="flex-1 h-px bg-secondary/30"></span>
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {marketingProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden border border-secondary/20 card-hover group"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
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

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs glass px-2 py-1 rounded border border-secondary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {/* Marketing projects me koi View Project link nahi */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎯 SECTION 2: WEB DEVELOPMENT */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8 text-secondary flex items-center gap-3"
        >
          💻 Web Development Projects
          <span className="flex-1 h-px bg-secondary/30"></span>
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          {webProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden border border-secondary/20 card-hover group"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
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

                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="text-secondary hover:underline text-sm font-semibold inline-block"
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio