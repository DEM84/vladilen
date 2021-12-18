class Dictionary {
  #name;
  #words;

  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get mainName() {
    return this.#name;
  }

  set setMainName(newName) {
    this.#name = newName;
  }

  get allWords() {
    return this.#words;
  }

  addNewWord(word, description) {
    this.#words[word] = description;
  }

  add(word, description) {
    if (!this.#words[word]) {
      const newWord = { word, description };
      this.addNewWord(word, newWord);
    }
  }

  remove(word) {
    delete this.#words[word];
  }

  get() {
    return this.#words[word];
  }

  showAllWords() {
    Object.values(this.#words).forEach((wordItem) => {
      console.log(`${wordItem.word} - ${wordItem.description}`);
    });
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  add(word, description) {
    if (!this.allWords[word]) {
      this.addNewWord(word, {
        word,
        description,
        isDifficult: true,
      });
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);
hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);
hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант
