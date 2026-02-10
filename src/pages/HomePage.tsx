import React from 'react';

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Eye, Shield } from 'lucide-react';
import Hero from '../Components/HeroSection';
import SectionHeader from '../Components/SectionHeader2';
import ValueCard from '../Components/ValueCard';
import ServiceCard from '../Components/ServiceCard';
import ContactForm from '../Components/ContactForm';
import TestimonialSlider from '../Components/TestimonialSlider';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Introduction"
            title="Building Reliable Connections"
            description="Ixolink is a data driven agency focused on building reliable connections between businesses and their audiences. We specialize in verified B2B and B2C lead generation and intelligent web data solutions."
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
      
      {/* Mission & Vision Section */}
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
      
      {/* Services Section */}
      <section className="py-20 bg-indigo-50" id="services">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="What We Offer"
            title="Our Services"
            description="Comprehensive data solutions designed to drive your business forward"
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
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Client Success"
            title="What Our Clients Say"
          />
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">Let's Connect</h2>
              <p className="text-gray-700 mb-10">
                Ready to transform your lead generation? Get in touch with us today and discover how Ixolink can
                help your business grow.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900">Email</h4>
                    <p className="text-gray-600">contact@ixolink.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900">Location</h4>
                    <p className="text-gray-600">Global Services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;