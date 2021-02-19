var selectionSort = array => {
    var minIndex;
    for (var s = 0; s < array.length; s++) {
        minIndex = s;
        for (var i = s + 1; i < array.length; i++) {
    
            if (array[i] < array[minIndex]) minIndex = i;
                }
    swap(array, minIndex, s);
    }
    return array;
    };