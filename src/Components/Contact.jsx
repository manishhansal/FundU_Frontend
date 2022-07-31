import React from "react";
import "./Contact.css";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact_svg">
        <h1>Contact Us</h1>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#81CBCE"
            d="M52.5,-51.7C68.4,-36.6,81.9,-18.3,81.9,-0.1C81.8,18.2,68.2,36.4,52.3,52.2C36.4,68.1,18.2,81.6,-1.3,82.9C-20.8,84.3,-41.6,73.4,-53.7,57.5C-65.7,41.6,-68.9,20.8,-68.3,0.6C-67.7,-19.7,-63.4,-39.4,-51.4,-54.5C-39.4,-69.6,-19.7,-80.3,-0.7,-79.6C18.3,-78.9,36.6,-66.9,52.5,-51.7Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="inside_svg">
          <h2>
            <MailIcon fontSize="large" />
            Email : abc@gmail.com
          </h2>
          <h2>
            <PhoneIcon fontSize="large" />
            Phone : +91 123 456 7890
          </h2>
          <h1>Our Locations</h1>
          <h2>
            <BusinessIcon fontSize="large" /> Office(Headquarter): Airport
            Plaza, Plot No. 105, 1st floor, Monk Rd, next to Cure Hospital,
            Muzaffarpur, Bihar, 123456
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
