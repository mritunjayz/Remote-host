<template>
<div>
<div id="mydiv">
  <div id="mydivheader">Virtual Terminal</div>
  <div id="tbody">
  <p>{{$store.state.host}}:~$   WIP ........</p>
  </div>
</div>
</div>
</template>
<script>

export default {
    mounted() {
      dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  console.log(elmnt, document.getElementById('mydiv'))
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}  
    },
}
</script>
<style scoped>
    #mydiv {
  position: absolute;
  z-index: 9;
  background-color: black;
  text-align: left;
  border: 1px solid #d3d3d3;
  border-radius:10px;
  width:150%;
  height:500px;
  color:#6AF60C;
}

#mydivheader {
  padding: 10px;
  cursor: move;
  z-index: 10;
  background-color: #f1f1f1;
  color: black;
}

#tbody{
    color:7CFC00;
    background-color: black;
}
</style>