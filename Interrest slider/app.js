
var slider = document.getElementById("myRange");
var output = document.getElementById("interest");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value + " %";
}



document.querySelector('#loan-form').addEventListener('submit', (e) => {
    e.preventDefault();

    var x = document.forms["myForm"]["amount"].value;
    if (x < 1) {
        alert("Please Enter Positive Number");
        return false;
    }


    var p, t, r, si, date;
    p = document.getElementById("amount").value;
    t = document.getElementById("years").value;
    r = document.getElementById("myRange").value;
    si = parseInt((p * t * r) / 100);
    // amount = p * Math.pow((1 + r / 100), t);
    document.getElementById('yaer-list').innerHTML = `If you deposit : <span class ="yellow">${p},</span>`;
    document.getElementById('interest-rate').innerHTML = `at an interest rate of : <span class ="yellow">${r}%,</span>`;
    document.getElementById('num').innerHTML = `You will recieve an amount of: <span class ="yellow">${si},</span>`;

    date = new Date();
    newDate = date.getFullYear() + parseInt(t);
    document.getElementById('num1').innerHTML = `in the year :  <span class ="yellow">${newDate}</span>`;

    console.log(p);

})




