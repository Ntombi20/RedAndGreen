//Check that the div with id target doesn't have the class failing or passing. 
//Use console.log to display a message that tells you what the result of the check was.
console.log("--*start*--");
var target = document.getElementById('testresult');

var className = target.className;

if (className === "grey"){
    console.log("The classname is correct : " + target.className);
}
else{
    console.log("the class name is not correct it should be 'grey' but is : " + target.className);
}    
//Check that the button has the text 'Make failing'. 
//Use console.log to display a message that tells you what the result of the check was.

var changer = document.getElementById('testbutton');

var innerHTML =changer.innerHTML;

if (innerHTML === "Make failing") {
    console.log("the button text is correct : " + changer.innerHTML);
}
else {
    console.log("the button text is not correct is should be Make failing : " + changer.innerHTML);
}

//Call setTestStatus('testresult', 'testbutton', 'failing');.
console.log("--*setTestStatus was called for failing*--");

 setTestStatus('testresult', 'testbutton', 'failing');

//Check that #target has the class failing. The CSS should give it a red background.

if (target.className === "failing"){
    console.log("the classname failing is correct : " + target.className);
}
else{
    console.log("The classname is not correct it should be 'failing', but is : " + target.className);
}

//Check that the button has the text 'Make passing'. 
//Use console.log to display a message that tells you what the result of the check was.

var changer = document.getElementById('testbutton');

if (changer.innerHTML === "Make passing"){
    console.log("the button text is 'Make passing' as expected :" + changer.innerHTML);
}
else {
    console.log("the button text is  not 'Make passing' as expected but is: " + changer.innerHTML);
}

// Call setTestStatus('testresult', 'testbutton', 'passing');
console.log("--*setTestStatus was called for passing*--");

setTestStatus('testresult', 'testbutton', 'passing');

//Check that #target has the class passing. The CSS should give it a green background.

if (target.className === "passing"){
    console.log("the classname is passing which is correct : " + target.className);
}
else{
    console.log("The classname is not correct it should be 'passing', but is : " + target.className);
}


//Check that the button has the text 'Make failing'

var changer = document.getElementById('testbutton');

if (changer.innerHTML === "Make failing"){
    console.log("the button text is Make failing which is correct : " + changer.innerHTML);
}
else {
    console.log("the button text is not correct it should be 'Make failing', but is : " + changer.innerHTML);
}

// //Display 'success' if testresult has the class passing, otherwise display 'failure'.
if (target.className === "passing"){
    console.log("success");
}
else{
    console.log("failure");
}
