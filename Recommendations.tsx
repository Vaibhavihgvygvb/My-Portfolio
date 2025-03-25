import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Camera, MessageSquare, ArrowRight } from 'lucide-react';

const Recommendations = () => {
  const [selectedInterest, setSelectedInterest] = useState<string>('all');

  const recommendations = {
    'computer-vision': [
      {
        title: "Advanced Object Detection",
        description: "Implement YOLO v5 for real-time object detection and tracking",
        difficulty: "Advanced",
        duration: "3-4 months",
        icon: Camera
      },
      {
        title: "Facial Recognition System",
        description: "Build a facial recognition system using deep learning",
        difficulty: "Intermediate",
        duration: "2-3 months",
        icon: Camera
      }
    ],
    'nlp': [
      {
        title: "Sentiment Analysis Tool",
        description: "Create a sentiment analysis tool for social media data",
        difficulty: "Intermediate",
        duration: "2-3 months",
        icon: MessageSquare
      },
      {
        title: "Language Translation Model",
        description: "Develop a neural machine translation system",
        difficulty: "Advanced",
        duration: "3-4 months",
        icon: MessageSquare
      }
    ],
    'neural-networks': [
      {
        title: "Custom Neural Network",
        description: "Build a neural network from scratch for image classification",
        difficulty: "Advanced",
        duration: "2-3 months",
        icon: Brain
      },
      {
        title: "Time Series Prediction",
        description: "Implement LSTM networks for time series forecasting",
        difficulty: "Intermediate",
        duration: "2-3 months",
        icon: Brain
      }
    ]
  };

  const allRecommendations = Object.values(recommendations).flat();
  const displayRecommendations = selectedInterest === 'all' 
    ? allRecommendations 
    : recommendations[selectedInterest as keyof typeof recommendations] || [];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Project Recommendations</h1>
            <p className="text-lg text-foreground/80 mb-12">
              Discover personalized project recommendations based on your interests in AI & ML.
              These projects are carefully curated to help you enhance your skills and build a strong portfolio.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => setSelectedInterest('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedInterest === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-primary/10'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setSelectedInterest('computer-vision')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedInterest === 'computer-vision'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-primary/10'
                }`}
              >
                Computer Vision
              </button>
              <button
                onClick={() => setSelectedInterest('nlp')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedInterest === 'nlp'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-primary/10'
                }`}
              >
                NLP
              </button>
              <button
                onClick={() => setSelectedInterest('neural-networks')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedInterest === 'neural-networks'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-primary/10'
                }`}
              >
                Neural Networks
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {displayRecommendations.map((recommendation, index) => {
                const Icon = recommendation.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-lg p-6"
                  >
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {recommendation.title}
                        </h3>
                        <p className="text-foreground/80 mb-4">
                          {recommendation.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-foreground/60">
                          <span className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {recommendation.difficulty}
                          </span>
                          <span>•</span>
                          <span>{recommendation.duration}</span>
                        </div>
                        <button className="mt-4 flex items-center text-primary hover:text-primary/80 transition-colors">
                          Learn more
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Recommendations;