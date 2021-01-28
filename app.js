var userinput = prompt ('Select Yor Color Black or blue you ');
var x= "blue"
var y= "black"
var ss = " "
console.log (x)
console.log (y)
console.log (ss)
//


while (userinput !== x && userinput !== y)
{
    userinput = prompt ('Enter Only Black Or blue')
}
    if (userinput == x)
    {
       ss = 'blue Cars';
    } 
    
    else{if (userinput == y)
  {
    ss = 'Black Cars';
  }
  
  }
 
    document.write('<h2>' + ss + '</h2>');

var rating = prompt ('From 1 to 10 how passionate are you about owning this car?')
var image=' ';

for(var i = 0; i < rating; i++){
    if(userinput =='blue'){
        image = image + '<img src="https://s1.1zoom.me/prev/563/Nissan_2020_GT-R_50th_Anniversary_Gray_background_562832_600x400.jpg">';
        console.log(image);
        
    }else if(userinput =='black'){
        image = image +'<img src="https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2019NIC130001/2019NIC13000101.jpg">';
  
    }

}

document.write(image)