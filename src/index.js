module.exports = function getZerosCount(number, base) {
  let minResult = 1e15;
  for (let i = 2; i<=base; i++ ){
      if (base % i === 0){
        let counterBase = 0;
        while(base % i === 0){
          counterBase++;
          base /=i;
        }
        let counterNum = 0;
        let x = number;
        while ( x / i >= 1){
          counterNum += Math.floor(x / i);
          x /= i;
        }
        minResult = Math.min(minResult, Math.floor(counterNum / counterBase));
      }
  }
return minResult;
}
