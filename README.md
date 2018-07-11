# Cash Calculator
Cash calculator is a simple JavaScript file which takes an input of a value in pounds and pence (e.g. 24.46) and uses this to calculate the amount of cash and coins that would be required to give this amount in physical money. Once the calculation is complete, the output variables are output to a HTML page via their respective ElementID. 

## Downloading
You can download the cash.js file from this repository and add it to your own website using the following HTML:
```html
<script type="text/javascript" src="cash.js"></script>
```

You can also add Cash Calculator to your own website using the hosted version straight from this GitHub repository:
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/KaiGH/Cash-Calculator/master/cash.js"></script>
```

## Code Documentation
### Initialisation
The script has two global variables, `a` and `o`, which are arrays of integers which hold the currency denominations and the output amounts. The program starts by outputting the `o` variables, initialised as zeros, to fill the table immediately upon the page loading. The script then waits with `addEventListener` for the user to click the submit button which resets the `o` variables to zero, a precaution in case the user is running multiple calculations, and then runs the calculation method followed by the output method. 

### Calculation Method
The calculation method uses `getElementById` to pull the user input from the input field on the HTML page which is then stored in the input variable. This variable is then multiplied by one hundred to make the following calculation less cumbersome as it is now a whole number while potential accidental inputs by the user, such as adding another decimal place, are ignored. The calculation method utilises a `for` loop which creates a local variable `i` and loops 12 times, until `i < 12`, allowing the program to calculate for all 12 currency denominations.

Inside this `for` loop is a `while` loop which runs while `input >= a[i]`, meaning that the while loop only runs if the user's input is less than the current currency denomination that the `for` loop is on. The code inside the while loop subtracts the value of the currency denomination from the input and then increases the output variable for that currency denomination by 1.

### Output Method
The output method uses a `for` loop which loops 12 times to output each of the 12 output variables. The output method uses `getElementById("Id" + i).innerHTML = o[i]` to edit a specific HTML element,  `Id` + the current loop count, and set it to the current output variable.
