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
