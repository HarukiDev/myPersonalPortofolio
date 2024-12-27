import React from "react";
import { motion } from "framer-motion";

export default function myContact() {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const name = e.target.fullName.value;
    const email = e.target.emailAddress.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    // Format message for WhatsApp
    const whatsappMessage = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `;

    // WhatsApp API link
    const phoneNumber = "6281273465572"; 
    const whatsappAPI = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappAPI, "_blank");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full gap-4 p-6 lg:flex-row lg:items-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Left Section */}
      <motion.div
        className="flex flex-col w-full p-6 max-w-2xl lg:w-[400px] bg-white rounded-lg shadow-md h-auto md:h-[300px] items-start justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="p-2 border rounded-lg">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Address:</h3>
            <p>Swadaya Street, RT 43 RW 13, No. 2409, Srijaya Subdistrict, Alang-Alang Lebar District, Palembang City, South Sumatra, Indonesia.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">CONTACT NUMBER:</h3>
            <p>+62 812 7346 5572</p>
          </div>

          <div className="mb-0">
            <h3 className="text-lg font-semibold">EMAIL:</h3>
            <p>jimmymaulana01@gmail.com</p>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex flex-col w-full max-w-2xl p-6 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <form onSubmit={handleWhatsAppSubmit}>
          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold" htmlFor="fullName">
                FULL NAME
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Name"
                className="p-3 border rounded-lg"
                required
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold" htmlFor="emailAddress">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="Your Email"
                className="p-3 border rounded-lg"
                required
              />
            </div>
          </motion.div>

          {/* Subject */}
          <motion.div
            className="flex flex-col mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="mb-2 font-semibold" htmlFor="subject">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your Subject"
              className="p-3 border rounded-lg"
              required
            />
          </motion.div>

          {/* Message */}
          <motion.div
            className="flex flex-col mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="mb-2 font-semibold" htmlFor="message">
              YOUR MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              className="p-3 border rounded-lg resize-y"
              style={{ minHeight: "80px", maxHeight: "300px" }}
              required
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Send Me Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}