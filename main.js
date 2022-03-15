let input = 'There is nothing noble in being superior to your fellow man. True nobility is being superior to your former self.'

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    let character = input.charAt(i);
    character.toLowerCase();
    if (character === 'e' || character === 'u') {
        resultArray.push(character)
    }
    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels[j];
        if (character === vowel) {
            resultArray.push(vowel);
        }
    }
}

const resultString = resultArray.join('').toUpperCase();

