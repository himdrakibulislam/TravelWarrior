import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const firebaseInstalling = () =>{
    initializeApp(firebaseConfig)
}
export default firebaseInstalling;