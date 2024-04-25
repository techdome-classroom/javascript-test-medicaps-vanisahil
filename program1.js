function longestSubstring(s) {
    let longest = 0; 
    let start = 0;
    const charIndexMap = new Map(); 
    
   
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        
        
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            
            start = charIndexMap.get(currentChar) + 1;
        }
        
       
        charIndexMap.set(currentChar, end);
        
        // Update the length of the longest substring if necessary
        longest = Math.max(longest, end - start + 1);
    }
    
    return longest;
}

module.exports = { longestSubstring };


