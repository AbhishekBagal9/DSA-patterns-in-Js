// Input Format: N = 6
// Result:
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1

let n=6;

for(let i=n;i>=1;i--){
    let row =" ";
    for(let j=1;j<=i;j++){
        row += j +" ";
    } 
    console.log(row);
}