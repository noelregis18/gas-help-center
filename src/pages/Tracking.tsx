
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestTracker from "@/components/RequestTracker";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Tracking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
              
              <h1 className="text-3xl font-bold mt-4 mb-2">Track Your Request</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Enter your request ID to check the status and latest updates on your service request.
              </p>
            </div>
            
            <RequestTracker />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tracking;
