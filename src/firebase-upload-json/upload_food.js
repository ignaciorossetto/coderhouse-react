const admin = require('firebase-admin');
const serviceAccount = require("./karam-hecho-a-mano-4fe73-firebase-adminsdk-jszd6-9d3b5281e7.json");
const data = require("./products.json");
const collectionKey = "products"; //Name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")) {
Object.keys(data).forEach(docKey => {
 firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
    console.log("Document " + docKey + " successfully written!");
}).catch((error) => {
   console.error("Error writing document: ", error);
});
});
}