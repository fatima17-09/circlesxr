AFRAME.registerComponent('limit-position-effect', {
    schema: {
       limitPosition: {type: 'boolean', default: "false"},  
    
     },
  
   
     init: function(){
         
         const CONTEXT_AF = this;
         const scene      = document.querySelector('a-scene');
       
 
         this.el.addEventListener('click', function () {
            console.log("clicked?")

           CIRCLES.getAvatarRigElement().setAttribute('rotation', {x:0, y:180, z:0});
 
             if ( CONTEXT_AF.data.limitPosition==true)
             {
           

                //this was a script that would limit the scientist to the lab

                const record = CIRCLES.getAvatarElement().getObject3D("mesh");
                 const worldPos = new THREE.Vector3();
      
                 console.log( CIRCLES.getAvatarRigElement().getAttribute('position'));
                 record.getWorldPosition(worldPos)
                 console.log(worldPos);
                 console.log(worldPos);
          
                
              
                 
                 if (worldPos.x > -0.139 && worldPos.x < 0.42) {
                    if (worldPos.y > -1.38 && worldPos.y < 1.45) {
 
             }}
            
            
            
            }})}})
           
        
