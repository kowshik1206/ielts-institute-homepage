const Courses = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnroll = (courseName, price) => {
    scrollToSection('contact');
    setTimeout(() => {
      alert(`🎓 Enrolling in ${courseName}!\n\n💰 Price: ${price}\n\n✅ What's Next:\n• Complete registration form\n• Choose payment plan\n• Get instant access to materials\n• Meet your personal tutor\n\n📞 Our team will contact you within 1 hour!`);
    }, 500);
  };

  const handleLearnMore = (courseName) => {
    alert(`📚 ${courseName} - Detailed Information\n\n📧 Download complete syllabus: info@ieltsexcellence.com\n📞 Speak with advisor: +1-234-567-890\n💬 Live chat available 24/7\n\n✓ Free trial lesson included\n✓ Money-back guarantee\n✓ Flexible payment plans`);
  };

  const courses = [
    {
      title: 'Foundation Course',
      level: 'Beginner',
      duration: '8 Weeks',
      price: '$199',
      originalPrice: '$299',
      features: [
        'Basic grammar and vocabulary',
        'Introduction to all 4 modules',
        '20+ practice tests',
        'Weekly group sessions',
        'Study material access',
        'Email support',
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Professional Course',
      level: 'Intermediate',
      duration: '12 Weeks',
      price: '$399',
      originalPrice: '$599',
      features: [
        'Advanced strategies for all modules',
        '50+ full-length mock tests',
        'AI band score prediction',
        'One-on-one speaking sessions',
        'Writing evaluation (10 essays)',
        '24/7 chat support',
        'Certificate of completion',
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Premium Course',
      level: 'Advanced',
      duration: '16 Weeks',
      price: '$699',
      originalPrice: '$999',
      features: [
        'Everything in Professional',
        'Unlimited mock tests',
        'Personal study plan',
        'Weekly 1-on-1 tutoring',
        'Unlimited writing evaluations',
        'Speaking practice sessions (2x/week)',
        'Priority support',
        'Score guarantee or money back',
      ],
      popular: false,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Choose Your <span className="text-blue-600">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing plans designed to meet your learning goals and budget
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                course.popular ? 'ring-4 ring-purple-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm shadow-lg">
                  🔥 MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${course.color} text-white p-8 text-center`}>
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <div className="text-sm opacity-90 mb-4">{course.level}</div>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-5xl font-bold">{course.price}</span>
                </div>
                <div className="text-sm opacity-75 line-through">{course.originalPrice}</div>
                <div className="mt-4 text-sm">
                  ⏱️ {course.duration}
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-green-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleEnroll(course.title, course.price)}
                  className={`w-full bg-gradient-to-r ${course.color} text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}
                >
                  Enroll Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="text-6xl">🛡️</div>
              <div className="space-y-2 text-left">
                <h3 className="text-2xl font-bold text-gray-900">30-Day Money-Back Guarantee</h3>
                <p className="text-gray-700 font-medium">
                  Not satisfied with your progress? Get a full refund within 30 days, no questions asked.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleLearnMore('Money-Back Guarantee')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl whitespace-nowrap transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
