import wordsList from '../../constants/wordsList.json';

const isUnique = (str) => {
    return new Set(str).size === str.length;
}


export const getGameWord = () =>{
    var check=1;
    var originalWord = "";
    while(check===1) {
        originalWord = wordsList[Math.floor(Math.random()*wordsList.length)];
        if(isUnique(originalWord))
            check=0;
        else
            check=1;
        console.log("thought of ",originalWord);
    }
    return originalWord
}