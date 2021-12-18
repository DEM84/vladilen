class Dictionary {
  #name;
  #words;

  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  add(word, description) {
    if (!this.#words[word]) {
      this.addNewWord(word, description);
    } else {
      console.log("Это слово уже добавлено");
    }
  }

  remove(word) {
    if (this.#words[word]) {
      delete this.#words[word];
    } else {
      //console.log("Такого слова нет в словаре");
    }
  }

  get(word) {
    return this.#words[word].word;
  }

  showAllWords() {
    for (let el in this.#words) {
      console.log(`${this.#words[el].word} – ${this.#words[el].description}`);
    }
  }

  get mainName() {
    return this.#name;
  }

  set setMainName(name) {
    this.#name = name;
  }

  get allWords() {
    return this.#words;
  }

  addNewWord(word, description) {
    this.addNewEntry(word, {
      word: word,
      description: description,
    });
  }

  addNewEntry(key, value) {
    this.#words[key] = value;
  }
}

//

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  add(word, description) {
    this.addNewEntry(word, {
      word: word,
      description: description,
      isDifficult: true,
    });
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

//
