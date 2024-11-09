import { Card } from "@/components/ui/card";
import { Code, Layout, Zap } from "lucide-react";

const features = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Responsive Design",
    description: "Build beautiful interfaces that work seamlessly across all devices and screen sizes.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Fast Performance",
    description: "Optimized for speed with modern best practices and efficient code splitting.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Clean Code",
    description: "Well-structured and maintainable code following the latest best practices.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Amazing Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to build modern web applications, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-gradient-start">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;