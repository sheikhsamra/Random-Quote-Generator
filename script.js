// Random Quotes Generator
let quotes =  [
    {
        quote : "To live is the rarest thing in the world. Most people exist, that is all",
        author : " Oscar Wilde ",
    },
    {
        quote : "It is never too late to be what you might have been.",
        author : " George Eliot ",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson ",
    },
    {
        quote: "Pain is inevitable. Suffering is optional",
        author: "Haruki Murakami ",
    },
    {
        quote: "Be kind, for everyone you meet is fighting a hard battle.",
        author: " Plato ",
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
    },
    {
        quote: "The only thing we have to fear is fear itself",
        author: " Franklin D. Roosevelt ",
    },
    {
        quote: "Not all those who wander are lost.",
        author: " J.R.R. Tolkien ",
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: " Friedrich Nietzsche ",
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart,",
        author: " Helen Keller ",
    },
    {
        quote: "Do not go where the path may lead; go instead where there is no path and leave a trail",
        author: " Ralph Waldo Emerson ",
    },
    {
        quote: "To keep your balance, you must keep moving",
        author: " Albert Einstein ",
    },
]

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = `"${quotes[randomIndex].quote}"`;
  document.getElementById("author").textContent = `— ${quotes[randomIndex].author}`;
}