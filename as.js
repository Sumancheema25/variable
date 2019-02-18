function booln_Anagram (str1, str2) {
    if (str1.valueOf() === str2.valueOf()) {
      return true
    } else {
      return false
    }
  }
  var str1 = window.prompt('string')
  var str2 = window.prompt('string')
  function split (string) {
    var splitArr = []
    for (var i = 0; i < string.length; i++) {
      splitArr[i] = string[i]
    }
    return splitArr
  }
  var splitArr1 = split(str1.toLowercase())
  var splitArr2 = split(str2.toLowerCase())
  
  function join (string) {
    var joinArr = ''
    for (var i = 0; i < string.length; i++) {
      joinArray += string[i]
    }
    return joinArr
  }
  var joinArr1 = join(str1Sorted)
  var joinArr2 = join(stri2Sorted)
  
  function sort (string) {
    var arr = string
    var local
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
      
          if(arr[i] > arr[j]){
            local = arr[i];
            arr[i] = arr[j];
            arr[j] = local;
        }
      }
    }
    return arr
  }
  booln_Anagram(joinArr1, joinArr2)