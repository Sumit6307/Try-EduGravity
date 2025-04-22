import { motion } from 'framer-motion';

function Footer() {
  const footerLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
    { name: 'Facebook', href: 'https://facebook.com', icon: '📘' },
    { name: 'YouTube', href: 'https://youtube.com', icon: '▶️' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">EduAI</h3>
            <p className="text-gray-200">
              Empowering students with AI-powered learning for CBSE, ICSE, and State Boards.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  variants={itemVariants}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center text-gray-200"
          variants={itemVariants}
        >
          &copy; {new Date().getFullYear()} EduAI. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;