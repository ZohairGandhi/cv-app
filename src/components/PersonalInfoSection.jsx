import "../styles/Section.css";
import { useState } from "react";
import accountOutline from "../assets/icons/account-outline.svg";

function PersonalInfoSection({ personalInfo, updatePersonalInfo }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="cv-section">
      <button className="section-btn" onClick={() => setIsToggled(!isToggled)}>
        <img src={accountOutline} alt="" />

        <p>Personal Info</p>

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

      <div
        className={isToggled ? "is-toggled personal-info-item" : "not-toggled"}
      >
        <form
          onChange={(e) => {
            const updatedValue = e.target.value;
            switch (e.target.id) {
              case "name-tf":
                updatePersonalInfo({ name: updatedValue });
                break;
              case "email-tf":
                updatePersonalInfo({ email: updatedValue });
                break;
              case "phone-tf":
                updatePersonalInfo({ phone: updatedValue });
                break;
            }
          }}
        >
          <div className="input-pair">
            <label htmlFor="name-tf">Full Name</label>
            <input type="text" id="name-tf" defaultValue={personalInfo.name} />
          </div>

          <div className="horizontal-pair">
            <div className="input-pair">
              <label htmlFor="email-tf">Email</label>
              <input
                type="email"
                id="email-tf"
                defaultValue={personalInfo.email}
              />
            </div>

            <div className="input-pair">
              <label htmlFor="phone-tf">Phone</label>
              <input
                type="tel"
                id="phone-tf"
                defaultValue={personalInfo.phone}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfoSection;
