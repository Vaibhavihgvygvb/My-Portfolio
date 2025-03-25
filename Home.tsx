import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuralAnimation from '../components/NeuralAnimation';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI & ML Engineer
              <br />
              <span className="text-primary">Building the Future</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Final year B.E. student specializing in Artificial Intelligence and Machine Learning.
              Passionate about creating intelligent systems that solve real-world problems.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 relative"
          >
            <div className="w-full h-[400px] relative">
              <NeuralAnimation />
              <Brain className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 text-primary" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20"
        >
          <div className="p-6 rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-4">Neural Networks</h3>
            <p className="text-card-foreground/80">
              Developing deep learning models for complex pattern recognition and prediction tasks.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-4">Computer Vision</h3>
            <p className="text-card-foreground/80">
              Creating systems that can understand and process visual information from the world.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
            <p className="text-card-foreground/80">
              Building applications that can understand, interpret, and generate human language.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;