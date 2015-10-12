var changer = document.getElementById('button');
var count= 0;
var target = document.getElementById('block');
changer.addEventListener('click', function() {
	count += 1;
    switch(count) {
       case 1 :
	    target.className = "red";
	    target.innerHTML = "STOP";
	    changer.innerHTML = "Make green";
       break;
   
       case 2 :
       target.className = "green";
       target.innerHTML = "GO";
    	 changer.innerHTML = "Make red";
    	 count = 0;
       break;        
   }
   	
});
