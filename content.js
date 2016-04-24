var thePilktionary  =
{
    "years ago": "ages ago",
    "long ago": "ages ago",
    "hairy": "'airy",
    "hello": "alrigh'",
    "etc": "an' tha'",
    "etc.": "an' tha'",
    "Mad": "Annoyed",
    "Old": "Antiduian",
    "Hermaphrodite": "Aphrodite",
    "exploding": "Atomic",
    "Babylon": "Baba",
    "worse": "Badder",
    "tornado": "Bad Wind",
    "ptosis": "Big eyelids",
    "expendable": "Binable",
    "manliness": "Blokage",
    "bon bons": "Bom boms",
    "Roswell": "Boswell",
    "head skull": "Brain case",
    "skull": "Brain case",
    "enema colonic irrigation": "Bum tube",
    "bundled in": "Bungled in",
    "put on": "Bung on",
    "chaise longues": "Chaise londges",
    "chaise longue": "Chaise londge",
    "bad beating": "right good clattering",
    "Clive Owen": "Clive Warren",
    "cauliflower": "Colly",
    "came: He had helmet on but his head come off.": "Come",
    "consistency": "Condensity",
    "crops": "Croppage",
    "farming": "Cropping",
    "cyclops": "Cyclop",
    "subpar": "demicky",
    "dictionary": "a book with words in",
    "Descartes": "Diskartis",
    "drawn": "drawned",
    "swearing": "effin' 'n' jeffin'",
    "profanity": "effin' 'n' jeffin'",
    "Egyptian man": "Egypt bloke",
    "Elephantiasis": "Elephantitis",
    "facial": "face rub",
    "messing around": "faffin'",
    "unhappy": "Fed up",
    "rubbish": "Flumpf",
    "food": "Foodage",
    "disabled person": "Forrest Gump type",
    "retarded person": "Forrest Gump type",
    "fear": "Frightenedness",
    "frozen": "froze",
    "problems": "Fuckerage",
    "problem": "Fuckerage",
    "group of animals": "Gang",
    "filth": "Glunge",
    "spitting": "Gozzin'",
    "grip": "Grippage",
    "have sex": "havin' it away",
    "arthropod": "Insect",
    "isn't": "In't",
    "Jamaican man": "Jamaican fella",
    "tricked": "Kidded",
    "penis": "Knob",
    "dick": "Knob'ead",
    "asshole": "Knob'ead",
    "hung out": "Knockin' about",
    "hung around": "Knockin' about",
    "wasabi": "Kusabi",
    "lackadaisical": "Laxidaisical",
    "lax": "Laxidaisical",
    "teach": "Learn",
    "limp": "Limsy",
    "flimsy": "Limsy",
    "homosexual": "Little gay fella",
    "gay man": "Little gay fella",
    "mother": "Mam",
    "grandmother": "Mam's mam",
    "crazy": "Mentalist",
    "minimalistic": "Miminalistic",
    "chimpanzee": "Monkey",
    "ape": "Monkey",
    "mongooses": "Mongs",
    "mongoose": "Mong",
    "slumped": "Moped over",
    "slouched": "Moped over",
    "an exorcist": "Mr. Exorcist",
    "drink quickly": "Neck",
    "brother or sister": "Our kid",
    "alpaca": "Palaco",
    "natives of Papua New Guinea: these Papa People right...": "Papa people",
    "pet peeve": "Pet hate",
    "crumpet": "Pikelet",
    "ear plugs": "Plunge things",
    "broach": "Posh badge",
    "causing problems": "Probleming",
    "raving about": "Ravin' about",
    "reminded": "Remembered",
    "replenishing": "Replemishing",
    "rummaging": "Rummanging",
    "cry": "Scrike",
    "scruffy": "Scruffily",
    "shook": "Shuck",
    "loads": "Six billion",
    "school": "Skewl",
    "slug matter": "Sluggage",
    "sneaky untrustworthy: there's always a little snidey one.": "Snidey",
    "squeezed": "Squozed",
    "Karl's girlfriend": "Suzanne",
    "Swedish woman": "Swede woman",
    "tension": "Tenseness",
    "testosterone": "Testerone",
    "testicles": "Testi",
    "Congo": "The Conga",
    "Wild West": "The Western",
    "these": "Them",
    "those": "Them",
    "theft": "Thetht",
    "robbery": "Thetht",
    "stingy": "Tight",
    "hit": "Thump",
    'punch': "Thump",
    "Knock": "Tink",
    "tongue": "Tong",
    "tupperware": "Tubberware",
    "Tea": "Twinings",
    "ugly": "Uglely",
    "uncomfortable": "Uncomfy",
    "promoted": "Uppered",
    "whatnot": "What have yer",
    "moaning": "Whinging",
    "whip out": "Whop",
    "carefree": "Willynillily",
    "written": "Wroted",
    "Years ago": "ages ago"       
}
var htmlCollToArr           = (coll) => [].slice.call(coll); //converts htmlCollectiondocument to array
var isTextNode              = (node) => node.nodeType === 3 && node.nodeValue.trim();



String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.lowercaseFirstLetter = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}
var numberOfReplacementsPerformed = 0;
$(function() {
  var elements = htmlCollToArr(document.getElementsByTagName('*'));
  elements.map( (element) => {
    htmlCollToArr(element.childNodes)
      .filter(isTextNode)
      .map( (node) => {
        let text = node.nodeValue;
        let replacedText = text;
        Object.keys(thePilktionary).map( (key) => {
           let re = new RegExp('(^|[ ])('+key+')($|[.!?\\- ])' ,"gi");
           replacedText = replacedText.replace(re, function ( match, spaceBefore, text, spaceAfter ) {
             return spaceBefore + ( match === match.toLowerCase() ? thePilktionary[key].lowercaseFirstLetter() :  thePilktionary[key].capitalizeFirstLetter() ) + spaceAfter;
           });
        })
        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
          numberOfReplacementsPerformed++;
        }
       })
      })
  console.info("Replaced ", numberOfReplacementsPerformed, " words");
});
