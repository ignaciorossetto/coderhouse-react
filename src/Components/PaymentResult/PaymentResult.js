import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {
  collection,
  getDocs,
  where,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import Success from "./Success/Success";
import InProcess from "./InProcess/InProcess";
import Failure from "./Failure/Failure";

const PaymentSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [saleInfo, setSaleInfo] = useState({});

  console.log(
      searchParams.get("status")
  );

  const dd = searchParams.get("preference_id");

  const q = query(
    collection(db, "ventas"),
    where("paymentInfo.OrderId", "==", dd)
  );

  useEffect(() => {
    const updateDocInFirebase = async () => {
      const bb = await getDocs(q);
      console.log(bb);
      let cc = [];
      bb.forEach((doc) => {
        cc.push({ ...doc.data(), docID: doc.id });
      });

      console.log(cc);

      const docRef = doc(db, "ventas", cc[0].docID);

      const data = {
        paymentInfo: {
          payment_id: searchParams.get("payment_id"),
          status: searchParams.get("status"),
          merchant_order: searchParams.get("merchant_order_id"),
          preference_id: searchParams.get("preference_id"),
        },
      };
      setSaleInfo({ ...cc[0], ...data });

      await updateDoc(docRef, data);
    };

    updateDocInFirebase();

  }, [searchParams]);



  return (
    <div className="d-flex flex-column align-items-center">
       {searchParams.get("status") === 'approved' ? <Success info={saleInfo} /> : 
       searchParams.get("status") === 'in_process' ? <InProcess info={saleInfo} /> : <Failure info={saleInfo} />} 
      
    </div>
  );
};

export default PaymentSuccess;
