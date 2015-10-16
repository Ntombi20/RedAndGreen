// // // Check that the div with id testresult doesn't have the class failing or passing.
// // // Use console.log to display a message that tells you what the result of the check was.
// // // Check that the button has the text 'Make red'.
console.log("failure");

// // // Call setTestStatus('testresult', 'failing');.
// // // Check that #testresult has the class failing. The CSS should give it a red background.
// // // Check that the button has the text 'Make green'.
    function setTestStatus(testresult, failing) {
    	if (document.getElementById('testresult').style.background === 'red') {
   		console.log('failing');

    	}

    	else {
    	console.log('passing');
    	}
        
    };
    

// // // Call setTestStatus('testresult', 'passing');.
// // // Check that #testresult has the class passing. The CSS should give it a green background.
// // // Check that the button has the text 'Make red'.
      function setTestStatus(testresult, passing)  {
        if(document.getElementById('testresult').style.background === 'green') {
    		console.log("passing");
    	}

    	else {
    		console.log("failing");
    	}
      };
           
    
// // // Display 'success' if testresult has the class passing, otherwise display 'failure'.
console.log("success");
