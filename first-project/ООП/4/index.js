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

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
console.log(dictionary.get("JavaScript"));
dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие

//
