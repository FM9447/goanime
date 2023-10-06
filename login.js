function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (
    (username === "project" && password === ")(*&^%$#@!") ||
    (username === "atul" && password === ")(*&^%$#@!") ||
    (username === "daya" && password === ")(*&^%$#@!") ||
    (username === "faheem" && password ==="944794")
    )
    {
        alert("SIGNED IN");
        window.open("index.html"); 
    }
    else {
        alert("Invalid Credentials");
        
    }

}   
