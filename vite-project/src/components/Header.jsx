import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = !!localStorage.getItem('token');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Ask Question', path: '/ask' },
    { name: 'Explore Topics', path: '/explore' },
    { name: 'History', path: '/history' },
    ...(isAuthenticated
      ? [{ name: 'Logout', path: '/logout', action: () => {
          localStorage.removeItem('token');
          navigate('/login');
        }}]
      : [
          { name: 'Login', path: '/login' },
          { name: 'Signup', path: '/signup' },
        ]),
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
        >
          EduAI
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.path}
              onClick={(e) => {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                }
              }}
              className="text-lg hover:text-blue-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-700"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  if (item.action) {
                    e.preventDefault();
                    item.action();
                  }
                  setIsOpen(false);
                }}
                className="text-lg hover:text-blue-200 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}

export default Header;