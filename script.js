document.addEventListener("DOMContentLoaded", function() {
    function addimg(eleId, letter, text){
        ele = document.getElementById(eleId)
        if(letter === "X" && text == ""){
            ele.innerHTML = "<img src='https://e7.pngegg.com/pngimages/482/392/png-clipart-black-x-mark-tic-tac-toe-oxo-holiday-tic-tac-toe-game-blue-cross-miscellaneous-angle.png' height=100% width =100%>"
            ele.setAttribute("data-value", "X")
        }
        if(letter === "O" && text == ""){
            ele.innerHTML = "<img src='https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png' height=100% width=100%>"
            ele.setAttribute("data-value", "O")
        }
        let next = check(ele.getAttribute("data-value"))
        if(next == "X"){
            let winner = document.querySelector("h1")
            winner.innerText = "X wins"
            removeListeners()
        }
        else if(next == "O"){
            let winner = document.querySelector("h1")
            winner.innerText = "O wins"
            removeListeners()
        }
        else if(next == "Draw"){
            let winner = document.querySelector("h1")
            winner.innerText = "Draw"
        }
    }
    currentPlayer = "X"
    let element = document.querySelectorAll("#main div")
    function handler(event) {
        addimg(event.target.id,currentPlayer,event.target.innerHTML)
            
        currentPlayer = (currentPlayer === "X")? "O":"X";
    }
    for(let i=0;i<element.length;i++)
    {
        element[i].addEventListener("click", handler)
    }
    function check(letter){
        values = []
        count = 0
        for(let i=0;i<element.length;i++)
        {
            values.push(element[i].getAttribute("data-value"))
            if(values[i] !== ""){
                count++;
            }
        }
       const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let i=0;i<win.length;i++){
            arr = win[i]
            let bool1 = values[arr[0]] === 'X' && values[arr[1]] === 'X' && values[arr[2]] === 'X'
            let bool2 = values[arr[0]] === 'O' && values[arr[1]] === 'O' && values[arr[2]] === 'O'
            if(bool1 || bool2){
                return values[arr[0]]
            }
        }
        if(count==9){
            return "Draw";
        }
        return "play"
    }
    function removeListeners()
    {
        for(let i=0;i<element.length;i++)
        {
            element[i].removeEventListener("click",handler);
        }
    }
});
