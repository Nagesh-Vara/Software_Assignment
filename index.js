var avgTotal = 0;

function myfunc() {
  var avg=(Number(document.getElementById('formGroupExampleInput').value)+4*Number(document.getElementById('formGroupExampleInput2').value)+Number(document.getElementById('formGroupExampleInput3').value))/6;
  avgTotal=avgTotal+avg;
  document.getElementById('avgcost').innerHTML = avg;
}

function printing() {
  displayResult(avgTotal);
}

function displayResult(avgTotal) {
  locPerMonth = Number(document.getElementById('formGroupExampleInput5').value);
  labourRate = Number(document.getElementById('formGroupExampleInput6').value);
  costPerLoc = labourRate / locPerMonth;
  costOfProject = avgTotal * costPerLoc;
  effortOfProject = avgTotal / locPerMonth;
  document.getElementById('lcost').innerHTML = costPerLoc;
  document.getElementById('pcost').innerHTML = costOfProject;
  document.getElementById('effort').innerHTML = effortOfProject;
}
