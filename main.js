const items = document.querySelectorAll('.item');
const dragItem = document.querySelector('.drag-start');

let draggedDiv;
dragItem.addEventListener("dragstart", dragStart);

items.forEach((element) => {
  element.addEventListener("dragover", dragOver);
  element.addEventListener("drop", drop);
  element.addEventListener("dragenter", dragEnter);
  element.addEventListener("dragleave", dragLeave);
});

function dragStart (e) {
  draggedDiv = e.target;
}

function  dragOver (e) {
  e.preventDefault();
}

function  drop (e) {
  e.target.append(draggedDiv)
  e.target.classList.remove('drag-over');
}

function  dragEnter (e) {
  e.target.classList.add('drag-over');
}

function  dragLeave (e) {
  e.target.classList.remove('drag-over');
}