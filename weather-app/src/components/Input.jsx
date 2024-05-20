import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Input = () => {
    const navigate = useNavigate();

  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Handle potential empty input
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }
    // Update URL with the city value as a query parameter
    navigate(`/${encodeURIComponent(city)}`); // Use navigate for redirection
};

  return (
    <>
      <div className="row d-flex justify-content-center py-5">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="card text-body" style={{ borderRadius: "35px" }}>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>City</label>
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="Please write name of the city."
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
                <button type="submit"  disabled={!city.trim()} className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
