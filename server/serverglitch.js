import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import express from "express";
import mercadopago from "mercadopago";
import bodyParser from "body-parser";

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mercadopago.configure({
  access_token:
    "TEST-8125028252532334-111311-2cedcea370aeadf162b1b5f60914673f-1238153828",
});

app.post("/api", (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [],
    back_urls: {
      success: "http://localhost:3000/checkout/payment/result",
      failure: "http://localhost:3000/checkout/payment/result",
      pending: "http://localhost:3000/checkout/payment/result",
    },
    auto_return: "approved",
  };

  let cartarray = req.body;

  cartarray.forEach((product) => {
    preference.items.push({
      title: product.name,
      unit_price: product.price,
      quantity: product.amount,
      picture_url: product.image
    });
  });

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.send({
        id: response.body.id
      });
    })
    .catch(function (error) {
      console.log(error, "hola");
    });
});
app.post("/process", (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [],
    back_urls: {
      success: "http://localhost:3000/checkout/payment/result",
      failure: "http://localhost:3000/checkout/payment/result",
      pending: "http://localhost:3000/checkout/payment/result",
    },
    auto_return: "approved",
  };

  let cartarray = req.body;
  console.log(req.body);
  cartarray.forEach((product) => {
    preference.items.push({
      title: product.name,
      unit_price: product.price,
      quantity: product.amount,
      picture_url: product.image
    });
  });

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      //   console.log(response.body);
      // console.log(response.body);

      res.send({
        id: response.body.id,
        message: "Hola, este es el servidor",
      });
    })
    .catch(function (error) {
      console.log(error, "hola");
    });
});





app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
