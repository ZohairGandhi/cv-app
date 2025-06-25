import "../styles/Form.css";

function PersonalInfoForm({ isToggled, formUpdateHandler }) {
  return (
    <form
      className={isToggled ? "is-toggled" : "not-toggled"}
      onChange={() => {
        const updatedName = document.querySelector("#name-tf").value;
        const updatedEmail = document.querySelector("#email-tf").value;
        const updatedPhone = document.querySelector("#phone-tf").value;

        formUpdateHandler({
          name: updatedName,
          email: updatedEmail,
          phone: updatedPhone,
        });
      }}
    >
      <div className="input-pair">
        <label htmlFor="name-tf">Full Name</label>
        <input type="text" id="name-tf" />
      </div>

      <div className="input-pair">
        <label htmlFor="email-tf">Email</label>
        <input type="email" id="email-tf" />
      </div>

      <div className="input-pair">
        <label htmlFor="phone-tf">Phone</label>
        <input type="tel" id="phone-tf" />
      </div>
    </form>
  );
}

export default PersonalInfoForm;
