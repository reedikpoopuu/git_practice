let numberGenerator = num => Math.floor(Math.random()*num);

const nameDictionary = {
shakeNames: ["King Henry the Sixth", "Richard the Third", "Romeo", "Julia", "Titus Andronicus", "King John",
"King Richard the Second", "King Henry the Fourth", "King Henry the Fifth", "Julius Caesar", "Hamlet", "Troilus",
"Cressida", "Othello", "Macbeth", "King Lear", "Antony", "Cleopatra", "Coriolanus", "Timon", "Pericles",
"Cymbeline", "Henry the Eight", "Venus", "Adonis", "Lucrece"],

bibleNames: ["King James", "Adam", "Eve", "Judah", "Amaziah", "Esther", "Haman", "David", "Jacob",
"Lord God", "Zedekiah", "Job", "Ahasuerus", "Mordecai", "Joshua", "Sihon", "Jair", "Moses", "Sarah", "Abraham",
"Nethaneel", "Eliab", "Zuar", "Helon", "Jephthah", "Elon", "Jonathan", "Jehu", "Jezebel", "Jehonadab"]
}

const sentenceDictionary = {
    shakeSentence: ["Farewell till then: I will go lose myself,\n And wander up and down to view the city",
"Who would be jealous, then, of such one? \n No evil lost is wail' when it is gone.",
"Why look you strange on me? you know me \n well.",
"Belike for want of rain, which I could well \n Beteem them from the temest of my eyes",
"With the help of a surgeon he might yet recover, \n and prove an ass",
"I am a-weary of this moon: would he would \n change!"],

    bibleSentence: []
}

let dialogue = () => {
    let participantOne = nameDictionary["shakeNames"][numberGenerator(nameDictionary["shakeNames"].length)];
    let participantTwo = nameDictionary["bibleNames"][numberGenerator(nameDictionary["bibleNames"].length)];
    let sentenceOne = sentenceDictionary["shakeSentence"][numberGenerator(sentenceDictionary["shakeSentence"].length)];
    console.log(participantOne + ": " + sentenceOne + "\n \n" + participantTwo + ": " + sentenceOne);
}

dialogue()