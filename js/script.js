$(document).ready(function(){
    $("#designIcon").click(function(){
        $("#design-content").show(function(){
          $("#designIcon").hide('fast');
        
        });
    });
    $("#design-content").click(function(){
        $("#designIcon").show(function(){
          $("#design-content").hide('fast');
        
        });
    });
})