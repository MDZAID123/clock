

setInterval(()=>{
    date = new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrotation= 30*htime +mtime/2;
    mrotation= 6*mtime;
    srotation=6*stime;


    hour.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;





    // with time each will roatate by how much 
    //and what is its dependency on the given time factors 


},1000);