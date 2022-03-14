
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


    $("#work1").mouseenter(function(){
      $(".overlay").filter("#title-work1").show("slow")
    }).mouseleave(function(){
      $("#title-work1").hide("slow");
    });

    $("#work2").mouseenter(function(){
      $(".overlay").filter("#title-work2").show("slow")
    }).mouseleave(function(){
      $("#title-work2").hide("slow");
    });

    $("#work3").mouseenter(function(){
      $(".overlay").filter("#title-work3").show("slow")
    }).mouseleave(function(){
      $("#title-work3").hide("slow");
    });

    $("#work4").mouseenter(function(){
      $(".overlay").filter("#title-work4").show("slow")
    }).mouseleave(function(){
      $("#title-work4").hide("slow");
    });

    $("#work5").mouseenter(function(){
      $(".overlay").filter("#title-work5").show("slow")
    }).mouseleave(function(){
      $("#title-work5").hide("slow");
    });

    $("#work6").mouseenter(function(){
      $(".overlay").filter("#title-work6").show("slow")
    }).mouseleave(function(){
      $("#title-work6").hide("slow");
    });

    $("#work7").mouseenter(function(){
      $(".overlay").filter("#title-work7").show("slow")
    }).mouseleave(function(){
      $("#title-work7").hide("slow");
    });

    $("#work8").mouseenter(function(){
      $(".overlay").filter("#title-work8").show("slow")
    }).mouseleave(function(){
      $("#title-work8").hide("slow");
    });


    
    $("#buttonSubmit").click(function(){
      let myName= $("input#name").val();
      alert(`${myName} we have received your message.Thank you for reaching out to us`)
      $("#myForm").clear()
    });

    
});
