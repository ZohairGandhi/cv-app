import "../styles/CVDetails.css";
import EducationSection from "./EducationSection";
import PersonalInfoSection from "./PersonalInfoSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

function CVDetails({
  personalInfo,
  updatePersonalInfo,
  educationList,
  addEducationItem,
  updateEducationItem,
  experienceList,
  addExperienceItem,
  updateExperienceItem,
  skills,
  updateSkills,
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
      <SkillsSection skills={skills} updateSkills={updateSkills} />
    </div>
  );
}

export default CVDetails;
