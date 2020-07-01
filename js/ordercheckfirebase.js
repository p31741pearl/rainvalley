$(document).ready(function () {
   let $date = $('#date');
   let $adultnum = $('#adultnum');
   let $childnum = $('#childnum');
   let $time = $('#time');
   let $phone = $('#phone');
   let $email = $('#email');
   let $order = $('#order');
   let $ordernum = $('#ordernum');
    firebase.initializeApp({
        apiKey: "AIzaSyAyB3fnHVOj8WfrgKU7Z7JA4cr_IyzoZjs",
        authDomain: "test-63021.firebaseapp.com",
        databaseURL: "https://test-63021.firebaseio.com",
        projectId: "test-63021",
        storageBucket: "test-63021.appspot.com",
        messagingSenderId: "885384638979",
        appId: "1:885384638979:web:5aba6284d1866004165436",
        measurementId: "G-S22XG692H7"
    });


    var db = firebase.firestore();
    var usersRef = db.collection("users");


   

    

    let docRef = usersRef.doc("bookinginfo");
    docRef.get().then(function (doc) {
        $date.html(` ${doc.data().date}`);
        $adultnum.html(` ${doc.data().adult} `);
        $childnum.html(` ${doc.data().child} `);
        $time.html(` ${doc.data().time } `);
        $phone.html(`  ${doc.data().phone } `);
        $email.html(`    ${doc.data().email } `);
        $order.html(`    ${doc.data().order } `);
        $ordernum.html(`    ${doc.data().ordernum } `);
        console.log("success");
    })

    auth.createUserWithEmailAndPassword(email.password);

});
