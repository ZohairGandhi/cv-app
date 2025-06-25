import CVSection from "./CVSection";
import "../styles/CVDetails.css";

function CVDetails({ updatePersonalInfo }) {
  return (
    <div className="cv-details">
      <h2>CV Details</h2>
      <CVSection
        sectionName="Personal Info"
        formUpdateHandler={updatePersonalInfo}
      />
      <CVSection sectionName="Education" />
    </div>
  );
}

export default CVDetails;
