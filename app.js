let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newbtns = document.querySelector("#newbtn");
let messages = document.querySelector(".message");
let msgs = document.querySelector("#msg");

let turnO = true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const draw=()=>{
    msgs.innerText="Draw";
    messages.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        
        if(turnO){  
            let b = box.innerText= "O";
            box.style.color="chocolate";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="darkred";
            turnO=true;

        }
        count++;
        console.log(count);
        if(count==9){
            draw();
            count=0;
        }
        box.disabled=true;

        checkWinner();

    });
});

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const showWinner=(Winner)=>{
    msgs.innerText=`Congratulations, Winner is ${Winner}`;
    messages.classList.remove("hide");
    disableBoxes();

}
const checkWinner= () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
           if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner",pos1Val);
            
            showWinner(pos1Val);
           }

        }
    }
};
const resetGame = () =>{
    turnO=true;
    enableBoxes();
    messages.classList.add("hide");

}
newbtns.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

