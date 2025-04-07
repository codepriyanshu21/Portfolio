import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your backend or email service
    // For demonstration, we'll simulate an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
      <p className="text-gray-400 text-center mb-8 max-w-md mx-auto">
        Have a project in mind or want to connect? Feel free to reach out!
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <form onSubmit={handleSubmit} className="flex-1 bg-gray-800 p-6 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300 w-full"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>
          
          {submitMessage && (
            <p className={`mt-4 text-center ${submitMessage.includes("Thank you") ? "text-green-400" : "text-red-400"}`}>
              {submitMessage}
            </p>
          )}
        </form>

        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex gap-6 text-3xl">
              <a
                href="https://github.com/codepriyanshu21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-singh-3648a627a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:priyanshusingh8233@gmail.com"
                className="text-gray-400 hover:text-red-400 transition duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">E-mail me directly</h3>
            <a href="mailto:youremail@example.com" className="text-blue-400 hover:underline">
            priyanshusingh8233@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}