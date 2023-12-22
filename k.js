function vowelcount(str) {
  let vowellist = "aeiouAEIOU";
  let vcount = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vowellist.indexOf(str[i]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
let e = vowelcount("i hate life");
console.log(e);
