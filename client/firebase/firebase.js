import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOBc7kDNpFirnx3OVIlx0gYDeX8jR43cU",
  authDomain: "job-board-website-58af5.firebaseapp.com",
  projectId: "job-board-website-58af5",
  storageBucket: "job-board-website-58af5.appspot.com",
  messagingSenderId: "537528609233",
  appId: "1:537528609233:web:bfc4d853ef113561f998f0",
  measurementId: "G-V55S4S58MY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
export const storage = getStorage(app);
