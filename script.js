


function capitalizeFirstLetter(str) {     // This function takes a word and makes the first letter uppercase.

    return str.charAt(0).toUpperCase() + str.slice(1); // This line takes the first letter of the word, makes it uppercase, then combines it with the rest of the word to create a properly capitalized version.

    // Slice(1) cuts off the first letter of the word and keeps everything else. 
    // If the word is "banana", it removes "b" and keeps "anana". 🍌
     
}

console.log(capitalizeFirstLetter('hello'));  // Here, we call the function and give it the word "hello". It should return "Hello".

 


function countOccurrences(phrase, mot) {     // This function counts how many times a word appears in a sentence.

    return phrase.split(mot).length -1;      // It splits the sentence at every spot where the word appears. Then, it counts how many parts there are and subtracts 1 to get the number of times the word was found.

}


console.log(countOccurrences("hello Nuno, hello Ricardo, hello Karine", "hello"));     // This calls the counting function with the phrase containing "hello" multiple times. The second argument specifies the word to count, so it should work correctly.




function truncateString(phrase, maxLength) {     // This function makes a long sentence shorter if needed

    return phrase.length > maxLength       // If the sentence is longer than the maximum length...
    ? phrase.slice(0, maxLength) + "..."   // Cut the sentence at the max length and add "..." to show it was shortened.
    : phrase;                              // Otherwise, keep the sentence the same.

}


// Here, we test the function with "Hello, world!" and a max length of 5.
// Since "Hello, world!" is longer than 5 characters, the function keeps only "Hello" and adds "..."
console.log(truncateString('Hello, world!', 5)); 

// Now we test with "Short" and a max length of 10.
// The word "Short" is already shorter than 10 characters, so it stays the same.
console.log(truncateString('Short', 10)); 


function countRegexOccurrences(phrase, mot) {  // This function counts how many times a word appears in a sentence.

    const regex = new RegExp(mot, 'g');  // This makes a special "search tool" (called a regex) that looks for the word everywhere in the sentence.

    const matches = phrase.match(regex);  // This checks the sentence and finds all parts where the word appears.

    return matches ? matches.length : 0;  // If the word was found, return how many times it appears. If not found, return 0.
}

// Here, we test the function by searching for "hello" inside "hello hello hello".
console.log(countRegexOccurrences('hello hello hello', 'hello')); // Output: 3


let phrase = "Le JavaScript est super";

mot = phrase.slice(3, 13);

console.log(mot);


let phrasee = "Je suis developpeur web"

console.log(phrasee.length);


let salut = " Bonjour le monde! ";
console.log(salut.trim());

let prenom = "Nuno";
let nom = "Antonio";
let complet = `Bonjour, je m'appelle ${prenom} ${nom}`;

console.log(complet)


let sujet = "Nuno";
let verbe = "aprende";
let complement = "JS";

console.log(sujet + " " + verbe + " " + complement);

let anneeNaissance = 1455;
let anneeActuelle = 2025;

let age = anneeActuelle - anneeNaissance;

console.log(`Tu as ${age} ans`)


let a = 25462;
let b = 15456;
let somme = a + b;
console.log(`La somme est: ${somme}`);



let prename = "Ricardo";

console.log(prename)

prename = "Nuno"

console.log(prename)

let idade = 674;
idade += 1;

console.log(idade);

const pi = 3.14;


let score = 100;
let energy = 80;
let hasPotion = false;
let inventory = "epee en bois";
let isAlive = true;




document.body.prepend(`Potion: ${hasPotion}`);
document.body.prepend(`Energy: ${energy}`);
document.body.prepend(score);
document.body.prepend(isAlive);
document.body.prepend(inventory);











