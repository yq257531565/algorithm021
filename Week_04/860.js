var lemonadeChange = function(bills) {
    let five = 0, ten = 0
    for (let element of bills){
        if (element ===5) five++
        else if (element === 10){
            if (five === 0) return false
            else{
                five--
                ten++
            }
        }
        else if (element === 20){
            if (five >0 && ten > 0){
                five--
                ten--
            }
            else if (five >=3) five -=3
            else return false
        }
    }
    return true
};