AFRAME.registerComponent('educational-panels', {

    init: function () {

      const backButton = document.querySelector('#backButton');
      const nextButton = document.querySelector('#nextButton');
      var el = this.el;

      el.addEventListener('click', function (evt) {
        console.log("clicked")
        var textPanel = document.querySelector('#content1');
        textPanel.setAttribute('visible', true);


        el.setAttribute('material', 'color', 'rgb(64,64,64)');
        nextButton.setAttribute('material', 'color', 'rgb(50,205,50)')
        backButton.setAttribute('material', 'color', 'rgb(255,255,0)')


      });
    }
  });


  AFRAME.registerComponent('panel-slider', {
    
    init: function () {
      
     
      var currentPanel = 0;

      const content = document.querySelector('#content-container')
      const prevButton = document.querySelector('#backButton');
      const nextButton = document.querySelector('#nextButton');
      const portal = document.querySelector('#portal');
      var numPanels = content.children.length;
      
      nextButton.addEventListener('click', function () {
        content.children[currentPanel].setAttribute('visible', false);
        currentPanel++;
        if (currentPanel >= numPanels) {
          currentPanel = 0;
          console.log("last panel reached");
          portal.setAttribute('visible', true);
          //Make portal appear

        }
        content.children[currentPanel].setAttribute('visible', true);
      });

      prevButton.addEventListener('click', function () {
        content.children[currentPanel].setAttribute('visible', false);
        currentPanel--;
        if (currentPanel < 0) {
          currentPanel = numPanels - 1;
        }
        content.children[currentPanel].setAttribute('visible', true);

      });

    }
  });
