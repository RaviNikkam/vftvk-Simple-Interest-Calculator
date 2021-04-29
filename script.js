// A function to compute simple interest
function compute()
{
    var principal = document.getElementById("principal").value;

    // Code to validate principal input field
    if(!Number.isInteger(principal) && principal <= 0){
            alert("Please enter positive value greater than zero.");
            document.getElementById("principal").focus();
            return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);    
    document.getElementById("result").innerHTML="If you deposit <span class='highlight'>" +principal+ "</span>,\<br>" +
                                                "at an interest rate of <span class='highlight'>" +rate+"%</span>.\<br>" +
                                                "You will receive an amount of <span class='highlight'>" +interest+ "</span>,\<br>" +
                                                "in the year <span class='highlight'>"+year+"</span>.";
}
        
// A function to dynamically update the rate of interest selected using the range button.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}