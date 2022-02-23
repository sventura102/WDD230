/*declare variables */
const temp = 38;
const windSpeed = 7;

/*calculate windchill*/

const windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed, 0.16)) + (0.4275*temp*Math.pow(windSpeed, 0.16));

/* add limits */

if (temp <=50 || windSpeed > 3.0) {
const windChill = Math.round(windChill);
document.getElementById("windChill").innerHTML = windChill;
}

else {
    document.getElementById("windChill").innerHTML = "N/A";
}