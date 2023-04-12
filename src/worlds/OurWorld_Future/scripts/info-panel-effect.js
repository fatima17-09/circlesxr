AFRAME.registerComponent('info-panel-effect', {
   schema: {
      visible: {type: 'boolean', default: "false"},  
      value: {type: 'string', default:'hello'},
      title: {type: 'string', default:'hello'}, 
      answer:{type: 'string', default:'wrong'}, 
    },
 
  
    init: function(){
        
        const CONTEXT_AF = this;
        const scene      = document.querySelector('a-scene');
        CONTEXT_AF.redButtonPressed       = false; //at scene start is false   

        this.el.addEventListener('click', function () {

            if ( CONTEXT_AF.data.answer=="correct")
            {
                var biodome = document.querySelector('#biodome');
                biodome.setAttribute('visible', true);
                console.log("biodome change");
             
            

            }
            else{}
            
           

            CONTEXT_AF.textPanel = document.createElement('a-entity');
            CONTEXT_AF.textPanel.setAttribute('text', 'value', CONTEXT_AF.data.value);
            CONTEXT_AF.textPanel.setAttribute('text', 'color:black');
            CONTEXT_AF.textPanel.setAttribute('text', 'font:roboto');
            CONTEXT_AF.textPanel.setAttribute('text', 'align:center');
            CONTEXT_AF.textPanel.setAttribute('text', 'width:1.5');
            CONTEXT_AF.textPanel.setAttribute('text', 'anchor:center');
            CONTEXT_AF.textPanel.setAttribute('text', 'wrapCount:20');
            CONTEXT_AF.textPanel.setAttribute( 'circles-rounded-rectangle',  {width:1.8, height:2.5, radius:CIRCLES.CONSTANTS.GUI.rounded_rectangle_radius});
            CONTEXT_AF.textPanel.setAttribute('material',  {color: "rgb(255,255,255)", opacity:1});
            CONTEXT_AF.textPanel.setAttribute('position',  {x:-3, y:2, z:0.0});
            CONTEXT_AF.textPanel.setAttribute('rotation',  {x:0, y:35, z:0.0});

          
            scene.appendChild(CONTEXT_AF.textPanel);
            
       



            
        

            





    })}})
  