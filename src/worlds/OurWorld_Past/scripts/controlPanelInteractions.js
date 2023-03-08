//if user gets close to object display identifiers
// if user touches a button, spark a button press animation and and start said effect
AFRAME.registerComponent('controlPanelInteraction', {
    schema: {},
    init() {
        const CONTEXT_AF = this;
        const scene      = document.querySelector('a-scene');
        CONTEXT_AF.redButtonPressed       = false; //at scene start is false   

        CONTEXT_AF.redButton.addEventListener('collide', function () {
        

            if ( CONTEXT_AF.redButtonPressed === true ) {
                CONTEXT_AF.launchScene();
            }
           
        });
    }})