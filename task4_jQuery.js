var changer = $('#button');
var target = $('#block');
console.log(changer);
console.log(target);
changer.click( function() {
  console.log("click");
  var currentClasss = target.attr('class');

	if (currentClasss === "grey"){
    target.addClass('red').removeClass('grey');              
    target.html('STOP'); 
    changer.html('Make green');
  }

  else if(currentClasss === "red") {
    target.addClass('green').removeClass('red'); 
    target.html('GO'); 
    changer.html("Make red");
  }

  else {
    target.addClass('red').removeClass('green');        
    target.html('STOP'); 
    changer.html('Make green');
  }

});

