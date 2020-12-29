let names = [
    'Charlie',
    'Charlemagne',
    'Blue',
    'Bluesaloser',
];

let statements = [
    'You\'re an amazing friend!'
];

function get_random_from_list(list){
    return list[Math.floor(list.length * Math.random())];
}

function get_random_sentence(){
    return get_random_from_list(names) + ', ' + get_random_from_list(statements);
}

function set_div(){
    document.getElementById('knockout_text').innerText = get_random_sentence();
}

document.addEventListener("click", set_div);
document.addEventListener("dblclick", set_div);

set_div();
