import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, AlignCenterVertical as Certificate, GraduationCap } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in AI & ML",
      institution: "Example University",
      year: "2020 - 2024",
      description: "Specialized in Artificial Intelligence and Machine Learning with a focus on deep learning and computer vision."
    }
  ];

  const certifications = [
    {
      name: "Google Data Analytics",
      issuer: "Google & Coursera",
      date: "2025",
      description: "Comprehensive certification in data analytics covering statistical analysis, data visualization, and machine learning concepts.",
      link: "https://coursera.org/share/417490d2876734dfc77ac33454ac704f"
    },
    {
      name: "Machine Learning with Python: A Practical Introduction",
      issuer: "edX",
      date: "2022",
      description: "In-depth course covering machine learning fundamentals and practical implementation using Python.",
      link: "https://courses.edx.org/certificates/0ca0940f53b943e88b2b5ad69dc1201c"
    }
  ];

  const achievements = [
    {
      title: "Research Paper Publication",
      event: "2024 International Conference on Smart Devices (ICSD)",
      description: "Published research paper titled 'Advancing Healthcare: CNN-Based Brain Hemorrhage Detection in Intelligent Environments'",
      link: "https://www.researchgate.net/publication/385934322_Advancing_Healthcare_CNN-Based_Brain_Hemorrhage_Detection_in_Intelligent_Environments"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <p className="text-lg text-foreground/80 mb-12">
            I'm a final year B.E. student passionate about pushing the boundaries of AI & ML technology.
            My journey in tech has been driven by curiosity and a desire to create intelligent systems
            that can make a real difference in the world.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                  <p className="text-foreground/80 mb-2">{item.institution}</p>
                  <p className="text-sm text-foreground/60 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.year}
                  </p>
                  <p className="mt-2 text-foreground/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Certificate className="mr-2 h-6 w-6 text-primary" />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-foreground/80 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-foreground/60 mb-2">{cert.date}</p>
                  <p className="text-foreground/80 mb-4">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    View Certificate →
                  </a>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-primary" />
              Achievements
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-foreground/80 mb-2">{achievement.event}</p>
                  <p className="text-foreground/80 mb-4">{achievement.description}</p>
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Read Paper →
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;