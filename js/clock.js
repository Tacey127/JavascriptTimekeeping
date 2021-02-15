console.log("script connected");

{
    
    print24hrClock();
    setInterval(print24hrClock, 3000);

    function getTime(){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();

        return(h + ":" + m);
    }
    
    function print24hrClock()
    {
        let aClock = document.getElementById('time');
        aClock.innerHTML = "The time is: " + getTime();
    }
}