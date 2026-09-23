import { motion } from 'framer-motion'

const blogs = [
  { title: 'Meta Ads vs Google Ads: Kaunsa Better Hai?', date: 'Coming Soon' },
  { title: 'Real Estate Business ke liye Facebook Ads Kaise Chalayein', date: 'Coming Soon' },
  { title: 'MERN Stack Kya Hai? Full Stack Developer Kaise Banein', date: 'Coming Soon' },
  { title: 'HTML5 aur CSS3: Modern Web Development ki Buniyad', date: 'Coming Soon' },
  { title: 'SEO + Web Development: Complete Digital Package', date: 'Coming Soon' },
  { title: 'UAE me Digital Marketing: Opportunities aur Tips', date: 'Coming Soon' },
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-12">
          Latest <span className="gradient-text">Blogs</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10, scale: 1.02 }} className="glass p-6 rounded-xl border border-secondary/20 card-hover">
              <p className="text-xs text-secondary mb-2">{b.date}</p>
              <h3 className="text-lg font-semibold mb-3 hover:text-secondary transition">{b.title}</h3>
              <a href="#" className="text-secondary text-sm hover:underline">Read More →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog