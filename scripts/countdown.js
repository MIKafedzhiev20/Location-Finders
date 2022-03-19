function openCloseFlag(value){
    /*if(value=="Bulgaria")
    {
        document.getElementById("flag").src="pictures/flags/bg flag.png";
    }
    if(value=="Greece")
    {
        document.getElementById("flag").src="pictures/flags/greece flag.png";
    }
    if(value=="Romania")
    {
        document.getElementById("flag").src="pictures/flags/romania flag.png";
    }
    if(value=="Macedonia")
    {
        document.getElementById("flag").src="pictures/flags/macedonia flag.png";
    }
    if(value=="Serbia")
    {
        document.getElementById("flag").src="pictures/flags/serbia flag.png";
    }
    if(value=="Turkey")
    {
        document.getElementById("flag").src="pictures/flags/turkey flag.png";
    }*/


    window.open("pages/flag.html",height=600,width=1200);
    setTimeout(()=>{window.open("pages/drawingApp.html");
    }, 5001)
    
}