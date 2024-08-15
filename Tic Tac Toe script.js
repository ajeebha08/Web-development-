document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("resetButton");
    const startButton = document.getElementById("startButton");
    const player1Input = document.getElementById("player1");
    const player2Input = document.getElementById("player2");
    const winnerMessage = document.getElementById("winnerMessage");
    const gameArea = document.getElementById("gameArea");
    
    let currentPlayer = "X";
    let player1 = "";
    let player2 = "";
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    startButton.addEventListener("click", () => {
        player1 = player1Input.value || "Player 1";
        player2 = player2Input.value || "Player 2";
        gameArea.classList.remove("hidden");
    });

    function checkWinner() {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameActive = false;
                showWinner(currentPlayer === "X" ? player1 : player2);
                return true;
            }
        }
        return false;
    }
     function showWinner(winner) {
        winnerMessage.textContent = `${winner} wins! 🎉`;
        winnerMessage.style.display = "block";
        const celebration = document.createElement("div");
        celebration.className = "celebration";
        celebration.textContent = "🎉🍫🎈";
        document.body.appendChild(celebration);
        celebration.style.display = "block";
    }

    function handleCellClick(e) {
        const cell = e.target;
        const index = cell.getAttribute("data-index");

        if (board[index] !== "" || !gameActive) return;

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
            setTimeout(() => {}, 100);
        } else if (!board.includes("")) {
            gameActive = false;
            winnerMessage.textContent = "It's a draw!";
            winnerMessage.style.display = "block";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
    function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        cells.forEach(cell => {
            cell.textContent = "";
            cell.style.backgroundColor = "#fff";
        });
        winnerMessage.style.display = "none";
        document.querySelectorAll('.celebration').forEach(el => el.remove());
        currentPlayer = "X";
        gameActive = true;
    }

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);
});
