
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RequestService = () => {
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
              
              <h1 className="text-3xl font-bold mt-4 mb-2">Request a Service</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below to submit a new service request. We'll respond as quickly as possible.
              </p>
            </div>
            
            <RequestForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestService;
