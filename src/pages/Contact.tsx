import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We will contact you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", class: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container-narrow text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Contact & Admissions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            We'd love to hear from you. Reach out for admission enquiries or any questions.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Enquiry Form */}
            <div>
              <div className="mb-6">
                <h2 className="heading-secondary mb-2">Admission Enquiry</h2>
                <p className="text-body">
                  Fill the form below and we will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Parent/Guardian Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class">Class Applying For *</Label>
                    <Select
                      value={formData.class}
                      onValueChange={(value) =>
                        setFormData({ ...formData, class: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="1">Class 1</SelectItem>
                        <SelectItem value="2">Class 2</SelectItem>
                        <SelectItem value="3">Class 3</SelectItem>
                        <SelectItem value="4">Class 4</SelectItem>
                        <SelectItem value="5">Class 5</SelectItem>
                        <SelectItem value="6">Class 6</SelectItem>
                        <SelectItem value="7">Class 7</SelectItem>
                        <SelectItem value="8">Class 8</SelectItem>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your enquiry..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-cta text-cta-foreground hover:bg-cta/90 sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Enquiry
                </Button>
              </form>

              {/* WhatsApp CTA */}
              <div className="mt-8 rounded-xl border border-success/30 bg-success/5 p-5">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success/20">
                    <MessageCircle className="h-6 w-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Quick Response via WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">
                      Get instant answers to your queries on WhatsApp
                    </p>
                  </div>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-success text-success-foreground hover:bg-success/90">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-6">
                <h2 className="heading-secondary mb-2">Contact Information</h2>
                <p className="text-body">
                  Visit us or get in touch through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">School Address</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      123 School Road, Near City Center,<br />
                      City Name, State - 123456<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone Numbers</h3>
                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:+919876543210"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        +91 98765 43210 (Admissions)
                      </a>
                      <a
                        href="tel:+919876543211"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        +91 98765 43211 (Office)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <div className="mt-1 space-y-1">
                      <a
                        href="mailto:admissions@swamidayalumv.edu.in"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        admissions@swamidayalumv.edu.in
                      </a>
                      <a
                        href="mailto:info@swamidayalumv.edu.in"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        info@swamidayalumv.edu.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      <p><strong>Monday - Friday:</strong> 9:00 AM - 4:00 PM</p>
                      <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                      <p><strong>Sunday:</strong> Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <div className="flex h-48 items-center justify-center bg-muted">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Google Map Placeholder</p>
                    <p className="text-xs text-muted-foreground">
                      Embed your school location map here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
