import "../styles/Preview.css";
import EducationPreview from "./EducationPreview";
import PersonalInfoPreview from "./PersonalInfoPreview";

function Preview({ personalInfo, educationList }) {
  return (
    <div className="preview-container">
      <div className="preview">
        <PersonalInfoPreview personalInfo={personalInfo} />
        <EducationPreview educationList={educationList} />
      </div>
    </div>
  );
}

export default Preview;
