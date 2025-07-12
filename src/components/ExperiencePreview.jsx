import "../styles/EduExpPreview.css";

function ExperiencePreview({ experienceList }) {
  return (
    <div className="experience-preview">
      <p className="sect-head">EXPERIENCE</p>
      <hr />

      {experienceList.map((item) => {
        return (
          <div className="exp-item">
            <div>
              <p className="employer">
                {item.employer} | {item.title}
              </p>
              <p>
                {item.location} | {item.start} - {item.end}
              </p>
            </div>

            <p className="description">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ExperiencePreview;
