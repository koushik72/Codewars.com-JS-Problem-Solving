var capitals = function (word) {
    // Write your code here
    var re = /[A-Z]/g;
    var match, result = [];
    while((match = re.exec(word)) != null) {
        result.push(match.index);
    }
    return result;
};


console.log(capitals("CodeWars"));
