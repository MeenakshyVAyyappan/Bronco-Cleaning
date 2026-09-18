import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Phone number is required"),
  service: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormData = z.infer<typeof schema>;

const dubailandAreas = [
  "Al Safa", "Jumeirah", "Downtown Dubai", "DIFC", "City Walk", 
  "Business Bay", "Nad Al Sheba", "Sheikh Zayed Road", "Al Quoz", 
  "Al Sufouh", "Dubai Hills", "Arabian Ranches", "Dubai Sports City", 
  "Motor City", "Al Barsha", "Jumeirah Golf Estates", "Emirates Hills", 
  "Palm Jumeirah", "JLT", "Dubai Marina", "Jumeirah Park", "Palm Jebel Ali", "Jebel Ali Free Zone"
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
      `🧹 *Service Needed:* ${data.service || "Not Specified"}\n` +
      `📍 *Location:* ${data.location || "Not Specified"}\n` +
      `💬 *Message:* ${data.message}`;

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

      <div className="input-item">

        <input
          {...register("name")}
          className="fild"
          type="text"
          placeholder="Your Full Name*"
        />

        <label>
          <i className="flaticon-user"></i>
        </label>

        {errors.name && (
          <p className="error">{errors.name.message}</p>
        )}

      </div>


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
          <p className="error">{errors.email.message}</p>
        )}

      </div>


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
          <p className="error">{errors.phone.message}</p>
        )}

      </div>

      <div className="input-item">
        <select {...register("service")} className="fild" style={{ backgroundColor: "#F2F5EF", color: "#666" }}>
          <option value="">Select Cleaning Service</option>
          <option>Deep Cleaning Services Dubai</option>
          <option>Home Cleaning Services</option>
          <option>Office & Workplace Cleaning</option>
          <option>Warehouse Cleaning Services</option>
          <option>Aviation Warehouse Cleaning Services</option>
          <option>Moving-In & Moving-Out Cleaning</option>
          <option>After Builder Cleaning Services</option>
          <option>Airbnb Cleaning Services</option>
          <option>Hourly Cleaning Services</option>
          <option>Daily Cleaning Services</option>
          <option>Monthly Cleaning Services</option>
          <option>Event Cleaning Services</option>
          <option>Hospital Cleaning Services</option>
          <option>Laboratory Cleaning Services</option>
          <option>After Party Cleaning Services</option>
          <option>Specialized Deep Cleaning Services</option>
          <option>Gym Cleaning Services</option>
          <option>Garage Deep Cleaning Services</option>
          <option>Maid Services</option>
          <option>Outdoor Cleaning Services</option>
          <option>Sofa Cleaning Services</option>
        </select>
      </div>

      <div className="input-item">
        <select {...register("location")} className="fild" style={{ backgroundColor: "#F2F5EF", color: "#666" }}>
          <option value="">Select Dubai Location Area</option>
          {dubailandAreas.map((area, idx) => (
            <option key={idx} value={area}>{area}</option>
          ))}
        </select>
      </div>


      <div className="input-item">

        <textarea
          {...register("message")}
          className="fild textarea"
          placeholder="Tell us about your cleaning requirements..."
        />

        <label>
          <i className="flaticon-edit"></i>
        </label>

        {errors.message && (
          <p className="error">{errors.message.message}</p>
        )}

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
