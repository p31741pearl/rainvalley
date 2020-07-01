$(document).ready(function () {
    let $test = $('#test');
    let $adult = $('#inputStateadult');
    let $child = $('#inputStateChild');
    let $date = $('#inputStatedate')
    let submitorder = $('#submitorder');
    let $phone =$('#inputStatephone');                    
    let phonenum = $phone.val();
    let $email =$('#inputStateemail');
    let email = $email.val();
    let $order =$('#inputStateorder');
    let $ordernum =$('#inputStateordernum');
    let form =$('#formtest');
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


    //select number of adult 
    // Whenever a user clicks the make input
    $adult.on("change", function () {
        var selectadultnum = $adult.find(":selected").text();
        selectadultnum = true;

        console.log("Make Selected is " + selectadultnum);

        if (selectadultnum === true) {
            usersRef.doc("bookinginfo").update({
                "adult": $adult.find(":selected").text(),
            });
        }
    });
    
    //select number of child 
    $child.on("change", function () {
        // Whenever a user clicks the make input
    var selectchildnum = $child.find(":selected").text();
        selectchildnum = true;
        console.log("Make childSelected is " + selectchildnum);
          if (selectchildnum === true) { // Add a new document with a generated id.
        usersRef.doc("bookinginfo").update({
                "child": $child.find(":selected").text(),
               
            })
    };
    });
    
  //select date 
    $date.on("change", function () {
        // Whenever a user clicks the make input
    var selectdate = $date.find(":selected").text();
        selectdate = true;
        console.log("Make dateSelected is " + selectdate);
          if (selectdate === true) { // Add a new document with a generated id.
        usersRef.doc("bookinginfo").update({
                "date": $date.find(":selected").text(),
                
            })
    };
    });
    //select time
    $('.timebtn').on("click",function(){
        
        
         usersRef.doc("bookinginfo").update({
                "time": $('.btn-group > .btn.active').text(),
                
            })
        
    })
    
    
    
     //input phone 
    $phone.on("change", function () {
        // Whenever a user clicks the make input
    phonenum = $phone.val();     
        usersRef.doc("bookinginfo").update({
                "phone": phonenum,
                
            })
            })
    
     //input email 
    $email.on("change", function () {
        // Whenever a user clicks the make input
    email = $email.val();  
        usersRef.doc("bookinginfo").update({
                "email": email,
                
            })
            })
 
    //select dessert 
    $order.on("change", function () {
        // Whenever a user clicks the make input
    var selectorder = $order.find(":selected").text();
        selectorder = true;
        console.log("Make orderSelected is " + selectorder);
          if (selectorder === true) { // Add a new document with a generated id.
        usersRef.doc("bookinginfo").update({
                "order": $order.find(":selected").text(),
                
            })
    };
    });
    
    //select number of dessert 
    $ordernum.on("change", function () {
        // Whenever a user clicks the make input
    var selectordernum = $ordernum.find(":selected").text();
        selectordernum = true;
        console.log("Make ordernumSelected is " + selectordernum);
          if (selectordernum === true) { // Add a new document with a generated id.
        usersRef.doc("bookinginfo").update({
                "ordernum": $ordernum.find(":selected").text(),
                
            })
    };
    });
    
    
   
    
            //submit form
    submitorder.on('click', function () {
        
        db.collection("users").add({
                "child": $child.find(":selected").text(),
                "adult": $adult.find(":selected").text(),
                "date": $date.find(":selected").text(),
            "time":$('.btn-group > .btn.active').text(),
             "phone": phonenum,
            "email": email,
            "order": $order.find(":selected").text(),
            "ordernum": $ordernum.find(":selected").text(),
            })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    });  
                 
        
    
   

    

   

});
