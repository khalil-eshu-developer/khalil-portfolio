import { motion } from 'framer-motion'
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa'

const certificates = [
  {
    title: 'Digital Marketing Certification',
    institute: 'SINA Institute, Islamabad',
    year: '2025',
    skills: [
      'Meta Ads',
      'Google Ads',
      'SEO',
      'GMB',
      'Social Media Marketing',
      'A/B Testing',
      'B2B Marketing',
    ],
    link: 'https://sina.edu.pk/',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'MERN Stack Development',
    institute: 'SINA Institute, Islamabad',
    year: '2025',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
    ],
    link: 'https://sina.edu.pk/',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Graphic Design',
    institute: 'SINA Institute, Islamabad',
    year: '2025',
    skills: [
      'Logo Design',
      'Banner Design',
      'Thumbnail Design',
      'Ad Creatives',
      'Poster Design',
      'Canva Pro',
    ],
    link: 'https://sina.edu.pk/',
    color: 'from-orange-500 to-red-500',
  },
]

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          My <span className="gradient-text">Certifications</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Verified certifications from SINA Institute, Islamabad
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl border border-secondary/20 card-hover overflow-hidden"
            >
              <div className={`h-24 bg-gradient-to-br ${cert.color} flex items-center justify-center relative`}>
                <FaAward className="text-5xl text-white/90" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-secondary mb-1">{cert.institute}</p>
                <p className="text-xs text-gray-500 mb-4">{cert.year}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs glass px-2 py-1 rounded border border-secondary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.link !== '#' && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-secondary hover:underline text-sm font-semibold inline-flex items-center gap-2"
                  >
                    Verify <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates