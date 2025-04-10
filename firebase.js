// firebase.js

// Import firebase từ CDN thì không cần "import" trong file này

// Config Firebase của mày
const firebaseConfig = {
  apiKey: "AIzaSyCBcZTH4Sh5rwVNxlwhRN06IOFMkKqRaeY",
  authDomain: "roamaway-web.firebaseapp.com",
  projectId: "roamaway-web",
  storageBucket: "roamaway-web.appspot.com", // Mày ghi nhầm chữ "storage.app", phải là "storagebucket"
  messagingSenderId: "341151613035",
  appId: "1:341151613035:web:cedd4fdb41a04749d2b12e",
  measurementId: "G-LEPY8HDQC7",
};

// Khởi tạo app
const app = firebase.initializeApp(firebaseConfig);

// Nếu có dùng analytics (không bắt buộc)
const analytics = firebase.analytics();

// Khởi tạo Auth
const auth = firebase.auth();

// Nếu có login Google
const provider = new firebase.auth.GoogleAuthProvider();
