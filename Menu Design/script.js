// selecting variables

const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");

for(options of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
    }
}