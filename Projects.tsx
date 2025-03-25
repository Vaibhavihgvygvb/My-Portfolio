import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, FileText, MessageSquare, Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      title: "Food Delivery Time Prediction",
      category: "machine-learning",
      description: "This project predicts the estimated delivery time for food orders based on various factors such as the delivery partner's age, ratings, and total distance. The model is built using LSTM (Long Short-Term Memory) neural networks.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Python", "TensorFlow", "LSTM", "Pandas"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: Clock
    },
    {
      title: "Document Analysis using LLMs",
      category: "nlp",
      description: "This project leverages LLMs to extract, summarize, and analyze textual data from various documents. It supports multiple formats (PDF, DOCX, TXT) and provides insights using Natural Language Processing (NLP).",
      image: "https://images.unsplash.com/photo-1456953180671-730de08edaa7?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Python", "LangChain", "Transformers", "OCR"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: FileText
    },
    {
      title: "Intelligent Conversational Chatbot",
      category: "nlp",
      description: "This project aims to develop a fully functional, end-to-end chatbot using Natural Language Processing (NLP) and Machine Learning (ML). The chatbot will be capable of understanding user inputs, processing natural language queries, and generating meaningful responses.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Python", "NLP", "TensorFlow", "Flask"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: MessageSquare
    },
    {
      title: "Mental Health Chatbot",
      category: "nlp",
      description: "Developed an empathetic AI-powered chatbot to provide mental health support. The chatbot facilitates user-friendly conversations, offering emotional support and suggesting professional resources. It combines a calming, intuitive frontend with a robust, intelligent backend powered by large language models.",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React.js", "Flask", "LLMs", "REST API"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: Brain
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">Projects</h1>
              <p className="text-lg text-foreground/80">
                Exploring the frontiers of AI through practical applications
              </p>
            </div>
            
            <div className="mt-6 md:mt-0">
              <div className="flex items-center space-x-4 bg-card rounded-lg p-2">
                <Filter className="h-4 w-4 text-primary" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-transparent border-none focus:outline-none"
                >
                  <option value="all">All Projects</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="nlp">NLP</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-foreground/80 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-foreground/80 hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5 mr-1" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-foreground/80 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 mr-1" />
                        Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;