import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import useSplitTextAnimation from "../splittextAnimation/useSplitTextAnimation";
import contactImg from "../../images/cleaning-logo-business-composition.png";
import cleaningIcon from "../../images/cleaning-icon.svg";
import logo1 from "../../images/contact-logo1.png";
import logo2 from "../../images/contact-logo2.png";

const schema = z.object({
    name: z.string().min(1, "Full Name is required").max(25, "Full Name must not exceed 25 characters"),
    email: z.string().min(1, "Email Address is required").email("Enter a valid email address"),
    phone: z.string().min(6, "Valid Phone Number is required"),
    location: z.string().min(1, "Please select a Dubai Location Area"),
    subject: z.string().min(1, "Please select a Cleaning Service"),
    approxSqFt: z.string().min(1, "Approximate Square Feet is required").regex(/^[0-9]+$/, "Must be a valid number"),
    date: z.string().optional(),
    time: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const dubailandAreas = [
    "Al Safa", "Jumeirah", "Downtown Dubai", "DIFC", "City Walk", 
    "Business Bay", "Nad Al Sheba", "Sheikh Zayed Road", "Al Quoz", 
    "Al Sufouh", "Dubai Hills", "Arabian Ranches", "Dubai Sports City", 
    "Motor City", "Al Barsha", "Jumeirah Golf Estates", "Emirates Hills", 
    "Palm Jumeirah", "JLT", "Dubai Marina", "Jumeirah Park", "Palm Jebel Ali", "Jebel Ali Free Zone"
];

const cleaningServices = [
    "Deep Cleaning Services Dubai",
    "Home Cleaning Services",
    "Office & Workplace Cleaning",
    "Warehouse Cleaning Services",
    "Aviation Warehouse Cleaning Services",
    "Moving-In & Moving-Out Cleaning",
    "After Builder Cleaning Services",
    "Airbnb Cleaning Services",
    "Hourly Cleaning Services",
    "Daily Cleaning Services",
    "Monthly Cleaning Services",
    "Event Cleaning Services",
    "Hospital Cleaning Services",
    "Laboratory Cleaning Services",
    "After Party Cleaning Services",
    "Specialized Deep Cleaning Services",
    "Gym Cleaning Services",
    "Garage Deep Cleaning Services",
    "Maid Services",
    "Outdoor Cleaning Services",
    "Sofa Cleaning Services"
];

const ContactSection: React.FC = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        const whatsappNumber = "971541484800";
        const textMessage = `*Quick Booking Request - Bronco Cleaning Services*\n\n` +
            `👤 *Name:* ${data.name}\n` +
            `📧 *Email:* ${data.email}\n` +
            `📞 *Phone:* ${data.phone}\n` +
            `📍 *Dubai Location:* ${data.location}\n` +
            `🧹 *Service Category:* ${data.subject}\n` +
            `📐 *Approx Sq Ft:* ${data.approxSqFt} sq ft\n` +
            `📅 *Preferred Date:* ${data.date || "Not Specified"}\n` +
            `⏰ *Preferred Time:* ${data.time || "Not Specified"}`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
        window.open(whatsappUrl, "_blank");
        reset();
    };

    const ref = useRef<HTMLDivElement | null>(null);

    useSplitTextAnimation(ref);

    return (
        <section className="wpo-contact-section section-padding pt-0" ref={ref}>
            <div className="wpo-contact-section-wrapper box-style">
                <div className="container-fluid">
                    <div className="row">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-6">
                            <div className="wpo-contact-img">
                                <img src={contactImg} alt="Bronco Cleaning Services Dubai" />

                                <div className="bottom-logos">
                                    <div className="bottom-logo-item">
                                        <div className="b-logo">
                                            <img src={logo1} alt="" />
                                        </div>
                                        <div className="b-logo">
                                            <img src={logo2} alt="" />
                                        </div>
                                    </div>
                                    <div className="left-shape">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 105 111"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <path
                                                d="M0 0C0 34.98 0 69.96 0 106H-105V99C-103.828 98.974-102.656 98.948-101.449 98.922
                                                C-87.737 98.486-76.616 96.421-66 87C-56.318 76.465-54.445 63.636-54.438 49.812
                                                C-54.381 34.753-51.779 23.127-41.375 11.75C-34.571 5.274-25.654 1.108-16.27 0.684
                                                C-15.385 0.642-14.5 0.6-13.588 0.557C-12.672 0.517-11.756 0.478-10.812 0.438
                                                C-9.885 0.394-8.958 0.351-8.002 0.307C-1.348 0-1.348 0 0 0Z"
                                                fill="#ffffff"
                                                transform="translate(105 5)"
                                            />
                                        </svg>
                                    </div>

                                    <div className="right-shape">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 105 111"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <path
                                                d="M0 0C31.067 1.479 31.067 1.479 44.188 15.188
                                                C50.968 23.075 54.067 31.852 54.176 42.156
                                                C54.212 43.939 54.212 43.939 54.248 45.758
                                                C54.29 48.221 54.322 50.685 54.342 53.148
                                                C54.634 65.779 57.252 77.481 66 87
                                                C77.667 97.353 90.069 98.671 105 99
                                                V106H0V0Z"
                                                fill="#ffffff"
                                                transform="translate(0 5)"
                                            />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* FORM */}
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">

                                <div className="wpo-section-title">
                                    <span>
                                        <i>
                                            <img src={cleaningIcon} alt="" />
                                        </i>
                                        quick booking dubai
                                    </span>

                                    <h2 className="poort-text poort-in-right">
                                        Book Your Cleaning Service Today
                                    </h2>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="row">

                                        {/* FULL NAME */}
                                        <div className="col-lg-6 col-12 mb-3">
                                            <input
                                                {...register("name")}
                                                className="form-control"
                                                maxLength={25}
                                                placeholder="Your Full Name*"
                                            />
                                            {errors.name && (
                                                <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.name.message}</p>
                                            )}
                                        </div>

                                        {/* EMAIL */}
                                        <div className="col-lg-6 col-12 mb-3">
                                            <input
                                                {...register("email")}
                                                className="form-control"
                                                placeholder="Your Email*"
                                            />
                                            {errors.email && (
                                                <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.email.message}</p>
                                            )}
                                        </div>

                                        {/* PHONE NUMBER */}
                                        <div className="col-lg-6 col-12 mb-3">
                                            <input
                                                {...register("phone")}
                                                className="form-control"
                                                placeholder="Phone Number (+971)*"
                                            />
                                            {errors.phone && (
                                                <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.phone.message}</p>
                                            )}
                                        </div>

                                        {/* APPROX SF */}
                                        <div className="col-lg-6 col-12 mb-3">
                                            <input
                                                {...register("approxSqFt")}
                                                className="form-control"
                                                type="number"
                                                placeholder="Approx Sq Ft (e.g. 1000)*"
                                            />
                                            {errors.approxSqFt && (
                                                <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.approxSqFt.message}</p>
                                            )}
                                        </div>

                                        {/* SERVICE */}
                                        <div className="col-lg-12 col-12 mb-3">
                                            <select {...register("subject")} className="form-control">
                                                <option value="">Select Service Category*</option>
                                                {cleaningServices.map((srv, idx) => (
                                                    <option key={idx} value={srv}>{srv}</option>
                                                ))}
                                            </select>
                                            {errors.subject && (
                                                <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.subject.message}</p>
                                            )}
                                        </div>

                                        {/* DUBAI LOCATION */}
                                        <div className="col-lg-12 col-12 mb-3">
                                            <select {...register("location")} className="form-control">
                                                <option value="">Select Dubai Location Area*</option>
                                                {dubailandAreas.map((area, idx) => (
                                                    <option key={idx} value={area}>{area}</option>
                                                ))}
                                            </select>
                                            {errors.location && (
                                                <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.location.message}</p>
                                            )}
                                        </div>

                                        {/* PREFERRED DATE */}
                                        <div className="col-lg-6 col-12 mb-3">
                                            <input
                                                type="date"
                                                {...register("date")}
                                                className="form-control"
                                            />
                                        </div>

                                        {/* PREFERRED TIME */}
                                        <div className="col-lg-6 col-12 mb-3">
                                            <input
                                                type="time"
                                                {...register("time")}
                                                className="form-control"
                                                defaultValue="09:00"
                                            />
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            <div className="submit-area">
                                                <button
                                                    type="submit"
                                                    className="theme-btn-s2"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Submitting..." : "Book Cleaning Service Today"}
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </form>

                                <div className="border-style"></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
