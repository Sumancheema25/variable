function String(str)
{
var arr=new Array();
var j=0;
var Lowerchange=str.toLowerCase();
for(let i of Lowerchange)
    {
      arr[j]=i;
      j++;
    }
var local;
for(var i = 0; i < arr.length; i++)
    {
for(var j = i + 1; j < arr.length; j++)
      {
        if(arr[i] > arr[j]){
          local = arr[i];
          arr[i] = arr[j];
          arr[j] = local;
        }
      }
    }
for(var i=0;i<arr.length;i++)
    {
      var str=str+ arr[i];
    }
    return str;
  }
var string1=String("cat");
var string2=String("tac");
var length1=string1.length;
var length2=string2.length;
    if(length1==length2)
  {
      if(string1==string2)
      {
        window.alert("Anagram string");
      }
      else 
      {
          window.alert("Not a Anagram");
      }
  }
