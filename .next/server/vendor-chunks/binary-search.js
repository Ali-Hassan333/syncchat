"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/binary-search";
exports.ids = ["vendor-chunks/binary-search"];
exports.modules = {

/***/ "(rsc)/./node_modules/binary-search/index.js":
/*!*********************************************!*\
  !*** ./node_modules/binary-search/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nmodule.exports = function(haystack, needle, comparator, low, high) {\n    var mid, cmp;\n    if (low === undefined) low = 0;\n    else {\n        low = low | 0;\n        if (low < 0 || low >= haystack.length) throw new RangeError(\"invalid lower bound\");\n    }\n    if (high === undefined) high = haystack.length - 1;\n    else {\n        high = high | 0;\n        if (high < low || high >= haystack.length) throw new RangeError(\"invalid upper bound\");\n    }\n    while(low <= high){\n        // The naive `low + high >>> 1` could fail for array lengths > 2**31\n        // because `>>>` converts its operands to int32. `low + (high - low >>> 1)`\n        // works for array lengths <= 2**32-1 which is also Javascript's max array\n        // length.\n        mid = low + (high - low >>> 1);\n        cmp = +comparator(haystack[mid], needle, mid, haystack);\n        // Too low.\n        if (cmp < 0.0) low = mid + 1;\n        else if (cmp > 0.0) high = mid - 1;\n        else return mid;\n    }\n    // Key not found.\n    return ~low;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYmluYXJ5LXNlYXJjaC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxHQUFHLEVBQUVDLElBQUk7SUFDL0QsSUFBSUMsS0FBS0M7SUFFVCxJQUFHSCxRQUFRSSxXQUNUSixNQUFNO1NBRUg7UUFDSEEsTUFBTUEsTUFBSTtRQUNWLElBQUdBLE1BQU0sS0FBS0EsT0FBT0gsU0FBU1EsTUFBTSxFQUNsQyxNQUFNLElBQUlDLFdBQVc7SUFDekI7SUFFQSxJQUFHTCxTQUFTRyxXQUNWSCxPQUFPSixTQUFTUSxNQUFNLEdBQUc7U0FFdEI7UUFDSEosT0FBT0EsT0FBSztRQUNaLElBQUdBLE9BQU9ELE9BQU9DLFFBQVFKLFNBQVNRLE1BQU0sRUFDdEMsTUFBTSxJQUFJQyxXQUFXO0lBQ3pCO0lBRUEsTUFBTU4sT0FBT0MsS0FBTTtRQUNqQixvRUFBb0U7UUFDcEUsMkVBQTJFO1FBQzNFLDBFQUEwRTtRQUMxRSxVQUFVO1FBQ1ZDLE1BQU1GLE1BQU8sUUFBUUEsUUFBUztRQUM5QkcsTUFBTSxDQUFDSixXQUFXRixRQUFRLENBQUNLLElBQUksRUFBRUosUUFBUUksS0FBS0w7UUFFOUMsV0FBVztRQUNYLElBQUdNLE1BQU0sS0FDUEgsTUFBT0UsTUFBTTthQUdWLElBQUdDLE1BQU0sS0FDWkYsT0FBT0MsTUFBTTthQUliLE9BQU9BO0lBQ1g7SUFFQSxpQkFBaUI7SUFDakIsT0FBTyxDQUFDRjtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3luY2NoYXQvLi9ub2RlX21vZHVsZXMvYmluYXJ5LXNlYXJjaC9pbmRleC5qcz9hZmJmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGF5c3RhY2ssIG5lZWRsZSwgY29tcGFyYXRvciwgbG93LCBoaWdoKSB7XG4gIHZhciBtaWQsIGNtcDtcblxuICBpZihsb3cgPT09IHVuZGVmaW5lZClcbiAgICBsb3cgPSAwO1xuXG4gIGVsc2Uge1xuICAgIGxvdyA9IGxvd3wwO1xuICAgIGlmKGxvdyA8IDAgfHwgbG93ID49IGhheXN0YWNrLmxlbmd0aClcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiaW52YWxpZCBsb3dlciBib3VuZFwiKTtcbiAgfVxuXG4gIGlmKGhpZ2ggPT09IHVuZGVmaW5lZClcbiAgICBoaWdoID0gaGF5c3RhY2subGVuZ3RoIC0gMTtcblxuICBlbHNlIHtcbiAgICBoaWdoID0gaGlnaHwwO1xuICAgIGlmKGhpZ2ggPCBsb3cgfHwgaGlnaCA+PSBoYXlzdGFjay5sZW5ndGgpXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcImludmFsaWQgdXBwZXIgYm91bmRcIik7XG4gIH1cblxuICB3aGlsZShsb3cgPD0gaGlnaCkge1xuICAgIC8vIFRoZSBuYWl2ZSBgbG93ICsgaGlnaCA+Pj4gMWAgY291bGQgZmFpbCBmb3IgYXJyYXkgbGVuZ3RocyA+IDIqKjMxXG4gICAgLy8gYmVjYXVzZSBgPj4+YCBjb252ZXJ0cyBpdHMgb3BlcmFuZHMgdG8gaW50MzIuIGBsb3cgKyAoaGlnaCAtIGxvdyA+Pj4gMSlgXG4gICAgLy8gd29ya3MgZm9yIGFycmF5IGxlbmd0aHMgPD0gMioqMzItMSB3aGljaCBpcyBhbHNvIEphdmFzY3JpcHQncyBtYXggYXJyYXlcbiAgICAvLyBsZW5ndGguXG4gICAgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+Pj4gMSk7XG4gICAgY21wID0gK2NvbXBhcmF0b3IoaGF5c3RhY2tbbWlkXSwgbmVlZGxlLCBtaWQsIGhheXN0YWNrKTtcblxuICAgIC8vIFRvbyBsb3cuXG4gICAgaWYoY21wIDwgMC4wKVxuICAgICAgbG93ICA9IG1pZCArIDE7XG5cbiAgICAvLyBUb28gaGlnaC5cbiAgICBlbHNlIGlmKGNtcCA+IDAuMClcbiAgICAgIGhpZ2ggPSBtaWQgLSAxO1xuXG4gICAgLy8gS2V5IGZvdW5kLlxuICAgIGVsc2VcbiAgICAgIHJldHVybiBtaWQ7XG4gIH1cblxuICAvLyBLZXkgbm90IGZvdW5kLlxuICByZXR1cm4gfmxvdztcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaGF5c3RhY2siLCJuZWVkbGUiLCJjb21wYXJhdG9yIiwibG93IiwiaGlnaCIsIm1pZCIsImNtcCIsInVuZGVmaW5lZCIsImxlbmd0aCIsIlJhbmdlRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/binary-search/index.js\n");

/***/ })

};
;