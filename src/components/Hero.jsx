const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnrollClick = () => {
    scrollToSection('contact');
    // Simulate enrollment action
    setTimeout(() => {
      alert('🎉 Great choice! Our team will contact you within 24 hours to discuss your personalized IELTS preparation plan.');
    }, 500);
  };

  const handleAssessmentClick = () => {
    // Simulate assessment action
    alert('📝 Free Band Score Assessment\n\nOur AI-powered assessment will evaluate your current level across all 4 modules:\n\n✓ Listening\n✓ Reading\n✓ Writing\n✓ Speaking\n\nEstimated time: 45 minutes\nReceive detailed report within 24 hours!');
  };

  return (
    <section id="hero" className="pt-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  British Council Certified Partner
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                Achieve Your Dream
                <span className="block text-blue-600 mt-2">IELTS Score</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                in 90 Days - <span className="text-blue-600 font-bold">Guaranteed</span>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join 12,000+ successful students who achieved their target band scores with our AI-powered preparation system and expert coaching. <span className="font-bold text-gray-900">Money-back guarantee included.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="text-3xl font-bold text-blue-600">12,847+</div>
                </div>
                <div className="text-sm text-gray-600 mt-1 font-medium">Students Trained</div>
              </div>
              <div className="text-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-3xl font-bold text-green-600">95%</div>
                </div>
                <div className="text-sm text-gray-600 mt-1 font-medium">Success Rate</div>
              </div>
              <div className="text-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <div className="text-3xl font-bold text-purple-600">2.5</div>
                </div>
                <div className="text-sm text-gray-600 mt-1 font-medium">Bands Average Improvement</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleEnrollClick}
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Enroll Now - Limited Seats
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={handleAssessmentClick}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Free Band Score Assessment
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 flex-wrap">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg">A</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg">M</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg">S</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg">R</div>
              </div>
              <div className="text-sm text-gray-700">
                <div className="font-bold text-gray-900 text-base">Join 12,847+ students</div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                  <span className="font-semibold">4.9/5 Average Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Score Card */}
          <div className="relative animate-slide-in">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Sarah Chen</h3>
                        <p className="text-sm text-gray-600">Band 5.5 → 8.0</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-sm leading-relaxed">"The AI-powered practice tests helped me improve from 5.5 to 8.0 in just 12 weeks!"</p>
                </div>

                {/* IELTS Modules */}
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">IELTS Modules</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full">
                      All Covered
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { module: 'Listening', score: '8.5', progress: 95, color: 'bg-blue-500' },
                      { module: 'Reading', score: '8.0', progress: 90, color: 'bg-purple-500' },
                      { module: 'Writing', score: '7.5', progress: 85, color: 'bg-pink-500' },
                      { module: 'Speaking', score: '8.0', progress: 90, color: 'bg-green-500' },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-800 flex items-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                            {item.module}
                          </span>
                          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            Band {item.score}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Overall Band Score</span>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">8.0</span>
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold z-20 animate-bounce flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              #1 Rated
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-400 to-green-600 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold z-20 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certified
            </div>
          </div>
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-16 bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Money-Back</div>
                <div className="text-sm text-gray-600">Guarantee</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">24/7 Support</div>
                <div className="text-sm text-gray-600">Always Available</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">AI-Powered</div>
                <div className="text-sm text-gray-600">Smart Learning</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Expert Tutors</div>
                <div className="text-sm text-gray-600">10+ Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
