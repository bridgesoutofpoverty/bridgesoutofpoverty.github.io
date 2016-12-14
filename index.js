
    $(document).ready(function(){
      $('#carousel').superslides({
          pagination: false,
          animation: "slide",
          play: 5000
      });
        
      $(".slideButton").mouseenter(function(e){
          $('#carousel').superslides("stop");
      });
        
      $(".slideButton").mouseleave(function(e){
          $('#carousel').superslides("start");
      });
      
    });