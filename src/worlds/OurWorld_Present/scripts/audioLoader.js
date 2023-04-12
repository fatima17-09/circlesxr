
AFRAME.registerComponent('audio-on-click', {
  schema: {
  audioID: {type: 'string', default:'ambient'} 
},
init:function() {
const el = this.el; 
const notPlaying = true;
const audioFile = document.querySelector('#' + this.data.audioID);

 el.addEventListener('click', () => {
      if(notPlaying) {
          audioFile.play();
       } else {
          audioFile.pause();
          audioFile.currentTime = 0;
       }
       
 });
}
})