$(document).ready(function(){
    
    $("#design").click(function(){  //icon id
        $("#design-content").show(function(){ //design content id
          $("#design").hide('fast'); // icon id
        
        });
    });
    $("#design-content").click(function(){ //design content id
        $("#design").show(function(){ //icon id
          $("#design-content").hide('fast'); //design content id
        
        });
    });
    $("#dev").click(function(){
        $("#dev-content").show(function(){
          $("#dev").hide('fast');
        
        });
    });
    $("#dev-content").click(function(){
        $("#dev").show(function(){
          $("#dev-content").hide('fast');
        
        });
    });
    $("#product").click(function(){
        $("#product-content").show(function(){
          $("#product").hide('fast');
        
        });
    });
    $("#product-content").click(function(){
        $("#product").show(function(){
          $("#product-content").hide('fast');
        
        });
    });

    
});
$(document).ready(function(){
  $("#work1").mouseenter(function(){
    $(".work-heading").filter("#title-work1").show("slow")
  }).mouseleave(function(){
    $("#title-work1").hide("slow")
  })

});