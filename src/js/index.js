var sample_json = [
    {
        "title": "title_1",
        "description":"blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
    },
    {
        "title": "title_2",
        "description":"blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
    }
]

var tips;
tips = document.getElementById('tips');

var card;
card = document.createElement('dev');

for(var i = 0; i < sample_json.length; i++) {
    card = document.createElement('div'); 
    card.setAttribute('class', 'card');

    tips.appendChild(card);
    console.log(card);
}