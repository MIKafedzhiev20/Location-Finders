function openCloseFlag(value){
    
    flag="";

    if(value=="Bulgaria")
    {
        flag="pictures/flags/bg flag.png";
    }
    if(value=="Greece")
    {
        flag="pictures/flags/greece flag.png";
    }
    if(value=="Romania")
    {
        flag="pictures/flags/romania flag.png";
    }
    if(value=="Macedonia")
    {
        flag="pictures/flags/macedona flag.png";
    }
    if(value=="Serbia")
    {
        flag="pictures/flags/serbia flag.png";
    }
    if(value=="Turkey")
    {
        flag="pictures/flags/turkey flag.png";
    }

    let popup=document.querySelector(".popup");
    popup.innerHTML=`<img src="${flag}">`;
    popup.classList.add("active");
    setTimeout(()=>{
        popup.classList.remove("active");
        window.open("pages/drawingApp.html", 500, 500, resizeble=0)
    }, 5000)
    setTimeout(()=>{
        popup=document.querySelector(".popup");
        popup.innerHTML=`<img src="${flag}">`;    
        popup.classList.remove("active");
    },30000)
}