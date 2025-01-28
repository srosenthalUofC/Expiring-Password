function generatePassword(text,delayTime){ 
    //first parameter is the "word" part of the password. Can be different per participant but ALL MUST BE SAME LENGTH. Second parameter is delay time expressed in minutes. For example, 10 hours is 600 (60 min*10)
    var currentdate = new Date(); //create new date object
    const monthTable = [0,31,28,31,30,31,30,31,31,30,31,30]; //no way in standard Javascript to get number of days elapsed since beginning of year, this is a workaround
    var numDays = 0;
    for (let i = 0; i < (currentdate.getUTCMonth()+1); i++)
        {
            numDays = (numDays + monthTable[i]) //get number of days elapsed since Jan 1, excluding current month
        }
    numDays = numDays + currentdate.getUTCDate(); //add days of current month
    var currentMin = currentdate.getUTCMinutes() + (currentdate.getUTCHours()*60) + (numDays*1440) + parseInt(delayTime);
    //previous line calculated as current minutes since beginning of current hour + current minutes since midnight before current hour + current mins since Jan 1 before current day + delay time
    return text + currentMin; //returns password string
}

console.log(generatePassword("drawing",123)); //test statement