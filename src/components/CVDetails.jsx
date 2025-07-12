import "../styles/CVDetails.css";
import EducationSection from "./EducationSection";
import PersonalInfoSection from "./PersonalInfoSection";
import ExperienceSection from "./ExperienceSection";

function CVDetails({
  personalInfo,
  updatePersonalInfo,
  educationList,
  addEducationItem,
  updateEducationItem,
  experienceList,
  addExperienceItem,
  updateExperienceItem,
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
      <ExperienceSection
        experienceList={experienceList}
        addExperienceItem={addExperienceItem}
        updateExperienceItem={updateExperienceItem}
      />
    </div>
  );
}

export default CVDetails;
