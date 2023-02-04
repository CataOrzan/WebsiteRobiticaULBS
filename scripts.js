function call() {
    var nr0 = document.getElementById("nr0").value;
    var n0 = Number(nr0)
    var nr1 = document.getElementById("nr1").value;
    var n1 = Number(nr1)
    var nr2 = document.getElementById("nr2").value;
    var n2 = Number(nr2)
    var nr3 = document.getElementById("nr3").value;
    var n3 = Number(nr3)
    var nr4 = document.getElementById("nr4").value;
    var n4 = Number(nr4)
    var nr5 = document.getElementById("nr5").value;
    var n5 = Number(nr5)
    var nr6 = document.getElementById("nr6").value;
    var n6 = Number(nr6)
    var sum = n0+n1+n2+n3+n4+n5+n6;
    var cred = n0*5+n1*5+n2*3+n3*4+n4*4+n5*5+n6*4;
    pond = (cred/300)*10;
    avg = sum/7;
    document.getElementById('art').innerHTML = avg;
    document.getElementById('pnd').innerHTML = pond;
  }