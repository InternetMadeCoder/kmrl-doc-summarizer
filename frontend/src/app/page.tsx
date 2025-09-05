"use client"

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import NewComplaint from '../components/NewComplaint';
import InProgress from '../components/InProgress';
import Resolved from '../components/Resolved';
import Analytics from '../components/Analytics';

type AppSection = 'dashboard' | 'new-complaint' | 'in-progress' | 'resolved' | 'analytics';

export default function App() {
  const [activeSection, setActiveSection] = useState<AppSection>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'new-complaint':
        return <NewComplaint />;
      case 'in-progress':
        return <InProgress />;
      case 'resolved':
        return <Resolved />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className="flex pt-16 md:pt-20">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={(section) => {
            setActiveSection(section as AppSection);
            setIsMobileMenuOpen(false); // Close mobile menu when selecting item
          }}
          isMobileMenuOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <main className="flex-1 min-h-screen w-full">
          <div className="p-4 md:p-6">
            {renderContent()}
          </div>
        </main>
      </div>
      
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}