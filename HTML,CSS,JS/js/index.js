//Lab 17 - JS Functions
/*
const movies = [
    { title: "Jaws", director: "Steven Spielberg", year: "1975" },
    { title: "Star Wars", director: "George Lucas", year: "1977" },
    {
      title: "Avengers: Infinity War",
      director: "Anthony and Joe Russo",
      year: "2018"
    },
    { title: "Top Gun", director: "Tony Scott", year: "1986" },
    { title: "Justice League", director: "Zack Snyder", year: "2017" }
];
  
// Part 1 - Create a function to find a movie and output it's detail
function findMovie(movieTitle) {
    for (const movie of movies) {
        if (movie.title === movieTitle) {
            console.log(`Found: ${movie.title}, directed by ${movie.director}, released in ${movie.year}`);
        }
        console.log(movie);
    }
}

findMovie("Star Wars");
var movie = "Thor: Ragnarok";
console.log(movie);
findMovie(movie);

// Part 2 = Create a function to return a movie object
function returnMovie(movieTitle) {
    for (const movie of movies) {
        if (movie.title === movieTitle) {
            return movie;
        }
    }
    return "Movie not found";
}

let myMovie = returnMovie("Avengers: Infinity War");

console.log(myMovie);

if (typeof myMovie === "object") {
    console.log(`Found: ${myMovie.title}, directed by ${myMovie.director}, released in ${myMovie.year}`);
}

let myOtherMovie = returnMovie("Thor: Ragnarok");

console.log(myOtherMovie);

function myMovieDetails(anyMovie) {
    if (typeof anyMovie === "object") {
        return `Found: ${anyMovie.title}, directed by ${anyMovie.director}, released in ${anyMovie.year}`;
    }
    return anyMovie;
}

console.log(myMovieDetails(myOtherMovie));

console.log(myMovieDetails(returnMovie("Jaws")));
*/

//Lab 18 - JS Maps
/*
const hanSolo = new Map();
hanSolo.set("vehicle", "Millennium Falcon");
hanSolo.set("bff", "Chewbacca");
hanSolo.set("sweetheart", "Leia");

console.log("Size of hanSolo Map:", hanSolo.size);
console.log("Han Solo's vehicle:", hanSolo.get("vehicle"));
console.log("Does Han Solo have a sweetheart?", hanSolo.has("sweetheart"));
console.log("Is Han Solo a Jedi?", hanSolo.has("Jedi"));

hanSolo.set("son", "Ben");
console.log("Han Solo's son:", hanSolo.get("son"));

console.log("Iterating over hanSolo map:");
for (const [key, value] of hanSolo) {
    console.log(`${key}: ${value}`);
}

hanSolo.set("bff", "Luke");
console.log("Updated hanSolo (bff changed to Luke):", hanSolo);

hanSolo.delete("son");
console.log("After deleting 'son':", hanSolo);

hanSolo.clear();
console.log("After clearing the Map:", hanSolo);

let classRoom = [
    { name: "Angela", id: 1236, courseCode: "JS1" },
    { name: "Harry", id: 1237, courseCode: "JS1" }
]

for (let i = 0; i < classRoom.length; i++) {
    for (let key in classRoom[i]) {
        console.log(key + ": " + classRoom[i][key]);
    }
}
*/

//John and Susan are twins.
//They are always arguing over who is the better twin.
//John excels at maths, Susan excels at history.
//So really, the "better" twin depends on what we are comparing.
//Using objects and arrow functions, produce script that makes it easy to report who is the better twin depending on whether the criteria is history or physics.

//V1
/*const twins = {
    John: { maths: 95, history: 70, physics: 85 },
    Susan: { maths: 80, history: 95, physics: 85 }
};

const betterTwin = (subject) => {
    if (!(subject in twins.John) || !(subject in twins.Susan)) {
        return `Invalid subject: ${subject}. Choose between maths, history, or physics.`;
    }

    if (twins.John[subject] > twins.Susan[subject]) {
        return `John is better at ${subject}.`;
    } else if (twins.Susan[subject] > twins.John[subject]) {
        return `Susan is better at ${subject}.`;
    } else {
        return `John and Susan are equally good at ${subject}.`;
    }
};

console.log(betterTwin("maths"));
console.log(betterTwin("history"));
console.log(betterTwin("physics"));
console.log(betterTwin("geography"));*/

