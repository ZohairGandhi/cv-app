import "../styles/Section.css";
import { useState } from "react";
import hammerScrewdriver from "../assets/icons/hammer-screwdriver.svg";

function SkillsSection({ skills, updateSkills }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="cv-section">
      <button className="section-btn" onClick={() => setIsToggled(!isToggled)}>
        <img src={hammerScrewdriver} alt="" />

        <p>Skills</p>

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

      <div className={isToggled ? "is-toggled skills-item" : "not-toggled"}>
        <form onChange={(e) => updateSkills(e.target.value)}>
          <div className="input-pair">
            <label htmlFor="skills-tf">Add Skills</label>
            <input type="text" id="skills-tf" defaultValue={skills} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SkillsSection;
