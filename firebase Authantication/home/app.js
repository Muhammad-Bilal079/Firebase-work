import { auth, onAuthStateChanged, signOut } from "../utils.js";

// check user is logedin or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user is login');
    const uid = user.uid;
    console.log("user id ==>" + uid);

    // yeah is liay kia hai takay jo login hai woh hamesha home kay page per 
    // hi ayay dubara login na karna paray

    if (location.pathname !== '/home/index.html') {
      window.location = '../home/index.html';
    }


  } else {
    console.log('user is not login');

    // yeah is liay kia hai kay jab user direct home per janay ki koshish 
    // karay ga or woh login bhi nahi hoga to yeah usay direct login kay page bhaj dy ga

    if (location.pathname !== '/login/login.html') {
      window.location.href = '../login/login.html'
    }

  }
});

// user loge out 

let logoutBtn = document.getElementById('logoutBtn')
const logoutHandler = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('Sign-out successful');
    window.location.href = '../login/login.html'
  }).catch((error) => {
    // An error happened.
  });


}

logoutBtn && logoutBtn.addEventListener('click', logoutHandler)
