
AFRAME.registerComponent('rocket-align-effect', {
   
    update: function ()  {
        const CONTEXT_AF = this;
        const scene      = document.querySelector('a-scene');
        CONTEXT_AF.rocket      = document.querySelector('#rocket');
        CONTEXT_AF.isSpinning = false;
        CONTEXT_AF.toDoListItem     = document.querySelector('#astronautTask');
        CONTEXT_AF.gameController = document.querySelector('#gameController');
        const portal = document.querySelector('#portal');
        const socket = io();
        console.log("rocketSpin");

     
        let temp=25;
        //unfortunately due to time constraint decided to harde code this one
        let role="astronaut";
        var interval;      
       
        this.el.addEventListener('click', function () {
        
            if(!CONTEXT_AF.isSpinning){
                
               // interval=setInterval(spinning(CONTEXT_AF), 50);
            
              spinning(CONTEXT_AF);
                    
                    console.log("We start spinning")  
                    CONTEXT_AF.isSpinning = true;
                }
            
        
        else if(CONTEXT_AF.isSpinning){
            console.log("We are spinning, let's stop");   
            clearInterval(interval);
            CONTEXT_AF.isSpinning = false;

     
    }
if(CONTEXT_AF.isSpinning==false)

{ 

   let rocketAngles3=this.getAttribute("rocketAngle"); 
   if((0<rocketAngles3 && rocketAngles3<25) || (335<= rocketAngles3 && rocketAngles3<=360)){

    console.log(rocketAngles3);
       console.log("you did it");
       socket.emit('win-messageA', 'Spacecraft is aligned perfectly! Please head to the exit.')
       portal.setAttribute('visible', true);
       
       /* TRIAL
       console.log(role);
       CONTEXT_AF.gameController.emit('taskProgression', role); */
   }
    }
})

        
        function spinning(thisp){
           
            
            interval =  setInterval(function(){

                let rocketRotation= CONTEXT_AF.rocket.getAttribute("rotation");
                let rotationAngle2= thisp.el.getAttribute('rocketAngle');
            
                console.log("On click the angle is" +  rotationAngle2);
                rotationAngle2=Number(rotationAngle2)+5;
                if(rotationAngle2%360==0){
                    rotationAngle2=0;

                }
            
            //console.log("On click the angle is" +  rotationAngle);
            console.log("On click the angle is" +  rotationAngle2);
            
                let newAngle=("0 0 " + rotationAngle2);
                thisp.el.setAttribute("rocketAngle", rotationAngle2);
                CONTEXT_AF.rocket.setAttribute("rotation", newAngle);
            }, 1);

        
        }
 

    } 
}

)

