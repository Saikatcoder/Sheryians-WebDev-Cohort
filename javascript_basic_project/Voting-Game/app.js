let players = ["Ali", "Sara", "Ahmed", "Zara"]
let items = ["Apple", "Banana", "Mango", "Orange","Strawberry","Lemon","Pineapple"]


function randomItem(){ 
  return items[Math.floor(Math.random()* items.length)];
}

let oddItem;
let commonItem = randomItem(); // because common item are same for 3 user
do {
    oddItem = randomItem();  // its for odd player 
} while (oddItem === commonItem);


function randomPlayerIndex(){
    return  Math.floor(Math.random()* players.length);

}

let oddPlayerIndex = randomPlayerIndex();
let playerItems = {};

players.forEach((player,index)=>{
    playerItems[player] = index === oddPlayerIndex ? oddItem : commonItem;
});
console.log("Assigned Items:", playerItems);


let votes = {};

// Har player ke liye initial votes 0 set karo
players.forEach(player => votes[player] = 0);

players.forEach(voter => {
    let voteFor;
    do {
        voteFor = prompt(`${voter}, aap kisko vote dena chahte hain? (${players.join(", ")})`);
    } while (!players.includes(voteFor) || voteFor === voter); // Invalid vote ko reject karo

    votes[voteFor]++; // Vote count badhayein
    console.log(`${voter} ne vote diya ${voteFor} ko`);
});

// Winner decide karo
let mostVotedPlayer = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
console.log("\nFinal Votes:", votes);
console.log(`Most Voted Player: ${mostVotedPlayer}`);