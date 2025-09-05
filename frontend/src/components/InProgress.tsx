import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye, MessageSquare, Clock } from 'lucide-react';

export default function InProgress() {
  const inProgressComplaints = [
    {
      id: 'C001',
      subject: 'Metro station cleanliness issue',
      description: 'The Aluva metro station restrooms need immediate attention. Poor maintenance affecting passenger experience.',
      priority: 'High',
      department: 'Operations',
      assignedTo: 'John Doe',
      dateCreated: '2024-01-15',
      lastUpdate: '2024-01-18',
      daysOpen: 3
    },
    {
      id: 'C005',
      subject: 'Ticket machine malfunction',
      description: 'Multiple ticket vending machines at Kaloor station are out of order, causing long queues.',
      priority: 'Medium',
      department: 'Technical',
      assignedTo: 'Sarah Wilson',
      dateCreated: '2024-01-12',
      lastUpdate: '2024-01-17',
      daysOpen: 6
    },
    {
      id: 'C012',
      subject: 'Air conditioning not working',
      description: 'AC system in coach 3 of train TR-204 not functioning properly during peak hours.',
      priority: 'High',
      department: 'Engineering',
      assignedTo: 'Mike Johnson',
      dateCreated: '2024-01-10',
      lastUpdate: '2024-01-16',
      daysOpen: 8
    },
    {
      id: 'C018',
      subject: 'Platform announcement system',
      description: 'Audio announcement system unclear at MG Road station platform 2.',
      priority: 'Medium',
      department: 'Operations',
      assignedTo: 'Lisa Chen',
      dateCreated: '2024-01-14',
      lastUpdate: '2024-01-18',
      daysOpen: 4
    },
    {
      id: 'C023',
      subject: 'Escalator maintenance required',
      description: 'Escalator at Ernakulam South station making unusual noise and needs inspection.',
      priority: 'Low',
      department: 'Engineering',
      assignedTo: 'David Kumar',
      dateCreated: '2024-01-08',
      lastUpdate: '2024-01-15',
      daysOpen: 10
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'Engineering': return 'bg-blue-100 text-blue-800';
      case 'Operations': return 'bg-purple-100 text-purple-800';
      case 'Technical': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl text-gray-900 mb-2">In Progress Complaints</h1>
        <p className="text-sm md:text-base text-gray-600">Monitor and manage ongoing complaint resolutions</p>
      </div>

      <div className="grid gap-4 md:gap-6">
        {inProgressComplaints.map((complaint) => (
          <Card key={complaint.id} className="bg-white shadow-sm border border-gray-100 rounded-xl">
            <CardHeader className="pb-3 md:pb-4 p-4 md:p-6">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Badge variant="outline" className="bg-[#14b1b2]/10 text-[#14b1b2] border-[#14b1b2]/20 text-xs">
                      {complaint.id}
                    </Badge>
                    <h3 className="text-base md:text-lg text-gray-900 line-clamp-1">{complaint.subject}</h3>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                    <Badge className={`${getPriorityColor(complaint.priority)} text-xs`}>
                      {complaint.priority}
                    </Badge>
                    <Badge className={`${getDepartmentColor(complaint.department)} text-xs`}>
                      {complaint.department}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{complaint.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-t border-gray-100">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Assigned To</p>
                  <p className="text-gray-900">{complaint.assignedTo}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Date Created</p>
                  <p className="text-gray-900">{complaint.dateCreated}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Days Open</p>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-900">{complaint.daysOpen} days</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Add Update
                </Button>
                <Button className="flex-1 bg-[#14b1b2] hover:bg-[#14b1b2]/90 text-white">
                  Mark Resolved
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}