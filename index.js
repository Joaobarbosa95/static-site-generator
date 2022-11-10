const exportBtn = document.getElementById("export")
const changeColorBtn = document.getElementById("color-change")
const body = document.querySelector("body")

const pages = []

const page1 = new Container().create()
page1.createBlock("div")
page1.createBlock("div")

const container = document.querySelector(".container")

changeColorBtn.addEventListener("click", () => {
    container.style.background = "green"
})

exportBtn.addEventListener("click", () => {
    /*
    const text = container.innerHTML
    download("here", text)
    */
    console.log(container.innerHTML)
})

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

body.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    page1.unselect()
    
    
})
