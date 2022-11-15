import React from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// Add a new document with a generated id.

// COMPONENTE PARA SUBIR BASE DE DATOS CON ID UNICOS CREADOS POR FIREBASE
// https://firebase.google.com/docs/firestore/manage-data/add-data

const Uploaddb = () => {
  const data = require("../products.json");

  const btnUpload = async () => {
    await data.forEach(async (product) => {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Document written with ID: ", docRef.id);
    });
  };

  return <button onClick={btnUpload}>uploaddb</button>;
};

export default Uploaddb;
