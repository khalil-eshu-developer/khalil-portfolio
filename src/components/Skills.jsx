import { motion } from 'framer-motion'

const marketingTools = [
  'Meta Ads Manager', 'Google Ads', 'Google Analytics 4', 'Google Search Console',
  'Google Tag Manager', 'SEMrush', 'Ahrefs', 'Google My Business',
  'Canva Pro', 'Mailchimp', 'HubSpot', 'ChatGPT / AI Tools'
]

const devTools = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js',
  'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Bootstrap',
  'Git & GitHub', 'VS Code', 'Postman', 'Figma', 'Vercel / Netlify'
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-12">
          Skills & <span className="gradient-text">Tools</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-semibold mb-6 text-secondary">📊 Digital Marketing</h3>
            <div className="flex flex-wrap gap-3">
              {marketingTools.map((t, i) => (
                <motion.span key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.1, y: -3 }} className="glass border border-secondary/20 px-4 py-2 rounded-full text-sm hover:border-secondary hover:text-secondary transition cursor-pointer">
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-semibold mb-6 text-secondary">💻 Web Development</h3>
            <div className="flex flex-wrap gap-3">
              {devTools.map((t, i) => (
                <motion.span key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.1, y: -3 }} className="glass border border-secondary/20 px-4 py-2 rounded-full text-sm hover:border-secondary hover:text-secondary transition cursor-pointer">
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills