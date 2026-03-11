/* ============================================
   ExpenseFlow — Firebase Configuration
   ============================================
   
   🔥 SETUP INSTRUCTIONS:
   
   1. Go to https://console.firebase.google.com
   2. Click "Create a project" (or select an existing one)
   3. Give it a name like "expenseflow-app"
   4. Once created, click the web icon (</>) to add a web app
   5. Register the app, then copy the firebaseConfig object
   6. Paste YOUR config values below (replacing the placeholders)
   
   7. Enable Authentication:
      - In Firebase Console → Authentication → Sign-in method
      - Enable "Email/Password"
      - Enable "Google" (select a support email)
   
   8. Create Firestore Database:
      - In Firebase Console → Firestore Database → Create Database
      - Choose "Start in test mode" (for development)
      - Select a Cloud Firestore location closest to you
   
   ============================================ */

// Your web app's Firebase configuration (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyA6kt8nM-Fn_hPrwsf-Ab3SvurPa1IRma4",
    authDomain: "expenseflow-app.firebaseapp.com",
    projectId: "expenseflow-app",
    storageBucket: "expenseflow-app.firebasestorage.app",
    messagingSenderId: "1096574706839",
    appId: "1:1096574706839:web:2405e5826eb12bf7cfb5d2"
};

// ── Initialize Firebase (using compat SDK loaded via CDN) ──
let firebaseApp = null;
let auth = null;
let db = null;
let FIREBASE_ENABLED = false;

try {
    if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();

        // Enable offline persistence for Firestore
        db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
            if (err.code === 'failed-precondition') {
                console.warn('Firestore persistence failed: Multiple tabs open');
            } else if (err.code === 'unimplemented') {
                console.warn('Firestore persistence not available in this browser');
            }
        });

        FIREBASE_ENABLED = true;
        console.log('🔥 Firebase initialized successfully');
    } else {
        console.warn('⚠️ Firebase not configured. Running in LOCAL MODE (localStorage).');
        console.warn('📋 See firebase-config.js for setup instructions.');
    }
} catch (error) {
    console.error('Firebase initialization error:', error);
    console.warn('⚠️ Falling back to LOCAL MODE (localStorage).');
}
