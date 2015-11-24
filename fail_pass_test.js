console.log("---*START*---");
var target = document.getElementById('testresult');

var className = target.className;

if (className === "grey"){
    console.log("The className is correct : " + target.className);
}
else{
    console.log("the className is not correct it should be 'grey' but is : " + target.className);
}    


if (target.innerHTML === "Failed"){
    console.log("the innerHTML Failed is correct : " + target.innerHTML);
}
else{
    console.log("The innerHTML is not correct it should be 'Failed', but is : " + target.innerHTML);
}


console.log("---*FAILING*---");


var target = document.getElementById('testresult');

var className = target.className;

if (className === "failing"){
    console.log("The className is correct : " + target.className);
}
else{
    console.log("the className is not correct it should be 'failing' but is : " + target.className);
}    


if (target.innerHTML === "Failed"){
    console.log("the innerHTML Failed is correct : " + target.innerHTML);
}
else{
    console.log("The innerHTML is not correct it should be 'Failed', but is : " + target.innerHTML);
}


console.log("---*PASSING*---");



if (className === "passing"){
    console.log("The className is correct : " + target.className);
}
else{
    console.log("the className is not correct it should be 'passing' but is : " + target.className);
}    
    

if (target.innerHTML === "Passed"){
    console.log("the innerHTML Passed is correct : " + target.innerHTML);
}
else{
    console.log("The innerHTML is not correct it should be 'Passed', but is : " + target.innerHTML);
}



if (target.className === "passing"){
    console.log("success");
}
else{
    console.log("failure");
}
