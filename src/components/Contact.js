import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../i18n/LanguageContext";
import { IconMail, IconGlobe, IconClock, IconBriefcase, IconLinkedin, IconArrow } from "./Icons";
import "../styles/Contact.css";

const ContactPage = () => {
  const { t } = useLang();
  const c = t.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVICE_ID = "service_uoqwllq";
  const TEMPLATE_ID = "template_jdorox7";
  const PUBLIC_KEY = "7VGg1CkH7NgLyFD8H";

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: `Quote request: ${formData.service || "General"}${
          formData.company ? ` (${formData.company})` : ""
        }`,
        message:
          `Service: ${formData.service || "Not specified"}\n` +
          `Budget: ${formData.budget || "Not specified"}\n` +
          `Company: ${formData.company || "N/A"}\n\n` +
          `${formData.message}`,
        to_email: "mainevgames@gmail.com",
      };

      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 6000);
      }
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () =>
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.email.includes("@") &&
    formData.message.trim() !== "";

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-hero fade-in">
          <span className="eyebrow">{c.eyebrow}</span>
          <h1 className="section-title">{c.heroTitle}</h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--text-muted)",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {c.heroLead}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form slide-in-left">
            <h3
              style={{
                fontFamily: "Lemonada, cursive",
                color: "var(--secondary-color)",
                marginBottom: "2rem",
              }}
            >
              {c.formTitle}
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{c.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={c.namePh}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{c.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={c.emailPh}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">{c.companyLabel}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={c.companyPh}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">{c.serviceLabel}</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">{c.select}</option>
                    {c.serviceOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">{c.budgetLabel}</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">{c.select}</option>
                    {c.budgetOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{c.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder={c.messagePh}
                  rows="5"
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <div className="form-alert form-alert-success">{c.success}</div>
              )}
              {submitStatus === "error" && (
                <div className="form-alert form-alert-error">{c.error}</div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  opacity: isSubmitting || !validateForm() ? 0.7 : 1,
                  cursor: isSubmitting || !validateForm() ? "not-allowed" : "pointer",
                }}
                disabled={isSubmitting || !validateForm()}
              >
                {isSubmitting ? c.sending : (
                  <>{c.send} <IconArrow width={18} height={18} /></>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info slide-in-right">
            <h3>{c.connectTitle}</h3>
            <ul className="contact-methods">
              <li>
                <div className="icon"><IconMail width={20} height={20} /></div>
                <div>
                  <strong>{c.emailHeading}</strong>
                  <br />
                  <a href="mailto:mainevgames@gmail.com">mainevgames@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="icon"><IconGlobe width={20} height={20} /></div>
                <div>
                  <strong>{c.basedHeading}</strong>
                  <br />
                  {c.basedValue}
                </div>
              </li>
              <li>
                <div className="icon"><IconClock width={20} height={20} /></div>
                <div>
                  <strong>{c.responseHeading}</strong>
                  <br />
                  {c.responseValue}
                </div>
              </li>
            </ul>

            <div className="social-links">
              <a
                href="https://www.fiverr.com/s/XLdA9WZ"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="MVG on Fiverr"
              >
                <IconBriefcase width={22} height={22} />
              </a>
              <a
                href="http://linkedin.com/company/maine-v-games"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="MVG on LinkedIn"
              >
                <IconLinkedin width={22} height={22} />
              </a>
              <a href="mailto:mainevgames@gmail.com" className="social-link" aria-label="Email MVG">
                <IconMail width={22} height={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
