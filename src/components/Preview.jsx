import "../styles/Preview.css";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalInfoPreview from "./PersonalInfoPreview";

function Preview({ personalInfo, educationList, experienceList }) {
  return (
    <div className="preview-container">
      <div className="preview">
        <PersonalInfoPreview personalInfo={personalInfo} />
        <EducationPreview educationList={educationList} />
        <ExperiencePreview experienceList={experienceList} />
      </div>
    </div>
  );
}

export default Preview;
