
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { FileUp, Send, ArrowRight } from 'lucide-react';

const serviceTypes = [
  { id: 'connection', name: 'New Connection' },
  { id: 'repair', name: 'Service Repair' },
  { id: 'inspection', name: 'Gas Inspection' },
  { id: 'billing', name: 'Billing Issue' },
  { id: 'meter', name: 'Meter Reading' },
  { id: 'emergency', name: 'Emergency' },
];

const priorities = [
  { id: 'low', name: 'Low' },
  { id: 'medium', name: 'Medium' },
  { id: 'high', name: 'High' },
  { id: 'urgent', name: 'Urgent' },
];

const RequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    serviceType: '',
    customerName: '',
    email: '',
    phone: '',
    address: '',
    priority: 'medium',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate request ID (in a real app, this would come from the backend)
      const requestId = 'REQ-' + Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
      
      toast({
        title: "Service Request Submitted",
        description: `Your request has been submitted successfully. Request ID: ${requestId}`,
      });
      
      // Clear form
      setFormData({
        serviceType: '',
        customerName: '',
        email: '',
        phone: '',
        address: '',
        priority: 'medium',
        description: '',
      });
      setSelectedFile(null);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      <div className="glass-card rounded-xl p-6 sm:p-8">
        <h3 className="text-lg font-medium mb-6">Service Information</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type</Label>
              <Select 
                value={formData.serviceType} 
                onValueChange={(value) => handleSelectChange('serviceType', value)}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <RadioGroup 
                value={formData.priority}
                onValueChange={(value) => handleSelectChange('priority', value)}
                className="flex space-x-4"
              >
                {priorities.map((priority) => (
                  <div key={priority.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={priority.id} id={priority.id} />
                    <Label htmlFor={priority.id}>{priority.name}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description"
              name="description"
              placeholder="Please describe your issue in detail"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              required
              className="resize-none"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="file">Attachments (Optional)</Label>
            <label 
              htmlFor="file" 
              className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary focus:outline-none dark:bg-gray-900 dark:border-gray-700 dark:hover:border-primary"
            >
              <span className="flex flex-col items-center space-y-2">
                <FileUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {selectedFile ? selectedFile.name : 'Drop files to upload or click here'}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Supported formats: JPG, PNG, PDF (max 10MB)
                </span>
              </span>
              <input 
                id="file" 
                type="file" 
                className="hidden" 
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
              />
            </label>
          </div>
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-6 sm:p-8">
        <h3 className="text-lg font-medium mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="customerName">Full Name</Label>
              <Input
                id="customerName"
                name="customerName"
                placeholder="Your full name"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Service Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="123 Main St, Anytown, USA"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button
          type="submit"
          className="group btn-animated py-6 px-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              Submit Request
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default RequestForm;
