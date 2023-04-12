AFRAME.registerComponent('soil-selected-effect', {

  
   
     init: function(){
         
         const CONTEXT_AF = this;
         const scene      = document.querySelector('a-scene');
        // CONTEXT_AF.setAttribute("soilCount", 1);
       
 
         this.el.addEventListener('click', function () {
            console.log("clicked?")

          
                let scene = document.querySelector('a-scene');
                console.log('Create soil', scene);
                CONTEXT_AF.plot = document.createElement('a-entity');
       
                CONTEXT_AF.plot.setAttribute('circles-interactive-object',"type","highlight");
                CONTEXT_AF.plot.setAttribute('geometry', 'primitive', 'box');
                CONTEXT_AF.plot.setAttribute('geometry', 'depth: 1');
                CONTEXT_AF.plot.setAttribute('geometry', 'height: 0.3');
                CONTEXT_AF.plot.setAttribute('geometry', 'width: 1');
                CONTEXT_AF.plot.setAttribute('position', '9 0.15 5');
                CONTEXT_AF.plot.setAttribute('material', 'color', 'brown');
                scene.appendChild(CONTEXT_AF.plot);
          


                console.log('Create watercan', scene);
                CONTEXT_AF.watercan = document.createElement('a-entity');
         
                CONTEXT_AF.watercan.setAttribute('circles-pickup-object', 'animate:false');
                CONTEXT_AF.watercan.setAttribute('circles-pickup-networked');
                CONTEXT_AF.watercan.setAttribute('gltf-model', '#waterCanModel');
                CONTEXT_AF.watercan.setAttribute('geometry', 'depth: 1');
                CONTEXT_AF.watercan.setAttribute('geometry', 'height: 0.3');
                CONTEXT_AF.watercan.setAttribute('geometry', 'width: 1');
                CONTEXT_AF.watercan.setAttribute('scale', '0.45 0.45 0.45');
                CONTEXT_AF.watercan.setAttribute('position', '9 0 2');
                CONTEXT_AF.watercan.setAttribute('material', 'color', 'brown');
                scene.appendChild(CONTEXT_AF.watercan);
                





         }
         )}})

              