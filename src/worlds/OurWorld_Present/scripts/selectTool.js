AFRAME.registerComponent('select-tool', {
    schema: {
      selectedToolID: { type: 'string', default: 'tool' },
      isHolding: {type:'boolean', default:false},
      
    },

    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.tools= document.querySelector("#tools");
        this.el.addEventListener("click", (e) => {
            
            CONTEXT_AF.tools.setAttribute("selectedTool",this.data.selectedToolID);
            console.log(this.data.selectedToolID);
            console.log("I selected" + CONTEXT_AF.tools.getAttribute("selectedTool"));
            if (!isHolding){
                this.data.isHolding=true;
            }
            else{
                this.data.isHolding=false;
            }



      })
    }})
