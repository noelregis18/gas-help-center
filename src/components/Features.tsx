
import { FileText, Search, Clock, UserCheck, AlertTriangle, BarChart3 } from "lucide-react";

const features = [
  {
    name: 'Easy Request Submission',
    description: 'Submit service requests online with all the details and attachments needed for quick resolution.',
    icon: FileText,
  },
  {
    name: 'Real-time Tracking',
    description: 'Track the status of your service requests in real-time, from submission to resolution.',
    icon: Search,
  },
  {
    name: 'Status Updates',
    description: 'Receive timely updates about the progress of your service requests.',
    icon: Clock,
  },
  {
    name: 'Account Management',
    description: 'Manage your account information, including contact details and service history.',
    icon: UserCheck,
  },
  {
    name: 'Emergency Reporting',
    description: 'Report gas emergencies quickly with prioritized handling and immediate response.',
    icon: AlertTriangle,
  },
  {
    name: 'Usage Analytics',
    description: 'View and analyze your gas usage patterns and history for better management.',
    icon: BarChart3,
  },
];

const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary animate-fade-in">Streamlined Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl animate-fade-in" style={{ animationDelay: "100ms" }}>
            Everything you need for efficient gas utility service
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Our platform simplifies gas utility service management with a comprehensive 
            set of features designed to save you time and provide a better experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={feature.name} className="relative pl-16 hover-scale animate-fade-in" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg feature-icon">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
