import "./EditShippingAddress.css";
import regionTownMap from "../../../data/regionTownMap";
import { generatePickupStations } from "../../../utils/generatePickupStations";
import { useState } from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import formControlStyle from "../../../data/formControlStyle";

function EditShippingAddress() {
  const [region, setRegion] = useState("Nairobi");
  const [town, setTown] = useState("CBD");
  const [pickupStation, setPickupStation] = useState("CBD Pickup Station 1");

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    setTown("");
    setPickupStation("");
  };

  const handleTownChange = (e) => {
    setTown(e.target.value);
    setPickupStation("");
  };

  const handlePickupStationChange = (e) => {
    setPickupStation(e.target.value);
  };

  return (
    <form className="edit-shipping-address-section">
      <p className="edit-shipping-address-title">edit your shipping address</p>

      <div className="edit-shipping-address-body">
        <FormControl sx={formControlStyle}>
          <InputLabel id="region-label">Region</InputLabel>
          <Select
            labelId="region-label"
            id="region-select"
            value={region}
            label="Region"
            onChange={handleRegionChange}
          >
            {Object.keys(regionTownMap).map((regionName) => (
              <MenuItem key={regionName} value={regionName}>
                {regionName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={formControlStyle} disabled={!region}>
          <InputLabel id="town-label">Town</InputLabel>
          <Select
            labelId="town-label"
            id="town-select"
            value={town}
            label="Town"
            onChange={handleTownChange}
          >
            {(regionTownMap[region] || []).map((townName) => (
              <MenuItem key={townName} value={townName}>
                {townName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={formControlStyle} disabled={!town}>
          <InputLabel id="pickup-label">Pickup Station</InputLabel>
          <Select
            labelId="pickup-label"
            id="pickup-select"
            value={pickupStation}
            label="Pickup Station"
            onChange={handlePickupStationChange}
          >
            {generatePickupStations(town).map((station) => (
              <MenuItem key={station} value={station}>
                {station}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <button className="save-shipping-address-btn">save</button>
      </div>
    </form>
  );
}

export default EditShippingAddress;
