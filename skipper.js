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
    shakeSentence: ["Farewell till then: I will go lose myself,\nAnd wander up and down to view the city",
"Who would be jealous, then, of such one?\nNo evil lost is wail' when it is gone.",
"Why look you strange on me? you know me\nwell.",
"Belike for want of rain, which I could well\nBeteem them from the temest of my eyes",
"With the help of a surgeon he might yet recover,\nand prove an ass",
"I am a-weary of this moon: would he would\nchange!"],

    bibleSentence: ["Shall thy loving-kindness be declared in\nthe grave? or thy faithfulness in destruction?",
"I sat not in the assembl of mockers, \nnor rejoiced; I sat alone because of thy hand:\nfor thou hast filled me with indignation.",
"I also will laugh at your calamity, I wiil\nmock when your fear cometh.",
"A time to be born, and the time to die; a time\nto plant, and a time to pluck up that which is\n planted.",
"And the frogs shall depart from thee, and\nfrom thy houses, and from thy servants, and\nfrom thy people; they shall remain in the river\nonly."]
}

const emotions = ["angry", "smiling", "crying", "laughing", "scared", "wryly", "prickly"]

let dialogue = () => {
    let participantOne = nameDictionary["shakeNames"][numberGenerator(nameDictionary["shakeNames"].length)];
    let participantTwo = nameDictionary["bibleNames"][numberGenerator(nameDictionary["bibleNames"].length)];
    let sentenceOne = sentenceDictionary["bibleSentence"][numberGenerator(sentenceDictionary["bibleSentence"].length)];
    let sentenceTwo = sentenceDictionary["shakeSentence"][numberGenerator(sentenceDictionary["shakeSentence"].length)];
    let emotionOne = emotions[numberGenerator(emotions.length)];
    let emotionTwo = emotions[numberGenerator(emotions.length)];
    console.log('\n' + participantOne + " (" + emotionOne + "):\n" + sentenceOne + "\n \n" + participantTwo + " (" + emotionTwo + "):\n" + sentenceTwo);
}

dialogue()