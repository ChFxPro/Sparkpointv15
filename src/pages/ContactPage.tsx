'use client';

import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import heroImage from 'figma:asset/b3266e92dcd32745ada3032a9087d9677176b3eb.png';

const REASONS = [
  'I need support / resources',
  'I want to volunteer',
  'I’m interested in partnering',
  'I have a story to share',
  'Media / press',
  'General question'
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '', reason: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleReasonSelect = (reason: string) => {
    setFormData(prev => ({ ...prev, reason }));
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] relative"> {/* Warm off-white background */}
      <Helmet>
        <title>Contact Us | SparkPoint</title>
        <meta name="description" content="Ways to connect, participate, and collaborate with SparkPoint." />
        <link rel="canonical" href="https://chfxpro.github.io/sparkpointv15/contact" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Community gathering at SparkPoint"
            className="w-full h-full object-cover object-[50%_25%]" 
          />
          {/* Soft Overlay - preserving readability while keeping image visible */}
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-[#FAF9F6]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className="mb-6 font-manrope font-extrabold text-[#1A1A1A] tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Connect With SparkPoint
            </h1>
            <p
              className="max-w-2xl mx-auto text-[#4A4A4A] font-medium leading-relaxed"
              style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
            >
              Community well-being starts with connection. Tell us what you’re looking for, and we’ll follow up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Contact Form (Spans 7 columns) */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 md:p-12 bg-white border-none shadow-xl shadow-stone-200/50 rounded-3xl overflow-hidden relative">
                 {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E03694] to-[#9E509F] opacity-20" />
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Send Us a Message</h2>
                  <p className="text-[#666666] text-lg">Every message is read by a real person.</p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={32} className="text-[#E03694]" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                      Message Sent
                    </h3>
                    <p className="text-[#666666] max-w-md">
                      Thank you for reaching out. We've received your message and will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Reason Selector */}
                    <div className="space-y-4">
                      <Label className="text-sm font-bold uppercase tracking-wider text-[#666666]">
                        I am reaching out because...
                      </Label>
                      <div className="flex flex-wrap gap-3">
                        {REASONS.map((reason) => (
                          <button
                            key={reason}
                            type="button"
                            onClick={() => handleReasonSelect(reason)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                              formData.reason === reason
                                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md'
                                : 'bg-white text-[#666666] border-stone-200 hover:border-[#E03694] hover:text-[#E03694]'
                            }`}
                          >
                            {reason}
                          </button>
                        ))}
                      </div>
                      <p className="text-sm text-[#888888]">
                        If you’re not sure, choose ‘General question.’
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold text-[#1A1A1A]">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 bg-stone-50 border-stone-200 focus:bg-white focus:border-[#E03694] transition-all rounded-xl"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold text-[#1A1A1A]">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 bg-stone-50 border-stone-200 focus:bg-white focus:border-[#E03694] transition-all rounded-xl"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-[#1A1A1A]">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 bg-stone-50 border-stone-200 focus:bg-white focus:border-[#E03694] transition-all rounded-xl"
                        placeholder="(Optional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold text-[#1A1A1A]">
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="p-4 bg-stone-50 border-stone-200 focus:bg-white focus:border-[#E03694] transition-all rounded-xl resize-none"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                      <Button
                        type="submit"
                        disabled={!formData.reason}
                        className="w-full sm:w-auto px-10 py-6 text-lg font-bold rounded-full shadow-lg shadow-[#E03694]/20 hover:shadow-xl hover:shadow-[#E03694]/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          background: '#1A1A1A', // Dark, grounded button
                          color: 'white',
                        }}
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </Button>
                      
                      <p className="text-sm text-[#888888] text-center sm:text-right max-w-xs">
                        We typically reply within 1–2 business days.
                      </p>
                    </div>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Right Column: Unified Contact Info (Spans 5 columns) */}
            <motion.div
              className="lg:col-span-5 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white border-none shadow-xl shadow-stone-200/50 rounded-3xl overflow-hidden h-full flex flex-col">
                <div className="p-8 md:p-10 flex-1">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">Other Ways to Connect</h3>
                  
                  <div className="space-y-8">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E03694]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="text-[#E03694] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] text-lg">Visit Us</h4>
                        <address className="not-italic text-[#666666] leading-relaxed mt-1">
                          67 W Main St<br />
                          Brevard, NC 28712
                        </address>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#9E509F]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="text-[#9E509F] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] text-lg">Call Us</h4>
                        <p className="text-[#666666] mt-1">(828) 883-8050</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FDB515]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="text-[#FDB515] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] text-lg">Email Us</h4>
                        <p className="text-[#666666] mt-1">info@yoursparkpoint.org</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Map */}
                <div className="h-64 lg:h-80 w-full grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                  <iframe
                    src="https://maps.google.com/maps?q=67+W+Main+St,+Brevard,+NC+28712&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="SparkPoint Office Location"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
