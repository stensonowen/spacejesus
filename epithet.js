// Musky Epithets
// AGPL

const QUERY = /Elon Musk/i; // case insensitive

// epithets to put between "elon" and "musk"
const ALIASES = [
    "Space Jesus",
    "Ice Cream > Unions",
    "You are a Pedophile",
    "420blazeit",
    "SEC ya later",
    "Aspiring Koch Brother",
    "Subways but for Rich People",
    "Subsidy Trust Fund",
    "Ascetic Aesthetic",
    "Safety Third",
    "Real Life Disney Villain",
    "Loud Rich Teenager",
    "Gavin Belson LARPer",
    "Capitalism's Cautionary Tale",
    "Future Underwhelming Book Report Protagonist",
    "Twitter Telenovela Anti-Hero",
    "Don't Trust Journalists",
    "Scrooge in a Past Life",
    "lol OSHA",
    "Ribs Grow Back",
    "Scrapped Iron Man Origin Story",
    "Billionaire Who Solicits Volunteers",
    "An Immature Man Child",
];

function get_name() {
    let index = Math.floor( Math.random() * ALIASES.length );
    return ALIASES[index];
}


// MAIN

document.body.innerHTML = function(html) {
    let cont = true;
    while (cont) {
        cont = false;
        html = html.replace(QUERY, function(old) {
            cont = true;
            // preserve capitalization of name
            let elon = old.substring(4, -1);
            let musk = old.substring(5);
            return elon + ' "' + get_name() + '" ' + musk;
        });
    }
    return html;
}(document.body.innerHTML);
