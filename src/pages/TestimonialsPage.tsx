import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../Components/SectionHeader2';
import { Star, Quote, ArrowRight, Shield, Eye } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "Ixolink transformed our lead generation process. The quality of B2B leads we receive is exceptional, and their data accuracy is unmatched. Our conversion rates have increased by 45% since we started working with them.",
    name: "John Davidson",
    role: "CEO, TechFlow Solutions",
    initials: "JD",
    rating: 5,
    industry: "Technology"
  },
  {
    id: 2,
    text: "Working with Ixolink has been a game-changer for our marketing campaigns. Their web data solutions provide insights we never had access to before. Their team is responsive and always willing to go the extra mile.",
    name: "Sarah Mitchell",
    role: "Marketing Director, GrowthHub",
    initials: "SM",
    rating: 5,
    industry: "Marketing"
  },
  {
    id: 3,
    text: "The transparency and professionalism of Ixolink is outstanding. They deliver exactly what they promise, and their data-driven approach has helped us make better business decisions.",
    name: "Michael Rodriguez",
    role: "Founder, DataDrive Inc",
    initials: "MR",
    rating: 5,
    industry: "Data Analytics"
  },
  {
    id: 4,
    text: "We were struggling to find quality leads until we discovered Ixolink. Their B2C lead generation service has provided us with highly targeted prospects that match our ideal customer profile perfectly.",
    name: "Emily Johnson",
    role: "Sales Director, RetailPro",
    initials: "EJ",
    rating: 5,
    industry: "Retail"
  },
  {
    id: 5,
    text: "As a financial services company, data accuracy is crucial for us. Ixolink's verification processes give us confidence that we're working with reliable information. Highly recommended for any finance business.",
    name: "David Chang",
    role: "COO, Finance Partners",
    initials: "DC",
    rating: 5,
    industry: "Finance"
  },
  {
    id: 6,
    text: "The ROI we've seen from Ixolink's services is impressive. Within three months, we recouped our investment and started seeing significant growth. Their team really understands our industry and requirements.",
    name: "Lisa Anderson",
    role: "VP of Growth, HealthTech Solutions",
    initials: "LA",
    rating: 4,
    industry: "Healthcare"
  }
];

const TestimonialsPage = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredTestimonials = filter === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.industry === filter);
    
  const industries = ['All', ...new Set(testimonials.map(t => t.industry))];
  
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-indigo-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-indigo-200">
              Discover how businesses across industries are achieving growth with our data-driven solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-indigo-50 p-8 md:p-12 rounded-2xl relative">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-purple-200" />
            <div className="max-w-3xl">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-indigo-900 mb-8 italic leading-relaxed">
                "Ixolink transformed our lead generation process. The quality of B2B leads we receive is exceptional, and their data accuracy is unmatched. Our conversion rates have increased by 45% since we started working with them."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  JD
                </div>
                <div>
                  <h4 className="text-lg font-bold text-indigo-900">John Davidson</h4>
                  <p className="text-gray-600">CEO, TechFlow Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Client Feedback"
            title="What Our Clients Say"
            description="Read success stories from clients across various industries who have partnered with Ixolink."
          />
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setFilter(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === industry
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-indigo-900 text-center mb-12">
            Client Success Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">45%</div>
              <p className="text-indigo-900 font-medium">Average Increase in Conversion Rate</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">98%</div>
              <p className="text-indigo-900 font-medium">Data Accuracy</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">3.2x</div>
              <p className="text-indigo-900 font-medium">Average ROI Improvement</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">92%</div>
              <p className="text-indigo-900 font-medium">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Preview */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Success Stories"
            title="Featured Case Studies"
            description="Detailed explorations of how our solutions have helped businesses overcome challenges and achieve measurable results."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-purple-600 font-semibold mb-2">Technology Sector</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">
                How TechFlow Increased Qualified Leads by 200%
              </h3>
              <p className="text-gray-600 mb-4">
                TechFlow Solutions partnered with Ixolink to revamp their lead generation strategy, resulting in a 200% increase in qualified leads and 45% higher conversion rates.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center font-semibold text-purple-600 hover:text-purple-700"
              >
                Read full case study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-purple-600 font-semibold mb-2">Finance Sector</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">
                Finance Partners' Data-Driven Growth Strategy
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how Finance Partners used Ixolink's verified data to implement a targeted growth strategy that resulted in a 320% ROI within the first six months.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center font-semibold text-purple-600 hover:text-purple-700"
              >
                Read full case study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-10">
            Join the growing number of businesses that are achieving exceptional results with Ixolink's data-driven solutions.
          </p>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-white text-indigo-900 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Start Your Success Story
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;