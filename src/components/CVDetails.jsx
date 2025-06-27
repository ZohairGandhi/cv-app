import "../styles/CVDetails.css";
import EducationSection from "./EducationSection";
import PersonalInfoSection from "./PersonalInfoSection";

function CVDetails({ updatePersonalInfo }) {
  return (
    <div className="cv-details">
      <h2>CV Details</h2>
      <PersonalInfoSection
        sectionName="Personal Info"
        formUpdateHandler={updatePersonalInfo}
      />
      <EducationSection sectionName="Education" />
    </div>
  );
}

export default CVDetails;
