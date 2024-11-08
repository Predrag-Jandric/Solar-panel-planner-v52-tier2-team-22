import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Test() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: null,
  });

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = function (date) {
    setFormData((prevData) => ({ ...prevData, date }));
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(formData);

    // commented out for testing purposes

    // setFormData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   address: "",
    //   date: null,
    // });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col gap-5 shadow-md max-w-sm rounded mx-auto px-8 py-8"
      >
        {/* Name */}
        <article className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </article>

        {/* Email */}
        <article className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </article>

        {/* Phone Number */}
        <article className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </article>

        {/* Address */}
        <article className="flex flex-col gap-2">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </article>

        {/* Date */}
        <article className="flex flex-col gap-2">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold"
          >
            Preferred Timeslot
          </label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm"
            placeholderText="Click to select"
            className="shadow border w-full rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </article>

        {/* Buttons */}
        <article className="flex gap-5 mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            type="button" // prevent form submission
            onClick={() =>
              setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                date: null,
              })
            }
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </article>
      </form>
    </>
  );
}

export default Test;
