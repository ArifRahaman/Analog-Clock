setInterval(()=>{
d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

  hour.style.transform=`rotate(${hrotation}deg)`;
   minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
},1000);
function updateTime() {
    const timeDisplay = document.getElementById('timeDisplay');
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    let timeString = `${hours % 12}:${minutes}:${seconds}`;

    // Determine whether it's AM or PM
    const amPm = hours < 12 ? 'AM' : 'PM';

    // Convert 0 to 12 for midnight
    if (hours === 0) {
        timeString = `12:${minutes}:${seconds}`;
    }

    timeString += ` ${amPm}`;

    timeDisplay.textContent = timeString;
}

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();


