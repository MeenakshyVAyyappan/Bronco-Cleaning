import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Full Name is required").max(25, "Full Name must not exceed 25 characters"),
  email: z.string().min(1, "Email Address is required").email("Enter a valid email address"),
  phone: z.string().min(6, "Valid Phone Number is required"),
  location: z.string().min(1, "Please select a Dubai Location Area"),
  service: z.string().min(1, "Please select a Cleaning Service"),
  approxSqFt: z.string().min(1, "Approximate Square Feet is required").regex(/^[0-9]+$/, "Square feet must be a valid number"),
  message: z.string().optional(),
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

const ContactForm: React.FC = () => {

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
    const textMessage = `*New Cleaning Enquiry - Bronco Cleaning Services*\n\n` +
      `👤 *Name:* ${data.name}\n` +
      `📧 *Email:* ${data.email}\n` +
      `📞 *Phone:* ${data.phone}\n` +
      `📍 *Dubai Location:* ${data.location}\n` +
      `🧹 *Service Needed:* ${data.service}\n` +
      `📐 *Approx Sq Ft:* ${data.approxSqFt} sq ft\n` +
      (data.message ? `💬 *Message:* ${data.message}` : ``);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
    reset();
  };

  return (

    <form
      className="contact-form contact-validation-active"
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
    >

      {/* FULL NAME */}
      <div className="input-item">
        <input
          {...register("name")}
          className="fild"
          type="text"
          maxLength={25}
          placeholder="Your Full Name*"
        />
        <label>
          <i className="flaticon-user"></i>
        </label>
        {errors.name && (
          <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.name.message}</p>
        )}
      </div>

      {/* EMAIL ADDRESS */}
      <div className="input-item">
        <input
          {...register("email")}
          className="fild"
          type="email"
          placeholder="Email Address*"
        />
        <label>
          <i className="flaticon-email"></i>
        </label>
        {errors.email && (
          <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.email.message}</p>
        )}
      </div>

      {/* PHONE NUMBER */}
      <div className="input-item">
        <input
          {...register("phone")}
          className="fild"
          type="tel"
          placeholder="Mobile / Phone Number (+971)*"
        />
        <label>
          <i className="flaticon-phone-call"></i>
        </label>
        {errors.phone && (
          <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.phone.message}</p>
        )}
      </div>

      {/* DUBAI LOCATION AREA */}
      <div className="input-item">
        <select {...register("location")} className="fild" style={{ backgroundColor: "#F2F5EF", color: "#666" }}>
          <option value="">Select Dubai Location Area*</option>
          {dubailandAreas.map((area, idx) => (
            <option key={idx} value={area}>{area}</option>
          ))}
        </select>
        {errors.location && (
          <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.location.message}</p>
        )}
      </div>

      {/* SELECT SERVICE */}
      <div className="input-item">
        <select {...register("service")} className="fild" style={{ backgroundColor: "#F2F5EF", color: "#666" }}>
          <option value="">Select Cleaning Service*</option>
          {cleaningServices.map((srv, idx) => (
            <option key={idx} value={srv}>{srv}</option>
          ))}
        </select>
        {errors.service && (
          <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.service.message}</p>
        )}
      </div>

      {/* APPROXIMATE SQUARE FEET */}
      <div className="input-item">
        <input
          {...register("approxSqFt")}
          className="fild"
          type="number"
          placeholder="Approximate Square Feet (e.g. 1200)*"
        />
        <label>
          <i className="flaticon-edit"></i>
        </label>
        {errors.approxSqFt && (
          <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.approxSqFt.message}</p>
        )}
      </div>

      {/* OPTIONAL MESSAGE */}
      <div className="input-item">
        <textarea
          {...register("message")}
          className="fild textarea"
          placeholder="Tell us about your specific cleaning requirements (Optional)..."
        />
        <label>
          <i className="flaticon-edit"></i>
        </label>
      </div>

      <div className="input-item submitbtn">
        <button
          className="fild"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending Request..." : "Book Cleaning Service"}
        </button>
      </div>

    </form>

  );
};

export default ContactForm;
