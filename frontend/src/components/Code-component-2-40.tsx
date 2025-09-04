import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Download, Upload } from 'lucide-react';

interface SummaryScreenProps {
  onUploadAnother: () => void;
}

export default function SummaryScreen({ onUploadAnother }: SummaryScreenProps) {
  const handleDownload = () => {
    // Mock download functionality
    console.log('Downloading summary...');
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <Card className="bg-white shadow-lg rounded-2xl border border-gray-100">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-gray-900">
              Document Summary
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Summary Content */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This document outlines the quarterly financial performance of the organization, 
                highlighting key revenue streams and expenditure patterns. The report demonstrates 
                consistent growth in core business segments with particular strength in digital 
                services and client retention metrics.
              </p>
              
              <p>
                Key findings include a 15% increase in overall revenue compared to the previous 
                quarter, driven primarily by new client acquisitions and expanded service offerings. 
                Operating expenses remained well-controlled, resulting in improved profit margins 
                and positive cash flow projections for the upcoming fiscal period.
              </p>
              
              <p>
                The document recommends continued investment in technology infrastructure and 
                human resources to support sustainable growth. Strategic recommendations focus 
                on market expansion opportunities and process optimization initiatives that could 
                further enhance operational efficiency and competitive positioning.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={handleDownload}
                className="flex-1 h-12 bg-[#14b1b2] hover:bg-[#14b1b2]/90 text-white rounded-xl transition-colors duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Summary
              </Button>
              
              <Button 
                onClick={onUploadAnother}
                variant="outline"
                className="flex-1 h-12 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors duration-200"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload Another File
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}