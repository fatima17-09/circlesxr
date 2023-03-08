AFRAME.registerComponent('controlPanelInteraction', {
    schema: {
        id: { type: "string", default: "foo" }

    },
    init() {
        const CONTEXT_AF = this;
        const scene      = document.querySelector('a-scene');
       

        CONTEXT_AF.portal.addEventListener('click', function () {
        

            if ( CONTEXT_AF.this.data === "present" ) {
                CONTEXT_AF.launchScene();
            }
           
        });
    }})