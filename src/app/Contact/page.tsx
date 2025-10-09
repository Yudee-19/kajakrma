// File: app/contact/page.tsx

import React from 'react';
import Header from '@/components/layout/Header'; 
import Footer from '@/components/layout/Footer'; 
import Container from '@/components/shared/Container';
import Text from '@/components/ui/text';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button'; 

// 1. ContactCard Component Props Interface
interface ContactCardProps {
  icon: React.ElementType; 
  title: string;          
  content: string | React.ReactNode; 
  className?: string;
}

// Contact Data
const contactInfo = {
  address: "123 Tech Park, Silicon Valley, CA 94024",
  phone: "+1 (555) 123-4567",
  email: "hello@kajkarma.com",
  socials: [
    { name: "LinkedIn", icon: Linkedin, link: "#" },
    { name: "Instagram", icon: Instagram, link: "#" },
    { name: "Facebook", icon: Facebook, link: "#" },
  ]
};

// 2. Contact Card Component 
const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, content, className }) => (
  <div 
    className={`${className} flex flex-col p-6 rounded-xl shadow-lg border border-gray-100 h-full 
               transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`} 
  >
    <Icon className="text-blue-600 mb-3" size={24} />
    <Text as="h3" className="text-lg font-semibold mb-1">
      {title}
    </Text>
    <Text className="text-sm text-gray-600 leading-relaxed">
      {content}
    </Text>
  </div>
);

export default function ContactPage() {
  
  // Contact Details Box के लिए JSX content
  const contactDetailsContent = (
    <>
      <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-700 block">{contactInfo.phone}</a>
      <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-700 block">{contactInfo.email}</a>
    </>
  );

  // Social Media Box के लिए JSX content (संशोधित - justify-center जोड़ा गया)
  const socialMediaContent = (
    <div className="flex gap-4 mt-1 justify-center w-full"> 
      {contactInfo.socials.map((social) => (
          <a 
              key={social.name} 
              href={social.link} 
              aria-label={social.name}
              className="text-gray-500 hover:text-blue-600 transition-colors"
          >
              <social.icon size={20} />
          </a>
      ))}
    </div>
  );
  
  // *** महत्वपूर्ण सुधार ***
  // Social Media Card के Title और Icon को भी center करने के लिए,
  // हम ContactCard में text-center class जोड़ेंगे।

  return (
    <>
     

      <main>
        
        {/* === SECTION 1: HERO/BANNER === */}
        <Container className="py-16 md:py-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            <div className="order-2 lg:order-1">
              <Text as="h6" className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
                Let's Talk Business
              </Text>
              <Text as="h1" className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Accelerate Your Vision with KAJ KARMA.
              </Text>
              <Text className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
                Are you ready to launch a groundbreaking app, refine your digital strategy, or deploy powerful AI agents? Fill out the form below, and we’ll get back to you within 24 hours.
              </Text>
              
              <form className="space-y-4 bg-gray-50 p-4 rounded-xl border border-skyblue-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                          <input 
                              type="text" 
                              id="name" 
                              name="name"
                              required
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-blue-500 focus:ring-blue-500"
                          />
                      </div>
                      
                      <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                          <input 
                              type="email" 
                              id="email" 
                              name="email"
                              required
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-blue-500 focus:ring-blue-500"
                          />
                      </div>
                  </div>
                  
                  <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                      <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-blue-500 focus:ring-blue-500"
                      />
                  </div>
                  
                  <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                      <textarea 
                          id="message" 
                          name="message"
                          rows={4}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-blue-500 focus:ring-blue-500"
                      ></textarea>
                  </div>
                  
                  <Button 
                      type="submit" 
                      className="h-11 px-6 rounded-full bg-black hover:bg-gray-800 text-white w-full transition-colors"
                  >
                      Send Message
                  </Button>
              </form>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center items-center lg:sticky lg:top-20">
              <img 
                src="/images/cont.jpg"
                alt="Contact us animation"
                className="w-full h-auto object-cover  max-h-[500px] lg:max-h-full"
              />
            </div>
          </div>
        </Container>
        
        {/* === SECTION 2: CONTACT INFORMATION BOXES === */}
        <Container className="py-12 md:py-16">
            <div className="text-center mb-10">
                <Text as="h2" className="text-3xl font-bold">
                    Direct Contact Channels
                </Text>
                <Text className="text-gray-600 max-w-xl mx-auto mt-2">
                    Connect with us through our physical address, phone, email, or social media channels.
                </Text>
            </div>

            {/* 3 Contact Boxes Grid - Social Media Box में centering के लिए text-center क्लास पास की गई है */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              {/* 1. Address Box - Left aligned as it is an address */}
              <ContactCard 
                icon={MapPin}
                title="Our Global Office"
                content={contactInfo.address}
                className="bg-blue-50 hover:bg-blue-100" 
              />

              {/* 2. Contact Details Box - Left aligned as it uses links */}
              <ContactCard 
                icon={Phone}
                title="Direct Contact"
                content={contactDetailsContent}
                className="bg-green-50 hover:bg-green-100" 
              />

              {/* 3. Social Media Box - Centered */}
              <ContactCard 
                icon={Rss}
                title="Social Media"
                content={socialMediaContent}
                className="bg-purple-50 hover:bg-purple-100 text-center items-center" // <-- items-center और text-center जोड़ा गया
              />

            </div>
            
        </Container>

      </main>

      
    </>
  );
}