var sample_json = [
    {
        'title':  'TITLE_1',
        'desicription': 'blahblahblah...',
        'tags': ['tag_1', 'tag_2', 'tag_3']
    }
];

var tips;
tips = document.getElementById('tips');

var title_elem;
title_elem = document.createElement('h2');
var title;
title = document.createTextNode(sample_json[0].title);

var desicription_elem;
desicription_elem= document.createElement('p');
var desicription;
desicription = document.createTextNode(sample_json[0].desicription);

var tags_elem;
tags_elem = document.createElement('p');
var tags;
tags = document.createTextNode(sample_json[0].tags[0]);

tips.appendChild(title_elem);
title_elem.appendChild(title);

tips.appendChild(desicription_elem);
desicription_elem.appendChild(desicription);

tips.appendChild(tags_elem);
tags_elem.appendChild(tags);
