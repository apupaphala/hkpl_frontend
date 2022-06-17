import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

class AuthService {
    static init {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBy0Hbez5VYcMg1iM_UK8UXbhhfJZCZz_4",
        authDomain: "hkpl-website.firebaseapp.com",
        projectId: "hkpl-website",
        storageBucket: "hkpl-website.appspot.com",
        messagingSenderId: "192842224106",
        appId: "1:192842224106:web:20ea85530edef1cd8f2293",
        measurementId: "G-BRFW3JZTCQ"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}