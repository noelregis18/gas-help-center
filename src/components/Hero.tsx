
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[calc(50%-4rem)] top-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-24 xl:left-[calc(50%-24rem)]" aria-hidden="true">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 opacity-20" style={{ clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700 hover:ring-gray-900/20 dark:hover:ring-gray-600 animate-pulse-subtle">
              Making gas utilities simple and accessible.{' '}
              <a href="#" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in">
            <span className="block text-primary">Simplifying</span>
            <span className="block">Gas Utility Services</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Submit service requests, track their status, and manage your account all in one place.
            Say goodbye to long wait times and hello to efficient service.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Link to="/request-service">
              <Button className="group btn-animated text-base py-6 px-8">
                Request Service
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/tracking" className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100 group">
              Track Existing Request <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-16 flow-root sm:mt-24 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="relative -m-2 rounded-xl bg-gray-900/5 dark:bg-gray-100/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <div className="rounded-lg shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-full rounded-md shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
