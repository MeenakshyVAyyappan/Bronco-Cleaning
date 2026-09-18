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
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Enter a valid email"),
    subject: z.string().min(1, "Please select a service"),
    date: z.string().optional(),
    time: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

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
        const whatsappNumber = "918078311399";
        const textMessage = `*Quick Booking Request - Bronco Cleaning Services*\n\n` +
            `👤 *Name:* ${data.name}\n` +
            `📧 *Email:* ${data.email}\n` +
            `🧹 *Service Category:* ${data.subject}\n` +
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

                                        <div className="col-lg-6 col-12">
                                            <input
                                                {...register("name")}
                                                className="form-control"
                                                placeholder="Your Name*"
                                            />
                                            {errors.name && (
                                                <p className="error">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <input
                                                {...register("email")}
                                                className="form-control"
                                                placeholder="Your Email*"
                                            />
                                            {errors.email && (
                                                <p className="error">{errors.email.message}</p>
                                            )}
                                        </div>

                                        <div className="col-lg-12 col-12">
                                            <select {...register("subject")} className="form-control">
                                                <option value="">Select Service Category</option>
                                                <option>Deep Cleaning Services Dubai</option>
                                                <option>Home Cleaning Services</option>
                                                <option>Office & Workplace Cleaning</option>
                                                <option>Warehouse Cleaning Services</option>
                                                <option>Aviation Warehouse Cleaning Services</option>
                                                <option>Moving-In & Moving-Out Cleaning</option>
                                                <option>Airbnb Cleaning Services</option>
                                                <option>Maid Services</option>
                                                <option>Sofa & Carpet Cleaning</option>
                                            </select>
                                            {errors.subject && (
                                                <p className="error">{errors.subject.message}</p>
                                            )}
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <input
                                                type="date"
                                                {...register("date")}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="col-lg-6 col-12">
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
