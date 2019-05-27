

$(document).ready(function() {
    //this calculates values automatically 
    sum();
    $("#tal1, #tal2").on("keydown keyup", function() {
        sum();
    });
});

function sum() {
            var tal1 = document.getElementById('tal1').value;
            var tal2 = document.getElementById('tal2').value;
			var result = parseInt(tal1) + parseInt(tal2);

            if (!isNaN(result)) {
                document.getElementById('resultat').value = result;
			
            }
        }


/* function validateEmail(email) {
        if (email != null)
        {
            return (true)
        }
        console.log("invalid email");
        return (false)
    }*/

 /*  if (!age.checkValidity()) {
       console.log("success"); 
   }*/




// När användaren klickar på "skicka"-knappen
$("#newsletter").on("submit", function(e){
    // Hindrar formuläret från att skickas iväg.
    e.preventDefault();
    //... er kod som validerar formuläret

        var name = document.getElementById('name').value;
        var age = document.getElementById('age');
        var email = document.getElementById('email').value;
    
    validCount = 0;
    
    if ( name === "" ) {
        console.log("false name");
        $("#name").css('background-color', 'red'); 
    } else {
        console.log("valid name");
        validCount++;
    } 
    
    
    if ( age === "") {
        console.log("false age");
        $("#age").css('background-color', 'red'); 
    } else {
        console.log("age fine"); 
        validCount++;
    }
        
    if (email === "") {
        $("#email").css('background-color', 'red'); 
    } else {
        console.log("email fine");
        validCount++;
    }
    
  
    if (validCount === 3) {
    // Om allt går bra, skicka iväg formuläret
    $("#newsletter").submit();
    }
    
});




