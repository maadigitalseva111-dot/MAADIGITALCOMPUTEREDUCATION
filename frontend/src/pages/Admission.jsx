import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { admissionSteps, requiredDocuments, batchTimings } from '../data/mock';
import * as Icons from 'lucide-react';
import { CheckCircle, FileText, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export const Admission = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Admission Process
            </h1>
            <p className="text-lg text-gray-600">
              Simple and hassle-free admission process. Start your learning journey in just 5 easy steps!
            </p>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Get Admission
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -ml-px"></div>
              
              {admissionSteps.map((step, index) => {
                const IconComponent = Icons[step.icon];
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.step} className="relative mb-12 md:mb-16">
                    <div className={`md:flex md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <Card className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                                {IconComponent && <IconComponent className="h-8 w-8 text-blue-600" />}
                              </div>
                              <div className={isEven ? 'md:text-right' : ''}>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Step Number Circle */}
                      <div className="hidden md:flex md:w-2/12 justify-center items-center absolute left-1/2 -ml-8">
                        <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white">
                          {step.step}
                        </div>
                      </div>

                      {/* Spacer for alignment */}
                      <div className="hidden md:block md:w-5/12"></div>
                    </div>

                    {/* Mobile step number */}
                    <div className="md:hidden absolute -left-4 top-6 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h2>
              <p className="text-gray-600">Please bring the following documents at the time of admission</p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Batch Timings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Batch Timings</h2>
              <p className="text-gray-600">Choose a convenient time slot that fits your schedule</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {batchTimings.map((batch, index) => (
                <Card key={index} className="border-2 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{batch.batch}</h3>
                        <p className="text-blue-600 font-semibold mb-1">{batch.timing}</p>
                        <p className="text-sm text-gray-600">{batch.days}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Enroll?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit our center today or contact us for more information about admissions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link to="/courses">View Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
