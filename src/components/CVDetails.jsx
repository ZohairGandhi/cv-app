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
        sectionName="Personal Info"
        personalInfo={personalInfo}
        updatePersonalInfo={updatePersonalInfo}
      />
      <EducationSection
        sectionName="Education"
        educationList={educationList}
        addEducationItem={addEducationItem}
        updateEducationItem={updateEducationItem}
      />
    </div>
  );
}

export default CVDetails;
