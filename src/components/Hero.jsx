import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-lg mb-2 flex items-center gap-2"
          >
            <span className="w-8 h-0.5 bg-secondary"></span>
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4 shine"
          >
            Khalil Ullah
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
          >
            Digital Marketing Specialist & <br />
            <span className="gradient-text">MERN Stack Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mb-8 max-w-lg"
          >
            Building brands & websites that grow — with data-driven marketing 
            and modern web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mb-8 flex-wrap"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 px-6 py-3 rounded-lg font-semibold transition glow-btn"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
            >
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-5 text-2xl text-gray-400"
          >
            {[
              { icon: <FaGithub />, href: 'https://github.com/khalil-eshu-developer' },
              { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/khalil-khan-digital-marketer/' },
              { icon: <FaEnvelope />, href: 'mailto:eshu76116@gmail.com' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, color: '#3B82F6', rotate: 5 }}
                className="transition"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border-2 border-dashed border-secondary/30"
          />
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-accent/20"
          />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-secondary overflow-hidden shadow-2xl shadow-secondary/40 pulse-ring relative z-10"
          >
            <img 
              src="/profile.jpg" 
              alt="Khalil Ullah" 
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-8xl font-bold text-white">KU</div>'
              }}
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute top-10 -left-4 md:left-0 glass px-4 py-2 rounded-full text-sm border border-secondary/30 z-20"
          >
            🚀 Meta Ads
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 -right-4 md:right-0 glass px-4 py-2 rounded-full text-sm border border-secondary/30 z-20"
          >
            💻 MERN Stack
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary text-2xl"
      >
        ↓
      </motion.a>
    </section>
  )
}

export default Hero