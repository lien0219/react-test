import "../scss/form.scss";
import Controlled from "./controlled";
import Uncontrolled from "./uncontrolled";

function Form() {
  return (
    <div className="form">
      <div className="form_container">
        <h1>受控表单</h1>
        <Controlled />
      </div>
      <div className="form_container">
        <h1>非受控表单</h1>
        <Uncontrolled />
      </div>
    </div>
  );
}

export default Form;
