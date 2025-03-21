import "./index.scss";
import { useState, useEffect } from "react";

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const Contact = () => {
  const [disable, setDisable] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!form.name || !form.email || !form.message || !isValidEmail(form.email)) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [form]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbw-7fOzTARVerFjgv21-CPrCpbUJjNvgpJDfjOEfAF4t-6-GkrRIto9og_BpQ5GMsOE/exec"; // Replace with your actual script URL

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        mode: "no-cors",
      });
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section id="contact">
        <div className="contactContainer">
          <div className="contact">
            <h1>Get in Touch</h1>
            <a href="mailto://kcalle012@gmail.com?subject=Hello%20Kevin&body=I%20want%20to%20contact%20you!">
              kcalle012@gmail.com
            </a>
            <p>
              +1 {"("}973{")"}680-6455
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={handleChange}
              value={form.name}
            />
            <input
              type="email"
              placeholder="Your email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
            <textarea
              placeholder="Your message"
              name="message"
              onChange={handleChange}
              value={form.message}
            />
            <button
              type="submit"
              disabled={disable}
              className={disable ? `disabled` : `submit`}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
