class WordChecker{

  constructor(all_words){
    this.dict = new Set(all_words);
    }
  isWord(string){
    return this.dict.has(string);
  }
}
