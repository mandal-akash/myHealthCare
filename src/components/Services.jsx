import React, { useEffect, useState } from "react";

import { db } from "../firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import ServicesList from "./ServicesList";

const Services = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesCollectionRef = collection(db, "myHealthCare");

      const querySnapshot = await getDocs(messagesCollectionRef);

      const messagesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(messagesData);
    };

    fetchMessages();
  }, [messages]);

  return (
    <div className="services">
      <div className="">
        <h1 className="text-4xl underline  text-center m-6 font-semibold text-rose-700 hover:cursor-pointer">
          my<span className="text-neutral-600">HealthCare </span>
          <span className="text-sky-700">Hospital Services</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 w-[55vw] gap-2 items-center mx-8">
        {messages.map((list) => (
          <ServicesList
            key={list.id}
            id={list.id}
            name={list.name}
            desc={list.description}
            price={list.price}
          />
        ))}
       
      </div>
    </div>
  );
};

export default Services;
