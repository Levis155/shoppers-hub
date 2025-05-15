import "./EditAccountDetails.css";
import { TextField } from "@mui/material";

function EditAccountDetails() {
  return (
    <div className="edit-account-details-section">
      <p className="edit-account-details-title">edit your account details</p>

      <form className="edit-account-details-body">
        <TextField
          id="outlined-basic-1"
          label="First Name"
          variant="outlined"
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />
        <TextField
          id="outlined-basic-2"
          label="Last Name"
          variant="outlined"
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />
        <TextField
          id="outlined-basic-3"
          label="Email Address"
          variant="outlined"
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />
        <TextField
          id="outlined-basic-4"
          label="Phone Number"
          variant="outlined"
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />

        <div>
          <button className="save-account-details-btn">save</button>
        </div>
      </form>
    </div>
  );
}

export default EditAccountDetails;
