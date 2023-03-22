//if user gets close to object display identifiers
// if user touches a button, spark a button press animation and and start said effect
AFRAME.registerComponent('change-plant-temp', {
  
    update: function ()  {
        const CONTEXT_AF = this;
        const scene      = document.querySelector('a-scene');
        CONTEXT_AF.plantTempTube=scene.querySelector('#plantTempTube');  
        CONTEXT_AF.Temp=scene.querySelector('#tempReading');
        
      
    
        console.log("changeTemp");

     
      
        let temp=25;

        var interval;      
       
        this.el.addEventListener('mousedown', function () {
         

            if(this.getAttribute("id") == 'plantTempInc'){
                
                interval=setInterval(increasing, 50);
            
 
                    }

            
            else if (this.getAttribute("id") == "plantTempDec"){
                interval=setInterval(decreasing, 50);
            }

  
           // CONTEXT_AF.plantTempTube.setAttribute("gCol",greenCol);
           // CONTEXT_AF.plantTempTube.setAttribute("rCol",redCol);
          
        

        })
        this.el.addEventListener('mouseup', function () {
         
            let redCol= CONTEXT_AF.plantTempTube.getAttribute("rCol");
            let greenCol= CONTEXT_AF.plantTempTube.getAttribute("gCol");
          
           
       console.log("The final nums areeee: " + redCol+ greenCol);
       clearInterval(interval);


        })

        function increasing(){
            let redCol= CONTEXT_AF.plantTempTube.getAttribute("rCol");
            let greenCol= CONTEXT_AF.plantTempTube.getAttribute("gCol");
            let temp = CONTEXT_AF.plantTempTube.getAttribute('temperature')


            redCol=Number(redCol)-5;
            temp++;
            greenCol=Number(greenCol)+5;
            console.log(redCol);
            console.log("When increasing red and green are: " + redCol+ greenCol);
           
            
                let newColour= "rgb("+ redCol +","+ greenCol+",000)";
                  CONTEXT_AF.plantTempTube.setAttribute("material",{color: newColour});
                  CONTEXT_AF.plantTempTube.setAttribute('temperature',temp);
                    CONTEXT_AF.Temp.setAttribute("value", temp);
                    console.log("the colour is: "+ newColour);
                    CONTEXT_AF.plantTempTube.setAttribute("gCol",greenCol);
                    CONTEXT_AF.plantTempTube.setAttribute("rCol",redCol);

        
        }
        function decreasing(){
            let redCol= CONTEXT_AF.plantTempTube.getAttribute("rCol");
            let greenCol= CONTEXT_AF.plantTempTube.getAttribute("gCol");
            let temp = CONTEXT_AF.plantTempTube.getAttribute('temperature')
          
            redCol=Number(redCol)+5;
            greenCol=Number(greenCol)-5;
            console.log(redCol);
            temp--;
            console.log("When decreasing red and green are: " + redCol+ greenCol);
            
          
            
                let newColour= "rgb("+redCol +","+ greenCol+",000)";
          
                    CONTEXT_AF.plantTempTube.setAttribute("material",{color: newColour});
                    CONTEXT_AF.plantTempTube.setAttribute('temperature',temp);
                    CONTEXT_AF.Temp.setAttribute("value", temp);
                    console.log("the colour after is: "+ newColour);
                    console.log("the colour is: "+ newColour);
                    CONTEXT_AF.plantTempTube.setAttribute("gCol",greenCol);
                    CONTEXT_AF.plantTempTube.setAttribute("rCol",redCol);
        
        }
     
        
        
        
        

    }   

    
    
 



}

)