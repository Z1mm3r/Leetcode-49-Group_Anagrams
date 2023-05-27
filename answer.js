var groupAnagrams = function(strs) {

    let hash = {};

    //We want to sort the letters to create unique keys.
    //Any words that have the same keys are anagrams. 
    for(let i = 0; i < strs.length; i++){
        //Get string
        let key = strs[i]
        //Split into array so we can sort
        let keyArr = key.split("");
        //Sort Array
        key = keyArr.sort().toString();
        //Does our table have an entry for this key?
        //If not, create it.
        if (hash[key] == undefined){
            hash[key] = [strs[i]];
        }
        //If it exists, add new entry
        else{
            hash[key].push(strs[i]);
        }
    }
    //Get all keys
    keys = Object.keys(hash);
    output = [];
    //Output entries for each key
    for( let i = 0; i < keys.length; i++){
        output[i] = hash[keys[i]];
    }
    return output;

};
