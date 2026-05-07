import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SchoolManagementSoftware = () => {
  useEffect(() => {
    document.title = "School Management Software — EduOpus by Axoneura | Swami Dayal U.M.V";
  }, []);

  return (
    <Layout>
      <section className="container px-6 md:px-12 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            School Management Software
          </h1>

          <div className="mt-6 prose prose-zinc max-w-none dark:prose-invert">
            <p>
              Swami Dayal Samark Senior Secondary High School uses EduOpus — a modern
              school fee management and parent communication platform developed by
              Axoneura, Lucknow.
            </p>

            <p>
              EduOpus manages our complete school operations including fee
              collection, parent communication, attendance tracking, and school
              notices. Parents at our school can view their child&apos;s fees,
              attendance records, homework assignments, and complete payment history
              directly from their smartphones — without visiting the school or
              calling the office.
            </p>

            <p>
              Fee collection is fully automated through UPI AutoPay. Parents approve
              the AutoPay mandate once from GPay, PhonePe, or any UPI app — and fees
              are collected automatically on the due date every month. Our
              administration team no longer spends time chasing fee payments or
              updating manual registers.
            </p>

            <h2>Features we use at our school:</h2>
            <ul>
              <li>UPI AutoPay — fees collected automatically every month</li>
              <li>Parent portal — fees, attendance, homework, and notices on mobile</li>
              <li>Real-time fee dashboard for school administration</li>
              <li>Automated digital receipts sent instantly on every payment</li>
              <li>Attendance alerts sent directly to parents</li>
              <li>WhatsApp payment links for parents who prefer manual payment</li>
            </ul>

            <h2>Our Experience:</h2>
            <p>
              Since deploying EduOpus, our administration team has eliminated manual
              fee collection work entirely. Parents stay informed through the portal
              and rarely need to contact the office. Fee discrepancies have dropped
              to zero since go-live.
            </p>

            <p>
              Powered by EduOpus by Axoneura — India&apos;s school fee management
              platform with native UPI AutoPay.
            </p>

            <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <a href="https://eduopus.com/" target="_blank" rel="noopener noreferrer">
                Visit EduOpus
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.instagram.com/axoneura/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Axoneura
              </a>
              <span className="text-muted-foreground">|</span>
              <Link to="/" className="no-underline">
                Back to Home
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolManagementSoftware;
