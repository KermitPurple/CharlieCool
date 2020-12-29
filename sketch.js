let names = [
    'Charlie',
    'Charlemagne',
    'Blue',
    'Bluesaloser',
];

let statements = [
    'you\'re an amazing friend!',
    'we love you so much!',
    'you are master of funny',
    'you are really good at making everyone smile',
    'you\'ve helped sam through so much',
    'you are really nice even when I act like an asshole',
    '<3',
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
document.onkeypress = (e) =>{
    if(e.keyCode == 32){
        set_div();
    }
}

set_div();
