var numIslands = function(grid) {
    let res = 0
    const row = grid.length
    if (row === 0) return 0
    const col = grid[0].length
    const dfs = (grid, i, j, row, column) =>{
        if (i < 0 || j < 0 || i > row - 1 || j > col - 1 || grid[i][j] === "0") return
        else grid[i][j] = "0"
        dfs(grid, i + 1, j, row, col)
        dfs(grid, i - 1, j, row, col)
        dfs(grid, i, j + 1, row, col)
        dfs(grid, i, j - 1, row, col)
    }

    for (let i = 0; i< row; i++){
        for (let j = 0; j < col; j++){
            if (grid[i][j] === "1"){
                dfs(grid, i, j, row, col)
                res ++
            }
        }
    }
    return res
};