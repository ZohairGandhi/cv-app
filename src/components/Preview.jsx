import "../styles/Preview.css";
import PersonalInfoPreview from "./PersonalInfoPreview";

function Preview({ personalInfo }) {
  return (
    <div className="preview-container">
      <div className="preview">
        <PersonalInfoPreview personalInfo={personalInfo} />
      </div>
    </div>
  );
}

export default Preview;