//V2
/*const twins = {
    John: { maths: 95, history: 70, physics: 85 },
    Susan: { maths: 80, history: 95, physics: 85 }
};

const isBetter = (johnScore, susanScore) => 
    johnScore > susanScore ? "John is better" : susanScore > johnScore ? "Susan is better" : "Equally as good";

const betterTwin = (subject) =>
    subject in twins.John && subject in twins.Susan
        ? `${isBetter(twins.John[subject], twins.Susan[subject])} at ${subject}.`
        : `Invalid subject: ${subject}. Choose between maths, history, or physics.`;

console.log(betterTwin("maths"));
console.log(betterTwin("history"));
console.log(betterTwin("physics"));
console.log(betterTwin("geography"));*/

/*let power = 200;
let myCar = {
    speed: 0,
    power,
    accelerate() {
        this.speed = this.power / 2;
    },
    toString() {
        return `My car is moving at ${this.speed} mph.`;
    }
}
console.log(myCar.speed);
myCar.accelerate();
console.log(myCar.toString());*/

//Change the text of an HTML element
/*let x = document.getElementById("demo");
console.log(x);
x.innerHTML = "More Interesting";*/

//Lab 21 - JS Events
/*const blueToRed = () => {
    document.getElementById("blueParagraph").style.color = "red";
};

const greenToPink = () => {
    document.getElementById("greenParagraph").style.backgroundColor = "pink";
};

const tnrToArial = () => {
    document.getElementById("tnrParagraph").style.fontFamily = "Arial, sans-serif";
};

document.getElementById("textColour").addEventListener("click", blueToRed);
document.getElementById("bgColour").addEventListener("click", greenToPink);
document.getElementById("fonts").addEventListener("click", tnrToArial);

const mouseOver = (event) => {
    event.target.style.backgroundColor = "limegreen";

    if (!event.target.textContent.includes("background")) {
        event.target.textContent += " I have had my background colour changed on mouse over";
    } else {
        event.target.textContent = event.target.textContent.replace("out", "over");
    }
};

document.getElementById("tnrParagraph").addEventListener("mouseover", mouseOver);

const mouseOut = (event) => {
    event.target.style.backgroundColor = "yellow";

    if (!event.target.textContent.includes("background")) {
        event.target.textContent += " I have had my background colour changed on mouse out";
    } else {
        event.target.textContent = event.target.textContent.replace("over", "out");
    }
};

document.getElementById("tnrParagraph").addEventListener("mouseout", mouseOut);

const elementClick = (event) => {
    event.target.style.backgroundColor = "white";
    event.target.textContent = "I have no event listeners attached to me now";

    event.target.removeEventListener("click", elementClick);
    event.target.removeEventListener("mouseover", mouseOver);
    event.target.removeEventListener("mouseout", mouseOut);

    document.getElementById("fonts").removeEventListener("click", tnrToArial);

    if (event.target.id === "tnrParagraph") {
        document.getElementById("blueParagraph").textContent = "Event listeners enabled";
        document.getElementById("blueParagraph").addEventListener("click", elementClick);
        document.getElementById("blueParagraph").addEventListener("mouseover", mouseOver);
        document.getElementById("blueParagraph").addEventListener("mouseout", mouseOut);
    } else {
        document.getElementById("tnrParagraph").textContent = "Event listeners enabled";
        document.getElementById("tnrParagraph").addEventListener("click", elementClick);
        document.getElementById("tnrParagraph").addEventListener("mouseover", mouseOver);
        document.getElementById("tnrParagraph").addEventListener("mouseout", mouseOut);
    }
};

document.getElementById("tnrParagraph").addEventListener("click", elementClick);*/

function area(r) {
    return Math.PI * Math.pow(r, 2);
}

function circumference(r) {
    return 2 * Math.PI * r;
}

console.log(area(5));
console.log(circumference(5));