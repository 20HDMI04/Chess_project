let chessfigures = {
    
    whiteking: "♚",
    blackking: "♚",
    
    whitequeen: "♛",
    blackqueen: "♛",
    
    blackbastion1: "♜",
    blackbastion2: "♜",
    
    whitebastion1: "♜",
    whitebastion2: "♜",
    
    blackbishop1: "♝",
    blackbishop2: "♝",

    whitebishop1: "♝",
    whitebishop2: "♝",
    
    blackknight1: "♞",
    blackknight2: "♞",
    
    whiteknight1: "♞",
    whiteknight2: "♞",
    
    blackpawn1: "♟",
    blackpawn2: "♟",
    blackpawn3: "♟",
    blackpawn4: "♟",
    blackpawn5: "♟",
    blackpawn6: "♟",
    blackpawn7: "♟",
    blackpawn8: "♟",
    
    whitepawn1: "♟",
    whitepawn2: "♟",
    whitepawn3: "♟",
    whitepawn4: "♟",
    whitepawn5: "♟",
    whitepawn6: "♟",
    whitepawn7: "♟",
    whitepawn8: "♟",
};
betuk = ['0','h','g','f','e','d','c','b','a'];
function tablemaker() {
    let center = document.createElement('div');
    center.classList.add('center')
    const chesstable = document.createElement('table');
    for (let i = 8; i > 0; i--) {
        const row = document.createElement('tr');
        for (let j = 8; j > 0; j--) {
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
    let blueprintforwhite = [null, "whitebastion1", "whiteknight1", "whitebishop1", "whiteking", "whitequeen", "whitebishop2", "whiteknight2", "whitebastion2"];
    let blueprintforblack = [null, "blackbastion1", "blackknight1", "blackbishop1", "blackking","blackqueen", "blackbishop2", "blackknight2", "blackbastion2"];
    let blueprintforwhitepawn = [null, "whitepawn1", "whitepawn2", "whitepawn3", "whitepawn4", "whitepawn5", "whitepawn6", "whitepawn7", "whitepawn8"];
    let blueprintforblackpawn = [null, "blackpawn1", "blackpawn2", "blackpawn3", "blackpawn4", "blackpawn5", "blackpawn6", "blackpawn7", "blackpawn8"];
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            if (i == 1) {
                let p = document.createElement('p');
                document.getElementById(betuk[j] + '-' + i.toString()).appendChild(p);
                p.innerText = chessfigures[blueprintforwhite[j]];
                p.setAttribute('class', 'whitefigures');
                p.id = blueprintforwhite[j]
            }
            if (i == 2) {
                let p = document.createElement('p');
                document.getElementById(betuk[j] + '-' + i.toString()).appendChild(p);
                p.innerText = chessfigures[blueprintforwhitepawn[j]];
                p.setAttribute('class', 'whitefigures');
                p.id = blueprintforwhitepawn[j]
            }
            if (i == 7) {
                let p = document.createElement('p');
                document.getElementById(betuk[j] + '-' + i.toString()).appendChild(p);
                p.innerText = chessfigures[blueprintforblackpawn[j]];
                p.setAttribute('class', 'blackfigures');
                p.id = blueprintforblackpawn[j]

            }
            if (i == 8) {
                let p = document.createElement('p');
                document.getElementById(betuk[j] + '-' + i.toString()).appendChild(p);
                p.innerText = chessfigures[blueprintforblack[j]];
                p.setAttribute('class', 'blackfigures');
                p.id = blueprintforblack[j]
            }
        }
        
    };
}

let honnanlepesek = []
let hovalepesek = []
function appendeles() {
       const ertek = document.getElementById("lepesek").value;
       const uj = ertek.split(' ');
       honnanlepesek.push(uj[0]);
       hovalepesek.push(uj[1]);
       document.getElementById("lepesek").value = ""
       lepesmegtortent()
}

function lepesmegtortent() {
    document.getElementById(honnanlepesek[0])
    document.getElementById(hovalepesek[0])    
}
