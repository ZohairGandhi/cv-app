import "../styles/Section.css";
import { useState } from "react";
import accountOutline from "../../public/icons/account-outline.svg";

function PersonalInfoSection({ sectionName, formUpdateHandler }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="cv-section">
      <button className="section-btn" onClick={() => setIsToggled(!isToggled)}>
        <img src={accountOutline} alt="" />

        <p>{sectionName}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000"
          height="1.5rem"
          className={isToggled ? "is-toggled" : ""}
        >
          <title>{isToggled ? "Collapse" : "Expand"}</title>
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </button>

      <div className={isToggled ? "is-toggled" : "not-toggled"}>
        <form
          onChange={() => {
            const updatedName = document.querySelector("#name-tf").value;
            const updatedEmail = document.querySelector("#email-tf").value;
            const updatedPhone = document.querySelector("#phone-tf").value;

            formUpdateHandler({
              name: updatedName,
              email: updatedEmail,
              phone: updatedPhone,
            });
          }}
        >
          <div className="input-pair">
            <label htmlFor="name-tf">Full Name</label>
            <input type="text" id="name-tf" />
          </div>

          <div className="input-pair">
            <label htmlFor="email-tf">Email</label>
            <input type="email" id="email-tf" />
          </div>

          <div className="input-pair">
            <label htmlFor="phone-tf">Phone</label>
            <input type="tel" id="phone-tf" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfoSection;
