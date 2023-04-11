//if user gets close to object display identifiers
// if user touches a button, spark a button press animation and and start said effect
AFRAME.registerComponent('task-completion-effect', {
  //reference the monkey layout
    init: function ()  {
        const CONTEXT_AF = this;
        const scene      = document.querySelector('a-scene');
        CONTEXT_AF.gameController=document.querySelector('#gameController');
        
    this.el.addEventListener('taskCompleted', function () {
    const roles = ["mechanic", "astronaut", "scientist"];
     
     for(int=0;i<2;i++){
if (gameController.getAttribute(roles[i])=="progress"){

     
      gameController.setAttribute(roles[i], "complete" );
        console.log( roles[i]+'completed their task');
    
}
    
      console.log('taskIncreased');


   

    
  }});



}})