import React, { useState } from "react";
import "../style/servicesForm.css";
import { db } from "../firebase";
const ServicesForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const addServices = (e) => {
    e.preventDefault();
    db.collection("myHealthCare").add({
      name: name,
      description: desc,
      price: price,
    });

    setDesc("");
    setName("");
    setPrice("");
  };

 
  return (
    <div className="absolute right-[40px] top-40">
      <form className="flex flex-col h-[60vh] items-center m-6 border border-neutral-400 rounded-2xl bg-gray-50 shadow-md  w-[20vw] mx-auto space-y-12 py-6">
        <h1 className="text-2xl font-semibold text-neutral-600">
          Add new services
        </h1>

        <div className="input-container">
          <input
            placeholder="services name"
            className="input-field"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label for="input-field" className="input-label">
            Services name
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <input
            placeholder="Services description"
            className="input-field"
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <label for="input-field" className="input-label">
            Services description
          </label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input
            placeholder="Services price"
            className="input-field"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <label for="input-field" className="input-label">
            Services price
          </label>
          <span className="input-highlight"></span>
        </div>
        <button
          onClick={addServices}
          className="border text-xl text-neutral-600 py-3 px-6 rounded-md font-semibold shadow-lg"
          type="submit"
        >
          Add Services
        </button>
      </form>
    </div>
  );
};

export default ServicesForm;
