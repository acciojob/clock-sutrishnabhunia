//your JS code here. If required
updateclock();
function updateclock() {
	const currTime = new Date();
	const hours = currTime.getHours();
	const minutes = currTime.getMinutes();
	const seconds = currTime.getSeconds();


	 minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;

        // Determine AM/PM
        var period = hours < 12 ? "AM" : "PM";

        // Convert to 12-hour format
        hours = hours > 12 ? hours - 12 : hours;
        hours = hours === 0 ? 12 : hours;

	
	var clockDiv = document.getElementById("clock");
	clockDiv.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
}
	export default updateclock();
setInterval(updateClock, 1000);
