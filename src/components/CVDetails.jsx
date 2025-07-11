import "../styles/CVDetails.css";
import EducationSection from "./EducationSection";
import PersonalInfoSection from "./PersonalInfoSection";

function CVDetails({
  personalInfo,
  updatePersonalInfo,
  educationList,
  addEducationItem,
  updateEducationItem,
}) {
  return (
    <div className="cv-details">
      <h2>CV Details</h2>
      <PersonalInfoSection
        personalInfo={personalInfo}
        updatePersonalInfo={updatePersonalInfo}
      />
      <EducationSection
        educationList={educationList}
        addEducationItem={addEducationItem}
        updateEducationItem={updateEducationItem}
      />
    </div>
  );
}

export default CVDetails;
