import "../styles/PersonalInfoPreview.css";

function PersonalInfoPreview({ personalInfo }) {
  return (
    <div className="personal-info-preview">
      {personalInfo.name !== "" && <h1>{personalInfo.name}</h1>}
      <div className="contact-container">
        {personalInfo.email !== "" && <p>{personalInfo.email}</p>}
        {personalInfo.phone !== "" && <p>{personalInfo.phone}</p>}
      </div>
    </div>
  );
}

export default PersonalInfoPreview;
