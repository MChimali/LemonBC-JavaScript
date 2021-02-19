const range = 100 - 50 + 1;




/* 
    
var swap = (array, a, b) => {
var temp = array[a];//5
array[a] = array[b];//1, 1
array[b] = temp;
}
//       a  b

arrayd = [15, 11, 10, 8, 7, 6, 5, 3, 2, 1];
var saraSort = array => {
    for (var i = 1; i < array.length; i++){        
    for (var left = 0; left < array.length - i; left++){
        var right = left + 1; 
         if (array[left] > array[right]){
        swap (array, left, right);       
    }
    
} }
}
console.log(arrayd);
saraSort(arrayd);
console.log(arrayd); */


/* arrayd = [15, 11, 10, 8, 7, 6, 5, 3, 2, 1];

var swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

for (i = 1; i < arrayd.length; i++){
for (left = 0; left < arrayd.length - i; left++) {
    right = left + 1;
    console.log("comparing " + arrayd[left] + " and " + arrayd[right]);
    if (arrayd[left] > arrayd[right]){
        swap(arrayd, left, right)
    }
    
}
console.log(arrayd);
} */

/* var arrayd = [12, 14, 23, 25, 30, 36, 43, 62, 67, 72, 88];

//búsqueda binaria
function searchBinary (array, target){
    var min = 0;
    var max = array.length - 1;
    while (max >= min){
        mid = Math.floor((max - min) / 2) + min;
        console.log(mid + " calculate mid");
        if (array[mid] === target) return mid;
        else if (target > array[mid]) {
            min = mid + 1;
            console.log(min + " else if");
        }else{
            max = mid - 1;
            console.log(max + " else");
        }; 
}}
var a = searchBinary(arrayd, 36);

console.log(a);*/



/*
3, 5, 1, 8, 2, 7
i = 0;
1, 5, 3, 8, 2, 7
i = 1;
1, 2, 3, 8, 5, 7
i = 2;
1, 2, 3, 8, 5, 7
i = 3;
1, 2, 3, 5, 8, 7
i = 4;
1, 2, 3, 5, 7, 8
*/
/* var swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];



var orderArray = array => {
    var smallest;
    for (s = 0; s < array.length; s++){
        var smallest = s;
        
        for (i = s + 1; i < array.length; i++){
            if (array[i] < array[smallest]) smallest = i;
        }
        swap (array, s, smallest)
    }
    return array;

}



var myArray = [3, 5, 1, 8, 2, 7];
console.log(myArray);
orderArray(myArray);
console.log(myArray); */

/* var swap = (array, a, b) => {
    console.log(a  + " y " + array[b])
    return [array[a], array[b]] = [array[b], array[a]];
}

var myArray = [1, 3, 5, 8, 2, 7];

var insertionSort = array => {       
    var sortedListLastIndex = 0;
    for (var item = 1; item < array.length; item++) {
        var current = array[item];
        var currentIndex = item;
        var swapIndex = sortedListLastIndex;
            
        while (current < array[swapIndex] && swapIndex >= 0) {
            console.log(item);
           
            swap(array, currentIndex--, swapIndex--);
        }
        sortedListLastIndex++;
    }
    return array;
};
    
insertionSort(myArray); */


/* var swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

var myArray = [80, 5, 6, 1, 20, 24, 22, 18, 15, 13, 12, 1, 2, 3];

var orderArray = array => {//item = 3
    for (item = 1; item < array.length; item++){
        current = array[item];
        currentIndex = item;
        swapIndex = item - 1;

        while (current < array[swapIndex] && swapIndex >= 0){
            swap(array, swapIndex, currentIndex)                
            swapIndex--
            currentIndex--
        }
    }
    return array;
}

console.log(orderArray(myArray)); */


//algoritmo de búsqueda
/* var myarray = [1, 2, 4, 1, 2, 9, 6, 7, 1];

var search = (array, target) => {
    for (i = 0; i < array.length; i++){
        if (array[i] === target) return i;        
    }
    return -1
}
console.log(search(myarray, 9)); */

//Búsqueda Binaria

/* var myarray = [12, 14, 23, 25, 30, 36, 43, 62, 67, 72, 88];

var searchBinary = (array, target) => {
    var min = 0;
    var max = array.length;
    while (max >= min){
        var mid = min + Math.floor((max - min) / 2);
        if (array[mid] === target) return mid;
        else if (array[mid] > target) max = mid - 1;
        else min = mid + 1;
    }
    return -1
}
console.log(searchBinary(myarray, 88)); */


//Ordenación por burbuja
/* var swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];
var myArray = [3, 5, 1, 8, 7, 2, 15, -2];

var orderBuble = array => {

    for (i = 1; i < array.length; i++){

        for (indexLeft = 0; indexLeft < array.length - i; indexLeft++) {
            var indexRight = indexLeft + 1;
            if (array[indexLeft] > array[indexRight]){
                swap(array, indexLeft, indexRight);    
            }
        }
    }
    return array;
}

console.log(orderBuble(myArray)); */

//Ordenación por selección

/* var swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

var myArray = [3, 5, 1, 8, 7, 2, 20, -5];

var orderSelection = array => {
    for (var s = 0; s < array.length; s++){
        
        var minIndex = s;

        for (var i = s + 1; i < array.length; i++){
            
            if (array[minIndex] > array[i]) minIndex = i;
                       
        }
        
        swap (array, s, minIndex)
    }
    
    
return array;
}

console.log(orderSelection(myArray)); */
/* var swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];
var myArray = [3, 5, 1, 8, 7, 2] ;

var orderInsertion = array => { 
    
    for (item = 1; item < array.length; item++){
        console.log(item);
        var current = array[item]; 
        var currentIndex = item;
        var swapIndex = item - 1;
        while ((current < array[swapIndex]) && swapIndex >= 0){
            swap(array, swapIndex--, currentIndex--)
            console.log(array)
        }
        
    }
return array;
}
 */
/* console.log(orderInsertion([3, 5, 1, 8, 7, 2])); */

/* var orderMiguel = array => {

    for(item = 1; item < array.length; item++){
        console.log(item);
        var biggest = item;
        for (j = item - 1; j >= 0; j--){
            if(array[j] > array[biggest]) biggest = j;
        }
        swap(array, biggest, item)
        console.log(array);
        
    }
    return array;
}

console.log(orderMiguel([3, 5, 1, 8, 7, 2])); */

//. Búsqueda Secuencial o Lineal
/* var myArray = [1, 3, 4, 5, 2, 9, 6, 7, 8];

var search = (array, target) => {
    for (i = 0; i < array.length; i++){
        if(array[i] === target) return i;
    }
    return -1
}

console.log(search(myArray, 10)); */

//Búsqueda binaria

/* var myArray1 = [12, 14, 23, 25, 30, 36, 43, 62, 67, 72, 88];

var searchBinary = (array, target) => {
    var min = 0;
    var max = array.length;
    while (max>=min){
        var mid = min + Math.floor((max-min)/2);
        if (target === array[mid]) return mid;
        else if (target > array[mid]) min = mid + 1;
        else max = mid - 1;
    }
    return -1
}

console.log(searchBinary(myArray1, 25)); */

//algoritmo de ordenación

/* var swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

var myArray2 = [3, 5, 1, 8, 7, 2, 4, -5];

var bubble = array => {
    for (i = 1; i < array.length; i++){  

         for (var left = 0; left < array.length; left++){       
            var right = left + 1;
            if (array[left] > array[right]){
            swap(array, left, right)
            }
        }
    }
    return array;
}

console.log(bubble(myArray2)); */

//Selection Sort u ordenación por selección
/* var swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];
var myArray = [20 ,3, 5, 1, -4, 8, 7, 2, 4, 30];

var orderArray = array => {
    for (s = 0; s < array.length; s++){
        var minIndex = s;
        for (i = s + 1; i < array.length; i++){
            if (array[minIndex]>array[i]) minIndex = i;
        }
        swap(array, minIndex, s)
    };
    return array;
}
console.log(orderArray(myArray));  */

//Insertion Sort u ordenación por inserción
/* var swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];
var myArray = [20 ,3, 5, 1, -4, 8, 7, 2, 4, 30];

var orderInsertion = array => {
    for (item = 1; item < array.length; item++){
        var current = array[item];
        var currentIndex = item;
        var swapIndex = item - 1;
        while (current < array[swapIndex] && swapIndex >= 0){
            swap(array, currentIndex--, swapIndex--)
        }
    }
    return array;
}

console.log(orderInsertion(myArray)); */
