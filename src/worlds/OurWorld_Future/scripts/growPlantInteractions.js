//if user gets close to object display identifiers
// if user touches a button, spark a button press animation and and start said effect
AFRAME.registerComponent('grow-plant-interactions', {
  
    init: function ()  {
        //const CONTEXT_AF = this;
        let soil= document.querySelector('#soil');
        const scene      = document.querySelector('a-scene');

    
        console.log("water plant");
        soil.addEventListener('click', function () {
            console.log("water plant");
           this.el.setAttribute( "color", "#000000");
          
      
        

        });
    }})