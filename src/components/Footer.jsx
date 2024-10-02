import { motion } from 'framer-motion'

import '../styles/Footer.css'

function Footer() {
  return(
    <motion.footer id='footer'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.9, ease:'easeInOut' }}
    >
      <hr></hr>
      <p>FJ Tria – 2024</p>
    </motion.footer>
  );
}

export default Footer;