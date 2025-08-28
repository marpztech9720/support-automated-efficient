import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import SupportForm from './SupportForm';
import AdminDashboard from './AdminDashboard';
import RatingSystem from './RatingSystem';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [currentView, setCurrentView] = useState<'support' | 'admin' | 'rating'>('support');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleAdminLogin = (password: string) => {
    // Admin Password: chrometech2019 (Change this in AppLayout.tsx line 16)
    if (password === 'chrometech2019') {
      setIsAdminAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleSupportSubmit = (formData: any) => {
    console.log('Support ticket submitted:', formData);
    setTicketSubmitted(true);
    // Simulate email automation
    setTimeout(() => {
      alert('Automated confirmation email sent! An agent will be assigned during business hours.');
    }, 1000);
  };

  const handleRatingSubmit = (ratingData: any) => {
    console.log('Rating submitted:', ratingData);
    alert('Thank you for your feedback!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements - Using ChromeTech Background */}
      <div className="absolute inset-0 bg-[url('https://d64gsuwffb70l.cloudfront.net/68ac614451bdb2104863c995_1756366038055_a497a298.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-teal-900/70"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-lg bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src="https://d64gsuwffb70l.cloudfront.net/68ac614451bdb2104863c995_1756365350976_beb82c73.jpg" alt="ChromeTech Logo" className="w-8 h-8 rounded-lg" />
                <span className="text-white font-bold text-xl">ChromeTechnology</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentView('support')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentView === 'support' 
                    ? 'bg-blue-500/30 text-white border border-blue-400/50' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Support
              </button>
              <button
                onClick={() => setCurrentView('admin')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentView === 'admin' 
                    ? 'bg-purple-500/30 text-white border border-purple-400/50' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Admin
              </button>
              <button
                onClick={() => setCurrentView('rating')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentView === 'rating' 
                    ? 'bg-green-500/30 text-white border border-green-400/50' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Rating
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {currentView === 'support' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {!ticketSubmitted ? (
              <>
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Customer Support Center
                  </h1>
                  <p className="text-xl text-white/80 max-w-2xl mx-auto">
                    We're here to help! Submit your support request and our team will get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                    <img src="https://d64gsuwffb70l.cloudfront.net/68b000baf42988380b707524_1756365060427_442ae7f0.webp" alt="Chat" className="w-12 h-12 mx-auto mb-4 rounded-lg" />
                    <h3 className="text-white font-semibold mb-2">Expert Support</h3>
                    <p className="text-white/70 text-sm">Get help from our expert team during business hours with personalized assistance.</p>
                  </div>
                  <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                    <img src="https://d64gsuwffb70l.cloudfront.net/68b000baf42988380b707524_1756365062563_3daf1d66.webp" alt="Video" className="w-12 h-12 mx-auto mb-4 rounded-lg" />
                    <h3 className="text-white font-semibold mb-2">Video Support</h3>
                    <p className="text-white/70 text-sm">Schedule a video call with our experts for personalized assistance.</p>
                  </div>
                  <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                    <img src="https://d64gsuwffb70l.cloudfront.net/68b000baf42988380b707524_1756365064547_0f5258e9.webp" alt="Files" className="w-12 h-12 mx-auto mb-4 rounded-lg" />
                    <h3 className="text-white font-semibold mb-2">File Sharing</h3>
                    <p className="text-white/70 text-sm">Upload screenshots, videos, and documents to help us understand your issue.</p>
                  </div>
                </div>

                <SupportForm onSubmit={handleSupportSubmit} />
              </>
            ) : (
              <div className="text-center">
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Ticket Submitted!</h2>
                  <p className="text-white/80 mb-6">
                    Your support request has been received. You'll receive an automated email confirmation shortly.
                  </p>
                  <button
                    onClick={() => setTicketSubmitted(false)}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl"
                  >
                    Submit Another Ticket
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {currentView === 'admin' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <AdminDashboard 
              isAuthenticated={isAdminAuthenticated} 
              onLogin={handleAdminLogin} 
            />
          </div>
        )}

        {currentView === 'rating' && (
          <RatingSystem 
            ticketId="TK001" 
            onSubmit={handleRatingSubmit} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-lg bg-white/5 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">CT</span>
              </div>
              <span className="text-white font-semibold">ChromeTechnology</span>
            </div>
            <p className="text-white/60 text-sm">
              © 2019 ChromeTechnology. All rights reserved. | Premium Customer Support Platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;