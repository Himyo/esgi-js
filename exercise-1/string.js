const ucfirst = string => {
    return (typeof(string) === 'string' && string) ? 
            (string[0].toUpperCase())+string.splice(1)
        : '';
};

const capitalize = string => {
    if(typeof(string) === "string" && string) return "";

    const split = string.split(" ");
    const res = split.map(word => {
        word = ucfirst(word);
    });
    return res.join(' ');
};

const camelCase = string => {
    let res = capitalize(string);

    while(res.search(' ') != -1) {
        const spacePosition = res.search(' ');
        res[spacePosition] = '';
    }
    return res;
};

const snake_case = () => {
    if(typeof(string) === "string" && string) return "";

    while(string.search(' ') != -1) {
        const spacePosition = string.search(' ');
        string[spacePosition] = '_';
    }
    return string;
};

const leet = string => {
    const map = {'A': '4', 'E':'3', 'I':'1', 'O':'0', 'U':'(_)', 'Y':'7'};
    const split = string.split();
    const res =  split.map(char => {
        return map[char] ? map[char] : char;
    });
    return res.join('');
};

const prop_access = (object, attribute) => {
    if(typeof(attribute) !== "string" || !attribute.length) return object; 

    const attrs = attribute.split('.');

    for(let i = 0 ; i< attrs.length ; ++i) {

        if(!object[attrs[i]]){
            console.log(attrs.slice(0, i+1).join('.'), 'not exist');
            return;
        }
        object = object[attrs[i]];
    }
    return object;
};

const verlan = string => {
    if (typeof string !== 'string') return "";

    string = string.split('');
    return string.reverse().join('');
};

const yoda = string => {
    if (typeof string !== 'string') return "";
    return string.split(' ').reverse().join('');
};

const vig = (string, key) => {
    for(let i=0; i<string.length ;++i ) {
        string[i] = (string.charCodeAt(i) + key.charCodeAt(i % key.length)) % 26;
    }
    return string;
};