
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, AlertCircle, FileText, User, BarChart3, Home } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const requestsData = [
  {
    id: "REQ-7654321",
    type: "Gas Leak Repair",
    status: "complete",
    date: "2023-06-15",
    address: "123 Main St, Anytown, USA"
  },
  {
    id: "REQ-8765432",
    type: "New Connection",
    status: "processing",
    date: "2023-07-10",
    address: "456 Oak Ave, Anytown, USA"
  },
  {
    id: "REQ-9876543",
    type: "Billing Dispute",
    status: "pending",
    date: "2023-08-05",
    address: "789 Pine Rd, Anytown, USA"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "pending":
      return <Clock className="w-5 h-5 text-yellow-500" />;
    case "processing":
      return <ArrowRight className="w-5 h-5 text-blue-500" />;
    case "complete":
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    default:
      return <AlertCircle className="w-5 h-5 text-gray-500" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "pending":
      return "Pending";
    case "processing":
      return "In Progress";
    case "complete":
      return "Completed";
    default:
      return "Unknown";
  }
};

const getStatusClass = (status: string) => {
  switch (status) {
    case "pending":
      return "status-badge status-pending";
    case "processing":
      return "status-badge status-processing";
    case "complete":
      return "status-badge status-complete";
    default:
      return "status-badge";
  }
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 mb-2">
                <h1 className="text-3xl font-bold">Customer Dashboard</h1>
                <div className="mt-4 md:mt-0">
                  <Link to="/request-service">
                    <Button className="btn-animated">
                      New Service Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                View and manage your service requests and account information
              </p>
            </div>
            
            <Tabs defaultValue="overview" onValueChange={setActiveTab} className="animate-fade-in">
              <TabsList className="grid grid-cols-3 sm:grid-cols-5 mb-8">
                <TabsTrigger value="overview" className="text-center">
                  <Home className="h-4 w-4 mr-2 inline-block" />
                  <span className="hidden sm:inline-block">Overview</span>
                </TabsTrigger>
                <TabsTrigger value="requests" className="text-center">
                  <FileText className="h-4 w-4 mr-2 inline-block" />
                  <span className="hidden sm:inline-block">Requests</span>
                </TabsTrigger>
                <TabsTrigger value="account" className="text-center">
                  <User className="h-4 w-4 mr-2 inline-block" />
                  <span className="hidden sm:inline-block">Account</span>
                </TabsTrigger>
                <TabsTrigger value="usage" className="text-center">
                  <BarChart3 className="h-4 w-4 mr-2 inline-block" />
                  <span className="hidden sm:inline-block">Usage</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="text-center">
                  <AlertCircle className="h-4 w-4 mr-2 inline-block" />
                  <span className="hidden sm:inline-block">Alerts</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="hover-scale">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Active Requests</CardTitle>
                      <CardDescription>Current service requests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">2</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Out of 3 total requests</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Next Appointment</CardTitle>
                      <CardDescription>Scheduled service visit</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-medium">July 25, 2023</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">9:00 AM - 12:00 PM</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Latest Bill</CardTitle>
                      <CardDescription>Current billing period</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl font-bold">$124.56</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Due on Aug 15, 2023</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Service Requests</CardTitle>
                    <CardDescription>Status of your recent service requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full table-auto">
                        <thead>
                          <tr className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2 hidden md:table-cell">Address</th>
                            <th className="px-4 py-2"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          {requestsData.map((request) => (
                            <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                              <td className="px-4 py-3 text-sm font-medium">{request.id}</td>
                              <td className="px-4 py-3 text-sm">{request.type}</td>
                              <td className="px-4 py-3 text-sm">
                                <span className={getStatusClass(request.status)}>
                                  {getStatusIcon(request.status)}
                                  <span className="ml-1.5">{getStatusText(request.status)}</span>
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm">{request.date}</td>
                              <td className="px-4 py-3 text-sm hidden md:table-cell">{request.address}</td>
                              <td className="px-4 py-3 text-sm text-right">
                                <Link to={`/tracking?id=${request.id}`}>
                                  <Button variant="ghost" size="sm">
                                    View
                                  </Button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="requests" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Service Request History</CardTitle>
                    <CardDescription>All your service requests and their current status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-center py-6">This tab will display a comprehensive list of all service requests.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="account" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Your personal and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-center py-6">This tab will display the user's account information and allow them to edit it.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="usage" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Gas Usage History</CardTitle>
                    <CardDescription>Track and analyze your gas consumption over time</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-center py-6">This tab will display gas usage analytics and charts.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications & Alerts</CardTitle>
                    <CardDescription>Manage your notification preferences and view alerts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-center py-6">This tab will display notifications and allow users to manage their alert preferences.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
