import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-end opacity-5 animate-gradient-flow" />
      
      <div className="container mx-auto px-4 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text">
            Build Something Amazing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create beautiful, responsive web applications with our modern template.
            Start building your next great idea today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-gradient-start to-gradient-end">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;