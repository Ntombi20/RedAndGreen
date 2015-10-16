var changer = document.getElementById('button');
var count= 0;
var target = document.getElementById('testresult');
changer.addEventListener('click', function() {
	count += 1;
    switch(count) {
       case 1 :
	    testresult.className = "red";
	    testresult.innerHTML = "STOP";
	    changer.innerHTML = "Make green";
       break;
   
       case 2 :
       testresult.className = "green";
       testresult.innerHTML = "GO";
    	 changer.innerHTML = "Make red";
    	 count = 0;
       break;        
   }
   	
});
