
// funtion to check speed limit
function checkSpeed() {
    const speedLimit = 70;
    const kmPerPoint = 5;
  let speed = parseInt(document.getElementById("input").value)
    if (speed <= speedLimit + kmPerPoint) {
        document.getElementById("message").innerHTML = 'OK'
        return
     
    }
//  used math.random and math.floor to return a pseudorandom double type number greater than or equal to a number without a decimal
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) 
    document.getElementById("message").innerHTML =("License suspended" + " " + "by" + " " +  points + " " + "points");
    else 
    document.getElementById("message").innerHTML =("Points", points);
  }
