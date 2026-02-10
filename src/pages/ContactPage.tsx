import React from 'react';
import SectionHeader from '../Components/SectionHeader2';

import { Mail, Phone, MapPin, Clock, CheckSquare } from 'lucide-react';
import ContactForm from '../Components/ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-indigo-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-indigo-200">
              Get in touch with our team to discuss your needs and discover how we can help your business grow
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader 
                label="Get in Touch"
                title="Let's Connect"
                description="Ready to transform your lead generation? Get in touch with us today and discover how Ixolink can help your business grow."
                centered={false}
              />
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-1">Email</h4>
                    <p className="text-gray-600">contact@ixolink.com</p>
                    <p className="text-gray-600">support@ixolink.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-1">Location</h4>
                    <p className="text-gray-600">Global Services</p>
                    <p className="text-gray-600">Remote teams across North America and Europe</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-indigo-50 p-6 rounded-xl">
                <h4 className="font-bold text-indigo-900 text-lg mb-4">What happens next?</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">We'll contact you within 24 hours to discuss your needs</p>
                  </div>
                  <div className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Our team will prepare a customized solution based on your requirements</p>
                  </div>
                  <div className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">We'll schedule a detailed presentation of our proposed solution</p>
                  </div>
                  <div className="flex items-start">
                    <CheckSquare className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Once approved, we'll begin implementation with regular updates</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Common Questions"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and processes."
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-indigo-900 text-lg mb-2">What types of businesses do you work with?</h4>
              <p className="text-gray-700">
                We work with businesses of all sizes across various industries, from startups to enterprise companies. Our solutions are particularly effective for B2B SaaS, financial services, healthcare, education, and e-commerce businesses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-indigo-900 text-lg mb-2">How do your pricing models work?</h4>
              <p className="text-gray-700">
                We offer flexible pricing models tailored to your specific needs and project scope. This includes fixed-price packages, subscription-based services, and custom solutions. Contact us for a personalized quote.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-indigo-900 text-lg mb-2">Can you provide samples of your work?</h4>
              <p className="text-gray-700">
                Yes, we can provide anonymized samples that demonstrate the quality and structure of our lead data. We can also share case studies and testimonials from clients in your industry upon request.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-indigo-900 text-lg mb-2">How long does it take to start seeing results?</h4>
              <p className="text-gray-700">
                Most clients begin seeing results within the first month of implementation. The exact timeline depends on your specific goals, industry, and the solution being implemented. We provide regular updates and reports to track progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;