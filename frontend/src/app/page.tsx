"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import FileUpload from '../components/FileUpload';
import LoadingScreen from '../components/LoadingScreen';
import SummaryScreen from '../components/SummaryScreen';

type AppState = 'upload' | 'loading' | 'summary';

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('upload');

  const handleFileUpload = (file: File) => {
    setCurrentState('loading');
    
    // Simulate processing time
    setTimeout(() => {
      setCurrentState('summary');
    }, 3000);
  };

  const handleUploadAnother = () => {
    setCurrentState('upload');
  };

  const renderContent = () => {
    switch (currentState) {
      case 'upload':
        return (
          <div className="flex items-center justify-center min-h-screen p-6 pt-28">
            <div className="w-full max-w-2xl">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-3xl mb-3 text-gray-900">
                  PDF Summarizer
                </h1>
                <p className="text-gray-600">
                  Upload your PDF document and get an AI-powered summary instantly
                </p>
              </div>

              {/* File Upload Component */}
              <FileUpload onUpload={handleFileUpload} />
            </div>
          </div>
        );
      
      case 'loading':
        return <LoadingScreen />;
      
      case 'summary':
        return <SummaryScreen onUploadAnother={handleUploadAnother} />;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {renderContent()}
    </div>
  );
}