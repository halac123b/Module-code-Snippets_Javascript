class Count {
  constructor() {
    this.textArea = document.querySelector(".count-textarea");
    this.wordCount = document.querySelectorAll(".word-count");
    this.charCount = document.querySelectorAll(".character-count");

    console.log(1111);

    window.addEventListener("load", this.updateCount.bind(this));
    this.textArea.addEventListener("input", this.updateCount.bind(this));
  }

  countWords() {
    const value = this.textArea.value.trim();
    if (!value) {
      return 0;
    }
    // split() -> get array of word split by space, then get the length
    return value.split(/\s+/).length;
  }

  countChars() {
    return this.textArea.value.length;
  }

  updateCount() {
    const numWords = this.countWords();
    const numChars = this.countChars();

    this.wordCount.forEach((wordCount) => {
      wordCount.textContent = numWords.toString(10);
    });

    this.charCount.forEach((charCount) => {
      charCount.textContent = numChars.toString(10);
    });
  }
}

new Count();
