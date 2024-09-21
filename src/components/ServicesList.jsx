import React from "react";
import { db } from "../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import ServicesForm from "./ServicesForm";
import "../style/serviceList.css";
const ServicesList = ({ name, desc, price, id }) => {
  const deleteServices = () => {
    const docRef = doc(db, "myHealthCare", id);
    deleteDoc(docRef);
  };

  return (
    <div className="mt-12">
      <div className="card shadow-xl">
        <div className="flex  justify-around ">
        <h1 className="text-2xl text-center text-neutral-500 p-2 m-1  font-bold">{name}</h1>
        <button className="text-2xl  px-4 hover:bg-neutral-300 rounded-full"><span><i className="bi bi-pen"></i></span></button>
        </div>
        
        <div className="bg-white m-2 rounded-xl p-8 shadow-md font-semibold text-gray-600 text-lg">
          <p>{desc}</p>
        </div>
        <div className="flex items-center justify-around my-8">
          <span className="font-semibold text-xl py-2 px-4 text-rose-900 border border-neutral-800 rounded-lg">Rs:{price}</span>
          <button onClick={deleteServices} className="removeBtn font-semibold text-xl py-2 px-4">Remove <span className="font-bold"><i className="bi bi-trash"></i></span></button>
        </div>
      </div>
      <ServicesForm />
    </div>
  );
};

export default ServicesList;
