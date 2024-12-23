import { Link } from "react-router-dom";
import Form from "../specific/Form";

import img from "../../assets/images/pic.jpg";

const ContactForm = () => {
  return (
    <div>
      <section className="contact-form-section">
        <div className="form-container mx-4 sm:mx-8 md:mx-80 mt-[120px] mb-[50px] flex items-start justify-center flex-col gap-y-4">
          <div className="form-header w-full flex items-center justify-center gap-x-4">
            <img
              src={img}
              alt="My Avatar"
              className="form-image w-[60px] rounded-[50px]"
            />
            <div className="form-content w-full">
              <div className="title-container w-full flex items-center justify-between">
                <h3 className="form-title font-medium text-[1.25rem] sm:text-[1.65rem]">
                  Say Hello to Muhammad Saif
                </h3>
                <Link
                  to="https://wa.me/+923243191677"
                  target="_blank"
                  className="whatsapp-link"
                >
                  &#128075; Say Hi on WhatsApp
                </Link>
              </div>
              <p className="form-subtitle mt-2 text-[0.925rem] text-[#4a5264] sm:mt-0">
                will receive your message on Gmail
              </p>
            </div>
          </div>

          {/* ---- */}
          <Form />
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
