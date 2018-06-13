// performance.js
function calcTotal() {  
  let t = 0;
  let numWork = 200000000;
  for (let i = 0; i < numWork; i++) {
  //or (var i = 0; i < numWork; i++) {
    //t++;
    //t += 1; // เปลี่ยนตรงนี้จากเดิม t++ เป็น t += 1
    t = t + 1; // เปลี่ยนตรงนี้จากเดิม t += 1 ที่ช้ามากๆ เป็น t = t + 1
  }
  return t;
}

function main() {
  let start = process.hrtime();
  let total = calcTotal();
  let elapsed = process.hrtime(start);

  console.log("total is", total, "in", elapsed[0], "s", elapsed[1]/1000000, "ms");
}

main();
