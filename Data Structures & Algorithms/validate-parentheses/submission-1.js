class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        var stack = [];

        for(var i=0;i<s.length;i++){
            if(s[i] == '[' || s[i] == '(' || s[i] == '{'){
                stack.unshift(s[i]);
            }else{
                if((s[i] == ']' && stack[0] == '[') || (s[i] == ')' && stack[0] == '(') || (s[i] == '}' && stack[0] == '{')){
                stack.shift();
                }else{
                stack.unshift(s[i]);
                }
            }
        }

        if(stack.length == 0){
            return true;
        }else{
            return false;
        }
    }
}
