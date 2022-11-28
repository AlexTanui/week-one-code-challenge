function checkSpeed() {
    const speedLimit = 70;
    const kmPerPoint = 5;
  let speed = parseInt(document.getElementById("input").value)
    if (speed <= speedLimit + kmPerPoint) {
        document.getElementById("message").innerHTML = 'OK'
        return
     
    }
  
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) 
    document.getElementById("message").innerHTML =("License suspended" + " " + "by" + " " +  points + " " + "points");
    else 
    document.getElementById("message").innerHTML =("Points", points);
  }