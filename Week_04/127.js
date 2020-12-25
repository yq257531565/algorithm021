var ladderLength = function(beginWord, endWord, wordList) {
    const map = new Map()
    for (let element of wordList) map.set(element, true)
    if (!map.has(endWord)) return 0
    const deque = [beginWord]
    let level = 0
    
    while (deque.length){
        level++
        const len = deque.length
        for (let i = 0; i < len; i++){
            const node = deque.shift()
            if (node === endWord) return level
            for (let j = 0; j < node.length; j++){
                for (let k = 97; k < 123; k++){
                    let changed = node.slice(0, j) + String.fromCharCode(k) + node.slice(j + 1)
                    if (map.has(changed)){
                        deque.push(changed)
                        map.delete(changed)
                    }
                }
            } 
        }
    }
    return 0
};