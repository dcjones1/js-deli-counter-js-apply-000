var katzDeliLine = [];
var a = 0;

function takeANumber() {
  a++;
  return ("You are number " + a + " in line.");
}

function currentLine(katzDeliLine) {
  var line = [];
  if(katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  } else {
    for(var i = 0; i < katzDeliLine.length; i++) {
      line += (i+1) + ". " + katzDeliLine[i] + ", "
    }
    line = line.slice(0, line.length-2)
    return ("The line is currently: " + line);
  }
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!");
  } else {
    var newName = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return("Currently serving " + newName + ".");
  }
}