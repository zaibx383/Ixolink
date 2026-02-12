import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Eye, Shield } from 'lucide-react';

// Component Imports
import Hero from '../Components/HeroSection';
import SectionHeader from '../Components/SectionHeader2';
import ClientsSection from '../Components/ClientLogo';
import ShowcaseSection from '../Components/ShowcaseSection';
import FeatureSection from '../Components/FeatureSection';
import ServiceCard from '../Components/ServiceCard';
import AnimatedCaseStudies from '../Components/AnimatedCaseStudies';
import TestimonialSlider from '../Components/TestimonialSlider';
import ContactForm from '../Components/ContactForm';

const HomePage = () => {
  return (
    <>
      {/* Hero Section - First impression & value proposition */}
      <Hero />
      
      {/* Clients Section - Immediate social proof to build credibility */}
      <ClientsSection />
      
      {/* Showcase Section - Immersive visual introduction to data solutions */}
      <ShowcaseSection />
      
      {/* Mission & Vision Section - Brand purpose and value alignment */}
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
      
      {/* Feature Section - What sets us apart with scroll animations */}
      <section id="features">
        <FeatureSection />
      </section>

      {/* Services Section - Core offerings */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <p className="text-sm font-medium text-teal-500 uppercase tracking-wider mb-2">OUR SERVICES</p>
            <h2 className="text-4xl font-bold text-black mb-4">Transform Your Business</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="B2B Lead Generation"
              image="https://www.dbswebsite.com/uploads/b2b-lead-generation.jpg"
            />
            <ServiceCard 
              title="B2C Lead Generation"
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1170&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Web Data Solutions"
              image="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1170&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Data Verification"
              image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop"
            />
          </div>
          
          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center text-teal-500 hover:text-teal-600 transition-colors duration-300 border border-teal-500 hover:border-teal-600 rounded-full px-8 py-3 text-lg">
              View More Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section - Proof of results with scroll animations */}
      <section id="case-studies">
        <AnimatedCaseStudies />
      </section>
      
      {/* Testimonials Section - Social proof and credibility */}
      <section className="py-20 bg-indigo-50" id="testimonials">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Client Success"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from businesses that have transformed their lead generation with Ixolink"
          />
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* FAQ Section - Address common questions to reduce friction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Common Questions"
            title="Frequently Asked Questions"
            description="Get answers to the most common questions about our lead generation services"
          />
          
          <div className="max-w-3xl mx-auto space-y-6 mt-10">
            {/* FAQ Item 1 */}
            <div className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">How do you ensure lead quality?</h3>
              <p className="text-gray-700">
                We implement a rigorous multi-step verification process including email validation, phone verification, and data enrichment to ensure every lead meets our high-quality standards before delivery.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">What industries do you specialize in?</h3>
              <p className="text-gray-700">
                We provide lead generation services across multiple industries including technology, healthcare, finance, manufacturing, and professional services, with specialized expertise in B2B sectors.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">How quickly can you deliver leads?</h3>
              <p className="text-gray-700">
                Turnaround times vary based on project scope and requirements, but we typically begin delivering verified leads within 7-14 days of project kickoff, with ongoing delivery schedules tailored to your needs.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="#contact" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Ask Us a Question
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Clear call to action */}
      <section className="py-20 bg-indigo-50" id="contact">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Get Started"
            title="Ready to Transform Your Lead Generation?"
            description="Take the first step toward data-driven growth by reaching out to our team today"
            centered={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">Let's Connect</h2>
              <p className="text-gray-700 mb-10">
                Ready to transform your lead generation? Get in touch with us today and discover how Ixolink can
                help your business grow with verified, high-quality leads and data solutions.
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