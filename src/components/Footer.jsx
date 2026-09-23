import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-secondary/20 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Khalil Ullah. All rights reserved.
        </p>

        <div className="flex gap-5 text-xl text-gray-400">
          <a href="https://github.com/" target="_blank" className="hover:text-secondary transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/khalil-khan-digital-marketer/" target="_blank" className="hover:text-secondary transition"><FaLinkedin /></a>
          <a href="mailto:eshu76116@gmail.com" className="hover:text-secondary transition"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer