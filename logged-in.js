firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href="pages/home/home.html"
    }
})