const cursor = document.getElementById("cursor");
document.addEventListener('mousemove', function(i){
  var x = i.clientX;
  var y = i.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

/* On click, add the class 'clicked' to the cursor */
document.addEventListener('mousedown', function(){
    cursor.classList.add("clicked");
});

/* On mouseup, remove the class 'clicked' from the cursor */
document.addEventListener('mouseup', function(){
    cursor.classList.remove("clicked");
});

/* On hover over a link, add the class 'hovered' to the cursor */
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', function(){
        cursor.classList.add("hovered");
    });
    link.addEventListener('mouseout', function(){
        cursor.classList.remove("hovered");
    });
});