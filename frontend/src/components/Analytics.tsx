import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Clock, CheckCircle, AlertCircle, Users } from 'lucide-react';
import { useState } from 'react';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7days');

  // Mock data for charts
  const weeklyData = [
    { name: 'Mon', complaints: 24, resolved: 18 },
    { name: 'Tue', complaints: 32, resolved: 25 },
    { name: 'Wed', complaints: 18, resolved: 22 },
    { name: 'Thu', complaints: 28, resolved: 31 },
    { name: 'Fri', complaints: 45, resolved: 35 },
    { name: 'Sat', complaints: 38, resolved: 28 },
    { name: 'Sun', complaints: 22, resolved: 20 }
  ];

  const resolutionTrend = [
    { month: 'Aug', avgTime: 8.2 },
    { month: 'Sep', avgTime: 7.8 },
    { month: 'Oct', avgTime: 6.9 },
    { month: 'Nov', avgTime: 6.5 },
    { month: 'Dec', avgTime: 5.8 },
    { month: 'Jan', avgTime: 5.2 }
  ];

  const departmentData = [
    { name: 'Engineering', value: 35, color: '#3B82F6' },
    { name: 'Operations', value: 28, color: '#8B5CF6' },
    { name: 'Technical', value: 22, color: '#06B6D4' },
    { name: 'Finance', value: 15, color: '#10B981' }
  ];

  const priorityDistribution = [
    { name: 'High', value: 25, color: '#EF4444' },
    { name: 'Medium', value: 45, color: '#F59E0B' },
    { name: 'Low', value: 30, color: '#10B981' }
  ];

  const kpiData = [
    {
      title: 'Average Resolution Time',
      value: '5.2 days',
      change: '-12%',
      trend: 'down',
      icon: Clock,
      color: 'text-[#14b1b2]',
      bgColor: 'bg-[#14b1b2]/10'
    },
    {
      title: 'Customer Satisfaction',
      value: '4.3/5.0',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Resolution Rate',
      value: '94.2%',
      change: '+3%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'First Contact Resolution',
      value: '78%',
      change: '+8%',
      trend: 'up',
      icon: AlertCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const topIssues = [
    { issue: 'Train delays', count: 45, percentage: 18, trend: '+5%' },
    { issue: 'Station cleanliness', count: 38, percentage: 15, trend: '-2%' },
    { issue: 'Ticket machine issues', count: 32, percentage: 13, trend: '+12%' },
    { issue: 'AC/Ventilation', count: 28, percentage: 11, trend: '-8%' },
    { issue: 'WiFi connectivity', count: 25, percentage: 10, trend: '+3%' }
  ];

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights into complaint management performance</p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-48 bg-white border-gray-200 rounded-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="3months">Last 3 months</SelectItem>
            <SelectItem value="year">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={index} className="bg-white shadow-sm border border-gray-100 rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                    <Icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendIcon className="h-4 w-4" />
                    {kpi.change}
                  </div>
                </div>
                <div>
                  <p className="text-2xl text-gray-900 mb-1">{kpi.value}</p>
                  <p className="text-sm text-gray-600">{kpi.title}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Complaints vs Resolved */}
        <Card className="bg-white shadow-sm border border-gray-100 rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Daily Complaints vs Resolved</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="complaints" fill="#14b1b2" name="New Complaints" radius={[4, 4, 0, 0]} />
                <Bar dataKey="resolved" fill="#10B981" name="Resolved" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Resolution Time Trend */}
        <Card className="bg-white shadow-sm border border-gray-100 rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Average Resolution Time Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={resolutionTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="avgTime" 
                  stroke="#14b1b2" 
                  strokeWidth={3}
                  dot={{ fill: '#14b1b2', strokeWidth: 2, r: 6 }}
                  name="Avg Days"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Distribution */}
        <Card className="bg-white shadow-sm border border-gray-100 rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Complaints by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Priority Distribution */}
        <Card className="bg-white shadow-sm border border-gray-100 rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Priority Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={priorityDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {priorityDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Issues */}
      <Card className="bg-white shadow-sm border border-gray-100 rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">Top Issues This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topIssues.map((issue, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#14b1b2] text-white rounded-full text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-900">{issue.issue}</p>
                    <p className="text-sm text-gray-600">{issue.count} complaints</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-900">{issue.percentage}%</p>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      issue.trend.startsWith('+') 
                        ? 'bg-red-50 text-red-600 border-red-200' 
                        : 'bg-green-50 text-green-600 border-green-200'
                    }`}
                  >
                    {issue.trend}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}