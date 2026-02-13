import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import '../Styles/Contact.css'

function Contact() {
  const form = useRef();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Mail Function
  function sendEmail(e) {
    e.preventDefault();

    setIsSending(true);
    setShowSuccess(false);
    setShowError(false);

    emailjs
      .sendForm(
        "service_gwa61t5",   // Replace
        "template_mlkiv4j",  // Replace
        form.current,
        "Edvh6nSjcHhOg3Tib"    // Replace
      )
      .then(
        (result) => {
          console.log("Success:", result.text);

          setShowSuccess(true);
          setIsSending(false);

          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);

          setShowError(true);
          setIsSending(false);
        }
      );
  }

  return (
    <section id="contact" className="bg-black text-white py-5">
      <div className="container">

        <h2 className="section-title text-center mb-4">
          Get In Touch
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            {/* Success */}
            {showSuccess && (
              <div className="alert alert-success">
                Message sent successfully!
              </div>
            )}

            {/* Error */}
            {showError && (
              <div className="alert alert-danger">
                Failed to send message. Try again.
              </div>
            )}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-4 bg-dark rounded shadow border border-secondary"
            >

              {/* Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>

                <input
                  type="text"
                  name="user_name"
                  className="form-control bg-black text-white border-secondary"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>

                <input
                  type="email"
                  name="user_email"
                  className="form-control bg-black text-white border-secondary"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>

                <textarea
                  name="message"
                  rows="4"
                  className="form-control bg-black text-white border-secondary"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn w-100 d-flex align-items-center justify-content-center gap-2 btn-send fw-bold"
                disabled={isSending}
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;

