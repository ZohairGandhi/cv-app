import "../styles/EduExpPreview.css";

function EducationPreview({ educationList }) {
  return (
    educationList.length > 0 && (
      <div className="education-preview">
        <p className="sect-head">EDUCATION</p>
        <hr />

        {educationList.map((item) => {
          return (
            <div className="edu-item" key={item.id}>
              <div>
                <p className="institution">{item.institution}</p>
                <p>{item.location}</p>
              </div>

              <div>
                <p>{item.degree}</p>
                <p>
                  {item.start} - {item.grad}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default EducationPreview;
