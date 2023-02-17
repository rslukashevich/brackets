module.exports = function check(str, bracketsConfig) {
  // your solution
  let count;
  
  do 
  {	count = str.length;  
  	for (let i = 0; i < bracketsConfig.length; i += 1) {
 		  str = str.replaceAll(bracketsConfig[i][0]+bracketsConfig[i][1],'');}
  } while (count !== str.length)

  return (count === 0) ? true : false;
  
}