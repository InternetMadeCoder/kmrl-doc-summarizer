import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Upload, FileText, Plus, X } from "lucide-react";

export default function NewComplaint() {
  const [complaintDetails, setComplaintDetails] = useState("");
  const [priority, setPriority] = useState("");
  const [department, setDepartment] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [otherFiles, setOtherFiles] = useState<File[]>([]);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const otherInputRef = useRef<HTMLInputElement>(null);

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleOtherFilesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setOtherFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setOtherFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log("Submitting complaint:", {
      details: complaintDetails,
      priority,
      department,
      pdfFile,
      otherFiles,
    });
    // Handle form submission
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 md:mb-6 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl text-gray-900">New Complaint</h1>
        <Button
          onClick={handleSubmit}
          className="bg-[#14b1b2] hover:bg-[#14b1b2]/90 text-white rounded-xl px-6 py-2 transition-colors duration-200 w-full sm:w-auto"
        >
          Submit Complaint
        </Button>
      </div>

      <Card className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-100 rounded-xl">
        <CardHeader className="pb-4 md:pb-6">
          <CardTitle className="text-xl md:text-2xl text-gray-900">
            Complaint Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
          {/* Complaint Details */}
          <div className="space-y-2">
            <Label htmlFor="complaint-details">Complaint Details</Label>
            <Textarea
              id="complaint-details"
              placeholder="Describe your complaint in detail..."
              value={complaintDetails}
              onChange={(e) => setComplaintDetails(e.target.value)}
              className="min-h-32 bg-white border-gray-200 rounded-xl resize-none"
            />
          </div>

          {/* Priority and Department */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger className="bg-white border-gray-200 rounded-xl">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="bg-white border-gray-200 rounded-xl">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="customer-service">
                    Customer Service
                  </SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="it-support">IT Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* PDF Upload */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Upload className="w-4 h-4 text-gray-600" />
              <Label>Upload PDF</Label>
            </div>
            <Button
              onClick={() => pdfInputRef.current?.click()}
              className="w-full h-10 md:h-12 bg-[#14b1b2] hover:bg-[#14b1b2]/90 text-white rounded-xl transition-colors duration-200 text-sm md:text-base"
            >
              <Upload className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Choose PDF File
            </Button>
            <input
              ref={pdfInputRef}
              type="file"
              accept=".pdf"
              onChange={handlePdfUpload}
              className="hidden"
            />
            {pdfFile && (
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <FileText className="w-5 h-5 text-[#14b1b2]" />
                <span className="text-sm text-gray-700">{pdfFile.name}</span>
              </div>
            )}
          </div>

          {/* Other Documents Upload */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-600" />
              <Label>Upload Other Documents</Label>
            </div>

            <Button
              variant="outline"
              onClick={() => otherInputRef.current?.click()}
              className="w-full h-10 md:h-12 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors duration-200 text-sm md:text-base"
            >
              <Plus className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Add Documents
            </Button>
            <input
              ref={otherInputRef}
              type="file"
              multiple
              onChange={handleOtherFilesUpload}
              className="hidden"
            />

            {otherFiles.length > 0 && (
              <div className="space-y-2">
                {otherFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">{file.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button - Hidden on mobile since it's in header */}
          <Button
            onClick={handleSubmit}
            disabled={!complaintDetails || !priority || !department}
            className="w-full h-10 md:h-12 bg-[#14b1b2] hover:bg-[#14b1b2]/90 text-white rounded-xl transition-colors duration-200 sm:hidden"
          >
            Submit Complaint
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
