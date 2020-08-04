var h1 = document.getElementById("typeIt")
toPrint = [];
var next = true;
var index = -1;

for (var i=0; i<h1.children.length; i++) {
  toPrint.push(h1.children[i].getAttribute("value"))
};

console.log(toPrint);

h1.innerHTML = "";

function typeWriter() {
  next = false
  if (i < txt.length) {
    h1.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    i = 0;
    setTimeout(typeDelete, 3000);
  }
}

function typeDelete() {
  txt = h1.textContent;
  if (i < txt.length) {
    h1.innerHTML = txt.substring(0, txt.length - 1)
    setTimeout(typeDelete, 100);
  } else {
    if (index === (toPrint.length - 1)) {
      index = -1;
    };
    next = true;
  }
};

function typeNext(){
  if (next) {
    index += 1;
    txt = toPrint[index];
    typeWriter();
  }
};

var i = 0;

setInterval(typeNext, 100);
