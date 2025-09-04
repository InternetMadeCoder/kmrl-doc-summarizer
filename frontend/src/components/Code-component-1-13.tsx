import { useState, useRef } from 'react';
import { Upload, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function FileUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [department, setDepartment] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === 'application/pdf' || 
          droppedFile.type === 'application/msword' || 
          droppedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(droppedFile);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const handleUpload = () => {
    if (file && department) {
      console.log('Uploading file:', file.name, 'to department:', department);
      // Handle file upload logic here
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {/* Upload Box */}
      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 bg-white shadow-sm ${
          dragActive ? 'border-[#14b1b2] bg-[#14b1b2]/5' : 'border-[#14b1b2]'
        } hover:border-[#14b1b2] hover:bg-[#14b1b2]/5`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="hidden"
        />
        
        <div className="space-y-6">
          {/* Upload Icon */}
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-[#14b1b2]/10">
              <Upload className="h-12 w-12 text-[#14b1b2]" />
            </div>
          </div>
          
          {/* Upload Text */}
          <div className="space-y-2">
            {file ? (
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-5 w-5 text-[#14b1b2]" />
                <span className="text-gray-700">{file.name}</span>
              </div>
            ) : (
              <>
                <p className="text-gray-700">
                  Drag & drop your PDF or DOC here, or click to upload
                </p>
                <p className="text-sm text-gray-500">
                  Supports PDF, DOC, and DOCX files
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Department Selector */}
      <div className="space-y-3">
        <label htmlFor="department" className="block text-gray-700">
          Select Department
        </label>
        <Select value={department} onValueChange={setDepartment}>
          <SelectTrigger className="w-full bg-white border-gray-200 rounded-xl h-12">
            <SelectValue placeholder="Choose a department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hr">Human Resources</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="engineering">Engineering</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Upload Button */}
      <Button 
        onClick={handleUpload}
        disabled={!file || !department}
        className="w-full h-12 bg-[#14b1b2] hover:bg-[#14b1b2]/90 text-white rounded-xl transition-colors duration-200"
      >
        Upload File
      </Button>
    </div>
  );
}