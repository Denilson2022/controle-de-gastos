
function showLoading(){
const div = document.createElement("div");
div.classList.add("loading", "centralize");
document.getElementById('main').appendChild(div);

const label = document.createElement("label")
label.innerText = "Carregando..."

div.appendChild(label)
document.getElementById('main').appendChild(div)


}

function hideLoading(){
const loadings = document.getElementsByClassName('loading')
if(loadings.length){
    loadings[0].remove()
}
}



