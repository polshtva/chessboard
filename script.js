let chessboard = document.getElementById("chessbord")

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let square = document.createElement("div")
        let round = document.createElement("div")
        square.classList.add("square")
        let flag = false;
        if ((i + j) % 2 === 0) {
            square.classList.add("white")
            flag = true
            if (i < 3) {
                round.classList.add("round-black")
            }
        }
        else {
            square.classList.add("black")
            flag = false
            if (i > 4) {
                round.classList.add("round-beige")
            }
        }
        chessboard.appendChild(square)
        square.appendChild(round)
        square.addEventListener("mouseover", () => {
            if (!flag) {
                square.style.backgroundColor = "brown"
            }
            else {
                square.style.backgroundColor = "beige"
            }
        })
        square.addEventListener("mouseout", () => {
            if (!flag) {
                square.style.backgroundColor = "black"
            }
            else {
                square.style.backgroundColor = "white"
            }
        })
    }
}