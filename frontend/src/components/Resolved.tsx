import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Eye, Download, Search, CheckCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Resolved() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  const resolvedComplaints = [
    {
      id: 'C002',
      subject: 'Platform safety barriers needed',
      description: 'Request for additional safety barriers at Edappally station platform edges.',
      priority: 'High',
      department: 'Engineering',
      resolvedBy: 'Alex Thompson',
      dateCreated: '2024-01-05',
      dateResolved: '2024-01-14',
      resolutionTime: 9,
      satisfaction: 4.5,
      resolutionSummary: 'Safety barriers installed and tested. Platform now meets all safety standards.'
    },
    {
      id: 'C003',
      subject: 'WiFi connectivity issues',
      description: 'Poor WiFi signal strength in coaches during peak hours affecting passenger connectivity.',
      priority: 'Medium',
      department: 'Technical',
      resolvedBy: 'Priya Nair',
      dateCreated: '2024-01-08',
      dateResolved: '2024-01-16',
      resolutionTime: 8,
      satisfaction: 4.2,
      resolutionSummary: 'WiFi infrastructure upgraded with additional access points installed in all coaches.'
    },
    {
      id: 'C004',
      subject: 'Billing discrepancy in monthly pass',
      description: 'Incorrect charges applied to monthly pass renewal for senior citizen category.',
      priority: 'Medium',
      department: 'Finance',
      resolvedBy: 'Rajesh Kumar',
      dateCreated: '2024-01-03',
      dateResolved: '2024-01-12',
      resolutionTime: 9,
      satisfaction: 5.0,
      resolutionSummary: 'Billing error corrected and refund processed. System updated to prevent future occurrences.'
    },
    {
      id: 'C006',
      subject: 'Lost and found inquiry',
      description: 'Passenger lost mobile phone in coach 2 on January 7th evening service.',
      priority: 'Low',
      department: 'Operations',
      resolvedBy: 'Maria George',
      dateCreated: '2024-01-08',
      dateResolved: '2024-01-11',
      resolutionTime: 3,
      satisfaction: 4.8,
      resolutionSummary: 'Mobile phone located in lost property and returned to passenger with proper verification.'
    },
    {
      id: 'C007',
      subject: 'Train schedule delays',
      description: 'Consistent 5-10 minute delays during morning rush hour affecting commuter schedules.',
      priority: 'High',
      department: 'Operations',
      resolvedBy: 'James Wilson',
      dateCreated: '2024-01-01',
      dateResolved: '2024-01-15',
      resolutionTime: 14,
      satisfaction: 4.0,
      resolutionSummary: 'Schedule optimization implemented with improved signal coordination reducing delays by 80%.'
    },
    {
      id: 'C008',
      subject: 'Parking space shortage',
      description: 'Insufficient parking spaces at Companypady station causing inconvenience to commuters.',
      priority: 'Medium',
      department: 'Operations',
      resolvedBy: 'Anita Menon',
      dateCreated: '2023-12-28',
      dateResolved: '2024-01-10',
      resolutionTime: 13,
      satisfaction: 4.3,
      resolutionSummary: 'Additional parking area constructed with 50 new spaces and improved traffic flow design.'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'Engineering': return 'bg-blue-100 text-blue-800';
      case 'Operations': return 'bg-purple-100 text-purple-800';
      case 'Technical': return 'bg-indigo-100 text-indigo-800';
      case 'Finance': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSatisfactionColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4.0) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredComplaints = resolvedComplaints.filter(complaint => {
    const matchesSearch = complaint.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || complaint.department === filterDepartment;
    const matchesPriority = filterPriority === 'all' || complaint.priority === filterPriority;
    
    return matchesSearch && matchesDepartment && matchesPriority;
  });

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-2xl text-gray-900 mb-2">Resolved Complaints</h1>
        <p className="text-gray-600">Review successfully resolved complaints and their outcomes</p>
      </div>

      {/* Filters */}
      <Card className="mb-6 bg-white shadow-sm border border-gray-100 rounded-xl">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search complaints..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-200 rounded-lg"
              />
            </div>
            
            <Select value={filterDepartment} onValueChange={setFilterDepartment}>
              <SelectTrigger className="bg-white border-gray-200 rounded-lg">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Operations">Operations</SelectItem>
                <SelectItem value="Technical">Technical</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterPriority} onValueChange={setFilterPriority}>
              <SelectTrigger className="bg-white border-gray-200 rounded-lg">
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              className="border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resolved Complaints Grid */}
      <div className="grid gap-6">
        {filteredComplaints.map((complaint) => (
          <Card key={complaint.id} className="bg-white shadow-sm border border-gray-100 rounded-xl">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {complaint.id}
                  </Badge>
                  <h3 className="text-lg text-gray-900">{complaint.subject}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getPriorityColor(complaint.priority)}>
                    {complaint.priority}
                  </Badge>
                  <Badge className={getDepartmentColor(complaint.department)}>
                    {complaint.department}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{complaint.description}</p>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-sm text-green-800 mb-2">Resolution Summary</h4>
                <p className="text-green-700 text-sm">{complaint.resolutionSummary}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 border-t border-gray-100">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Resolved By</p>
                  <p className="text-gray-900">{complaint.resolvedBy}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Resolution Time</p>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-900">{complaint.resolutionTime} days</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Date Resolved</p>
                  <p className="text-gray-900">{complaint.dateResolved}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Satisfaction</p>
                  <p className={`${getSatisfactionColor(complaint.satisfaction)}`}>
                    ★ {complaint.satisfaction}/5.0
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Full Details
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredComplaints.length === 0 && (
        <Card className="bg-white shadow-sm border border-gray-100 rounded-xl">
          <CardContent className="text-center py-12">
            <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg text-gray-900 mb-2">No complaints found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}