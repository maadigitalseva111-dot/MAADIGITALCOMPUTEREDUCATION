import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { courses } from '../data/mock';
import { Clock, IndianRupee, BookOpen, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Courses
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive computer education programs designed to make you industry-ready with practical skills and certifications
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="bg-white">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl mb-2">{course.title}</CardTitle>
                      <p className="text-gray-600">{course.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </Badge>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200 flex items-center gap-1">
                        <IndianRupee className="h-3 w-3" />
                        {course.fees}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 bg-gray-50">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details" className="border-none">
                      <AccordionTrigger className="text-blue-600 hover:text-blue-700 font-semibold">
                        View Course Details
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                          {/* Topics */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <BookOpen className="h-5 w-5 text-blue-600" />
                              <h4 className="font-semibold text-gray-900">What You'll Learn</h4>
                            </div>
                            <ul className="space-y-2">
                              {course.topics.map((topic, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Course Info */}
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border">
                              <div className="flex items-center gap-2 mb-2">
                                <Award className="h-5 w-5 text-blue-600" />
                                <h4 className="font-semibold text-gray-900">Course Information</h4>
                              </div>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Duration:</span>
                                  <span className="font-medium text-gray-900">{course.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Course Fee:</span>
                                  <span className="font-medium text-gray-900">{course.fees}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Eligibility:</span>
                                  <span className="font-medium text-gray-900">{course.eligibility}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Certificate:</span>
                                  <span className="font-medium text-green-600">{course.certificate}</span>
                                </div>
                              </div>
                            </div>

                            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                              <Link to="/contact">Enroll in This Course</Link>
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We offer customized training programs based on your specific needs. Contact us to discuss your requirements.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
