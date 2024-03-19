import React from "react";
import Header from "../../components/shared/Header";
import { points } from "../../constants";

const TechnicalQuestion = () => {
  return (
    <>
      <Header title="AWS Implementation" />
      <article className="font-Adelle space-y-2">
        <p className="p-14-regular mt-2 indent-8">
          Amazon offers a range of web services that equip our application with
          essential and secure functionalities while it&apos;s hosted online.
          These services include authentication, asset storage, load balancing,
          app monitoring, and more. They present a cost-effective solution,
          sparing us the effort of building or investing in expensive hardware
          for these capabilities.
        </p>
      </article>
      <article className="font-Adelle space-y-2">
        <h3 className="p-16-bold mt-4">
          Leveraging AWS Services for CoPilot Image Uploader
        </h3>
        <p className="p-14-regular mt-2">
          The integration of the following AWS services can offer CoPilot Image
          Uploader notable benefits:
        </p>
        <div className="py-2">
          {points.map((point, index) => (
            <ul key={index} className="list-disc pl-12">
              <li>
                <p className="p-14-regular mt-2">
                  <span className="p-14-bold">{point.title}</span>:{" "}
                  {point.description}
                </p>
              </li>
            </ul>
          ))}
        </div>
        <p className="p-14-regular mt-2">
          These services, among many others provided by Amazon, hold immense
          potential for enhancing the capabilities of CoPilot Image Uploader.
        </p>
      </article>
      <article className="font-Adelle space-y-4">
        <h3 className="p-16-bold my-4">Setting Up with AWS Amplify</h3>
        <div>
          <p className="p-14-regular mt-2">
            <span className="p-14-bold">AWS Amplify:</span> A Comprehensive
            Solution
          </p>
          <p className="p-14-regular my-2 indent-8">
            AWS Amplify is a complete solution that brings together all AWS
            services in one place. It streamlines the setup process for
            full-stack applications through its Command Line Interface (CLI).
            Developers can seamlessly access AWS services using Amplify&apos;s
            CLI. Particularly tailored for web apps built with React frameworks
            like Next.js, AWS Amplify offers an efficient development
            experience.
          </p>
        </div>
        <div>
          <p className="p-14-bold mt-2">Cost Considerations:</p>

          <p className="p-14-regular mt-2 indent-8">
            Although AWS Amplify provides a lot of convenience, it is essential
            to be watchful of potential expenses. Every subscribed service
            incurs charges, which makes it necessary to monitor usage closely.
            It is advisable to set up alerts to keep track of the
            application&apos;s utilization of each service, ensuring that the
            project stays within budgetary constraints.
          </p>
        </div>
      </article>
      <p className="p-14-regular mt-10">
        {" "}
        View PDF version{" "}
        <a target="_blank" className="underline" href="/pdf/CoPilot-TQ.pdf">
          here
        </a>
      </p>
    </>
  );
};

export default TechnicalQuestion;
