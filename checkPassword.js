//Note: This function cannot work in just a Javascript terminal, it is required to be added to an HTML/PHP document to use both the prompt and alert functions (refer to example.html for implementation)

function checkPassword(text,delayWindow){
    //text should be the same "text" as part 1, delayWindow is the window you want to give your participants to return expressed in minutes
    //For example, a 10 hour delay period with a 2 hour window (participants can take the task anywhere from an 8-12 hour delay) would be 120
    var currentdate = new Date(); 
    const monthTable = [0,31,28,31,30,31,30,31,31,30,31,30];
    var numDays = 0;
    for (let i = 0; i < (currentdate.getUTCMonth()+1); i++)
        {
            numDays = (numDays + monthTable[i])
        }
    numDays = numDays + currentdate.getUTCDate();
    currentMin = currentdate.getUTCMinutes() + (currentdate.getUTCHours()*60) + (numDays*1440); //above is identical to generatePassword. Used to get current time
    var result = prompt('\nPlease enter the password provided to you in Part One. \nIf either your time condition or password is incorrect, please double check both and return at the appropiate time or enter the correct password \nExample: drawing123456\n');
    //can use any method of password imput you prefer
    //prompt can only be used in HTML/PHP docs, not just javascript
    result = result.replace(/\s+/g, ''); //removes all spaces in input
            try
             {
                    result = result.substring(text.length); //removes the text from the password
                    result = parseInt(result); //parses the remaining numbers into an integer
             }
        catch(TypeError){} //sees if there is a casting error, usually occours if the participant mistypes the word part of the password

    //positive currentMin-result indicates late
    //negative currentMin-result indicates early
    if ((currentMin-result >= -(parseInt(delayWindow))) && (currentMin-result <= (parseInt(delayWindow))))
        {
            console.log("password correct"); //replace this with the function to progress your study
        }
    else
        {
            alert('Please ensure that both your return condition and password are correct');
            checkPassword("drawing",120); //restarts function. Must be identical to orginial call of checkPassword
        }
    }
