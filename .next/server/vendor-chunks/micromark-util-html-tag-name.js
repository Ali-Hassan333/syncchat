"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-html-tag-name";
exports.ids = ["vendor-chunks/micromark-util-html-tag-name"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-html-tag-name/index.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark-util-html-tag-name/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   htmlBlockNames: () => (/* binding */ htmlBlockNames),\n/* harmony export */   htmlRawNames: () => (/* binding */ htmlRawNames)\n/* harmony export */ });\n/**\n * List of lowercase HTML “block” tag names.\n *\n * The list, when parsing HTML (flow), results in more relaxed rules (condition\n * 6).\n * Because they are known blocks, the HTML-like syntax doesn’t have to be\n * strictly parsed.\n * For tag names not in this list, a more strict algorithm (condition 7) is used\n * to detect whether the HTML-like syntax is seen as HTML (flow) or not.\n *\n * This is copied from:\n * <https://spec.commonmark.org/0.30/#html-blocks>.\n *\n * > 👉 **Note**: `search` was added in `CommonMark@0.31`.\n */ const htmlBlockNames = [\n    \"address\",\n    \"article\",\n    \"aside\",\n    \"base\",\n    \"basefont\",\n    \"blockquote\",\n    \"body\",\n    \"caption\",\n    \"center\",\n    \"col\",\n    \"colgroup\",\n    \"dd\",\n    \"details\",\n    \"dialog\",\n    \"dir\",\n    \"div\",\n    \"dl\",\n    \"dt\",\n    \"fieldset\",\n    \"figcaption\",\n    \"figure\",\n    \"footer\",\n    \"form\",\n    \"frame\",\n    \"frameset\",\n    \"h1\",\n    \"h2\",\n    \"h3\",\n    \"h4\",\n    \"h5\",\n    \"h6\",\n    \"head\",\n    \"header\",\n    \"hr\",\n    \"html\",\n    \"iframe\",\n    \"legend\",\n    \"li\",\n    \"link\",\n    \"main\",\n    \"menu\",\n    \"menuitem\",\n    \"nav\",\n    \"noframes\",\n    \"ol\",\n    \"optgroup\",\n    \"option\",\n    \"p\",\n    \"param\",\n    \"search\",\n    \"section\",\n    \"summary\",\n    \"table\",\n    \"tbody\",\n    \"td\",\n    \"tfoot\",\n    \"th\",\n    \"thead\",\n    \"title\",\n    \"tr\",\n    \"track\",\n    \"ul\"\n];\n/**\n * List of lowercase HTML “raw” tag names.\n *\n * The list, when parsing HTML (flow), results in HTML that can include lines\n * without exiting, until a closing tag also in this list is found (condition\n * 1).\n *\n * This module is copied from:\n * <https://spec.commonmark.org/0.30/#html-blocks>.\n *\n * > 👉 **Note**: `textarea` was added in `CommonMark@0.30`.\n */ const htmlRawNames = [\n    \"pre\",\n    \"script\",\n    \"style\",\n    \"textarea\"\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtaHRtbC10YWctbmFtZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztDQWNDLEdBQ00sTUFBTUEsaUJBQWlCO0lBQzVCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVEOzs7Ozs7Ozs7OztDQVdDLEdBQ00sTUFBTUMsZUFBZTtJQUFDO0lBQU87SUFBVTtJQUFTO0NBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW5jY2hhdC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1odG1sLXRhZy1uYW1lL2luZGV4LmpzPzI5ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBMaXN0IG9mIGxvd2VyY2FzZSBIVE1MIOKAnGJsb2Nr4oCdIHRhZyBuYW1lcy5cbiAqXG4gKiBUaGUgbGlzdCwgd2hlbiBwYXJzaW5nIEhUTUwgKGZsb3cpLCByZXN1bHRzIGluIG1vcmUgcmVsYXhlZCBydWxlcyAoY29uZGl0aW9uXG4gKiA2KS5cbiAqIEJlY2F1c2UgdGhleSBhcmUga25vd24gYmxvY2tzLCB0aGUgSFRNTC1saWtlIHN5bnRheCBkb2VzbuKAmXQgaGF2ZSB0byBiZVxuICogc3RyaWN0bHkgcGFyc2VkLlxuICogRm9yIHRhZyBuYW1lcyBub3QgaW4gdGhpcyBsaXN0LCBhIG1vcmUgc3RyaWN0IGFsZ29yaXRobSAoY29uZGl0aW9uIDcpIGlzIHVzZWRcbiAqIHRvIGRldGVjdCB3aGV0aGVyIHRoZSBIVE1MLWxpa2Ugc3ludGF4IGlzIHNlZW4gYXMgSFRNTCAoZmxvdykgb3Igbm90LlxuICpcbiAqIFRoaXMgaXMgY29waWVkIGZyb206XG4gKiA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMzAvI2h0bWwtYmxvY2tzPi5cbiAqXG4gKiA+IPCfkYkgKipOb3RlKio6IGBzZWFyY2hgIHdhcyBhZGRlZCBpbiBgQ29tbW9uTWFya0AwLjMxYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWxCbG9ja05hbWVzID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jhc2UnLFxuICAnYmFzZWZvbnQnLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkZCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RpYWxvZycsXG4gICdkaXInLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2ZyYW1lJyxcbiAgJ2ZyYW1lc2V0JyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hyJyxcbiAgJ2h0bWwnLFxuICAnaWZyYW1lJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdsaW5rJyxcbiAgJ21haW4nLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICduYXYnLFxuICAnbm9mcmFtZXMnLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ3AnLFxuICAncGFyYW0nLFxuICAnc2VhcmNoJyxcbiAgJ3NlY3Rpb24nLFxuICAnc3VtbWFyeScsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aXRsZScsXG4gICd0cicsXG4gICd0cmFjaycsXG4gICd1bCdcbl1cblxuLyoqXG4gKiBMaXN0IG9mIGxvd2VyY2FzZSBIVE1MIOKAnHJhd+KAnSB0YWcgbmFtZXMuXG4gKlxuICogVGhlIGxpc3QsIHdoZW4gcGFyc2luZyBIVE1MIChmbG93KSwgcmVzdWx0cyBpbiBIVE1MIHRoYXQgY2FuIGluY2x1ZGUgbGluZXNcbiAqIHdpdGhvdXQgZXhpdGluZywgdW50aWwgYSBjbG9zaW5nIHRhZyBhbHNvIGluIHRoaXMgbGlzdCBpcyBmb3VuZCAoY29uZGl0aW9uXG4gKiAxKS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBjb3BpZWQgZnJvbTpcbiAqIDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4zMC8jaHRtbC1ibG9ja3M+LlxuICpcbiAqID4g8J+RiSAqKk5vdGUqKjogYHRleHRhcmVhYCB3YXMgYWRkZWQgaW4gYENvbW1vbk1hcmtAMC4zMGAuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sUmF3TmFtZXMgPSBbJ3ByZScsICdzY3JpcHQnLCAnc3R5bGUnLCAndGV4dGFyZWEnXVxuIl0sIm5hbWVzIjpbImh0bWxCbG9ja05hbWVzIiwiaHRtbFJhd05hbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-html-tag-name/index.js\n");

/***/ })

};
;