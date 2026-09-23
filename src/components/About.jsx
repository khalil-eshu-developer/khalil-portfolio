import { motion } from 'framer-motion'

const stats = [
  { number: '1+', label: 'Years Experience' },
  { number: '6+', label: 'Projects Done' },
  { number: '11+', label: 'Services' },
  { number: '100%', label: 'Client Satisfaction' },
]

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Mera naam <span className="text-secondary font-semibold">Khalil Ullah</span> hai aur main Islamabad se hoon. Maine ICS ki hai aur SINA Institute Islamabad se Digital Marketing ki certification 2025 me li hai.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Pichle 1+ saal se main digital marketing field me kaam kar raha hoon — Meta Ads, Google Ads, SEO, A/B Testing, B2B Marketing, GMB aur Social Media Ads me hands-on experience hai.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Iske saath saath main <span className="text-secondary font-semibold">MERN Stack Full Stack Developer</span> bhi hoon, jis se main clients ko complete digital solution de sakta hoon — marketing + website dono.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} whileHover={{ scale: 1.05, y: -5 }} className="glass p-6 rounded-xl border border-secondary/20 card-hover text-center">
                <h3 className="text-3xl font-bold gradient-text">{s.number}</h3>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About