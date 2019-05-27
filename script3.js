 $("p").on("click", function() {
     $(this).css("color", "red"); 
 });

 $("h2").hover(function() {
     $(this).css("text-decoration", "underline"); 
 }, function() {
     $(this).css("text-decoration", "none");
 });


function getSize(){
    size = $("p").css("font-size"); 
    size = parseInt(size, 10); 
    
} 

getSize();


$("p").dblclick(function() {
     $(this).css("font-size", "+=2"); 
    ; 
});

