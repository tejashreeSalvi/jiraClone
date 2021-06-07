let filterColor = document.querySelectorAll(".filter");
let mainContainer = document.querySelector(".main-container");
let modalColors = document.querySelectorAll(".modal-color");
let modalContainer = document.querySelector(".modal_container");
let plusBtn = document.querySelector(".plus");
let taskBox = document.querySelector(".task_box");
let iColor = "black";
let colors = ["pink", "blue", "green", "black"];
for(let i=0; i< filterColor.length; i++){
    filterColor[i].addEventListener("click", function () {
        let classes = filterColor[i].getAttribute("class");
        // console.log(classes);
        let strArr = classes.split(" ");
        let color = strArr[1];
        let mainClasses = mainContainer.getAttribute("class");
        let mainCArr = mainClasses.split(" ");
        mainCArr[1] = color;
        mainClasses = mainCArr.join(" ");
        mainContainer.setAttribute("class", mainClasses);
    })
}

plusBtn.addEventListener("click", function () {
    modalContainer.style.display = "flex";
    // let task = prompt("Enter your task?");
    // let color = prompt("Color");
    // // console.log(task," ",color); 
    // if(task != "" && color != ""){
        // <div class="ticket_container">
        //     <div class="ticket_color pink"></div>
        //     <div class="ticket_desc_container">
        //         <div class="ticket_id">#EXAMID</div>
        //         <div class="ticket_desc">React Project</div>
        //     </div>
        // </div>
        // let taskContainer = document.createElement("div");
        // taskContainer.setAttribute("class", "ticket_container");
        // taskContainer.innerHTML = `
        //     <div class="ticket_color ${color}"></div>
        //     <div class="ticket_desc_container">
        //         <div class="ticket_id">#EXAMID</div>
        //         <div class="ticket_desc">${task}</div>
        //     </div>
        // `
        // Very Imp to append child to container...
        // mainContainer.appendChild(taskContainer); 
    // }

});

taskBox.addEventListener("keydown", function(e) {
    if(e.key=="Enter" && taskBox.value!=""){
            let taskContainer = document.createElement("div");
            let task = taskBox.value;
            taskContainer.setAttribute("class", "ticket_container");
            taskContainer.innerHTML = `
                <div class="ticket_color ${iColor}"></div>
                <div class="ticket_desc_container">
                    <div class="ticket_id">#EXAMID</div>
                    <div class="ticket_desc">${task}</div>
                </div>
            `;
            // Very Imp to append child to container...
            mainContainer.appendChild(taskContainer); 
            // cleanup code.
            modalContainer.style.display = "none";
            taskBox.value = "";
            addFunctionality(taskContainer);
    }
});

for(let i = 0; i < modalColors.length; i++){
    modalColors[i].addEventListener("click", function () {
        let color = modalColors[i].classList[1];
        iColor = color;

        // standard way 
        // remove from everyone
        for (let j = 0; j < modalColors.length; j++) {
            modalColors[j].classList.remove("border");
        }
        // add to required one
        modalColors[i].classList.add("border");
    })
}
function addFunctionality(taskContainer) {
    let ticketColor = taskContainer.querySelector(".ticket_color");
    ticketColor.addEventListener("click", function(){
        let cColor = ticketColor.classList[1];
        let idx = colors.indexOf(cColor);
        let newIdx = (idx+1)%4;
        let newColor = colors[newIdx];
        ticketColor.classList.remove(cColor);
        ticketColor.classList.add(newColor);
    });
}