count=0;
        function AddTask() {
          
            const inputEl = document.getElementById("inp");
            const textNode = document.createElement("div");
            textNode.innerHTML = `<h2>${inputEl.value}</h2>`;
            textNode.className = "new-div"; 
            textNode.id = "new-" + count; 
            count++;
            const parentEl = document.getElementById("div1");
            parentEl.appendChild(textNode);

            const minnordiv=document.createElement("div");
            minnordiv.id="minnor-div";
            const buttonEdit = document.createElement("button");
            buttonEdit.innerHTML = "Edit";
            buttonEdit.className="button-64";
            buttonEdit.onclick=function() { edit(textNode.id); };
            minnordiv.appendChild(buttonEdit);

            const buttondelete = document.createElement("button");
            buttondelete.innerHTML = "Delete";
            buttondelete.className="button-64";
            buttondelete.onclick=function() { finish(textNode.id); };
            minnordiv.appendChild(buttondelete);
            textNode.appendChild(minnordiv);
            inputEl.value = "";

        }

        function edit(taskId) {
            const taskNode = document.getElementById(taskId);
            const taskText = taskNode.querySelector("h2").innerText;

            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = taskText;
            inputField.className="inpid";

            taskNode.querySelector("h2").replaceWith(inputField);

            const editButton = taskNode.querySelector(".button-64");
            editButton.innerHTML = "Save";
            editButton.onclick = function () {
            save(taskId, inputField.value);
    };
    
}

function save(taskId, editedText) {
    const taskNode = document.getElementById(taskId);
    const newH2 = document.createElement("h2");
    newH2.textContent = editedText;
    taskNode.querySelector("input").replaceWith(newH2); 
    taskNode.querySelector(".button-64").innerHTML = "Edit"; 
}


        
        function finish(arg){
            const fin=document.getElementById(arg);
            fin.remove()
        }
