import { motion } from 'framer-motion'
import { 
  FaFacebookF, FaGoogle, FaSearch, FaBullhorn, 
  FaMapMarkerAlt, FaFlask, FaBriefcase, FaCode,
  FaHtml5, FaReact, FaWordpress, FaPalette
} from 'react-icons/fa'

const services = [
  { icon: <FaFacebookF />, title: 'Meta Ads', desc: 'Facebook & Instagram ads for awareness, leads & sales.' },
  { icon: <FaGoogle />, title: 'Google Ads', desc: 'Search, Display, YouTube & Shopping PPC campaigns.' },
  { icon: <FaSearch />, title: 'SEO', desc: 'On-page, Off-page & Technical SEO for Google ranking.' },
  { icon: <FaBullhorn />, title: 'Social Media Marketing', desc: 'Content strategy, ads & organic growth.' },
  { icon: <FaMapMarkerAlt />, title: 'Google My Business', desc: 'Local SEO & business visibility optimization.' },
  { icon: <FaFlask />, title: 'A/B Testing', desc: 'Ads, landing pages & funnels optimization.' },
  { icon: <FaBriefcase />, title: 'B2B Marketing', desc: 'Lead generation, outreach & LinkedIn marketing.' },
  { icon: <FaPalette />, title: 'Graphic Design', desc: 'Logos, banners, thumbnails, ad creatives & posters using Canva Pro.' },
  { icon: <FaCode />, title: 'MERN Stack Development', desc: 'MongoDB, Express, React & Node.js full-stack apps.' },
  { icon: <FaHtml5 />, title: 'HTML5 & CSS3', desc: 'Semantic, responsive & modern web design.' },
  { icon: <FaReact />, title: 'React.js Development', desc: 'Fast, interactive & SEO-friendly frontends.' },
  { icon: <FaWordpress />, title: 'WordPress Development', desc: 'Business websites, blogs & e-commerce.' },
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="gradient-text">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 rounded-xl border border-secondary/20 card-hover group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="text-3xl text-secondary mb-4 group-hover:text-accent transition"
              >
                {s.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services