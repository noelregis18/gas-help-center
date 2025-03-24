
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Search, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface RequestDetails {
  id: string;
  type: string;
  status: 'pending' | 'processing' | 'complete';
  dateSubmitted: string;
  dateUpdated: string;
  description: string;
  customerName: string;
  assignedTo?: string;
  estimatedCompletion?: string;
  updates: {
    date: string;
    message: string;
  }[];
}

const RequestTracker = () => {
  const { toast } = useToast();
  const [requestId, setRequestId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [requestDetails, setRequestDetails] = useState<RequestDetails | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestId) return;
    
    setIsLoading(true);
    setNotFound(false);
    setRequestDetails(null);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, only show results for IDs starting with "REQ-"
      if (requestId.startsWith('REQ-')) {
        // Mock data
        const mockData: RequestDetails = {
          id: requestId,
          type: 'Service Repair',
          status: Math.random() > 0.6 ? 'complete' : Math.random() > 0.3 ? 'processing' : 'pending',
          dateSubmitted: new Date(Date.now() - Math.random() * 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          dateUpdated: new Date(Date.now() - Math.random() * 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          description: 'Gas leak repair in kitchen area',
          customerName: 'John Smith',
          updates: [
            {
              date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              message: 'Request received and scheduled for initial assessment.'
            },
            {
              date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              message: 'Technician assigned to your request.'
            },
            {
              date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              message: 'Initial assessment complete. Repair parts ordered.'
            }
          ]
        };
        
        if (mockData.status === 'processing' || mockData.status === 'complete') {
          mockData.assignedTo = 'Technician: Mike Johnson';
          mockData.estimatedCompletion = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
          
          if (mockData.status === 'complete') {
            mockData.updates.push({
              date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              message: 'Repair completed successfully. All systems checked and verified.'
            });
          }
        }
        
        setRequestDetails(mockData);
      } else {
        setNotFound(true);
        toast({
          title: "Request Not Found",
          description: "We couldn't find a request with that ID. Please check and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Search Failed",
        description: "There was an error searching for your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'processing':
        return <ArrowRight className="w-5 h-5 text-blue-500" />;
      case 'complete':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'processing':
        return 'In Progress';
      case 'complete':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'status-badge status-pending';
      case 'processing':
        return 'status-badge status-processing';
      case 'complete':
        return 'status-badge status-complete';
      default:
        return 'status-badge';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-card rounded-xl p-6 sm:p-8">
        <h3 className="text-lg font-medium mb-6">Track Your Service Request</h3>
        
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="sm:col-span-3 space-y-2">
              <Label htmlFor="requestId">Request ID</Label>
              <Input
                id="requestId"
                placeholder="e.g. REQ-1234567"
                value={requestId}
                onChange={(e) => setRequestId(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-end">
              <Button 
                type="submit" 
                className="w-full h-10 btn-animated"
                disabled={isLoading}
              >
                {isLoading ? (
                  'Searching...'
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Track
                  </>
                )}
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Enter the request ID that was provided when you submitted your service request.
            For demo purposes, try an ID like "REQ-1234567".
          </p>
        </form>
      </div>
      
      {requestDetails && (
        <div className="glass-card rounded-xl p-6 sm:p-8 animate-scale-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Request Details</h3>
            <span className={getStatusClass(requestDetails.status)}>
              {getStatusIcon(requestDetails.status)}
              <span className="ml-1.5">{getStatusText(requestDetails.status)}</span>
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <dl className="space-y-3">
                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Request ID</dt>
                  <dd className="mt-1 text-sm">{requestDetails.id}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Service Type</dt>
                  <dd className="mt-1 text-sm">{requestDetails.type}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Customer Name</dt>
                  <dd className="mt-1 text-sm">{requestDetails.customerName}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</dt>
                  <dd className="mt-1 text-sm">{requestDetails.description}</dd>
                </div>
              </dl>
            </div>
            
            <div>
              <dl className="space-y-3">
                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Date Submitted</dt>
                  <dd className="mt-1 text-sm">{requestDetails.dateSubmitted}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</dt>
                  <dd className="mt-1 text-sm">{requestDetails.dateUpdated}</dd>
                </div>
                {requestDetails.assignedTo && (
                  <div className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Assigned To</dt>
                    <dd className="mt-1 text-sm">{requestDetails.assignedTo}</dd>
                  </div>
                )}
                {requestDetails.estimatedCompletion && (
                  <div className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Estimated Completion</dt>
                    <dd className="mt-1 text-sm">{requestDetails.estimatedCompletion}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4">Progress Updates</h4>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              <ul className="space-y-4">
                {requestDetails.updates.map((update, index) => (
                  <li key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-7 w-7 flex items-center justify-center rounded-full bg-primary bg-opacity-10 border-2 border-primary">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="glass-card rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-primary">{update.date}</span>
                      </div>
                      <p className="text-sm">{update.message}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {notFound && (
        <div className="text-center py-8 animate-fade-in">
          <AlertCircle className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium mb-2">Request Not Found</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            We couldn't find a request with the ID you provided. Please check the ID and try again.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            For demo purposes, try an ID like "REQ-1234567".
          </p>
        </div>
      )}
    </div>
  );
};

export default RequestTracker;
