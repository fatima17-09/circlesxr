AFRAME.registerComponent('showpanel', {
    schema: {
      panelId: { type: 'string', default: 'textPanel' }
    },

    init: function () {
      var data = this.data;
      var el = this.el;
      var textPanel = document.querySelector('#' + data.panelId);

      el.addEventListener('click', function (evt) {
        textPanel.setAttribute('visible', true);
      });

      // Hide text panel when close button is clicked
      var closeButton = textPanel.querySelector('.close-button');
      closeButton.addEventListener('click', function (evt) {
        textPanel.setAttribute('visible', false);
      });
    }
  });

  AFRAME.registerComponent('hover', {
    schema: {
      panelId: { type: 'string', default: 'panel' },

    },

    init: function () {
      var data = this.data;
      var el = this.el;
      var panel = document.querySelector('#' + data.panelId);


      el.addEventListener('mouseenter', function () {
        panel.setAttribute('visible', false);
      });

      el.addEventListener('mouseleave', function () {
        panel.setAttribute('visible', true);
      });

    }
  });


  AFRAME.registerComponent('close-button', {

    
    init: function () {
      this.el.addEventListener('click', function (evt) {
        var textPanel = document.querySelector('#textPanel');
        textPanel.setAttribute('visible', false);
      });
    }
  });



  AFRAME.registerComponent('destroy-buttons', {
    schema: {
      firstId: { type: 'string' },
      secondId: { type: 'string' }
    },

    init: function () {
      let el = this.el;

      // Add a click event listener to the button
      el.addEventListener('click', () => {
        // Get the elements to be deleted
        const firstEl = document.querySelector('#' + this.data.firstId);
        const secondEl = document.querySelector('#' + this.data.secondId);

        // Check if the elements exist before attempting to remove them
        if (firstEl && firstEl.parentNode && secondEl && secondEl.parentNode) {
          // Remove the elements from the scene
          firstEl.parentNode.removeChild(firstEl);
          secondEl.parentNode.removeChild(secondEl);
        }
      });
    }
  });


  AFRAME.registerComponent('broken-pipe', {
    init: function () {

      // Create a new entity to replace hidden boxes with
      const replacementEntity = document.createElement('a-entity');
      replacementEntity.setAttribute('geometry', 'primitive: box');
      replacementEntity.setAttribute('material', 'color: red');
      replacementEntity.setAttribute('position', '1 1 1');
      replacementEntity.setAttribute('visible', 'false');


      let boxes = document.querySelectorAll(".brokenPipe")
      let fixedPipe = document.querySelector("#fixedPipe")

      //loop through the boxes and add a click event to each
      boxes.forEach(box => {
        box.addEventListener('click', () => {
          console.log("clicked")
          if (box.getAttribute('visible')) {
            // Replace the hidden box with the replacement entity
            box.setAttribute('visible', false)
            fixedPipe.setAttribute('visible', true);
          }

        });
      });

    }
  });