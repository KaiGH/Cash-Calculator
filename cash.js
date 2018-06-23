// Initialise Variables 
var a = [5000,2000,1000,500,200,100,50,20,10,5,2,1]; // Currency Denonination Amounts
var o = [0,0,0,0,0,0,0,0,0,0,0,0]; // Output Variables
output();

// Wait for User Input (expects numeric input with or without decimal place)
document.getElementById("submit").addEventListener("click",function()
{
    o = [0,0,0,0,0,0,0,0,0,0,0,0];
    calculation();
    output();
})

// Calculate Output
function calculation()
{
    var input = document.getElementById("input").value;
    input *= 100; // Multiply input by 100 to remove decimal place
    
    for (var i = 0; i < 12; i++) // Iterate until all denoninations calculated
    {
        while (input >= a[i]) // Iteration [i] used to pull data from and write data to arrays
        {
            input -= a[i];
            o[i]++;
        }
    }
}

// Output to HTML Page
function output()
{
    for (var i = 0; i< 12; i++)
    {
        document.getElementById("Id" + i).innerHTML = o[i];
    }
}
