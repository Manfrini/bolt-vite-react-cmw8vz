import React from 'react';
import { Star, Target, BarChart2, Bell, CheckCircle, ChevronDown, Menu } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-gray-200">
        <div className="text-2xl font-bold">MindCompass</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-600 hover:text-black">Features</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-black">Testimonials</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-black">FAQ</a></li>
          </ul>
        </nav>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Define Your Goals. Track Your Success. Achieve Your Potential.</h1>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">MindCompass helps you set clear goals, stay motivated, and reach your long-term vision through personalized tracking and actionable steps.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">Join the Beta</button>
          <div className="mt-12">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="MindCompass App" className="rounded-lg shadow-lg mx-auto" />
          </div>
        </section>

        {/* Problem-Solution Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Struggling to Stay on Track? We've Got You Covered.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, problem: "Difficulty defining clear goals", solution: "Set crystal-clear objectives with our guided goal-setting process" },
                { icon: BarChart2, problem: "Lack of motivation to stay consistent", solution: "Stay inspired with daily progress tracking and motivational reminders" },
                { icon: CheckCircle, problem: "Struggling to track progress easily", solution: "Effortlessly monitor your journey with our intuitive dashboard and simple check-ins" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.problem}</h3>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Powerful Features to Keep You Moving Forward</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Star, title: "Define Your North Star", description: "Clarify your long-term vision and align your goals accordingly" },
                { icon: Target, title: "Track Key Results Easily", description: "Monitor progress with personalized questions for each key result" },
                { icon: Bell, title: "Receive Motivational Reminders", description: "Stay focused with timely notifications and inspiring messages" },
                { icon: BarChart2, title: "Visual Progress", description: "Get a clear overview of your journey with our intuitive dashboard" },
                { icon: CheckCircle, title: "Set & Forget", description: "Configure clear goals with precise deadlines and let MindCompass handle the rest" }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-md border border-gray-200">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Here's What Our Users Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah L.", role: "Entrepreneur", quote: "MindCompass has been a game-changer for my business goals. I'm more focused and motivated than ever!" },
                { name: "Michael R.", role: "Fitness Enthusiast", quote: "Tracking my fitness journey has never been easier. I love how MindCompass keeps me accountable." },
                { name: "Emily T.", role: "Student", quote: "As a busy student, MindCompass helps me balance my academic goals with personal development. It's amazing!" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Defining Your Future Today</h2>
            <p className="text-xl mb-8 text-gray-600">Join our beta and be among the first to experience the power of MindCompass.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">Get Early Access</button>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { question: "How does activity tracking work?", answer: "MindCompass uses a simple check-in system where you answer personalized questions about your key results. This data is then visualized in your dashboard for easy progress tracking." },
                { question: "Can I change my goals after setting them?", answer: "Absolutely! We understand that goals can evolve. You can easily adjust your goals, key results, and tracking questions at any time through the app settings." },
                { question: "Is the app free?", answer: "MindCompass offers a free tier with basic features. We also have premium plans with advanced features for power users. Pricing details will be available soon." }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </button>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-600 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">MindCompass</h3>
              <p>Empowering you to achieve your goals and reach your full potential.</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-black"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                <a href="#" className="hover:text-black"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg></a>
                <a href="#" className="hover:text-black"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p>&copy; 2023 MindCompass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;