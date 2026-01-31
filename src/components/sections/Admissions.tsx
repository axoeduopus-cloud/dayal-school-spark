import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { GraduationCap, Send, User, Phone, Calendar, BookOpen, MapPin, MessageSquare } from "lucide-react";

const SCHOOL_WHATSAPP = "919838753486";

const classOptions = [
    "Nursery",
    "LKG",
    "UKG",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
];

const Admissions = () => {
    const [formData, setFormData] = useState({
        studentName: "",
        dateOfBirth: "",
        gender: "",
        applyingForClass: "",
        fatherName: "",
        motherName: "",
        parentPhone: "",
        alternatePhone: "",
        address: "",
        previousSchool: "",
        additionalInfo: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create WhatsApp message with form data
        const message = `
*🎓 NEW ADMISSION ENQUIRY*
*Swami Dayal UMV*
━━━━━━━━━━━━━━━━━━

*📚 Student Details*
• Name: ${formData.studentName}
• Date of Birth: ${formData.dateOfBirth}
• Gender: ${formData.gender}
• Applying for: ${formData.applyingForClass}

*👨‍👩‍👧 Parent Details*
• Father's Name: ${formData.fatherName}
• Mother's Name: ${formData.motherName}
• Phone: ${formData.parentPhone}
• Alternate Phone: ${formData.alternatePhone || "N/A"}

*📍 Address*
${formData.address}

*🏫 Previous School*
${formData.previousSchool || "N/A"}

*💬 Additional Information*
${formData.additionalInfo || "None"}

━━━━━━━━━━━━━━━━━━
_Submitted via Swami Dayal UMV Website_
        `.trim();

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/${SCHOOL_WHATSAPP}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");

        setIsSubmitting(false);
    };

    return (
        <section id="admissions" className="py-24 bg-gradient-to-br from-primary/5 via-cta/5 to-accent/5 scroll-mt-20">
            <div className="container px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-cta bg-cta/10 rounded-full uppercase">
                            Join Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                            Admission <span className="text-cta">Form 2025-26</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Fill out the form below and submit to enquire about admission. You will be redirected to WhatsApp to complete the submission.
                        </p>
                    </motion.div>
                </div>

                {/* Admission Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-border">
                        {/* Student Details */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-cta" />
                                Student Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="studentName">Student's Full Name *</Label>
                                    <Input
                                        id="studentName"
                                        placeholder="Enter student's name"
                                        value={formData.studentName}
                                        onChange={(e) => handleInputChange("studentName", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                                    <Input
                                        id="dateOfBirth"
                                        type="date"
                                        value={formData.dateOfBirth}
                                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Gender *</Label>
                                    <Select onValueChange={(value) => handleInputChange("gender", value)} required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Male">Male</SelectItem>
                                            <SelectItem value="Female">Female</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Applying for Class *</Label>
                                    <Select onValueChange={(value) => handleInputChange("applyingForClass", value)} required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select class" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {classOptions.map((cls) => (
                                                <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Parent Details */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-cta" />
                                Parent / Guardian Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fatherName">Father's Name *</Label>
                                    <Input
                                        id="fatherName"
                                        placeholder="Enter father's name"
                                        value={formData.fatherName}
                                        onChange={(e) => handleInputChange("fatherName", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="motherName">Mother's Name *</Label>
                                    <Input
                                        id="motherName"
                                        placeholder="Enter mother's name"
                                        value={formData.motherName}
                                        onChange={(e) => handleInputChange("motherName", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="parentPhone">Phone Number *</Label>
                                    <Input
                                        id="parentPhone"
                                        type="tel"
                                        placeholder="e.g., 9876543210"
                                        value={formData.parentPhone}
                                        onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="alternatePhone">Alternate Phone</Label>
                                    <Input
                                        id="alternatePhone"
                                        type="tel"
                                        placeholder="Optional"
                                        value={formData.alternatePhone}
                                        onChange={(e) => handleInputChange("alternatePhone", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Address & Other Details */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-cta" />
                                Address & Other Details
                            </h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="address">Full Address *</Label>
                                    <Textarea
                                        id="address"
                                        placeholder="Enter complete address with village/town, district, and pin code"
                                        value={formData.address}
                                        onChange={(e) => handleInputChange("address", e.target.value)}
                                        required
                                        rows={3}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="previousSchool">Previous School (if any)</Label>
                                    <Input
                                        id="previousSchool"
                                        placeholder="Name of previous school"
                                        value={formData.previousSchool}
                                        onChange={(e) => handleInputChange("previousSchool", e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="additionalInfo">Additional Information</Label>
                                    <Textarea
                                        id="additionalInfo"
                                        placeholder="Any special requirements or information you'd like to share"
                                        value={formData.additionalInfo}
                                        onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                                        rows={3}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-border">
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-green-600" />
                                You will be redirected to WhatsApp to submit
                            </p>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold h-12 px-8 rounded-full w-full sm:w-auto"
                            >
                                {isSubmitting ? "Processing..." : "Submit via WhatsApp"}
                                <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Admissions;
