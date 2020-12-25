var updateBoard = function(board, click) {
    if (board[click[0]][click[1]] === "M") {
        board[click[0]][click[1]] = "X"
        return board
    }

    const row = board.length
    const col = board[0].length
    const deque = [click]

    const isMine = (i, j) => {
        if (board[i][j] === "M") return true
        else return false
    }
    const countMine = (i, j) =>{
        let sum = 0
        if (i+1 !== row && isMine(i+1, j)) sum++
        if (i - 1 !== -1 && isMine(i-1, j)) sum ++
        if (j+1 !== col && isMine(i, j + 1)) sum++
        if (j - 1 !== -1 && isMine(i, j - 1)) sum ++
        if (i+1 !== row && j+1!==col && isMine(i+1, j+1)) sum++
        if (i+1 !== row && j-1!==-1 && isMine(i+1, j -1)) sum++
        if (i -1!== -1 && j+1!== col && isMine(i-1,j+1)) sum++
        if (i-1!== -1 && j-1 !== -1 && isMine(i-1,j-1)) sum++
        return sum
    }

    while(deque.length){
        const len = deque.length
        for (let i = 0; i < len; i++){
            const [n, m] = deque.shift()
            const num = countMine(n, m)
            if (num === 0) {
                board[n][m] = "B"
                if (n+1 !== row && board[n+1][m] === "E"){
                    deque.push([n+1, m])
                    board[n+1][m] = "B"
                }
                if (m+1 !== col && board[n][m+1] === "E"){
                    deque.push([n, m+1])
                    board[n][m+1] = "B"
                }
                if (n-1 !== -1 && board[n-1][m] === "E"){
                    deque.push([n-1,m])
                    board[n-1][m] = "B"
                }
                if (m-1 !== -1 && board[n][m-1] === "E"){
                    deque.push([n, m -1])
                    board[n][m-1] = "B"
                }
                if (n+1 !== row && m+1 !== col && board[n+1][m+1] === "E"){
                    deque.push([n+1, m+1])
                    board[n+1][m+1] === "B"
                }
                if (n+1 !== row && m - 1 !== -1 && board[n+1][m-1] === "E"){
                    deque.push([n+1, m -1])
                    board[n+1][m-1] = "B"
                }
                if (n-1 !== -1 && m + 1 !== col && board[n-1][m+1] === "E"){
                    deque.push([n-1,m+1])
                    board[n-1][m+1] = "B"
                }
                if (n-1 !== -1 && m -1 !== -1 && board[n-1][m-1] === "E"){
                    deque.push([n-1, m-1])
                    board[n-1][m-1] = "B"
                }

            }
            else    board[n][m] = num + ""
        }
    }

    return board
};