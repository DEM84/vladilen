class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
        word: word,
        description: description,
      };
    } else {
      console.log("Это слово уже добавлено");
    }
  }

  remove(word) {
    if (this.words[word]) {
      delete this.words[word];
    } else {
      console.log("Такого слова нет в словаре");
    }
  }

  get(word) {
    return this.words[word].word;
  }

  showAllWords() {
    for (let el in this.words) {
      console.log(`${this.words[el].word} – ${this.words[el].description}`);
    }
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
        word: word,
        description: description,
        isDifficult: true,
      };
    } else {
      console.log("Это слово уже добавлено");
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

// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.

//
