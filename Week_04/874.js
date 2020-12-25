var robotSim = function(commands, obstacles) {
    const directionX = [0, 1, 0, -1]
    const directionY = [1, 0, -1, 0]
    let direction = 0
    let x = 0, y = 0
    let res = 0
    const map = new Map()
    for (let element of obstacles) map.set(element[0] + "-" + element[1], true)
    for (let element of commands){
        if (element === -2) direction = (direction + 3) % 4
        else if (element === -1) direction = (direction + 1) % 4
        else{
            for (let i = 0; i < element; i++){
                let newX = x + directionX[direction]
                let newY = y + directionY[direction]
                if (map.has(newX + "-" + newY)) break
                else{
                    x = newX
                    y = newY
                    res = Math.max(res, x*x+y*y)
                }
            }
        }
    }
    return res
};