// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `" The best way to find yourself is to lose yourself in the service of others. "`,
    person: ` Mahatma Gandhi`
}, {
    quote: `" If you want to live a happy life, tie it to a goal, not to people ot things. "`,
    person: ` Albert Einstein`
},
{
    quote: `" At his best, man is the noblest of all animals; seperated from law justice he is the worst. "`,
    person: ` Aristotle`
},
{
    quote: `" your time is limited, so don't waste it living someoone else's life. "`,
    person: ` Steve Jobs`
},
{
    quote: `" Tell me and I forget. Teach me and I remember. Involve me and I learn. "`,
    person: ` Benjamin Franklin`
},
{
    quote: `" It does not matter how slowly you go as long as you do not stop. "`,
    person: ` Confucius`
},
{
    quote: `" Our lives begins to end the day we become silient about things that matter."`,
    person: ` Martin Lutter King, Jr`
},
{
    quote: `" Education is the most powerful weapon which you can use to change the world"`,
    person: ` Nelson Mandela`
},
{
    quote: `" There is always light if only we're brave enough to see it"`,
    person: ` Amanda Gorman`
},
{
    quote: `" If you want to lift yourself up, lift up someone else."`,
    person: ` Booker T. Washington`
},
{
    quote: `" I have learnt not to allow rejection to move me."`,
    person: ` Cicely Tyson`
},
{
    quote: `" I'm just living daily and I thank God for every day I have"`,
    person: ` Daniel Jacobs`
},
{
    quote: `" God meets daily needs daily. Not weekly or annually. He will give you what you need when it s needed"`,
    person: ` Max Lucado`
},
{
    quote: `" The secret of your future is hidden in your daily routine."`,
    person: ` Mike Murdock`
},
{
    quote: `" Change your thoughts, and you change your world."`,
    person: ` Norman Vincent Peale`
},
{
    quote: `" If you cannot do great things, do small things in a great way."`,
    person: ` Napoleon Hill`
},
{
    quote: `" If opportunity doesn't knock, build a door."`,
    person: ` Milton Berle`
},
{
    quote: `" It always seems impossible until it's done."`,
    person: ` Nelson Mandela`
},
{
    quote: `" Success is a journey not a destination."`,
    person: ` Ben Sweetland`
}
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})