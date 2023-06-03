import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBYjdl-oXvVetGOXl9iBeS5xqwZPrb5YOA",
	authDomain: "bookapp-e9e2c.firebaseapp.com",
	projectId: "bookapp-e9e2c",
	storageBucket: "bookapp-e9e2c.appspot.com",
	messagingSenderId: "444770714151",
	appId: "1:444770714151:web:8d301b6e7decd00e5e8402"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
//
// const firebaseConfig = {
// 	apiKey: "AIzaSyASXP2CJUt1sVea259tDZcIAANepwlQ9YE",
// 	authDomain: "books-d5580.firebaseapp.com",
// 	projectId: "books-d5580",
// 	storageBucket: "books-d5580.appspot.com",
// 	messagingSenderId: "1085698361108",
// 	appId: "1:1085698361108:web:8511c44306f03acba6e401",
// 	measurementId: "G-QHVNYKQ716"
// };
//
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export default db;
