// Input Format: N = 6
// Result:     
// ***********
//  *********
//   *******
//    ***** 
//     ***    
//      *

let n = 6;

for (let i = 0; i < n; i++) {
    let row = "";
    // Add leading spaces
    for (let j = 0; j < i; j++) {
        row += " ";
    }
    // Add asterisks for the inverted triangle shape
    for (let k = 0; k < (2 * (n - i) - 1); k++) {
        row += "*";
    }
    console.log(row);
}
