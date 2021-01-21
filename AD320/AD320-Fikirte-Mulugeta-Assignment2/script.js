let hasOriginalColor = true;

function doStuff() {
    document.getElementById("myH1").innerHTML += "!";
    let myH1 = document.getElementById("myH1");
    if (hasOriginalColor) { 
        myH1.style.color = "#FF00FF";
    } else {
        myH1.style.color = "#555";
    }
    hasOriginalColor = !hasOriginalColor;
    console.log("Added ! & swapped color");
} 


function doStuff() {
    var now = new Date().toLocaleString('en-US', { timeStyle: 'medium', dateStyle: 'long' });

    alert(now);

    console.log(now);

}