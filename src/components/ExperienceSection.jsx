import "../styles/Section.css";
import { useState } from "react";
import briefcaseOutline from "../assets/icons/briefcase-outline.svg";

function ExperienceSection({
  experienceList,
  addExperienceItem,
  updateExperienceItem,
}) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="cv-section">
      <button className="section-btn" onClick={() => setIsToggled(!isToggled)}>
        <img src={briefcaseOutline} alt="" />

        <p>Experience</p>

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
        {experienceList.map((item, idx) => {
          return (
            <div className="sect-item">
              <p>Item #{idx + 1}</p>

              <form
                key={item.id}
                onChange={(e) => {
                  const updatedValue = e.target.value;

                  switch (e.target.id) {
                    case "employer-tf":
                      updateExperienceItem(item.id, { employer: updatedValue });
                      break;
                    case "title-tf":
                      updateExperienceItem(item.id, { title: updatedValue });
                      break;
                    case "start-tf":
                      updateExperienceItem(item.id, { start: updatedValue });
                      break;
                    case "end-tf":
                      updateExperienceItem(item.id, { end: updatedValue });
                      break;
                    case "location-tf":
                      updateExperienceItem(item.id, { location: updatedValue });
                      break;
                    case "description-tf":
                      updateExperienceItem(item.id, {
                        description: updatedValue,
                      });
                      break;
                  }
                }}
              >
                <div className="horizontal-pair">
                  <div className="input-pair">
                    <label htmlFor="employer-tf">Employer</label>
                    <input
                      type="text"
                      id="employer-tf"
                      defaultValue={item.employer}
                    />
                  </div>

                  <div className="input-pair">
                    <label htmlFor="title-tf">Job Title</label>
                    <input
                      type="text"
                      id="title-tf"
                      defaultValue={item.title}
                    />
                  </div>
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
                    <label htmlFor="end-tf">End Month/Year</label>
                    <input type="text" id="end-tf" defaultValue={item.end} />
                  </div>
                </div>

                <div className="input-pair">
                  <label htmlFor="location-tf">Location</label>
                  <input
                    type="text"
                    id="location-tf"
                    defaultValue={item.location}
                  />
                </div>

                <div className="input-pair">
                  <label htmlFor="description-tf">Description</label>
                  <textarea
                    id="description-tf"
                    rows="5"
                    defaultValue={item.description}
                  />
                </div>
              </form>
            </div>
          );
        })}

        <button
          type="button"
          className="add-btn"
          onClick={() => {
            addExperienceItem();
          }}
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
}

export default ExperienceSection;
