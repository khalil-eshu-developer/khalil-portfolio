import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-12">
          Contact <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <motion.a whileHover={{ scale: 1.02 }} href="tel:03112422822" className="flex items-center gap-4 glass p-5 rounded-xl border border-secondary/20 hover:border-secondary transition">
              <FaPhone className="text-2xl text-secondary" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-semibold">0311-2422822</p>
              </div>
            </motion.a>

            <motion.a whileHover={{ scale: 1.02 }} href="mailto:eshu76116@gmail.com" className="flex items-center gap-4 glass p-5 rounded-xl border border-secondary/20 hover:border-secondary transition">
              <FaEnvelope className="text-2xl text-secondary" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">eshu76116@gmail.com</p>
              </div>
            </motion.a>

            <div className="flex items-center gap-4 glass p-5 rounded-xl border border-secondary/20">
              <FaMapMarkerAlt className="text-2xl text-secondary" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold">Islamabad, Pakistan</p>
              </div>
            </div>

            <motion.a whileHover={{ scale: 1.02 }} href="https://www.linkedin.com/in/khalil-khan-digital-marketer/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-5 rounded-xl border border-secondary/20 hover:border-secondary transition">
              <FaLinkedin className="text-2xl text-secondary" />
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="font-semibold">khalil-khan-digital-marketer</p>
              </div>
            </motion.a>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full glass border border-secondary/20 rounded-lg px-4 py-3 focus:border-secondary outline-none" />
            <input type="email" placeholder="Your Email" className="w-full glass border border-secondary/20 rounded-lg px-4 py-3 focus:border-secondary outline-none" />
            <input type="text" placeholder="Subject" className="w-full glass border border-secondary/20 rounded-lg px-4 py-3 focus:border-secondary outline-none" />
            <textarea rows="5" placeholder="Your Message" className="w-full glass border border-secondary/20 rounded-lg px-4 py-3 focus:border-secondary outline-none"></textarea>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-secondary hover:bg-blue-600 py-3 rounded-lg font-semibold transition glow-btn">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact