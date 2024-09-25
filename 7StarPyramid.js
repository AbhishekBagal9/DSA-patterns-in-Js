// Input Format: N = 6
// Result:
//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********

let n=6;
for(let i=1;i<=n;i++){
    let row="";
    for(let j=n-1;j>=i;j--){
     row+=" ";
     
    }
    for(let k=1;k<=2*i-1;k++){
        row+="*";
    }
       console.log(row);
}