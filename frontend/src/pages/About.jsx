import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Target, Users, Award, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600">
              Building careers through quality computer education since over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                  alt="Computer lab"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  MAA Digital Computer Education was established with a vision to provide quality computer education to students from all backgrounds. Over the years, we have trained thousands of students who are now successfully working in various IT companies and organizations.
                </p>
                <p className="text-gray-600 mb-4">
                  Our commitment to excellence, practical approach to teaching, and dedication to student success has made us one of the most trusted computer education institutes in the region.
                </p>
                <p className="text-gray-600">
                  We continuously update our curriculum to match industry standards and ensure our students are well-prepared for the challenges of the modern workplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower individuals with comprehensive computer education and practical skills that enable them to achieve their career goals and contribute meaningfully to the digital economy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Heart className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading computer education institute known for quality training, student success, and creating skilled professionals who excel in their chosen fields.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-2 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in everything we do, from teaching to student support
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Student-Centric</h3>
                  <p className="text-gray-600">
                    Our students' success is our priority, and we go the extra mile to help them achieve their goals
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Learning</h3>
                  <p className="text-gray-600">
                    We believe in hands-on training that prepares students for real-world challenges
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Facilities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Computer Lab</h3>
                  <p className="text-gray-600">
                    Well-equipped computer lab with latest hardware and software for practical training
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Material</h3>
                  <p className="text-gray-600">
                    Comprehensive study materials and resources for each course
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Speed Internet</h3>
                  <p className="text-gray-600">
                    Fast and reliable internet connectivity for online learning and research
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Trainers</h3>
                  <p className="text-gray-600">
                    Experienced faculty members dedicated to your learning success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
