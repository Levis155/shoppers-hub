import "./RateAndReview.css";
import headphonesImg from "../../assets/jbl-live.png";
import { useState } from "react";
import {
  TextField,
  Rating,
} from "@mui/material";

function RateAndReview() {
  const [value, setValue] = useState(0);

  return (
    <form className="rate-and-review-form" action="">
      <p className="rate-and-review-form-title">rate & review</p>

      <div className="rate-and-review-form-body">
        <div className="rate-container">
          <p className="rate-container-title">
            select the stars to rate the product
          </p>

          <div className="rate-container-card">
            <div className="rate-container-card-col1">
              <div className="rate-container-card-img">
                <img src={headphonesImg} alt="" />
              </div>
            </div>

            <div className="rate-container-card-col2">
              <p className="rate-container-card-product-headline">
                Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure
                Bass,Foldable, Long-Lasting Battery
              </p>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
        </div>

        <div className="review-container">
          <p className="review-container-title">leave a review</p>

          <div className="review-container-body">
            <div className="text-field-container">
              <TextField
                id="outlined-basic-1"
                label="Review Title"
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
                id="outlined-basic-1"
                label="Your Name"
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
            </div>

            <div className="text-area-container">
              <TextField
                id="outlined-multiline-static"
                label="Detailed Review"
                multiline
                rows={7}
                // defaultValue="Default Value"
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: "1.6rem",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <button className="submit-review-btn">submit you review</button>
      </div>
    </form>
  );
}

export default RateAndReview;