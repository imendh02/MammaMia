import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Reservation.css";
function Reservation({ formData, setFormData }) {
  const navigate = useNavigate();

  // const [reservation, setReservation] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   persons: "",
  //   date: "",
  //   time: "",
  //   SpecialRequests: "",
  // });

  // const handleChange = (e) => {
  //   setReservation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  // const [error, setError] = useState(false);

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8800/reservation", reservation);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //     // setError(true);
  //   }
  // };

  return (
    <>
      <h1>Online Reservation</h1>
      <p>
        You can book a table online easily in just a minute. Check the
        availability of your table & book it now!
      </p>
      <form>
        <div className="formGroup">
          <div className="inputGroup">
            <input
              type="text"
              name="name"
              className="form__input"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <label for="name" class="form__label">
              Your Full Name
            </label>
          </div>
          <div className="inputGroup">
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label for="email" className="form__label">
              Your Email
            </label>
          </div>
          <div className="inputGroup">
            <input
              type="tel"
              name="phone"
              className="form__input"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <label for="phone" className="form__label">
              Your Phone Number
            </label>
          </div>
          <input
            type="number"
            name="persons"
            min="1"
            max="10"
            placeHolder="Number Of Persons"
            value={formData.persons}
            onChange={(e) =>
              setFormData({ ...formData, persons: e.target.value })
            }
          />
          <input
            type="date"
            name="date"
            className="datePicker"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <input
            type="time"
            name="time"
            className="datePicker"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </div>
        <textarea
          placeholder="Special Requests"
          name="SpecialRequests"
          value={formData.SpecialRequests}
          onChange={(e) =>
            setFormData({ ...formData, SpecialRequests: e.target.value })
          }
        ></textarea>
        {/* <button
          type='submit'
          className='custom-btn btn'
          onClick={handleClick}
        >
          <span>Book A Table</span>
        </button>*/}
      </form>
    </>
  );
}

export default Reservation;
