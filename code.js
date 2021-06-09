
//start button
function start() {
    //testing start button functionality
    console.log("START button pushed!");
    //let user know that data is being processed
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    //set index start
    index = 0;
    //set interval of timer to update the display
    timer = setInterval(updateDisplay, time_interval);
    //disables start button on click event and enables stop
    document.getElementById("startButton").disabled = true;
    //ensures stop is enabled on click event
    document.getElementById("stopButton").disabled = false;
}

function stop() {
    clearInterval(timer);
    //testing stop button functionality
    console.log("STOP button pushed!");
    //disables stop button on click event
    document.getElementById("stopButton").disabled = true;
    //ensures start button is enabled on click event
    document.getElementById("startButton").disabled = false;
}

function betterCountdown() {
    var count = 10;
    //setting arguments for iterating
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            //display Blastoff when countdown stops
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
            //display warning when less than 5 seconds
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch, time left = " + count;
                count = count - 1;
            }, 1000 * i);
        } else {
            //start the countdown
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + count;
                count = count - 1;
            }, 1000 * i);
        }
    }
}
//define datarow and construct inputs for each row
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
//get data from raw datasource
function getData() {
    var loadedData = loadData();
    return loadedData;
}

class InputData {
    //constructor to create keywords to access each datapoint
    constructor(
        //seconds elapsed data
        time_seconds,
        //latitude data
        latitude,
        //longitude data
        longitude,
        //altitude data from gps sensor
        gps_altitude,
        //altitude data from BMP sensor
        bmpSensor_altitude,
        //pressure data from BMP Sensor
        bmpSensor_pressure,
        //temperature data from BMP Sensor
        bmpSensor_temp,
        //temperature data from digital sensor
        digiSensor_temp,
        //temperature data from CSS Sensor
        cssSensor_temp,
        //eco2 data from CSS Sensor
        cssSensor_eco2,
        //tvoc data from CSS Sensor
        cssSensor_tvoc,
        //UV data
        UV,
        //X coordinates from Acceleromoter
        accelX,
        //Y coordinates from Acceleromoter
        accelY,
        //Z coordinates from Acceleromoter
        accelZ,
        //X coordinates from magnetometer
        magneticX,
        //Y coordinates from magnetometer
        magneticY,
        //Z coordinates from magnetometer
        magneticZ,
        //X coordinates from gyroscope
        gyroX,
        //Y coordinates from gyroscope
        gyroY,
        //Z coordinates from gyroscope
        gyroZ
    ) {
        //instantiate time_seconds object
        this.time_seconds = time_seconds;
         //instantiate latitude object
        this.latitude = latitude;
         //instantiate longitude object
        this.longitude = longitude;
         //instantiate gps_altitude object
        this.gps_altitude = gps_altitude;
         //instantiate bmpSensor_altitude object
        this.bmpSensor_altitude = bmpSensor_altitude;
         //instantiate bmpSensor_pressure object
        this.bmpSensor_pressure = bmpSensor_pressure;
         //instantiate bmpSensor_temp object
        this.bmpSensor_temp = bmpSensor_temp;
         //instantiate digiSensor_temp object
        this.digiSensor_temp = digiSensor_temp;
         //instantiate cssSensor_temp object
        this.cssSensor_temp = cssSensor_temp;
         //instantiate cssSensor_eco2 object
        this.cssSensor_eco2 = cssSensor_eco2;
         //instantiate cssSensor_tvoc object
        this.cssSensor_tvoc = cssSensor_tvoc;
         //instantiate UV object
        this.UV = UV;
         //instantiate accelX object
        this.accelX = accelX;
         //instantiate accelY object
        this.accelY = accelY;
         //instantiate accelZ object
        this.accelZ = accelZ;
         //instantiate magneticX object
        this.magneticX = magneticX;
         //instantiate magneticY object
        this.magneticY = magneticY;
         //instantiate magneticZ object
        this.magneticZ = magneticZ;
         //instantiate gyroX object
        this.gyroX = gyroX;
         //instantiate gyroY object
        this.gyroY = gyroY;
         //instantiate gyroZ object
        this.gyroZ = gyroZ;
    }
}
//redirect to homepage 
function IndexTrans() {
    location.replace("index.html");
}
//redirect to objectives page
function ObjectiveTrans() {
    location.replace("objectives.html");
}
