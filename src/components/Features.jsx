const Features = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTryFeature = (featureName) => {
    scrollToSection('contact');
    setTimeout(() => {
      alert(`🚀 Try ${featureName}!\n\n✨ This feature includes:\n• Interactive demo session\n• Full access for 7 days\n• Expert guidance\n• No credit card required\n\n📞 Our team will contact you shortly to set up your trial!`);
    }, 500);
  };

  const handleLearnMore = (featureName, description) => {
    alert(`📚 ${featureName}\n\n${description}\n\n✅ Available in all our course packages\n💡 Get started today to unlock this feature!`);
  };

  const features = [
    {
      icon: '🎤',
      title: 'Speaking Practice',
      description: 'Practice with AI-powered speaking partners and get instant feedback on pronunciation, fluency, and grammar.',
      color: 'from-blue-500 to-blue-600',
      stats: '500+ Topics'
    },
    {
      icon: '📝',
      title: 'Mock Tests',
      description: 'Take full-length practice tests that simulate real IELTS exam conditions with detailed performance analytics.',
      color: 'from-purple-500 to-purple-600',
      stats: '100+ Tests'
    },
    {
      icon: '🤖',
      title: 'AI Band Score Prediction',
      description: 'Get accurate band score predictions using our advanced AI algorithms trained on thousands of real test results.',
      color: 'from-green-500 to-green-600',
      stats: '95% Accuracy'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Tutors',
      description: 'Learn from certified IELTS trainers with 10+ years of experience and proven track record of student success.',
      color: 'from-orange-500 to-orange-600',
      stats: '50+ Tutors'
    },
    {
      icon: '📚',
      title: 'Study Materials',
      description: 'Access comprehensive study materials, video lessons, and downloadable resources for all four modules.',
      color: 'from-pink-500 to-pink-600',
      stats: '1000+ Resources'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed analytics, performance graphs, and personalized study recommendations.',
      color: 'from-indigo-500 to-indigo-600',
      stats: 'Real-time Updates'
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">IELTS Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to achieve your target band score in one comprehensive platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                {feature.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-4 flex items-center gap-3">
                  <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
                    {feature.stats}
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => handleTryFeature(feature.title)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Try Free →
                  </button>
                  <button
                    onClick={() => handleLearnMore(feature.title, feature.description)}
                    className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
                  >
                    ℹ️
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Features Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center mb-8">
            <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Money-Back Guarantee</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-blue-100">Success Stories</div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-blue-400/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('courses')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                View All Courses →
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setTimeout(() => {
                    alert('📞 Get a Free Consultation!\n\n✅ 30-minute session with an expert\n✅ Personalized study plan\n✅ Band score assessment\n✅ Course recommendations\n\nOur team will contact you within 24 hours!');
                  }, 500);
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-200 transform hover:scale-105"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
