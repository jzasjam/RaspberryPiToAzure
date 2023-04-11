'use strict';


const util = require('util')
const senseHat  = require('node-sense-hat');
const imu = senseHat.Imu;
const IMU = new imu.IMU();


function Sensor(/* options */) {
  // nothing todo
}


Sensor.prototype.init = function (callback) {
  // nothing todo
  callback();
}


Sensor.prototype.read = function (callback) {
  IMU.getValue
 
    ( (e, data) => {
      
      //console.log("DATA" +  JSON.stringify(data))
      
      /* // Original Data Sent
      data.temperature = data.temperature.toFixed(4) ;
      data.humidity = data.humidity.toFixed(4);
      console.log("console log humd: " + data.humidity);
      console.log("console log temp: " + data.temperature);
      */

      // Send additional sensor data
      data.temperature = data.temperature.toFixed(4);
      data.humidity = data.humidity.toFixed(4);
      data.pressure = data.pressure.toFixed(4);
      
      data.compass = {
        x: data.compass.x.toFixed(4),
        y: data.compass.y.toFixed(4),
        z: data.compass.z.toFixed(4)
      };
      data.accel = {
        x: data.accel.x.toFixed(4),
        y: data.accel.y.toFixed(4),
        z: data.accel.z.toFixed(4)
      };
      data.gyro = {
        x: data.gyro.x.toFixed(4),
        y: data.gyro.y.toFixed(4),
        z: data.gyro.z.toFixed(4)
      };
      
      // Output values to console
      console.log("Temperature: " + data.temperature);
      console.log("Humidity: " + data.humidity);
      
      console.log("Pressure: " + data.pressure);
      console.log("Compass: " + JSON.stringify(data.compass));
      console.log("Accelerometer: " + JSON.stringify(data.accel));
      console.log("Gyroscope: " + JSON.stringify(data.gyro));
      


      callback(null, data);
    })
   
   // .catch(callback);
}


module.exports = Sensor;
