function zeros (n) {
  let ans = 0;
  while (n/5) {
    n = n /5;
    ans += Math.trunc(n);
  };
  return ans;
};