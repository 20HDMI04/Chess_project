betuk = ["0","a","b","c","d","e","f","g","h"];
function sanyika() {
    let center = document.createElement('div');
    center.classList.add('center')
    const chesstable = document.createElement('table');
    for (let i = 1; i < 9; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j < 9; j++) {
            let td = row.appendChild(document.createElement('td'))
            td.id = betuk[j] + '-' + i.toString()
            if ((i + j) % 2 == 0) {
                td.setAttribute('class', 'cell whitecell');
                row.appendChild(td);
            } else {
                td.setAttribute('class', 'cell blackcell');
                row.appendChild(td);
            }
        }

        chesstable.appendChild(row);
        center.appendChild(chesstable);
    }
    document.body.appendChild(center);
    start_game()
}

function start_game() {
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let p = document.createElement('p');
            document.getElementById(betuk[j] + '-' + i.toString()).appendChild(p);
        }
        
    }
}

let chessfigures = {
    whiteking: "♔",
    blackking: "♚",
    whitequeen: "♕",
    blackqueen: "♛",
    blackbastion: "♖",
    whitebastion: "♜",
    blackbishop: "♝",
    whitebishop: "♗",
    blackknight: "♞",
    whiteknight: "♘",
    blackpawn: "♟",
    whitepawn: "♙",
}