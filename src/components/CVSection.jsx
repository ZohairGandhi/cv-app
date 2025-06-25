import "../styles/CVSection.css";
import { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import accountOutline from "../assets/account-outline.svg";

function CVSection({ sectionName, formUpdateHandler }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="cv-section">
      <button onClick={() => setIsToggled(!isToggled)}>
        {sectionName === "Personal Info" ? (
          <img src={accountOutline} alt="" />
        ) : null}

        <p>{sectionName}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000"
          height="1.5rem"
          className={isToggled ? "is-toggled" : ""}
        >
          <title>chevron-down</title>
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </button>

      {sectionName === "Personal Info" ? (
        <PersonalInfoForm
          isToggled={isToggled}
          formUpdateHandler={formUpdateHandler}
        />
      ) : null}
    </div>
  );
}

export default CVSection;
