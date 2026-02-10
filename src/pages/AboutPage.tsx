import React from 'react';
import { Link } from 'react-router-dom';

import { Eye, Shield, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ValueCard from '../Components/ValueCard';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-indigo-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ixolink</h1>
            <p className="text-xl text-indigo-200">
              Building reliable connections between businesses and their audiences through data-driven solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader 
                label="Our Story"
                title="Data-Driven From The Beginning"
                centered={false}
              />
              <p className="text-gray-600 mb-6">
                Founded with a vision to transform how businesses connect with their audiences, Ixolink has always believed in the power of accurate data and verified leads. Our journey began when our founders recognized a gap in the market for truly reliable lead generation services.
              </p>
              <p className="text-gray-600 mb-6">
                What sets us apart is our commitment to accuracy and transparency. While many agencies promise results, we deliver verified data that businesses can confidently use for strategic decisions and growth initiatives.
              </p>
              <p className="text-gray-600">
                Today, Ixolink continues to innovate in the field of data intelligence, helping businesses of all sizes establish meaningful connections that drive sustainable growth.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Why Choose Ixolink?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700">Verified data with 98% accuracy rate</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700">Tailored solutions for your specific industry</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700">Transparent processes and regular reporting</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700">Scalable solutions that grow with your business</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700">Dedicated support from industry experts</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Our Values"
            title="What Guides Us"
            description="At Ixolink, our core values shape everything we do, from how we develop our solutions to how we interact with our clients."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon="accuracy"
              title="Accuracy First"
              description="We prioritize precise, reliable, and verified data in every solution we deliver."
            />
            <ValueCard 
              icon="transparency"
              title="Transparency"
              description="Our processes are clear, honest, and fully aligned with client expectations."
            />
            <ValueCard 
              icon="data"
              title="Data Driven Thinking"
              description="Every decision is guided by insights, research, and analysis—not assumptions."
            />
            <ValueCard 
              icon="scalability"
              title="Scalability"
              description="We build systems and solutions designed to grow with our clients' businesses."
            />
            <ValueCard 
              icon="partnerships"
              title="Long Term Partnerships"
              description="We focus on sustainable growth, trust, and lasting client relationships."
            />
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 p-8 md:p-10 rounded-2xl border border-purple-100 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Brand Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Ixolink's vision is to become a trusted global partner in data and lead intelligence. We aim to
                empower businesses with scalable, future-ready systems. Our goal is to enable sustainable growth
                through consistency and precision. Ixolink sets a benchmark for data driven excellence.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-8 md:p-10 rounded-2xl border border-purple-100 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Brand Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Ixolink's mission is to deliver verified B2B and B2C leads through technology, automation, and
                strategic research. We provide high quality data solutions that support confident business
                decisions. Every process is built on accuracy and transparency. Our focus is on results and long
                term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Data-Driven Journey?</h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-10">
            Get in touch with our team today and discover how Ixolink can transform your approach to lead generation and data management.
          </p>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-white text-indigo-900 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;