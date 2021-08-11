function superbowl(array) {
    for(const key of array) {
        if(key.result === "W") {
          return key.year;   
    }
  } 
}

function superbowlWin(array) {
    const result = array.find(array => array.result === "W");
     if(result !== undefined) {
         return result.year;
     } else {
         return undefined;
     }
}