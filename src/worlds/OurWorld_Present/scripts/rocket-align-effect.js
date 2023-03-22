//if user gets close to object display identifiers
// if user touches a button, spark a button press animation and and start said effect
AFRAME.registerComponent('rocket-align-effect', {
  
    update: function ()  {
        const CONTEXT_AF = this;
        const scene      = document.querySelector('a-scene');
        CONTEXT_AF.rocket      = document.querySelector('#rocket');
        CONTEXT_AF.isSpinning = false;
        
        console.log("rocketSpin");

     
      
        let temp=25;

        var interval;      
       
        this.el.addEventListener('click', function () {
         

            if(!CONTEXT_AF.isSpinning){
                
               // interval=setInterval(spinning(CONTEXT_AF), 50);
            
              spinning(CONTEXT_AF);
                    
                    console.log("We start spinning")  
                    CONTEXT_AF.isSpinning = true;
                }
            
  
           // CONTEXT_AF.plantTempTube.setAttribute("gCol",greenCol);
           // CONTEXT_AF.plantTempTube.setAttribute("rCol",redCol);
          
        

        
        
        
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

       let indicator = document.querySelector('#gameController');

       // trigger the stop event on the left indicator
       indicator.emit('win');


   }






    }



})
      /*

        function spinning(thisp){
            
            let rocketRotation= CONTEXT_AF.rocket.getAttribute("rotation");
            //let rotationAngle= el.getAttribute("rocketAngle");
            //let rotationAngle1= this.el.getAttribute('rocketAngle');
            //let rotationAngle2= this.getAttribute('rocketAngle');
            let rotationAngle2= thisp.el.getAttribute('rocketAngle');
           
            console.log("On click the angle is" +  rotationAngle2);
            rotationAngle2++;
            
            //console.log("On click the angle is" +  rotationAngle);
            console.log("On click the angle is" +  rotationAngle2);
            
                let newAngle=("0 0 " + rotationAngle2);
                thisp.el.setAttribute("rocketAngle", rotationAngle2);
                CONTEXT_AF.rocket.setAttribute("rotation", newAngle);

        
        }
      */
        
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