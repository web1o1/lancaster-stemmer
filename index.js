var lancasterStemmer = require('lancaster-stemmer');
var inputElement = document.getElementsByTagName('input')[0];
var outputElement = document.getElementsByTagName('output')[0];

function stem() {
    outputElement.textContent = lancasterStemmer(inputElement.value);
}

inputElement.addEventListener('input', stem);

stem();
