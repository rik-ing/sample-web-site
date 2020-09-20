var sample_json = [
    {
        "title": "title_1",
        "description":"blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
    },
    {
        "title": "title_2",
        "description":"blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
    },
    {
        "title": "title_3",
        "description":"blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
    },
    {
        "title": "title_4",
        "description":"blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
    },
    {
        "title": "title_5",
        "description":"blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
    }
]

var tips;
tips = document.getElementById('tips');

var content;

var card;
var title;
var title_elem;
var title_elem2;
var title_header;
var description;
var description_text;

for(var i = 0; i < sample_json.length; i++) {
    card = document.createElement('div'); 
    card.setAttribute('class', 'card');

    content = document.createElement('div');
    content.setAttribute('class', 'content');
    title = document.createElement('div');
    title.setAttribute('class', 'title');
    
    title_elem = document.createElement('h2');
    title_elem2 = document.createElement('strong');
    title_header = document.createTextNode(sample_json[i].title);

    description = document.createElement('div');
    description.setAttribute('class', 'description');
    description_text = document.createTextNode(sample_json[i].description);
    tips.appendChild(card);
    
    card.appendChild(content);
    content.appendChild(title);
    title.appendChild(title_elem);
    title_elem.appendChild(title_header);

    content.appendChild(description);
    description.appendChild(description_text);
}