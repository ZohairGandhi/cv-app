import "../styles/Preview.css";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalInfoPreview from "./PersonalInfoPreview";
import SkillsPreview from "./SkillsPreview";

function Preview({ personalInfo, educationList, experienceList, skills }) {
  return (
    <div className="preview-container">
      <button type="button" onClick={() => print()}>
        Print
      </button>
      <div className="preview">
        <PersonalInfoPreview personalInfo={personalInfo} />
        <EducationPreview educationList={educationList} />
        <ExperiencePreview experienceList={experienceList} />
        <SkillsPreview skills={skills} />
      </div>
    </div>
  );
}

export default Preview;
