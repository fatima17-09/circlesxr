
  AFRAME.registerComponent('close-button', {

    
    init: function () {
      this.el.addEventListener('click', function (evt) {
        var textPanel = document.querySelector('#textPanel');
        textPanel.setAttribute('visible', false);
      });
    }
  });

