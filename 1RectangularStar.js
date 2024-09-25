// Example 1:
// Input: N = 3
// Output: 
// * * *
// * * *
// * * *


let n=3;
for(let i=1;i<=n;i++){
   let row =" ";
    for(let j=1;j<=n;j++){
       row +="*";  
    }
    console.log(row);
}
