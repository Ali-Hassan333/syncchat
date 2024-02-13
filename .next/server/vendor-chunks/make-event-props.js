"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/make-event-props";
exports.ids = ["vendor-chunks/make-event-props"];
exports.modules = {

/***/ "(ssr)/./node_modules/make-event-props/dist/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/make-event-props/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allEvents: () => (/* binding */ allEvents),\n/* harmony export */   animationEvents: () => (/* binding */ animationEvents),\n/* harmony export */   changeEvents: () => (/* binding */ changeEvents),\n/* harmony export */   clipboardEvents: () => (/* binding */ clipboardEvents),\n/* harmony export */   compositionEvents: () => (/* binding */ compositionEvents),\n/* harmony export */   \"default\": () => (/* binding */ makeEventProps),\n/* harmony export */   dragEvents: () => (/* binding */ dragEvents),\n/* harmony export */   focusEvents: () => (/* binding */ focusEvents),\n/* harmony export */   formEvents: () => (/* binding */ formEvents),\n/* harmony export */   imageEvents: () => (/* binding */ imageEvents),\n/* harmony export */   keyboardEvents: () => (/* binding */ keyboardEvents),\n/* harmony export */   mediaEvents: () => (/* binding */ mediaEvents),\n/* harmony export */   mouseEvents: () => (/* binding */ mouseEvents),\n/* harmony export */   otherEvents: () => (/* binding */ otherEvents),\n/* harmony export */   pointerEvents: () => (/* binding */ pointerEvents),\n/* harmony export */   selectionEvents: () => (/* binding */ selectionEvents),\n/* harmony export */   touchEvents: () => (/* binding */ touchEvents),\n/* harmony export */   transitionEvents: () => (/* binding */ transitionEvents),\n/* harmony export */   uiEvents: () => (/* binding */ uiEvents),\n/* harmony export */   wheelEvents: () => (/* binding */ wheelEvents)\n/* harmony export */ });\nvar __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {\n    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n// As defined on the list of supported events: https://reactjs.org/docs/events.html\nvar clipboardEvents = [\n    \"onCopy\",\n    \"onCut\",\n    \"onPaste\"\n];\nvar compositionEvents = [\n    \"onCompositionEnd\",\n    \"onCompositionStart\",\n    \"onCompositionUpdate\"\n];\nvar focusEvents = [\n    \"onFocus\",\n    \"onBlur\"\n];\nvar formEvents = [\n    \"onInput\",\n    \"onInvalid\",\n    \"onReset\",\n    \"onSubmit\"\n];\nvar imageEvents = [\n    \"onLoad\",\n    \"onError\"\n];\nvar keyboardEvents = [\n    \"onKeyDown\",\n    \"onKeyPress\",\n    \"onKeyUp\"\n];\nvar mediaEvents = [\n    \"onAbort\",\n    \"onCanPlay\",\n    \"onCanPlayThrough\",\n    \"onDurationChange\",\n    \"onEmptied\",\n    \"onEncrypted\",\n    \"onEnded\",\n    \"onError\",\n    \"onLoadedData\",\n    \"onLoadedMetadata\",\n    \"onLoadStart\",\n    \"onPause\",\n    \"onPlay\",\n    \"onPlaying\",\n    \"onProgress\",\n    \"onRateChange\",\n    \"onSeeked\",\n    \"onSeeking\",\n    \"onStalled\",\n    \"onSuspend\",\n    \"onTimeUpdate\",\n    \"onVolumeChange\",\n    \"onWaiting\"\n];\nvar mouseEvents = [\n    \"onClick\",\n    \"onContextMenu\",\n    \"onDoubleClick\",\n    \"onMouseDown\",\n    \"onMouseEnter\",\n    \"onMouseLeave\",\n    \"onMouseMove\",\n    \"onMouseOut\",\n    \"onMouseOver\",\n    \"onMouseUp\"\n];\nvar dragEvents = [\n    \"onDrag\",\n    \"onDragEnd\",\n    \"onDragEnter\",\n    \"onDragExit\",\n    \"onDragLeave\",\n    \"onDragOver\",\n    \"onDragStart\",\n    \"onDrop\"\n];\nvar selectionEvents = [\n    \"onSelect\"\n];\nvar touchEvents = [\n    \"onTouchCancel\",\n    \"onTouchEnd\",\n    \"onTouchMove\",\n    \"onTouchStart\"\n];\nvar pointerEvents = [\n    \"onPointerDown\",\n    \"onPointerMove\",\n    \"onPointerUp\",\n    \"onPointerCancel\",\n    \"onGotPointerCapture\",\n    \"onLostPointerCapture\",\n    \"onPointerEnter\",\n    \"onPointerLeave\",\n    \"onPointerOver\",\n    \"onPointerOut\"\n];\nvar uiEvents = [\n    \"onScroll\"\n];\nvar wheelEvents = [\n    \"onWheel\"\n];\nvar animationEvents = [\n    \"onAnimationStart\",\n    \"onAnimationEnd\",\n    \"onAnimationIteration\"\n];\nvar transitionEvents = [\n    \"onTransitionEnd\"\n];\nvar otherEvents = [\n    \"onToggle\"\n];\nvar changeEvents = [\n    \"onChange\"\n];\nvar allEvents = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], clipboardEvents, true), compositionEvents, true), focusEvents, true), formEvents, true), imageEvents, true), keyboardEvents, true), mediaEvents, true), mouseEvents, true), dragEvents, true), selectionEvents, true), touchEvents, true), pointerEvents, true), uiEvents, true), wheelEvents, true), animationEvents, true), transitionEvents, true), changeEvents, true), otherEvents, true);\n/**\n * Returns an object with on-event callback props curried with provided args.\n * @param {Object} props Props passed to a component.\n * @param {Function=} getArgs A function that returns argument(s) on-event callbacks\n *   shall be curried with.\n */ function makeEventProps(props, getArgs) {\n    var eventProps = {};\n    allEvents.forEach(function(eventName) {\n        var eventHandler = props[eventName];\n        if (!eventHandler) {\n            return;\n        }\n        if (getArgs) {\n            eventProps[eventName] = function(event) {\n                return eventHandler(event, getArgs(eventName));\n            };\n        } else {\n            eventProps[eventName] = eventHandler;\n        }\n    });\n    return eventProps;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWFrZS1ldmVudC1wcm9wcy9kaXN0L2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGdCQUFnQixTQUFLLElBQUksU0FBSSxDQUFDQSxhQUFhLElBQUssU0FBVUMsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7SUFDeEUsSUFBSUEsUUFBUUMsVUFBVUMsTUFBTSxLQUFLLEdBQUcsSUFBSyxJQUFJQyxJQUFJLEdBQUdDLElBQUlMLEtBQUtHLE1BQU0sRUFBRUcsSUFBSUYsSUFBSUMsR0FBR0QsSUFBSztRQUNqRixJQUFJRSxNQUFNLENBQUVGLENBQUFBLEtBQUtKLElBQUcsR0FBSTtZQUNwQixJQUFJLENBQUNNLElBQUlBLEtBQUtDLE1BQU1DLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNWLE1BQU0sR0FBR0k7WUFDbERFLEVBQUUsQ0FBQ0YsRUFBRSxHQUFHSixJQUFJLENBQUNJLEVBQUU7UUFDbkI7SUFDSjtJQUNBLE9BQU9MLEdBQUdZLE1BQU0sQ0FBQ0wsTUFBTUMsTUFBTUMsU0FBUyxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ1Y7QUFDdEQ7QUFDQSxtRkFBbUY7QUFDNUUsSUFBSVksa0JBQWtCO0lBQUM7SUFBVTtJQUFTO0NBQVUsQ0FBQztBQUNyRCxJQUFJQyxvQkFBb0I7SUFDM0I7SUFDQTtJQUNBO0NBQ0gsQ0FBQztBQUNLLElBQUlDLGNBQWM7SUFBQztJQUFXO0NBQVMsQ0FBQztBQUN4QyxJQUFJQyxhQUFhO0lBQUM7SUFBVztJQUFhO0lBQVc7Q0FBVyxDQUFDO0FBQ2pFLElBQUlDLGNBQWM7SUFBQztJQUFVO0NBQVUsQ0FBQztBQUN4QyxJQUFJQyxpQkFBaUI7SUFBQztJQUFhO0lBQWM7Q0FBVSxDQUFDO0FBQzVELElBQUlDLGNBQWM7SUFDckI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNILENBQUM7QUFDSyxJQUFJQyxjQUFjO0lBQ3JCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0gsQ0FBQztBQUNLLElBQUlDLGFBQWE7SUFDcEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNILENBQUM7QUFDSyxJQUFJQyxrQkFBa0I7SUFBQztDQUFXLENBQUM7QUFDbkMsSUFBSUMsY0FBYztJQUFDO0lBQWlCO0lBQWM7SUFBZTtDQUFlLENBQUM7QUFDakYsSUFBSUMsZ0JBQWdCO0lBQ3ZCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0gsQ0FBQztBQUNLLElBQUlDLFdBQVc7SUFBQztDQUFXLENBQUM7QUFDNUIsSUFBSUMsY0FBYztJQUFDO0NBQVUsQ0FBQztBQUM5QixJQUFJQyxrQkFBa0I7SUFDekI7SUFDQTtJQUNBO0NBQ0gsQ0FBQztBQUNLLElBQUlDLG1CQUFtQjtJQUFDO0NBQWtCLENBQUM7QUFDM0MsSUFBSUMsY0FBYztJQUFDO0NBQVcsQ0FBQztBQUMvQixJQUFJQyxlQUFlO0lBQUM7Q0FBVyxDQUFDO0FBQ2hDLElBQUlDLFlBQVloQyxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjQSxjQUFjLEVBQUUsRUFBRWMsaUJBQWlCLE9BQU9DLG1CQUFtQixPQUFPQyxhQUFhLE9BQU9DLFlBQVksT0FBT0MsYUFBYSxPQUFPQyxnQkFBZ0IsT0FBT0MsYUFBYSxPQUFPQyxhQUFhLE9BQU9DLFlBQVksT0FBT0MsaUJBQWlCLE9BQU9DLGFBQWEsT0FBT0MsZUFBZSxPQUFPQyxVQUFVLE9BQU9DLGFBQWEsT0FBT0MsaUJBQWlCLE9BQU9DLGtCQUFrQixPQUFPRSxjQUFjLE9BQU9ELGFBQWEsTUFBTTtBQUN0cEI7Ozs7O0NBS0MsR0FDYyxTQUFTRyxlQUFlQyxLQUFLLEVBQUVDLE9BQU87SUFDakQsSUFBSUMsYUFBYSxDQUFDO0lBQ2xCSixVQUFVSyxPQUFPLENBQUMsU0FBVUMsU0FBUztRQUNqQyxJQUFJQyxlQUFlTCxLQUFLLENBQUNJLFVBQVU7UUFDbkMsSUFBSSxDQUFDQyxjQUFjO1lBQ2Y7UUFDSjtRQUNBLElBQUlKLFNBQVM7WUFDVEMsVUFBVSxDQUFDRSxVQUFVLEdBQUksU0FBVUUsS0FBSztnQkFDcEMsT0FBT0QsYUFBYUMsT0FBT0wsUUFBUUc7WUFDdkM7UUFDSixPQUNLO1lBQ0RGLFVBQVUsQ0FBQ0UsVUFBVSxHQUFHQztRQUM1QjtJQUNKO0lBQ0EsT0FBT0g7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL3N5bmNjaGF0Ly4vbm9kZV9tb2R1bGVzL21ha2UtZXZlbnQtcHJvcHMvZGlzdC9lc20vaW5kZXguanM/OWIyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG4vLyBBcyBkZWZpbmVkIG9uIHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBldmVudHM6IGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ldmVudHMuaHRtbFxuZXhwb3J0IHZhciBjbGlwYm9hcmRFdmVudHMgPSBbJ29uQ29weScsICdvbkN1dCcsICdvblBhc3RlJ107XG5leHBvcnQgdmFyIGNvbXBvc2l0aW9uRXZlbnRzID0gW1xuICAgICdvbkNvbXBvc2l0aW9uRW5kJyxcbiAgICAnb25Db21wb3NpdGlvblN0YXJ0JyxcbiAgICAnb25Db21wb3NpdGlvblVwZGF0ZScsXG5dO1xuZXhwb3J0IHZhciBmb2N1c0V2ZW50cyA9IFsnb25Gb2N1cycsICdvbkJsdXInXTtcbmV4cG9ydCB2YXIgZm9ybUV2ZW50cyA9IFsnb25JbnB1dCcsICdvbkludmFsaWQnLCAnb25SZXNldCcsICdvblN1Ym1pdCddO1xuZXhwb3J0IHZhciBpbWFnZUV2ZW50cyA9IFsnb25Mb2FkJywgJ29uRXJyb3InXTtcbmV4cG9ydCB2YXIga2V5Ym9hcmRFdmVudHMgPSBbJ29uS2V5RG93bicsICdvbktleVByZXNzJywgJ29uS2V5VXAnXTtcbmV4cG9ydCB2YXIgbWVkaWFFdmVudHMgPSBbXG4gICAgJ29uQWJvcnQnLFxuICAgICdvbkNhblBsYXknLFxuICAgICdvbkNhblBsYXlUaHJvdWdoJyxcbiAgICAnb25EdXJhdGlvbkNoYW5nZScsXG4gICAgJ29uRW1wdGllZCcsXG4gICAgJ29uRW5jcnlwdGVkJyxcbiAgICAnb25FbmRlZCcsXG4gICAgJ29uRXJyb3InLFxuICAgICdvbkxvYWRlZERhdGEnLFxuICAgICdvbkxvYWRlZE1ldGFkYXRhJyxcbiAgICAnb25Mb2FkU3RhcnQnLFxuICAgICdvblBhdXNlJyxcbiAgICAnb25QbGF5JyxcbiAgICAnb25QbGF5aW5nJyxcbiAgICAnb25Qcm9ncmVzcycsXG4gICAgJ29uUmF0ZUNoYW5nZScsXG4gICAgJ29uU2Vla2VkJyxcbiAgICAnb25TZWVraW5nJyxcbiAgICAnb25TdGFsbGVkJyxcbiAgICAnb25TdXNwZW5kJyxcbiAgICAnb25UaW1lVXBkYXRlJyxcbiAgICAnb25Wb2x1bWVDaGFuZ2UnLFxuICAgICdvbldhaXRpbmcnLFxuXTtcbmV4cG9ydCB2YXIgbW91c2VFdmVudHMgPSBbXG4gICAgJ29uQ2xpY2snLFxuICAgICdvbkNvbnRleHRNZW51JyxcbiAgICAnb25Eb3VibGVDbGljaycsXG4gICAgJ29uTW91c2VEb3duJyxcbiAgICAnb25Nb3VzZUVudGVyJyxcbiAgICAnb25Nb3VzZUxlYXZlJyxcbiAgICAnb25Nb3VzZU1vdmUnLFxuICAgICdvbk1vdXNlT3V0JyxcbiAgICAnb25Nb3VzZU92ZXInLFxuICAgICdvbk1vdXNlVXAnLFxuXTtcbmV4cG9ydCB2YXIgZHJhZ0V2ZW50cyA9IFtcbiAgICAnb25EcmFnJyxcbiAgICAnb25EcmFnRW5kJyxcbiAgICAnb25EcmFnRW50ZXInLFxuICAgICdvbkRyYWdFeGl0JyxcbiAgICAnb25EcmFnTGVhdmUnLFxuICAgICdvbkRyYWdPdmVyJyxcbiAgICAnb25EcmFnU3RhcnQnLFxuICAgICdvbkRyb3AnLFxuXTtcbmV4cG9ydCB2YXIgc2VsZWN0aW9uRXZlbnRzID0gWydvblNlbGVjdCddO1xuZXhwb3J0IHZhciB0b3VjaEV2ZW50cyA9IFsnb25Ub3VjaENhbmNlbCcsICdvblRvdWNoRW5kJywgJ29uVG91Y2hNb3ZlJywgJ29uVG91Y2hTdGFydCddO1xuZXhwb3J0IHZhciBwb2ludGVyRXZlbnRzID0gW1xuICAgICdvblBvaW50ZXJEb3duJyxcbiAgICAnb25Qb2ludGVyTW92ZScsXG4gICAgJ29uUG9pbnRlclVwJyxcbiAgICAnb25Qb2ludGVyQ2FuY2VsJyxcbiAgICAnb25Hb3RQb2ludGVyQ2FwdHVyZScsXG4gICAgJ29uTG9zdFBvaW50ZXJDYXB0dXJlJyxcbiAgICAnb25Qb2ludGVyRW50ZXInLFxuICAgICdvblBvaW50ZXJMZWF2ZScsXG4gICAgJ29uUG9pbnRlck92ZXInLFxuICAgICdvblBvaW50ZXJPdXQnLFxuXTtcbmV4cG9ydCB2YXIgdWlFdmVudHMgPSBbJ29uU2Nyb2xsJ107XG5leHBvcnQgdmFyIHdoZWVsRXZlbnRzID0gWydvbldoZWVsJ107XG5leHBvcnQgdmFyIGFuaW1hdGlvbkV2ZW50cyA9IFtcbiAgICAnb25BbmltYXRpb25TdGFydCcsXG4gICAgJ29uQW5pbWF0aW9uRW5kJyxcbiAgICAnb25BbmltYXRpb25JdGVyYXRpb24nLFxuXTtcbmV4cG9ydCB2YXIgdHJhbnNpdGlvbkV2ZW50cyA9IFsnb25UcmFuc2l0aW9uRW5kJ107XG5leHBvcnQgdmFyIG90aGVyRXZlbnRzID0gWydvblRvZ2dsZSddO1xuZXhwb3J0IHZhciBjaGFuZ2VFdmVudHMgPSBbJ29uQ2hhbmdlJ107XG5leHBvcnQgdmFyIGFsbEV2ZW50cyA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBjbGlwYm9hcmRFdmVudHMsIHRydWUpLCBjb21wb3NpdGlvbkV2ZW50cywgdHJ1ZSksIGZvY3VzRXZlbnRzLCB0cnVlKSwgZm9ybUV2ZW50cywgdHJ1ZSksIGltYWdlRXZlbnRzLCB0cnVlKSwga2V5Ym9hcmRFdmVudHMsIHRydWUpLCBtZWRpYUV2ZW50cywgdHJ1ZSksIG1vdXNlRXZlbnRzLCB0cnVlKSwgZHJhZ0V2ZW50cywgdHJ1ZSksIHNlbGVjdGlvbkV2ZW50cywgdHJ1ZSksIHRvdWNoRXZlbnRzLCB0cnVlKSwgcG9pbnRlckV2ZW50cywgdHJ1ZSksIHVpRXZlbnRzLCB0cnVlKSwgd2hlZWxFdmVudHMsIHRydWUpLCBhbmltYXRpb25FdmVudHMsIHRydWUpLCB0cmFuc2l0aW9uRXZlbnRzLCB0cnVlKSwgY2hhbmdlRXZlbnRzLCB0cnVlKSwgb3RoZXJFdmVudHMsIHRydWUpO1xuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIG9uLWV2ZW50IGNhbGxiYWNrIHByb3BzIGN1cnJpZWQgd2l0aCBwcm92aWRlZCBhcmdzLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzIHBhc3NlZCB0byBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBnZXRBcmdzIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFyZ3VtZW50KHMpIG9uLWV2ZW50IGNhbGxiYWNrc1xuICogICBzaGFsbCBiZSBjdXJyaWVkIHdpdGguXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VFdmVudFByb3BzKHByb3BzLCBnZXRBcmdzKSB7XG4gICAgdmFyIGV2ZW50UHJvcHMgPSB7fTtcbiAgICBhbGxFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIHZhciBldmVudEhhbmRsZXIgPSBwcm9wc1tldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRBcmdzKSB7XG4gICAgICAgICAgICBldmVudFByb3BzW2V2ZW50TmFtZV0gPSAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50SGFuZGxlcihldmVudCwgZ2V0QXJncyhldmVudE5hbWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRQcm9wc1tldmVudE5hbWVdID0gZXZlbnRIYW5kbGVyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGV2ZW50UHJvcHM7XG59XG4iXSwibmFtZXMiOlsiX19zcHJlYWRBcnJheSIsInRvIiwiZnJvbSIsInBhY2siLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwibCIsImFyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJjb25jYXQiLCJjbGlwYm9hcmRFdmVudHMiLCJjb21wb3NpdGlvbkV2ZW50cyIsImZvY3VzRXZlbnRzIiwiZm9ybUV2ZW50cyIsImltYWdlRXZlbnRzIiwia2V5Ym9hcmRFdmVudHMiLCJtZWRpYUV2ZW50cyIsIm1vdXNlRXZlbnRzIiwiZHJhZ0V2ZW50cyIsInNlbGVjdGlvbkV2ZW50cyIsInRvdWNoRXZlbnRzIiwicG9pbnRlckV2ZW50cyIsInVpRXZlbnRzIiwid2hlZWxFdmVudHMiLCJhbmltYXRpb25FdmVudHMiLCJ0cmFuc2l0aW9uRXZlbnRzIiwib3RoZXJFdmVudHMiLCJjaGFuZ2VFdmVudHMiLCJhbGxFdmVudHMiLCJtYWtlRXZlbnRQcm9wcyIsInByb3BzIiwiZ2V0QXJncyIsImV2ZW50UHJvcHMiLCJmb3JFYWNoIiwiZXZlbnROYW1lIiwiZXZlbnRIYW5kbGVyIiwiZXZlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/make-event-props/dist/esm/index.js\n");

/***/ })

};
;