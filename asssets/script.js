/*const translationMap = {
    'k': 'ක්', 'ka': 'ක', 'kaa': 'කා', 'kA': 'කැ', 'kAa': 'කෑ'
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


document.getElementById('input').addEventListener('input', translate);*/

const singlishToSinhalaMap = {
    'a': 'අ', 'aa': 'ආ', 'A': 'ඇ', 'Aa': 'ඈ', 'i': 'ඉ', 'ii': 'ඊ',
    'u': 'උ', 'uu': 'ඌ','e': 'එ','ee': 'ඒ','E': 'ඓ', 'o': 'ඔ', 'oo': 'ඕ','ou': 'ඖ',
    'k': 'ක', 'kha': 'ඛ', 'ga': 'ග', 'gha': 'ඝ', 'ng': 'ඞ',
    'ca': 'ච', 'ch': 'ඡ', 'j': 'ජ', 'jh': 'ඣ', 'ny': 'ඤ',
    't': 'ට', 'th': 'ඨ', 'd': 'ඩ', 'dh': 'ද්', 'dha': 'ද', 'dhi': 'දි',
    'dhii': 'දී', 'dhA': 'දැ', 'dhaa': 'දා', 'dhra': 'ද්‍ර',
    'dhri': 'ද්‍රි', 'dhrii': 'ද්‍රී', 'wa': 'ව', 'wu': 'වු', 'wuu': 'වූ',
    'wi': 'වි', 'wii': 'වී', 'pa': 'ප', 'pu': 'පු', 'puu': 'පූ',
    'pi': 'පි', 'pii': 'පී', 'p': 'ප්', 'pra': 'ප්‍ර', 'pri': 'ප්‍රි',
    'prii': 'ප්‍රී', 'prai': 'ප්‍රෛ', 'ja': 'ජ', 'ju': 'ජු', 'ji': 'ජි',
    'jii': 'ජී', 'j': 'ජ්', 'l': 'ල', 'v': 'ව', 'sh': 'ශ',
    'ss': 'ෂ', 's': 'ස', 'h': 'හ', 'f': 'ෆ', 'ma': 'ම',
    'u': 'උ', 'dhu': 'දු', 'a': 'අ', 'dha': 'ද', 'dhi': 'දි',
    'dhii': 'දී', 'dh': 'ද්', 'dhA': 'දැ', 'dhaa': 'දා', 'dhra': 'ද්‍ර',
    'dhri': 'ද්‍රි', 'dhrii': 'ද්‍රී', 'wa': 'ව', 'wu': 'වු', 'wuu': 'වූ',
    'wi': 'වි', 'wii': 'වී', 'pa': 'ප', 'pu': 'පු', 'puu': 'පූ',
    'pi': 'පි', 'pii': 'පී', 'p': 'ප්', 'pra': 'ප්‍ර', 'pri': 'ප්‍රි',
    'prii': 'ප්‍රී', 'prai': 'ප්‍රෛ', 'ja': 'ජ', 'ju': 'ජු', 'ji': 'ජි',
    'jii': 'ජී', 'j': 'ජ්', 'l': 'ල', 'v': 'ව', 'sh': 'ශ',
    'ss': 'ෂ', 's': 'ස', 'h': 'හ', 'f': 'ෆ', 'ma': 'ම',
};

const inputText = document.getElementById('input');
const outputText = document.getElementById('output');

function updateOutput() {
    const inputValue = inputText.value.toLowerCase();
    let sinhalaOutput = '';

    for (let i = 0; i < inputValue.length; i++) {
        let currentChar = inputValue[i];

        // Check for multi-character mappings
        while (i < inputValue.length - 1) {
            const nextChar = inputValue[i + 1];
            const combinedChar = currentChar + nextChar;

            if (singlishToSinhalaMap[combinedChar]) {
                currentChar = combinedChar;
                i++;
            } else {
                break;
            }
        }

        const sinhalaChar = singlishToSinhalaMap[currentChar] || currentChar;

        if (currentChar === ' ') {
            sinhalaOutput += ' ';
        } else {
            sinhalaOutput += sinhalaChar;
        }
    }

    outputText.value = sinhalaOutput;
}


