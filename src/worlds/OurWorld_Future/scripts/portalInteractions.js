AFRAME.registerComponent('controlPanelInteraction', {
    schema: {},
    init() {
        const CONTEXT_AF = this;
        const scene      = document.querySelector('a-scene');
        CONTEXT_AF.redButtonPressed       = false; //at scene start is false   

        CONTEXT_AF.redButton.addEventListener('click', function () {
        

            if ( CONTEXT_AF.portal === true ) {
                CONTEXT_AF.launchScene();
            }
           
        });
    }})