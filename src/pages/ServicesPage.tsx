import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../Components/SectionHeader2';

import { ArrowRight, CheckCircle, Clock, Users, BarChart2, Database } from 'lucide-react';
import ServiceCard from '../Components/ServiceCard';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-indigo-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-indigo-200">
              Comprehensive data solutions designed to drive your business forward
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="What We Offer"
            title="Data-Driven Solutions"
            description="At Ixolink, we provide a suite of specialized services designed to help businesses make informed decisions and connect with their ideal customers."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              number="01"
              icon="b2b"
              title="B2B Lead Generation"
              description="Verified business leads tailored to your target market. We connect you with decision-makers who matter."
            />
            <ServiceCard 
              number="02"
              icon="b2c"
              title="B2C Lead Generation"
              description="High-quality consumer leads that convert. Reach your ideal customers with precision targeting."
            />
            <ServiceCard 
              number="03"
              icon="web"
              title="Web Data Solutions"
              description="Intelligent web scraping and data extraction services. Transform raw data into actionable insights."
            />
            <ServiceCard 
              number="04"
              icon="verification"
              title="Data Verification"
              description="Ensure accuracy with our comprehensive data verification and validation processes."
            />
          </div>
        </div>
      </section>
      
      {/* B2B Lead Generation */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-wider uppercase text-purple-600 mb-3">
                Service 01
              </span>
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">B2B Lead Generation</h2>
              <p className="text-gray-600 mb-6">
                Our B2B lead generation service provides you with accurate, verified contact information for decision-makers in your target market. We use a combination of advanced technologies and human verification to ensure the highest quality leads.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Targeted company and decision-maker profiling</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Industry-specific lead generation strategies</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Multi-channel verification process</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Regular data updates and enrichment</p>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center font-semibold text-purple-600 hover:text-purple-700"
              >
                Learn more about our B2B solutions
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Our B2B Process</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-1">Target Identification</h4>
                    <p className="text-gray-600 text-sm">We identify your ideal customer profile and target companies</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-1">Data Collection</h4>
                    <p className="text-gray-600 text-sm">Comprehensive data gathering from multiple sources</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-1">Verification</h4>
                    <p className="text-gray-600 text-sm">Thorough verification to ensure accuracy and completeness</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-1">Delivery & Analytics</h4>
                    <p className="text-gray-600 text-sm">Secure delivery with detailed analytics and insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* B2C Lead Generation - brief version */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">B2C Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                  <p className="text-gray-700">Data Accuracy</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
                  <p className="text-gray-700">Conversion Rate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3.2x</div>
                  <p className="text-gray-700">ROI Improvement</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                  <p className="text-gray-700">Delivery Time</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-bold tracking-wider uppercase text-purple-600 mb-3">
                Service 02
              </span>
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">B2C Lead Generation</h2>
              <p className="text-gray-600 mb-6">
                Our B2C lead generation service helps you connect with high-quality consumer leads that match your ideal customer profile. We use demographic, behavioral, and interest-based targeting to deliver leads with high conversion potential.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Precise demographic and psychographic targeting</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Customizable lead qualification criteria</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">GDPR and privacy-compliant processes</p>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center font-semibold text-purple-600 hover:text-purple-700"
              >
                Learn more about our B2C solutions
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Web Data Solutions - Brief */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-purple-600 mb-3">
            Services 03 & 04
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            Web Data & Verification Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Discover how our Web Data Solutions and Data Verification services can transform your business operations with accurate, actionable data.
          </p>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Get Custom Solution
          </Link>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Questions & Answers"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and processes."
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h4 className="font-bold text-indigo-900 text-lg mb-2">How do you ensure data accuracy?</h4>
              <p className="text-gray-700">
                We employ a multi-stage verification process that combines automated validation with human review. Our quality control systems check data points against multiple sources to ensure the highest level of accuracy.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h4 className="font-bold text-indigo-900 text-lg mb-2">What industries do you specialize in?</h4>
              <p className="text-gray-700">
                We provide solutions across a wide range of industries including SaaS, healthcare, finance, education, and e-commerce. Our team tailors the approach based on your specific industry requirements.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h4 className="font-bold text-indigo-900 text-lg mb-2">How long does it take to deliver leads?</h4>
              <p className="text-gray-700">
                Delivery time depends on the scope and complexity of your requirements. Typically, we deliver B2B leads within 3-5 business days and B2C leads within 1-2 business days after finalizing the criteria.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h4 className="font-bold text-indigo-900 text-lg mb-2">Are your services compliant with privacy regulations?</h4>
              <p className="text-gray-700">
                Yes, all our data collection and processing methods comply with GDPR, CCPA, and other applicable privacy regulations. We prioritize data privacy and security in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-10">
            Contact us today to discuss your specific needs and discover how our data-driven solutions can help your business grow.
          </p>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-white text-indigo-900 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;