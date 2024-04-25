function longestSubstring(s) {
    let longest = 0; 
    let start = 0; // Starting index of the current substring
    const charIndexMap = new Map(); // Map to store the index of each character
    
    // Loop through each character in the string
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        
        // If the character is already in the map and its index is after the start index of the current substring
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            // Update the start index of the current substring to the index of the repeating character + 1
            start = charIndexMap.get(currentChar) + 1;
        }
        
        // Update the index of the current character in the map
        charIndexMap.set(currentChar, end);
        
        // Update the length of the longest substring if necessary
        longest = Math.max(longest, end - start + 1);
    }
    
    return longest;
}

module.exports = { longestSubstring };


