
var createNumbers = (n, min, max) =>{
    //declare condition to do not force the engine to calculate an impossible set of numbers
    if (n - 1 > max - min){
        console.log("decrease length of array or increase range")
    }else{        
        var array = new Array; //declare hosting array  
        for (i = 0; i < n; i++) { //n will be number of elements in array
            const range = max - min + 1;
            array[i] = Math.floor(Math.random() * range) + min;//create random number and assigning to array[i]            
            for (j = 0; j < i; j++){//we iterate trough the items already asigned in the array
                if (array[j] === array[i]) --i;//if array[i] already exists, iterate back trough same i
            }     
        }
        console.log(array);
    }
    
}
createNumbers(15, 161, 180);