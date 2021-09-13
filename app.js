SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
    });
  
      $(document).ready(function() {
        SC.stream('/tracks/347657033',function(sound){
          $('#play').click(function(e) {
          e.preventDefault();
          sound.start();
          });
  
            $('#pause').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                     });
                  });
  
  
   });
  