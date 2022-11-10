const containerCount = 0;

class Container {
  selected_element = null;
  container = null;
  elements = [];

  /**
   * Container to simulate a webpage
   * @constructor
   */
  constructor() {
    this.selected_element = this.selected_element;
    this.container = this.container;
  }

  create() {
    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.selectElement(this.container);
    document.querySelector("body").appendChild(this.container);

    this.container.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.selectElement(this.container);
    });

    return this;
  }

  /**
   * Select an element on click and visually change it
   * @param {HTMLElement} element - active/changeable/costumizable element
   */
  selectElement(element) {
    // 2 or more clicks outside container 
    if (element === null && this.selected_element === null) {
      this.selected_element = element;
      return this;
    }

    // first click outside container 
    if(element === null) {
      this.selected_element.classList.remove("selected-element");
      this.selected_element = element;
      return this;
    }
    
    // contained elements clicked
    this.selected_element &&
      this.selected_element.classList.remove("selected-element");

    this.selected_element = element;
    this.selected_element.classList.add("selected-element");
    dragElement(this.selected_element);

    return this;
  }

  createBlock(elementType) {
    const element = document.createElement(elementType);
    element.classList.add("block");
    this.container.appendChild(element);

    element.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.selectElement(element);
    });

    this.elements.push(element);

    return this;
  }

  unselect() {
    this.selectElement(null);
  }
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    e.stopPropagation();
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
    e.stopPropagation();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
