
    $(document).ready(function(){
      
      $(".options").click(function(){
      
        $(".options").prop("disabled", true);
        
        var id = $(this).attr("id");
        
        if(id == "op1") {
          $("#feedback").text("Correct! The capital of France is Paris.").addClass("correct");
          $("#feedback").removeClass("incorrect");
        }
        else {
            $("#feedback").removeClass("correct");
          $("#feedback").text("Incorrect! Do some study").addClass("incorrect"); 
        }
        
      });
      
    });

