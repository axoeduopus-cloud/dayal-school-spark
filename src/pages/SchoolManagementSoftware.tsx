import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Smartphone, IndianRupee, Bell, Receipt, Gauge } from "lucide-react";

const SchoolManagementSoftware = () => {
  useEffect(() => {
    document.title =
      "School Management Software — EduOpus by Axoneura | Swami Dayal U.M.V";
  }, []);

  return (
    <Layout>
      <section className="bg-muted/40 py-12 md:py-16">
        <div className="container px-6 md:px-12">
          <div className="mx-auto max-w-6xl">
            {/* Hero */}
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-cta/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cta">
                  Powered by EduOpus · Axoneura
                </div>
                <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  School Management Software
                </h1>
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  Swami Dayal Samark Senior Secondary High School runs its fee and
                  parent communication on <span className="font-semibold">EduOpus</span> —
                  a modern school fee management and parent platform developed by{" "}
                  <span className="font-semibold">Axoneura, Lucknow</span>.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  EduOpus manages fee collection, parent communication, attendance
                  tracking, and school notices in a single system. Parents can view
                  fees, attendance records, homework, and complete payment history
                  directly from their smartphones — without visiting the school or
                  calling the office.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-background p-4 shadow-sm border border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cta/10 text-cta">
                        <IndianRupee className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">
                          100% automated fee collection
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Monthly fees collected via UPI AutoPay — no manual chasing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-background p-4 shadow-sm border border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cta/10 text-cta">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Parent app for daily updates</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Fees, attendance, homework, and notices — all on mobile.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-cta text-cta-foreground hover:bg-cta/90 shadow-md"
                  >
                    <a
                      href="https://axoneura.in/eduopus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more about EduOpus
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-dashed"
                  >
                    <a
                      href="https://www.instagram.com/axoneura/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Talk to Axoneura
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                    asChild
                  >
                    <Link to="/">Back to Home</Link>
                  </Button>
                </div>
              </div>

              {/* Right summary card */}
              <div className="w-full max-w-sm shrink-0 rounded-3xl bg-background/80 p-6 shadow-lg border border-border/80">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cta">
                  At Swami Dayal U.M.V
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  How EduOpus fits into our day-to-day school operations.
                </p>
                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Gauge className="mt-0.5 h-4 w-4 text-cta" />
                    <p className="text-muted-foreground">
                      Real-time fee dashboard for administration — live collections and
                      pending dues in one view.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Receipt className="mt-0.5 h-4 w-4 text-cta" />
                    <p className="text-muted-foreground">
                      Automated digital receipts sent instantly on every payment.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bell className="mt-0.5 h-4 w-4 text-cta" />
                    <p className="text-muted-foreground">
                      Attendance alerts and important notices delivered directly to
                      parents.
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-cta/10 p-4 text-xs text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Our administration team no longer maintains manual fee registers.
                  </p>
                  <p className="mt-1">
                    Since going live on EduOpus, fee discrepancies have effectively
                    dropped to zero.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed feature list */}
            <div className="mt-12 rounded-3xl bg-background p-6 md:p-8 shadow-sm border border-border/70">
              <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)]">
                <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    Features we use at our school
                  </h2>
                  <ul className="mt-3 grid gap-2 md:grid-cols-2">
                    <li>UPI AutoPay — fees collected automatically every month</li>
                    <li>
                      Parent portal — fees, attendance, homework, and notices on mobile
                    </li>
                    <li>Real-time fee dashboard for school administration</li>
                    <li>Automated digital receipts sent instantly on every payment</li>
                    <li>Attendance alerts sent directly to parents</li>
                    <li>
                      WhatsApp payment links for parents who prefer manual payment
                    </li>
                  </ul>
                </div>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    Our experience with EduOpus
                  </h3>
                  <p>
                    Since deploying EduOpus, our administration team has eliminated
                    manual fee collection work entirely. Parents stay informed through
                    the portal and rarely need to contact the office.
                  </p>
                  <p>
                    Powered by EduOpus by Axoneura — India&apos;s school fee management
                    platform with native UPI AutoPay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolManagementSoftware;
