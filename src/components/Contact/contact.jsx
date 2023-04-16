import React from "react";
import "./contact.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <p className="section__subtitle">Contact Me</p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <div className="contact__card-icon">
                <EmailOutlinedIcon fontSize="large" />
              </div>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">abc@gmail.com</span>
              <a href="" className="contact__button">
                Write me <ArrowForwardOutlinedIcon fontSize="small" />
              </a>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <WhatsAppIcon fontSize="large" />
              </div>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 9998887776</span>
              <a href="" className="contact__button">
                Write me <ArrowForwardOutlinedIcon fontSize="small" />
              </a>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <SpeakerNotesIcon fontSize="large" />
              </div>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>
              <a href="" className="contact__button">
                Write me <ArrowForwardOutlinedIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form action="" className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Insert your name"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Insert your email"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Project
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                placeholder="Write your project"
                className="contact__form-input"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message &nbsp; <SendRoundedIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contact;
