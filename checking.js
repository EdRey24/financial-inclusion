function checkInput(){
    let y = document.getElementById("output");
    let x = document.getElementById("input").value;
    if(x === "yes" || x === "Yes"){
        y.innerHTML = "Thank You";
    }else{
        y.innerHTML = "Like I care";
    }
}