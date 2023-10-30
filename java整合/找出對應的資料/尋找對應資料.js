//暴力法 
var longestPalindrome = function(s){
    for (let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length;j++){
            let substring=s.substring(i,j);
            checkPalindrome(substring);
        }
    } 
};
function checkPalindrome(s){
    return;
}


var longestPalindrome = function(s){
    let result ="";
    //以單一字元為中心，往外擴展去展去找到對稱的子字串
    for(let i=0;i<s.length;i++){
        let leftIndex=i;
        let rightIndex=i;
        while(s[leftIndex]!==undefined && s[rightIndex]!==undefined && s[leftIndex]===s[rightIndex]){
             leftIndex --;
             rightIndex ++;
        }
        let solution =s.substring(leftIndex+1,rightIndex);
        if(solution.length>result.length){
            result=solution;
        }
    }

    //以雙字元為中心，往外擴展去展去找到對稱的子字串
    for(let i=0;i<s.length-1;i++){
        let leftIndex=i;
        let rightIndex=i;
        while(s[leftIndex]!==undefined && s[rightIndex]!==undefined && s[leftIndex]===s[rightIndex]){
             leftIndex --;
             rightIndex ++;
        }
        let solution =s.substring(leftIndex+1,rightIndex);
        if(solution.length>result.length){
            result=solution;
        }
    }

}


