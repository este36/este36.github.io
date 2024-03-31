function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
    }
}

const Standards = [
    "Stella By Starlight",
    "Round Midnight",
    "Confirmation",
    "Oleo",
    "Body And Soul",
    "Boplicity",
    "Milestones",
    "Stablemates",
    "Falling Grace",
    "There Will Never Be Another You",
    "Waves",
    "I'll Be Seeing You",
    "Out Of Nowhere",
    "Everything I Love",
    "Autumn Leaves",
    "These Foolish Things",
    "It Could Happen To You",
    "500 Miles High",
    "The Days Of Wine And Roses",
    "Au Privave",
    "All The Things You Are",
    "How Insensitive",
    "Beatrice",
    "Skylark",
    "Solar",
    "Windows",
    "Four",
    "Blue In Green",
    "Nardis",
    "Tenor Madness",
    "Someday My Prince Will Come",
    "Misty",
    "Conception",
    "Alone Together",
    "Billie's Bounce",
    "Joy Spring",
    "Blues For Alice",
    "Lady Bird",
    "My One And Only Love",
    "My Funny Valentine",
    "Bluesette",
    "Tune Up",
    "Cherokee",
    "Have You Met Miss Jones",
    "Straight No Chaser",
    "Giants Steps",
    "Caravan",
    "Ask Me Know",
    "Triste",
    "Footprints"
];


const newList = [...Standards];
shuffleArray(newList);

const ulElement = document.getElementById('listeStandards');
var i = 1;

newList.forEach(item => {
    const liElement = document.createElement('li');
    liElement.textContent = i + " : " +item;
    ulElement.appendChild(liElement);
    i++;
});
