// By Sourav Raveendran
var finDate =  new Date(),now = new Date(),total=0, timePast=0, timeLeft=0 ,monthDays= [31, 28 ,31 ,30 , 31 , 30 , 31, 31 , 30 ,31 , 30 , 31];
var functionCount=0;
finDate.setDate(29); // Set Date here before using, 
finDate.setMonth(7); // and month here 
finDate.setHours(9); //  and hours here
finDate.setMinutes(0); // and minutes here
finDate.setSeconds(0); // and seconds here
function totalTime(tv) // Tv = Time Variable (Either present time or final time)
{
    now = new Date();
    now.setDate(now.getDate());
    now.setMonth(now.getMonth());
    now.setHours(now.getHours());
    now.setMinutes(now.getMinutes());
    now.setSeconds(now.getSeconds());
    time=0; // Resets time calculated;
    functionCount++; // Number of times this function was called.
    var i=0; //Counter Variable
    while(i<tv.getMonth()) //calculates number of days present till the 1st of the given month.
    {
        time+=monthDays[i]
        i++;
    }
    i=1;
    while(i<tv.getDate()) //calculates number of days after the given month.
    {
        time++;
        i++;
    }
    time=time*24*60*60; //converting number of days into seconds.
    time+= tv.getHours() * 3600; //calculates total number of seconds in the hours present after 00:00 of the date.
    time+= tv.getMinutes() * 60; //calculates total number of seconds in the minutes present after the number of hours present in the given date
    time+=tv.getSeconds();
    (functionCount<=1)? (total=time) : (timePast=time) ;
}
totalTime(finDate);
function countDown()
{
    var days, hours, minutes, seconds;
    totalTime(now);
    timeLeft = (total-timePast) - 1;
    days = (timeLeft - (timeLeft % 86400)) / 86400 ;
    timeLeft = timeLeft - days * 86400;
    hours = (timeLeft - (timeLeft % 3600)) / 3600;
    timeLeft = timeLeft - hours * 3600;
    minutes = (timeLeft - (timeLeft % 60)) / 60;
    timeLeft = timeLeft - minutes * 60;
    seconds = timeLeft;
    timeLeft = 0;
    document.getElementById("days").innerHTML = days;                   
    document.getElementById("hours").innerHTML = hours;                 
    document.getElementById("minutes").innerHTML = minutes;             
    document.getElementById("seconds").innerHTML = seconds;
    if (days==1) 
        document.getElementById("days_display").innerHTML="Day";    
    else
        document.getElementById("days_display").innerHTML="Days";
    if (hours==1) 
        document.getElementById("hours_display").innerHTML="Hour";    
    else
        document.getElementById("hours_display").innerHTML="Hours" ;
    if (minutes==1) 
        document.getElementById("minutes_display").innerHTML="\t Min";    
    else
        document.getElementById("minutes_display").innerHTML="\t " + "Mins" ;
    if (seconds==1) 
        document.getElementById("seconds_display").innerHTML="Sec";    
    else
        document.getElementById("seconds_display").innerHTML="Sec";
    if (seconds<0) {
        timerOut();
    }
    else
    {
        setTimeout(countDown, 1000);
    }
}
countDown();
function timerOut()
{
    document.getElementById("countdown_display").style.display="none";
    document.getElementById("deadline").innerHTML="R-NPSMUN has begun!";
    document.getElementById("deadline").style.fontSize="250%";
}


// Sourav Raveendran.


