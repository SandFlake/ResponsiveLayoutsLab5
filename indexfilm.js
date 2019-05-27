$(document).ready(function() {
    $("#rating").on('submit', function(e) {
        
        var title = $("#title").val();
        var rating = $("#rating option:selected").text(); 