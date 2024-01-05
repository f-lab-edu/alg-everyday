// 12982

// function solution(d, budget) {
//     let count = 0;
//     d.sort((a,b)=>a-b).forEach((v)=>{
//         budget -= v
//         budget >= 0 ? count++ : null;

//     })
//     return count;
// }

function solution(d, budget) {
  return d.sort((a, b) => a - b).filter((v) => (budget -= v) >= 0).length;
}
