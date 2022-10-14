const list = document.querySelector(".list");
const input = document.querySelector(".input");
const button = document.querySelector("button");

button.addEventListener('click', () => { 
    const item = input.value;
    
    if (item != "") {
        const listItem = document.createElement("li");
        const text = document.createElement("span");
        const listBtn = document.createElement("button");
        
        listItem.textContent = item;
        listItem.appendChild(text);

        listItem.appendChild(listBtn);
        listBtn.textContent = "❌";

        list.appendChild(listItem);
        
    }
    delete_button.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    
    input.value = "";
    input.focus();
});