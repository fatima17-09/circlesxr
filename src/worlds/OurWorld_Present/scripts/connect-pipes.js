AFRAME.registerComponent('connect-pipes', {
    schema: {
      brokenId: { type: 'string', default: 'broken-pipe' },
      fixedId: { type: 'string', default: 'fixed-pipe' }
    },

    init: function () {
      var originalPipeEl = document.querySelector('#' + this.data.brokenId);
      var fixedPipeEl = document.querySelector('#' + this.data.fixedId);
      var destroyedCount = 0;
      let counter = false;
      var counterEl = document.querySelector('#destroyed-count');


      originalPipeEl.addEventListener('click', function () {
        console.log('Clicked on', originalPipeEl);
        originalPipeEl.parentNode.removeChild(originalPipeEl);
        console.log("object destroyed")
        fixedPipeEl.setAttribute('visible', true);
        fixedPipeEl.getObject3D('mesh').visible = true;
        counter = true;

        if (counter) {
          destroyedCount++;
          console.log(destroyedCount)
        }

      });
    }
  });