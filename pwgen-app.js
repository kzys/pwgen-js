var pwgen = null;

function setup() {
    pwgen = new PWGen();
    generate();
}

function generate() {
    pwgen.maxLength = new Number($F('length'));
    pwgen.includeCapitalLetter = $F('capital');
    pwgen.includeNumber = $F('number');
    
    var results = '';
    for (var i = 0; i < 5; i++) {
        results += (pwgen.generate() + ' ');
    }
    
    $('password').innerHTML = results;
}
