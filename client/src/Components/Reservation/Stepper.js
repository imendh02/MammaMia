import React, { useState } from "react";
import Reservation from "./Reservation";
import MenuForm from "./MenuForm";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Stepper() {
  const steps = ["Customer Info", "Menu Info"];

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    persons: "",
    date: "",
    time: "",
    SpecialRequests: "",
    menu: [],
  });
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    try {
      await axios.post("http://localhost:8800/reservation", formData);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Reservation
          formData={formData}
          setFormData={setFormData}
          data={page}
        />
      );
    } else if (page === 1) {
      return <MenuForm formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="stepper">
      <div className="form-container">
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          {page !== 0 && (
            <button
              className="previous"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <span className="label">Back</span>
              <span class="icon">
                <AiOutlineArrowLeft />
              </span>
            </button>
          )}
          {page !== 0 && <button className="skip">Skip</button>}
          <button
            className={"next " + (page === steps.length - 1 ? "submit" : "")}
            onClick={() => {
              if (page === steps.length - 1) {
                alert("Reservation SUBMITTED");
                handleClick();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            <span className="label">
              {page === steps.length - 1 ? "Make A Reservation" : "Next"}
            </span>
            <span class="icon">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
