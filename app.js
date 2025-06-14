// let url = "https://quote-garden.onrender.com/api/v3/quotes/random";
// let btn = document.getElementById("btn");

// btn.addEventListener("click", async() => {
//     let quote = await getQuote();
//     // console.log(quote[0]);
//     // console.log(quote[1]);

//     let qt = document.querySelector("#quote");
//     qt.innerHTML = '"' + quote[0] + '"';

//     let ath = document.querySelector("#author");
//     ath.innerText = "- " + quote[1];
// });

// async function getQuote() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();

//         return [data.data[0].quoteText, data.data[0].quoteAuthor];
//     } catch (e) {
//         console.log("error - ", e);
//     }
// }
let quotes = [
  ["The best way to get started is to quit talking and begin doing.", "Walt Disney"],
  ["Don’t let yesterday take up too much of today.", "Will Rogers"],
  ["It’s not whether you get knocked down, it’s whether you get up.", "Vince Lombardi"],
  ["If you are working on something exciting, it will keep you motivated.", "Steve Jobs"],
  ["Success is not in what you have, but who you are.", "Bo Bennett"],
  ["The harder you work for something, the greater you’ll feel when you achieve it.", "Unknown"],
  ["Don’t watch the clock; do what it does. Keep going.", "Sam Levenson"],
  ["Great things never come from comfort zones.", "Unknown"],
  ["Push yourself, because no one else is going to do it for you.", "Unknown"],
  ["Success doesn’t just find you. You have to go out and get it.", "Unknown"],
  ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
  ["Dream it. Wish it. Do it.", "Unknown"],
  ["Sometimes later becomes never. Do it now.", "Unknown"],
  ["Little things make big days.", "Unknown"],
  ["Don’t stop when you’re tired. Stop when you’re done.", "Marilyn Monroe"],
  ["Do something today that your future self will thank you for.", "Unknown"],
  ["It always seems impossible until it’s done.", "Nelson Mandela"],
  ["Don’t wait for opportunity. Create it.", "Unknown"],
  ["Be stronger than your excuses.", "Unknown"],
  ["Wake up with determination. Go to bed with satisfaction.", "Unknown"],
  ["The key to success is to focus on goals, not obstacles.", "Unknown"],
  ["Believe you can and you’re halfway there.", "Theodore Roosevelt"],
  ["Your limitation—it’s only your imagination.", "Unknown"],
  ["Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", "Unknown"],
  ["The harder the battle, the sweeter the victory.", "Les Brown"],
  ["Doubt kills more dreams than failure ever will.", "Suzy Kassem"],
  ["A river cuts through rock not because of its power, but its persistence.", "James N. Watkins"],
  ["Opportunities don’t happen, you create them.", "Chris Grosser"],
  ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
  ["Everything you’ve ever wanted is on the other side of fear.", "George Addair"]
];

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = `"${quotes[index][0]}"`;
  document.getElementById("author").innerText = `- ${quotes[index][1]}`;
});
