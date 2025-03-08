import { Code, Cpu, BarChart, Users, Clock, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Auto-Generated Sandboxes",
      description:
        "Instantly create isolated environments for candidates to showcase their skills in real-time.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Live Code Previews",
      description:
        "See code changes and project progress in real-time during the interview process.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Multi-Format Support",
      description:
        "Conduct technical, behavioral, design, and other specialized interviews on a single platform.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Comprehensive Reports",
      description:
        "Get detailed performance metrics and insights to make informed hiring decisions.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Time-Efficient Process",
      description:
        "Streamline the interview process and reduce time-to-hire with our efficient platform.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "AI-Assisted Talent Evaluation",
      description:
        "Empower hiring decisions with AI-driven objective assessments, while democratizing access to AI tools that help candidates showcase their skills more effectively.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Hiring
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            No more hypotheticals—build, lead, and collaborate in environments
            mirroring real workplaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 bg-white inline-flex p-3 rounded-lg shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
