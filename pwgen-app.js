var pwgen = null;

function $(id) {
    return document.getElementById(id);
}

function $F(id) {
    var el = $(id);
    if (el.type === 'checkbox') {
        return el.checked;
    }
    return el.value;
}

function setup() {
    pwgen = new PWGen();
    generate();
}

function generate() {
    pwgen.maxLength = Number($F('length'));
    pwgen.includeCapitalLetter = $F('capital');
    pwgen.includeNumber = $F('number');

    var results = '';
    for (var i = 0; i < 5; i++) {
        results += (pwgen.generate() + ' ');
    }

    $('password').innerHTML = results;
}
