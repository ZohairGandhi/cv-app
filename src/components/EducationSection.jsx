import "../styles/Section.css";
import { useState } from "react";
import schoolOutline from "../assets/icons/school-outline.svg";

function EducationSection({
  sectionName,
  educationList,
  addEducationItem,
  updateEducationItem,
}) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="cv-section">
      <button className="section-btn" onClick={() => setIsToggled(!isToggled)}>
        <img src={schoolOutline} alt="" />

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
        {educationList.map((item, idx) => {
          return (
            <div className="sect-item">
              <p>Item #{idx + 1}</p>

              <form
                key={item.id}
                onChange={(e) => {
                  const updatedValue = e.target.value;

                  switch (e.target.id) {
                    case "institution-tf":
                      updateEducationItem(item.id, {
                        institution: updatedValue,
                      });
                      break;
                    case "location-tf":
                      updateEducationItem(item.id, { location: updatedValue });
                      break;
                    case "degree-tf":
                      updateEducationItem(item.id, { degree: updatedValue });
                      break;
                    case "start-tf":
                      updateEducationItem(item.id, { start: updatedValue });
                      break;
                    case "grad-tf":
                      updateEducationItem(item.id, { grad: updatedValue });
                      break;
                  }
                }}
              >
                <div className="horizontal-pair">
                  <div className="input-pair">
                    <label htmlFor="institution-tf">Institution</label>
                    <input
                      type="text"
                      id="institution-tf"
                      defaultValue={item.institution}
                    />
                  </div>

                  <div className="input-pair">
                    <label htmlFor="location-tf">Location</label>
                    <input
                      type="text"
                      id="location-tf"
                      defaultValue={item.location}
                    />
                  </div>
                </div>

                <div className="input-pair">
                  <label htmlFor="degree-tf">Degree</label>
                  <input
                    type="text"
                    id="degree-tf"
                    defaultValue={item.degree}
                  />
                </div>

                <div className="horizontal-pair">
                  <div className="input-pair">
                    <label htmlFor="start-tf">Start Month/Year</label>
                    <input
                      type="text"
                      id="start-tf"
                      defaultValue={item.start}
                    />
                  </div>

                  <div className="input-pair">
                    <label htmlFor="grad-tf">Grad Month/Year</label>
                    <input type="text" id="grad-tf" defaultValue={item.grad} />
                  </div>
                </div>
              </form>
            </div>
          );
        })}

        <button
          type="button"
          className="add-btn"
          onClick={() => {
            addEducationItem();
          }}
        >
          + Add Education
        </button>
      </div>
    </div>
  );
}

export default EducationSection;
