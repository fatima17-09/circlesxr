AFRAME.registerComponent('connect-pipes', {
    schema: {
      brokenId: { type: 'string', default: 'broken-pipe' },
      cutId: { type: 'string', default: 'cut-pipe' },
      solderId: { type: 'string', default: 'solder-pipe' },
      fixedId: { type: 'string', default: 'fixed-pipe' },
     
  
      
    },

    init: function () {
    

      var originalPipeEl = document.querySelector('#' + this.data.brokenId);
      var cutPipeEl = document.querySelector('#' + this.data.cutId);
      var solderPipeEl = document.querySelector('#' + this.data.solderId);
      var fixedPipeEl = document.querySelector('#' + this.data.fixedId);
      var gameController = document.querySelector("#gameController");
      const portal = document.querySelector('#portal');
    
      var destroyedCount = 0;
      let counter = false;
      var counterEl = document.querySelector('#destroyed-count');
      var toolSelection=document.querySelector("#tools");

     

     this.el.addEventListener('click', function () {
      
       
    
       
        if(toolSelection.getAttribute("selectedTool") == "wireCutters"){
          if (originalPipeEl.parentElement.getAttribute("state")=='broken'){
            originalPipeEl.parentNode.removeChild(originalPipeEl);
            console.log("object destroyed");
            console.log("WireCuter");
            cutPipeEl.setAttribute('visible', true);
            cutPipeEl.getObject3D('mesh').visible = true;
           
            cutPipeEl.parentNode.setAttribute("state" , "splice")

          }


          };


          if(toolSelection.getAttribute("selectedTool") == "spliceWire"){
           
            if (cutPipeEl.parentElement.getAttribute("state")=='splice'){
              const finalCounter = 0
             cutPipeEl.parentNode.removeChild(cutPipeEl);
              console.log("object destroyed");
              console.log("splice wires");
              solderPipeEl.setAttribute('visible', true);
              solderPipeEl.getObject3D('mesh').visible = true;
              
  
              solderPipeEl.parentNode.setAttribute( "state", "solder")
            }
  
  
            };
            if(toolSelection.getAttribute("selectedTool") == "solderWire"){
           
              if (solderPipeEl.parentElement.getAttribute("state")=='solder'){
               solderPipeEl.parentNode.removeChild(solderPipeEl);
                console.log("object destroyed")
                fixedPipeEl.setAttribute('visible', true);
                fixedPipeEl.getObject3D('mesh').visible = true;
                counter = true;
        
                if (counter) {

                  destroyedCount++;
                  let wiresGC = Number(gameController.getAttribute("wires-completed"))+1;
                  gameController.setAttribute("wires-completed", Number(wiresGC) )
                  console.log(wiresGC);

                  if (wiresGC === 3)
                  {
                    console.log("you did it");
                    socket.emit('win-messageM', 'All wires are fixed! Please head to the exit.')
                    portal.setAttribute('visible', true);
                    
                  }
  
                }
    
                fixedPipeEl.parentNode.setAttribute( "state", "fixed")
              }
    
    
              };
       

      });
    }
  });