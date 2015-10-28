var setTestStatus = function(elementId, buttonId, className){
    
    //get the element for the supplied Id
    var elem = document.getElementById(elementId);

    //change the class... => passing/failing
    elem.className = className;

    var button =document.getElementById(buttonId);

    if (className === "failing") {
    	button.innerHTML = "Make passing";
    }
   else {
    button.innerHTML = "Make failing";
}
  
};

