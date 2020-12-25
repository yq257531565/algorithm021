var findContentChildren = function(g, s) {
    const glen = g.length
    const slen = s.length
    let max = 0
    g.sort((a,b) => a -b)
    s.sort((a,b) => a -b)
    for (let i = 0 ; i< slen; i++){
        if (s[i] >= g[max]) max++
        if (max === glen) return max
    }
    return max
};