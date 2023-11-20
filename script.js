const translationMap = {
    'a': 'ශ',
    'b': 'බ',
    'c': 'ච',
    'd': 'ඩ',
    'e': 'එ',
    'f': 'ෆ',
    'g': 'ග',
    'h': 'හ',
    'i': 'ඉ',
    'j': 'ජ',
    'k': 'ක',
    'l': 'ල',
    'm': 'ම',
    'n': 'න',
    'o': 'ඔ',
    'p': 'ප',
    'q': 'කු',
    'r': 'ර',
    's': 'ස',
    't': 'ත',
    'u': 'උ',
    'v': 'ව',
    'w': 'වු',
    'x': 'ක්ෂ',
    'y': 'ය',
    'z': 'ශ'
};

//  translate English to Sinhala
function translate() {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    const inputValue = inputElement.value.toLowerCase();

    let translatedText = '';
    for (let i = 0; i < inputValue.length; i++) {
        const currentChar = inputValue[i];
        const translatedChar = translationMap[currentChar] || currentChar;
        translatedText += translatedChar;
    }

    outputElement.innerText = translatedText;
}


document.getElementById('input').addEventListener('input', translate);