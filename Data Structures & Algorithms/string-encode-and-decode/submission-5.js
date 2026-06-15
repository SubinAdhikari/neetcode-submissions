class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var encodedStr = [];
        for(var i=0;i<strs.length;i++){
            if(i<strs.length-1){
                encodedStr += strs[i]+'😎';
            }else{
                encodedStr += strs[i];
            }
        }
        if(strs.length <=0){
            return '😂'
        }        
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str == '😂' ? [] : str.split('😎');
    }
}
