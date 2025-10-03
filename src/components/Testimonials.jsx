import { useState } from 'react';

const Testimonials = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReadMore = (testimonial) => {
    alert(`📖 Full Story: ${testimonial.name}\n\n"${testimonial.text}"\n\n📊 Score Journey:\n${testimonial.previousScore} → ${testimonial.score} (Band improvement)\n\n👤 ${testimonial.role} from ${testimonial.country}\n⭐ Rating: ${testimonial.rating}/5`);
  };

  const handleContactStudent = (name) => {
    scrollToSection('contact');
    setTimeout(() => {
      alert(`📧 Want to hear more from ${name}?\n\n✅ We can connect you with our successful students\n✅ Get personalized advice and tips\n✅ Learn about their preparation strategy\n\nFill out the contact form and mention "${name}'s story" in your message!`);
    }, 500);
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      country: 'India',
      image: '👩‍💼',
      score: '8.5',
      previousScore: '6.5',
      text: 'IELTS Excellence transformed my preparation journey. The AI-powered speaking practice and personalized feedback helped me improve from 6.5 to 8.5 in just 3 months. The tutors are incredibly supportive and the study materials are comprehensive.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Medical Student',
      country: 'China',
      image: '👨‍⚕️',
      score: '8.0',
      previousScore: '7.0',
      text: 'The mock tests are exactly like the real exam! I felt so confident on test day because I had practiced extensively. The writing evaluation service helped me understand my mistakes and improve my structure. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Business Analyst',
      country: 'India',
      image: '👩‍💻',
      score: '7.5',
      previousScore: '6.0',
      text: 'As a working professional, the flexible schedule and online classes were perfect for me. The progress tracking feature kept me motivated, and the one-on-one sessions addressed all my doubts. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Ahmed Hassan',
      role: 'Graduate Student',
      country: 'UAE',
      image: '👨‍🎓',
      score: '8.0',
      previousScore: '6.5',
      text: 'The expert tutors provided strategies that really work. The speaking practice sessions built my confidence, and the reading techniques helped me manage time better. Achieved my target score in the first attempt!',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      role: 'Nurse',
      country: 'Philippines',
      image: '👩‍⚕️',
      score: '7.5',
      previousScore: '6.5',
      text: 'Excellent course structure and amazing support team. The study materials are well-organized and the practice tests helped me identify my weak areas. The instructors genuinely care about your success!',
      rating: 5,
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Civil Engineer',
      country: 'Mexico',
      image: '👨‍🔧',
      score: '7.0',
      previousScore: '5.5',
      text: 'I struggled with writing, but the detailed feedback on my essays helped me improve dramatically. The grammar lessons and vocabulary building exercises were exactly what I needed. Very satisfied with the results!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Student <span className="text-blue-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students who achieved their dream scores with our proven methods
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-500 text-2xl">
            <span>★★★★★</span>
            <span className="text-gray-600 text-lg">4.9/5 from 15,000+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100"
            >
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">{testimonial.country}</div>
              </div>

              {/* Score Improvement */}
              <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Previous Score</div>
                    <div className="text-2xl font-bold text-gray-400">{testimonial.previousScore}</div>
                  </div>
                  <div className="text-3xl">→</div>
                  <div>
                    <div className="text-sm text-gray-600">Achieved</div>
                    <div className="text-2xl font-bold text-green-600">{testimonial.score}</div>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="text-4xl">{testimonial.image}</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleReadMore(testimonial)}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Read Full Story
                </button>
                <button
                  onClick={() => handleContactStudent(testimonial.name)}
                  className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-all duration-200"
                >
                  💬
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-5xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100 text-lg">Students Trained</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-5xl font-bold mb-2">8.2</div>
              <div className="text-blue-100 text-lg">Average Band Score</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-lg">Success Rate</div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-400/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
            <button
              onClick={() => {
                scrollToSection('courses');
                setTimeout(() => {
                  alert('🎉 Start Your Success Journey Today!\n\n✅ Choose from 3 comprehensive courses\n✅ Expert guidance from certified trainers\n✅ Proven methods with 98% success rate\n✅ Money-back guarantee\n\nScroll down to see our course options!');
                }, 500);
              }}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Start Your Journey Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
