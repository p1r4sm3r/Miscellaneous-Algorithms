snail = function(array) {
    var alteredList = array, order = [];
    
    // Visualized List
    
    // for (let i = 0; i<array.length; i++){
    //    console.log(array[i])
    // }

    while (alteredList.length != 0){
        // NW TO NE
        for (let i = 0; i<alteredList[0].length;i++){
            order.push(alteredList[0][i])
        }
        alteredList.splice(0,1)
        // NE TO SE
        for (let i = 0; i<alteredList.length;i++){
            order.push(alteredList[i][alteredList.length]);
            alteredList[i].splice(alteredList[i].length-1,1)
        }
        // SE TO SW
        for (let i = alteredList.length-1; i>-1; i--){
            order.push(alteredList[alteredList.length-1][i])
        }
        alteredList.splice(alteredList.length-1,1)
        // SW TO NW
        for (let i = alteredList.length-1; i>-1; i--){
            order.push(alteredList[i][0])
            alteredList[i].splice(0,1)
        }
    }
    return order
}
// One line
snail = function(array) {var alteredList = array, order = [];while (alteredList.length != 0){for (let i = 0; i<alteredList[0].length;i++){order.push(alteredList[0][i])}alteredList.splice(0,1);for (let i = 0; i<alteredList.length;i++){order.push(alteredList[i][alteredList.length]);alteredList[i].splice(alteredList[i].length-1,1)};for (let i = alteredList.length-1; i>-1; i--){order.push(alteredList[alteredList.length-1][i])}alteredList.splice(alteredList.length-1,1);for (let i = alteredList.length-1; i>-1; i--){order.push(alteredList[i][0]);alteredList[i].splice(0,1);}}return order};
