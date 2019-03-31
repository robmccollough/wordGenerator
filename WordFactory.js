class WordFactory{

  constructor(){
    this.possibles = [];
  }

  //returns list of valid words using the param wordChecker isWord()
  getWords(wordChecker){
    var final = [];
    for (var i = 0; i < this.possibles.length; i++){
      var word = this.possibles[i];
      if(wordChecker.isWord(word)){
        final.push(word);
      }
    }
  return final;
  }

  //populates possibles field with list of all possible combinations of > 2 letters from given string
  loadPossibles(string){
    //retrieve all combinations, removing spaces from string
    //can handle any string input, only the ones that are words will make it through
    var combos = this.combinations(string.replace(/ /g, ''));
    var master = [];

    for(var i = 0; i < combos.length; i++){
      var perms = this.permut(combos[i]);
      master = master.concat(perms);
    }
    //remove single digit letters using filter
    master = master.filter(word => word.length > 1);
    //remove duplicates by creating a set
    master = new Set(master);
    this.possibles = Array.from(master);

  }

  //returns an array of permutations of a given string
  permut(string){
    if (string.length < 2){
      return string; // This is our break condition
    }
    var permutations = []; // This array will hold our permutations
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i){ // if char was used already
            continue;
          }           // skip it this time
        var remainingString = string.slice(0,i) + string.slice(i+1,string.length);
        for (var subPermutation of this.permut(remainingString))
            permutations.push(char + subPermutation)
    }
    return permutations;
  }

  //returns an array of substrings including all nCk, nCk-1, ...  nC2
  combinations(string){
        var fn = function(active, rest, a) {
            if (!active && !rest)
                return;
            if (!rest) {
                a.push(active);
            } else {
                fn(active + rest[0], rest.slice(1), a);
                fn(active, rest.slice(1), a);
            }
            return a;
        }
        return fn("", string, []);
  }
}
