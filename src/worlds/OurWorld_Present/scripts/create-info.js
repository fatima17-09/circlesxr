AFRAME.registerComponent('create-info', {
    schema: {
      position: {type: 'vec3', default: {x: 0, y: 0.8, z: 1}},  // default: {x: 0, y: 0, z: 0},
      value: {type: 'string', default:'hello'} 
    },
    multiple: false,
  
    init: function(){
  
      const CONTEXT_AF = this;
  
      document.querySelector('a-scene').addEventListener('loaded', function () {console.log('scene loaded info')});
  
      
      CONTEXT_AF.el.addEventListener('click', function() {
        console.log('Panel Button Clicked!');
  
        let sceneEl = document.querySelector('a-scene');
        console.log('Create Text', sceneEl);
  
        CONTEXT_AF.text = document.createElement('a-entity');
        CONTEXT_AF.text.setAttribute('text', 'value', CONTEXT_AF.data.value);
        CONTEXT_AF.text.setAttribute('text', 'color:black');
        CONTEXT_AF.text.setAttribute('text', 'font:roboto');
        CONTEXT_AF.text.setAttribute('text', 'width:3');
        CONTEXT_AF.text.setAttribute('text', 'anchor:center');
        CONTEXT_AF.text.setAttribute('text', 'basline:100');
        CONTEXT_AF.text.setAttribute('text', 'wrapCount:50');
        CONTEXT_AF.text.setAttribute('position', CONTEXT_AF.data.position);
        CONTEXT_AF.text.setAttribute('geometry', 'primitive', 'plane');
        CONTEXT_AF.text.setAttribute('geometry', 'width: 3');
        CONTEXT_AF.text.setAttribute('geometry', 'height: 1.4');
        CONTEXT_AF.text.setAttribute('material', 'color', 'white');
      
  
        sceneEl.appendChild(CONTEXT_AF.text);
  
        const fullScene = document.querySelector('a-scene');
        if (fullScene.children.length > 1){
          console.log('Destroy Info'); 
          setTimeout(() => {CONTEXT_AF.text.parentNode.removeChild(CONTEXT_AF.text)}, 50000)}
  
      })
  

    },
      
    update: function () {
     },
    
    remove: function () {
  
      }
  
  });