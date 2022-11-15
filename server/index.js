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


console.log(typeof(mercadopago.MercadoPago));

// const express = require("express");
const app = express();
const PORT = 3001;
// const mercadopago = require("mercadopago");
// const bodyParser = require("body-parser");

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

app.post("/process-payment", (req, res) => {
  mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN_MP);
  const payment_data = {
      transaction_amount: req.body.transaction_amount,
      token: req.body.token,
      description: req.body.description,
      installments: Number(req.body.installments),
      payment_method_id: req.body.paymentMethodId,
      issuer_id: req.body.issuer,
      payer: {
          email: req.body.payer.email,
          identification: {
              type: req.body.payer.docType,
              number: req.body.payer.docNumber,
          },
      },
  };

  mercadopago.payment
      .save(payment_data)
      .then((response) => {
          return res.status(response.status).json({
              status: response.body.status,
              status_detail: response.body.status_detail,
              id: response.body.id,
          });
      })
      .catch((err) => {
          return res.status(500).send(err);
      });
});



app.get("/feedback", function (req, res) {
  const q = query(
    collection(db, "ventas"),
    where(
      "paymentInfo.OrderId",
      "==",
      req.query.preference_id
    )
  );

  const aa = async () => {
    const bb = await getDocs(q);
    let productID = "";
    let cc = [];
    bb.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.data());
      cc.push({ ...doc.data(), docID: doc.id });
    });

    productID = cc[0].docID;
    console.log(productID);

    const docRef = doc(db, "ventas", cc[0].docID);

    const data = {
      paymentInfo: {
        payment_id: req.query.payment_id,
        status: req.query.status,
        merchant_order: req.query.merchant_order_id,
        preference_id: req.query.preference_id,
      },
    };

    await updateDoc(docRef, data);
  };

  aa();

  res.json({
    message: `felicitaciones! Tu compra con ID ${req.query.preference_id}, con estado ${req.query.payment_id} fue Aprovada!`
  })

});

app.get("/feedbacks", function (req, res) {
  const q = query(
    collection(db, "ventas"),
    where(
      "paymentInfo.OrderId",
      "==",
      "65474109-5a38cbcb-94cb-4841-8c79-db864e535b44"
    )
  );

  const aa = async () => {
    const bb = await getDocs(q);
    let productID = "";
    let cc = [];
    bb.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.data());
      cc.push({ ...doc.data(), docID: doc.id });
    });

    productID = cc[0].docID;
    console.log(productID);

    const docRef = doc(db, "ventas", cc[0].docID);

    const data = {
      paymentInfo: {
        Payment: "APPROVED",
      },
    };

    await updateDoc(docRef, data);
  };

  aa();

  res.json({
    Payment: "aa",
  });
});

//65474109-b3f64497-3685-4fe8-ad3f-ffd5651311b1

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
