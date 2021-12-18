let showSuccessMessage = (message) => {
  console.log(message);
};

let showErrorMessage = (message) => {
  console.error(message);
};

let checkTextOnErrorSymbol = (
  text,
  errorSymbol,
  successCallback,
  errorCallback
) => {
  let errorSymbolFound = false;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) {
      errorCallback(
        `Найден запрещенный символ ${errorSymbol} под индексом ${i}.`
      );
      errorSymbolFound = true;
    }
  }
  if (errorSymbolFound !== true) {
    successCallback("В данном тексте нет запрещенных символов");
  }
};

const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
