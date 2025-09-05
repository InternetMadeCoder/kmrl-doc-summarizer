import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Clock, CheckCircle, MessageCircle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Complaints',
      value: '1250',
      icon: MessageCircle,
      color: 'text-[#14b1b2]',
      bgColor: 'bg-[#14b1b2]/10'
    },
    {
      title: 'Pending',
      value: '320',
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Resolved',
      value: '930',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const recentComplaints = [
    { id: 1, subject: 'Infrastructure', status: 'In Progress', priority: 'High', department: 'Engineering' },
    { id: 2, subject: 'Infrastructure', status: 'Resolved', priority: 'Medium', department: 'Engineering' },
    { id: 3, subject: 'Service', status: 'Pending', priority: 'High', department: 'Operations' },
    { id: 4, subject: 'Service', status: 'Resolved', priority: 'Low', department: 'Customer Service' },
    { id: 5, subject: 'Billing', status: 'In Progress', priority: 'Medium', department: 'Finance' },
    { id: 6, subject: 'Technical', status: 'Pending', priority: 'High', department: 'IT Support' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-[#14b1b2]/10 text-[#14b1b2]';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl text-gray-900">Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <TrendingUp className="h-4 w-4" />
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white shadow-sm border border-gray-100 rounded-xl">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-xl md:text-2xl text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-2 md:p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.color}`} />
                  </div>
                </div>
                {index === 0 && (
                  <div className="flex items-center mt-2 md:mt-3 text-sm text-green-600">
                    <TrendingUp className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    +8% from last month
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Complaints */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        <div className="xl:col-span-2">
          <Card className="bg-white shadow-sm border border-gray-100 rounded-xl">
            <CardHeader className="pb-3 md:pb-6">
              <CardTitle className="text-lg md:text-xl text-gray-900">Recent Complaints</CardTitle>
            </CardHeader>
            <CardContent className="p-0 md:px-6 md:pb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="hidden md:table-header-group">
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-2 text-sm text-gray-600">ID</th>
                      <th className="text-left py-3 px-2 text-sm text-gray-600">Subject</th>
                      <th className="text-left py-3 px-2 text-sm text-gray-600">Status</th>
                      <th className="text-left py-3 px-2 text-sm text-gray-600">Priority</th>
                      <th className="text-left py-3 px-2 text-sm text-gray-600 hidden lg:table-cell">Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentComplaints.map((complaint) => (
                      <tr key={complaint.id} className="border-b border-gray-50 hover:bg-gray-50">
                        {/* Mobile Card View */}
                        <td className="md:hidden p-4" colSpan={5}>
                          <div className="space-y-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-sm text-gray-900">#{complaint.id}</p>
                                <p className="text-sm text-gray-900 mt-1">{complaint.subject}</p>
                              </div>
                              <div className="flex flex-col gap-1">
                                <Badge className={`${getStatusColor(complaint.status)} border-0 text-xs`}>
                                  {complaint.status}
                                </Badge>
                                <Badge className={`${getPriorityColor(complaint.priority)} border-0 text-xs`}>
                                  {complaint.priority}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">{complaint.department}</p>
                          </div>
                        </td>

                        {/* Desktop Table View */}
                        <td className="hidden md:table-cell py-3 px-2 text-sm text-gray-900">#{complaint.id}</td>
                        <td className="hidden md:table-cell py-3 px-2 text-sm text-gray-900 max-w-[200px] truncate">{complaint.subject}</td>
                        <td className="hidden md:table-cell py-3 px-2">
                          <Badge className={`${getStatusColor(complaint.status)} border-0 text-xs`}>
                            {complaint.status}
                          </Badge>
                        </td>
                        <td className="hidden md:table-cell py-3 px-2">
                          <Badge className={`${getPriorityColor(complaint.priority)} border-0 text-xs`}>
                            {complaint.priority}
                          </Badge>
                        </td>
                        <td className="hidden lg:table-cell py-3 px-2 text-sm text-gray-600">{complaint.department}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Complaints by Type */}
        <Card className="bg-white shadow-sm border border-gray-100 rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Complaints by Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: 'Infrastructure', count: 45, percentage: 35 },
                { type: 'Service', count: 32, percentage: 25 },
                { type: 'Billing', count: 28, percentage: 22 },
                { type: 'Technical', count: 23, percentage: 18 }
              ].map((item) => (
                <div key={item.type} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">{item.type}</span>
                    <span className="text-gray-900">{item.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#14b1b2] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}