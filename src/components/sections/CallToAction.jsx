import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gradient-start to-gradient-end rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing applications with our template.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-gradient-start hover:bg-gray-100">
            Start Building Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;