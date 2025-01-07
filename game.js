let players='X';
let betting = document.getElementById("turn");          // variable h2
let again = document.getElementById("try-again");      //mesage print try again
const singleClick=(value)=>{
    if(value.textContent ===''){
        value.textContent = players;
      
        value.style.color=players === 'X' ? 'red' : 'blue';
        value.style.fontSize='55px'
      
        players=players==='X'? 'O': 'X';
        betting.textContent=`Lets Play ${players}`;

    }
    if(checkWin()){
        setTimeout(alerts,500); // func name or time in miliSecond
        disableBoard(); 
        function alerts(){
            alert(`Congratulations! ${value.textContent} is winning this game... Let's Play Again Please Refresh`);
        }
    }
    if (tryAgain()) {          
        again.textContent = "Please refresh And playing again ...";
    }

};
const checkWin=()=>{
    const table=document.querySelector(".table");
    var rows = table.rows;
    //rowwwwwww
    for(let i=0; i<rows.length; i++){
        const cells=rows[i].cells;
        if( cells[0].textContent &&
            cells[0].textContent === cells[1].textContent &&
            cells[1].textContent === cells[2].textContent
         ) {
            return true;
        }
    }
    //ccolumnnnnnnn
    for(let i=0; i<3; i++){
        const cells =rows[i].cells;
        if(rows[0].cells[i].textContent &&
            rows[0].cells[i].textContent === rows[1].cells[i].textContent &&
            rows[1].cells[i].textContent === rows[2].cells[i].textContent
        ) {
            return true;
        }
    }
    // diagnal
    for(let i=0; i<3; i++){
        const cells= rows[i].cells
        if( rows[0].cells[0].textContent &&
            rows[0].cells[0].textContent === rows[1].cells[1].textContent &&
            rows[1].cells[1].textContent === rows[2].cells[2].textContent
        )  {
            return true;
        }
    }
    for(let i=0; i<3; i++){
        const cells= rows[i].cells;
        if( rows[0].cells[2].textContent &&
            rows[0].cells[2].textContent === rows[1].cells[1].textContent &&
            rows[1].cells[1].textContent === rows[2].cells[0].textContent
        ) {
            
            return true;
        }
    }
    return false;           // if return false then going to third condition
   
}
const tryAgain = () => {
    const table = document.querySelector(".table");
    const cells = table.querySelectorAll("td");
    for (let cell of cells) {
        if (cell.textContent === '') {
            return false; // jab tak ak b cell empty hoga tab tak yh condition false dy ga k tak ap koi sg print nhi kr skty
        }
    }
    return true; // All cells are filled
};
const disableBoard = () => {
    const table = document.querySelector(".table");
    const cells = table.querySelectorAll("td");
    for (let cell of cells) {
        cell.style.pointerEvents = 'none';   // disabled cell
    }
};




