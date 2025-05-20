import "./EditAccountDetails.css";
import { TextField } from "@mui/material";
import formControlStyle from "../../../data/formControlStyle.js";

function EditAccountDetails() {
  return (
    <div className="edit-account-details-section">
      <p className="edit-account-details-title">edit your account details</p>

      <form className="edit-account-details-body">
        <TextField
          id="outlined-basic-1"
          label="First Name"
          variant="outlined"
          sx={formControlStyle}
        />
        <TextField
          id="outlined-basic-2"
          label="Last Name"
          variant="outlined"
          sx={formControlStyle}
        />
        <TextField
          id="outlined-basic-3"
          label="Email Address"
          variant="outlined"
          sx={formControlStyle}
        />
        <TextField
          id="outlined-basic-4"
          label="Phone Number"
          variant="outlined"
          sx={formControlStyle}
        />

        <div>
          <button className="save-account-details-btn">save</button>
        </div>
      </form>
    </div>
  );
}

export default EditAccountDetails;
