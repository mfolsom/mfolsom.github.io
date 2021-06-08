function checkCreds(){
    console.log("checkcreds started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + lastName;
    var badgeNumb = document.getElementById("badgeId").value;
  
    //validate fullname
    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid full name, please try again";
    }else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again";
    }else{
        console.log("submission passes");
        alert("Access Granted!  Welcome, " + fullName);
        location.replace("uatspace.html");
    }
}