'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaDna, FaStethoscope, FaMicroscope, FaUserMd,  FaAmbulance } from 'react-icons/fa'
import { MdHealthAndSafety, MdBiotech, MdSecurity } from 'react-icons/md'
import { Brain, Activity, FileText, Heart, Zap, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Icon className="w-6 h-6 text-primary" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
)

const TestimonialCard: React.FC<{ name: string; role: string; content: string }> = ({ name, role, content }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{role}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{content}</p>
    </CardContent>
  </Card>
)

export default function LandingPage() {
  const features = [
    { title: 'Medical Checkups', description: 'Comprehensive health assessments', icon: FaStethoscope },
    { title: 'AI Diagnostics', description: 'Cutting-edge AI-powered diagnostic tools', icon: Brain },
    { title: 'Health Analysis', description: 'In-depth analysis of your health data', icon: Activity },
    { title: 'Imaging Analysis', description: 'Advanced medical imaging interpretation', icon: MdBiotech },
    { title: 'Pathology', description: 'Precise pathological examinations', icon: FaMicroscope },
    { title: 'Telemedicine', description: 'Remote healthcare services', icon: MdHealthAndSafety },
    { title: 'Personalized Medicine', description: 'Tailored treatment plans based on your unique profile', icon: FaDna },
    { title: 'Emergency Care', description: '24/7 emergency medical services', icon: FaAmbulance },
  ]

  const testimonials = [
    { name: 'John Doe', role: 'Patient', content: 'HealthTech has revolutionized my healthcare experience. The personalized approach and cutting-edge technology have significantly improved my well-being.' },
    { name: 'Dr. Jane Smith', role: 'Cardiologist', content: 'As a healthcare professional, I\'m impressed by HealthTech\'s innovative solutions. They\'ve made diagnostics more accurate and treatment plans more effective.' },
    { name: 'Sarah Johnson', role: 'Wellness Coach', content: 'HealthTech\'s holistic approach to health management has been a game-changer for my clients. The integration of AI and personalized medicine is truly remarkable.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      
      <main>
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
                <TextGenerateEffect words="The Future of Healthcare" />
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-foreground/80">
                Empowering your health with cutting-edge technology
              </p>
              <Button size="lg" className="animate-pulse">
                Explore Our Services
              </Button>
            </motion.div>
          </div>
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80"
              alt="Healthcare Technology"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-primary/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Why Choose HealthTech?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Advanced Medical Technology" className="rounded-lg shadow-lg" />
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <Zap className="text-primary" />
                    <span>State-of-the-art medical technology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="text-primary" />
                    <span>Comprehensive health assessments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaUserMd className="text-primary" />
                    <span>Expert medical professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="text-primary" />
                    <span>Personalized treatment plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="text-primary" />
                    <span>Detailed health reports and analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MdSecurity className="text-primary" />
                    <span>Secure and confidential health data management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our Technology</h2>
            <Tabs defaultValue="ai" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="ai">AI Diagnostics</TabsTrigger>
                <TabsTrigger value="telemedicine">Telemedicine</TabsTrigger>
                <TabsTrigger value="personalized">Personalized Medicine</TabsTrigger>
              </TabsList>
              <TabsContent value="ai">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Powered Diagnostics</CardTitle>
                    <CardDescription>Cutting-edge artificial intelligence for accurate and rapid diagnoses</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Our AI algorithms analyze medical images, lab results, and patient data to provide quick and accurate diagnoses, supporting healthcare professionals in making informed decisions.</p>
                    <img src="https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="AI Diagnostics" className="w-full h-64 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="telemedicine">
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Telemedicine</CardTitle>
                    <CardDescription>Connect with healthcare professionals from the comfort of your home</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Our telemedicine platform enables secure video consultations, remote monitoring, and digital prescription services, making healthcare accessible anytime, anywhere.</p>
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Telemedicine" className="w-full h-64 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="personalized">
                <Card>
                  <CardHeader>
                    <CardTitle>Personalized Medicine</CardTitle>
                    <CardDescription>Tailored healthcare plans based on your unique genetic profile</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>By analyzing your genetic data, lifestyle, and environmental factors, we create personalized treatment plans and preventive strategies to optimize your health outcomes.</p>
                    <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Personalized Medicine" className="w-full h-64 object-cover rounded-lg mt-4" />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-20 px-6 bg-primary/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">What Our Patients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">Ready to Take Control of Your Health?</h2>
            <p className="text-xl mb-12 text-foreground/80">Join thousands of satisfied patients who have transformed their lives with our innovative healthcare solutions.</p>
            <Button size="lg" className="animate-pulse">
              Schedule Your Consultation
            </Button>
          </div>
        </section>

        <section className="py-20 px-6 bg-primary/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>State-of-the-Art Laboratories</CardTitle>
                </CardHeader>
                <CardContent>
                  <img  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Laboratory" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <p>Equipped with the latest technology for accurate and rapid diagnostics.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Imaging Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Imaging Center" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <p>Featuring MRI, CT, and other cutting-edge imaging technologies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Telemedicine Suites</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="https://images.unsplash.com/photo-1623377261097-a3b3d8210af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Telemedicine Suite" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <p>High-tech rooms for seamless virtual consultations and remote care.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">HealthTech</h3>
              <p>Empowering your health with cutting-edge technology</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index}>
                    <a href={`#${feature.title.toLowerCase().replace(' ', '-')}`} className="hover:underline">
                      {feature.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <p>123 Health Street, Medical City, HC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@healthtech.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p>&copy; 2024 HealthTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}