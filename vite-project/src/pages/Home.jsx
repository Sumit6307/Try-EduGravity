import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Home() {
  const navigate = useNavigate();

  // Animation controls for scroll-triggered effects
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center px-4"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to EduAI
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your personalized AI tutor for CBSE, ICSE, and State Board students
          </motion.p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/dashboard')}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
              Start Learning
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold"
            >
              Sign Up
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            ref={ref}
          >
            Why Choose EduAI?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {[
              {
                title: 'Personalized Learning',
                desc: 'Tailored explanations for CBSE, ICSE, and State Board syllabi.',
                icon: '📚',
              },
              {
                title: 'AI-Powered Answers',
                desc: 'Get instant, detailed responses with diagrams from our AI tutor.',
                icon: '🤖',
              },
              {
                title: 'Track Progress',
                desc: 'Review your learning history and improve over time.',
                icon: '📈',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 rounded-lg text-center hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            Educational Resources
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {[
              {
                title: 'CBSE Study Guides',
                desc: 'Download free NCERT-based study materials.',
                link: 'https://ncert.nic.in/',
                img: 'https://via.placeholder.com/300x200?text=CBSE',
              },
              {
                title: 'ICSE Sample Papers',
                desc: 'Practice with official ICSE question papers.',
                link: 'https://cisce.org/',
                img: 'https://via.placeholder.com/300x200?text=ICSE',
              },
              {
                title: 'Video Tutorials',
                desc: 'Watch engaging lessons on YouTube.',
                link: 'https://www.youtube.com/',
                img: 'https://via.placeholder.com/300x200?text=Videos',
              },
              {
                title: 'State Board Notes',
                desc: 'Access notes for various state syllabi.',
                link: 'https://www.google.com/',
                img: 'https://via.placeholder.com/300x200?text=State+Board',
              },
            ].map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img src={resource.img} alt={resource.title} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{resource.title}</h3>
                  <p className="text-gray-600">{resource.desc}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            What Our Students Say
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {[
              {
                name: 'Aarav Sharma',
                quote: 'EduAI helped me ace my CBSE exams with clear explanations!',
                img: 'https://via.placeholder.com/100?text=Aarav',
              },
              {
                name: 'Priya Patel',
                quote: 'The AI tutor is like having a teacher available 24/7.',
                img: 'https://via.placeholder.com/100?text=Priya',
              },
              {
                name: 'Vikram Singh',
                quote: 'The diagrams make complex topics so easy to understand.',
                img: 'https://via.placeholder.com/100?text=Vikram',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 rounded-lg text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic mb-2">"{testimonial.quote}"</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            Ready to Transform Your Learning?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            Join thousands of students excelling with EduAI’s AI-powered tutoring.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/signup')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg"
            variants={itemVariants}
          >
            Get Started Now
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default Home;