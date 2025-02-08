import React from "react";
import { ClipboardList, PhoneCall, Wrench, CheckCircle2 } from "lucide-react";

const ProcessStep = ({ icon, title, description, step }) => (
  <div className="relative flex items-start space-x-4 group">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-2 relative z-10">
        {icon}
      </div>
      <div className="h-full w-0.5 bg-gray-200 absolute top-16 group-last:hidden"></div>
    </div>
    <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        <span className="text-primary mr-2">Step {step}</span>
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const OperationalProcess = () => {
  const processSteps = [
    {
      icon: <PhoneCall size={32} />,
      title: "Initial Consultation",
      description:
        "Contact us or fill out our online form. Our team will gather initial information about your HVAC needs.",
    },
    {
      icon: <ClipboardList size={32} />,
      title: "Assessment & Diagnosis",
      description:
        "Our expert technicians conduct a thorough on-site evaluation of your HVAC system and discuss potential solutions.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Professional Service",
      description:
        "We perform the required service, whether it's repair, maintenance, or installation, using top-quality equipment.",
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Final Inspection & Satisfaction",
      description:
        "We complete a final system check and ensure you are fully satisfied with our service before we consider the job done.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Operational Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to delivering exceptional HVAC services from
            start to finish.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationalProcess;
