"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/abort-controller";
exports.ids = ["vendor-chunks/abort-controller"];
exports.modules = {

/***/ "(rsc)/./node_modules/abort-controller/dist/abort-controller.js":
/*!****************************************************************!*\
  !*** ./node_modules/abort-controller/dist/abort-controller.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/**\n * @author Toru Nagashima <https://github.com/mysticatea>\n * See LICENSE file in root directory for full license.\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar eventTargetShim = __webpack_require__(/*! event-target-shim */ \"(rsc)/./node_modules/event-target-shim/dist/event-target-shim.js\");\n/**\n * The signal class.\n * @see https://dom.spec.whatwg.org/#abortsignal\n */ class AbortSignal extends eventTargetShim.EventTarget {\n    /**\n     * AbortSignal cannot be constructed directly.\n     */ constructor(){\n        super();\n        throw new TypeError(\"AbortSignal cannot be constructed directly\");\n    }\n    /**\n     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.\n     */ get aborted() {\n        const aborted = abortedFlags.get(this);\n        if (typeof aborted !== \"boolean\") {\n            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? \"null\" : typeof this}`);\n        }\n        return aborted;\n    }\n}\neventTargetShim.defineEventAttribute(AbortSignal.prototype, \"abort\");\n/**\n * Create an AbortSignal object.\n */ function createAbortSignal() {\n    const signal = Object.create(AbortSignal.prototype);\n    eventTargetShim.EventTarget.call(signal);\n    abortedFlags.set(signal, false);\n    return signal;\n}\n/**\n * Abort a given signal.\n */ function abortSignal(signal) {\n    if (abortedFlags.get(signal) !== false) {\n        return;\n    }\n    abortedFlags.set(signal, true);\n    signal.dispatchEvent({\n        type: \"abort\"\n    });\n}\n/**\n * Aborted flag for each instances.\n */ const abortedFlags = new WeakMap();\n// Properties should be enumerable.\nObject.defineProperties(AbortSignal.prototype, {\n    aborted: {\n        enumerable: true\n    }\n});\n// `toString()` should return `\"[object AbortSignal]\"`\nif (typeof Symbol === \"function\" && typeof Symbol.toStringTag === \"symbol\") {\n    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {\n        configurable: true,\n        value: \"AbortSignal\"\n    });\n}\n/**\n * The AbortController.\n * @see https://dom.spec.whatwg.org/#abortcontroller\n */ class AbortController {\n    /**\n     * Initialize this controller.\n     */ constructor(){\n        signals.set(this, createAbortSignal());\n    }\n    /**\n     * Returns the `AbortSignal` object associated with this object.\n     */ get signal() {\n        return getSignal(this);\n    }\n    /**\n     * Abort and signal to any observers that the associated activity is to be aborted.\n     */ abort() {\n        abortSignal(getSignal(this));\n    }\n}\n/**\n * Associated signals.\n */ const signals = new WeakMap();\n/**\n * Get the associated signal of a given controller.\n */ function getSignal(controller) {\n    const signal = signals.get(controller);\n    if (signal == null) {\n        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? \"null\" : typeof controller}`);\n    }\n    return signal;\n}\n// Properties should be enumerable.\nObject.defineProperties(AbortController.prototype, {\n    signal: {\n        enumerable: true\n    },\n    abort: {\n        enumerable: true\n    }\n});\nif (typeof Symbol === \"function\" && typeof Symbol.toStringTag === \"symbol\") {\n    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {\n        configurable: true,\n        value: \"AbortController\"\n    });\n}\nexports.AbortController = AbortController;\nexports.AbortSignal = AbortSignal;\nexports[\"default\"] = AbortController;\nmodule.exports = AbortController;\nmodule.exports.AbortController = module.exports[\"default\"] = AbortController;\nmodule.exports.AbortSignal = AbortSignal //# sourceMappingURL=abort-controller.js.map\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYWJvcnQtY29udHJvbGxlci9kaXN0L2Fib3J0LWNvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7OztDQUdDLEdBQ0Q7QUFFQUEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFFN0QsSUFBSUMsa0JBQWtCQyxtQkFBT0EsQ0FBQztBQUU5Qjs7O0NBR0MsR0FDRCxNQUFNQyxvQkFBb0JGLGdCQUFnQkcsV0FBVztJQUNqRDs7S0FFQyxHQUNEQyxhQUFjO1FBQ1YsS0FBSztRQUNMLE1BQU0sSUFBSUMsVUFBVTtJQUN4QjtJQUNBOztLQUVDLEdBQ0QsSUFBSUMsVUFBVTtRQUNWLE1BQU1BLFVBQVVDLGFBQWFDLEdBQUcsQ0FBQyxJQUFJO1FBQ3JDLElBQUksT0FBT0YsWUFBWSxXQUFXO1lBQzlCLE1BQU0sSUFBSUQsVUFBVSxDQUFDLHVEQUF1RCxFQUFFLElBQUksS0FBSyxPQUFPLFNBQVMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUN4SDtRQUNBLE9BQU9DO0lBQ1g7QUFDSjtBQUNBTixnQkFBZ0JTLG9CQUFvQixDQUFDUCxZQUFZUSxTQUFTLEVBQUU7QUFDNUQ7O0NBRUMsR0FDRCxTQUFTQztJQUNMLE1BQU1DLFNBQVNoQixPQUFPaUIsTUFBTSxDQUFDWCxZQUFZUSxTQUFTO0lBQ2xEVixnQkFBZ0JHLFdBQVcsQ0FBQ1csSUFBSSxDQUFDRjtJQUNqQ0wsYUFBYVEsR0FBRyxDQUFDSCxRQUFRO0lBQ3pCLE9BQU9BO0FBQ1g7QUFDQTs7Q0FFQyxHQUNELFNBQVNJLFlBQVlKLE1BQU07SUFDdkIsSUFBSUwsYUFBYUMsR0FBRyxDQUFDSSxZQUFZLE9BQU87UUFDcEM7SUFDSjtJQUNBTCxhQUFhUSxHQUFHLENBQUNILFFBQVE7SUFDekJBLE9BQU9LLGFBQWEsQ0FBQztRQUFFQyxNQUFNO0lBQVE7QUFDekM7QUFDQTs7Q0FFQyxHQUNELE1BQU1YLGVBQWUsSUFBSVk7QUFDekIsbUNBQW1DO0FBQ25DdkIsT0FBT3dCLGdCQUFnQixDQUFDbEIsWUFBWVEsU0FBUyxFQUFFO0lBQzNDSixTQUFTO1FBQUVlLFlBQVk7SUFBSztBQUNoQztBQUNBLHNEQUFzRDtBQUN0RCxJQUFJLE9BQU9DLFdBQVcsY0FBYyxPQUFPQSxPQUFPQyxXQUFXLEtBQUssVUFBVTtJQUN4RTNCLE9BQU9DLGNBQWMsQ0FBQ0ssWUFBWVEsU0FBUyxFQUFFWSxPQUFPQyxXQUFXLEVBQUU7UUFDN0RDLGNBQWM7UUFDZHpCLE9BQU87SUFDWDtBQUNKO0FBRUE7OztDQUdDLEdBQ0QsTUFBTTBCO0lBQ0Y7O0tBRUMsR0FDRHJCLGFBQWM7UUFDVnNCLFFBQVFYLEdBQUcsQ0FBQyxJQUFJLEVBQUVKO0lBQ3RCO0lBQ0E7O0tBRUMsR0FDRCxJQUFJQyxTQUFTO1FBQ1QsT0FBT2UsVUFBVSxJQUFJO0lBQ3pCO0lBQ0E7O0tBRUMsR0FDREMsUUFBUTtRQUNKWixZQUFZVyxVQUFVLElBQUk7SUFDOUI7QUFDSjtBQUNBOztDQUVDLEdBQ0QsTUFBTUQsVUFBVSxJQUFJUDtBQUNwQjs7Q0FFQyxHQUNELFNBQVNRLFVBQVVFLFVBQVU7SUFDekIsTUFBTWpCLFNBQVNjLFFBQVFsQixHQUFHLENBQUNxQjtJQUMzQixJQUFJakIsVUFBVSxNQUFNO1FBQ2hCLE1BQU0sSUFBSVAsVUFBVSxDQUFDLDJEQUEyRCxFQUFFd0IsZUFBZSxPQUFPLFNBQVMsT0FBT0EsV0FBVyxDQUFDO0lBQ3hJO0lBQ0EsT0FBT2pCO0FBQ1g7QUFDQSxtQ0FBbUM7QUFDbkNoQixPQUFPd0IsZ0JBQWdCLENBQUNLLGdCQUFnQmYsU0FBUyxFQUFFO0lBQy9DRSxRQUFRO1FBQUVTLFlBQVk7SUFBSztJQUMzQk8sT0FBTztRQUFFUCxZQUFZO0lBQUs7QUFDOUI7QUFDQSxJQUFJLE9BQU9DLFdBQVcsY0FBYyxPQUFPQSxPQUFPQyxXQUFXLEtBQUssVUFBVTtJQUN4RTNCLE9BQU9DLGNBQWMsQ0FBQzRCLGdCQUFnQmYsU0FBUyxFQUFFWSxPQUFPQyxXQUFXLEVBQUU7UUFDakVDLGNBQWM7UUFDZHpCLE9BQU87SUFDWDtBQUNKO0FBRUFELHVCQUF1QixHQUFHMkI7QUFDMUIzQixtQkFBbUIsR0FBR0k7QUFDdEJKLGtCQUFlLEdBQUcyQjtBQUVsQk0sT0FBT2pDLE9BQU8sR0FBRzJCO0FBQ2pCTSw4QkFBOEIsR0FBR0EseUJBQXlCLEdBQUdOO0FBQzdETSwwQkFBMEIsR0FBRzdCLFlBQzdCLDRDQUE0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3N5bmNjaGF0Ly4vbm9kZV9tb2R1bGVzL2Fib3J0LWNvbnRyb2xsZXIvZGlzdC9hYm9ydC1jb250cm9sbGVyLmpzP2FiMzkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yIFRvcnUgTmFnYXNoaW1hIDxodHRwczovL2dpdGh1Yi5jb20vbXlzdGljYXRlYT5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gcm9vdCBkaXJlY3RvcnkgZm9yIGZ1bGwgbGljZW5zZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZXZlbnRUYXJnZXRTaGltID0gcmVxdWlyZSgnZXZlbnQtdGFyZ2V0LXNoaW0nKTtcblxuLyoqXG4gKiBUaGUgc2lnbmFsIGNsYXNzLlxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2Fib3J0c2lnbmFsXG4gKi9cbmNsYXNzIEFib3J0U2lnbmFsIGV4dGVuZHMgZXZlbnRUYXJnZXRTaGltLkV2ZW50VGFyZ2V0IHtcbiAgICAvKipcbiAgICAgKiBBYm9ydFNpZ25hbCBjYW5ub3QgYmUgY29uc3RydWN0ZWQgZGlyZWN0bHkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBYm9ydFNpZ25hbCBjYW5ub3QgYmUgY29uc3RydWN0ZWQgZGlyZWN0bHlcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoaXMgYEFib3J0U2lnbmFsYCdzIGBBYm9ydENvbnRyb2xsZXJgIGhhcyBzaWduYWxlZCB0byBhYm9ydCwgYW5kIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGdldCBhYm9ydGVkKCkge1xuICAgICAgICBjb25zdCBhYm9ydGVkID0gYWJvcnRlZEZsYWdzLmdldCh0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhYm9ydGVkICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgJ3RoaXMnIHRvIGJlIGFuICdBYm9ydFNpZ25hbCcgb2JqZWN0LCBidXQgZ290ICR7dGhpcyA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIHRoaXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFib3J0ZWQ7XG4gICAgfVxufVxuZXZlbnRUYXJnZXRTaGltLmRlZmluZUV2ZW50QXR0cmlidXRlKEFib3J0U2lnbmFsLnByb3RvdHlwZSwgXCJhYm9ydFwiKTtcbi8qKlxuICogQ3JlYXRlIGFuIEFib3J0U2lnbmFsIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWJvcnRTaWduYWwoKSB7XG4gICAgY29uc3Qgc2lnbmFsID0gT2JqZWN0LmNyZWF0ZShBYm9ydFNpZ25hbC5wcm90b3R5cGUpO1xuICAgIGV2ZW50VGFyZ2V0U2hpbS5FdmVudFRhcmdldC5jYWxsKHNpZ25hbCk7XG4gICAgYWJvcnRlZEZsYWdzLnNldChzaWduYWwsIGZhbHNlKTtcbiAgICByZXR1cm4gc2lnbmFsO1xufVxuLyoqXG4gKiBBYm9ydCBhIGdpdmVuIHNpZ25hbC5cbiAqL1xuZnVuY3Rpb24gYWJvcnRTaWduYWwoc2lnbmFsKSB7XG4gICAgaWYgKGFib3J0ZWRGbGFncy5nZXQoc2lnbmFsKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhYm9ydGVkRmxhZ3Muc2V0KHNpZ25hbCwgdHJ1ZSk7XG4gICAgc2lnbmFsLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiBcImFib3J0XCIgfSk7XG59XG4vKipcbiAqIEFib3J0ZWQgZmxhZyBmb3IgZWFjaCBpbnN0YW5jZXMuXG4gKi9cbmNvbnN0IGFib3J0ZWRGbGFncyA9IG5ldyBXZWFrTWFwKCk7XG4vLyBQcm9wZXJ0aWVzIHNob3VsZCBiZSBlbnVtZXJhYmxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQWJvcnRTaWduYWwucHJvdG90eXBlLCB7XG4gICAgYWJvcnRlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG59KTtcbi8vIGB0b1N0cmluZygpYCBzaG91bGQgcmV0dXJuIGBcIltvYmplY3QgQWJvcnRTaWduYWxdXCJgXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJvcnRTaWduYWwucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogXCJBYm9ydFNpZ25hbFwiLFxuICAgIH0pO1xufVxuXG4vKipcbiAqIFRoZSBBYm9ydENvbnRyb2xsZXIuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jYWJvcnRjb250cm9sbGVyXG4gKi9cbmNsYXNzIEFib3J0Q29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGlzIGNvbnRyb2xsZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHNpZ25hbHMuc2V0KHRoaXMsIGNyZWF0ZUFib3J0U2lnbmFsKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBgQWJvcnRTaWduYWxgIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhpcyBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0IHNpZ25hbCgpIHtcbiAgICAgICAgcmV0dXJuIGdldFNpZ25hbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWJvcnQgYW5kIHNpZ25hbCB0byBhbnkgb2JzZXJ2ZXJzIHRoYXQgdGhlIGFzc29jaWF0ZWQgYWN0aXZpdHkgaXMgdG8gYmUgYWJvcnRlZC5cbiAgICAgKi9cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgYWJvcnRTaWduYWwoZ2V0U2lnbmFsKHRoaXMpKTtcbiAgICB9XG59XG4vKipcbiAqIEFzc29jaWF0ZWQgc2lnbmFscy5cbiAqL1xuY29uc3Qgc2lnbmFscyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEdldCB0aGUgYXNzb2NpYXRlZCBzaWduYWwgb2YgYSBnaXZlbiBjb250cm9sbGVyLlxuICovXG5mdW5jdGlvbiBnZXRTaWduYWwoY29udHJvbGxlcikge1xuICAgIGNvbnN0IHNpZ25hbCA9IHNpZ25hbHMuZ2V0KGNvbnRyb2xsZXIpO1xuICAgIGlmIChzaWduYWwgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCAndGhpcycgdG8gYmUgYW4gJ0Fib3J0Q29udHJvbGxlcicgb2JqZWN0LCBidXQgZ290ICR7Y29udHJvbGxlciA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIGNvbnRyb2xsZXJ9YCk7XG4gICAgfVxuICAgIHJldHVybiBzaWduYWw7XG59XG4vLyBQcm9wZXJ0aWVzIHNob3VsZCBiZSBlbnVtZXJhYmxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQWJvcnRDb250cm9sbGVyLnByb3RvdHlwZSwge1xuICAgIHNpZ25hbDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgYWJvcnQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxufSk7XG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJvcnRDb250cm9sbGVyLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IFwiQWJvcnRDb250cm9sbGVyXCIsXG4gICAgfSk7XG59XG5cbmV4cG9ydHMuQWJvcnRDb250cm9sbGVyID0gQWJvcnRDb250cm9sbGVyO1xuZXhwb3J0cy5BYm9ydFNpZ25hbCA9IEFib3J0U2lnbmFsO1xuZXhwb3J0cy5kZWZhdWx0ID0gQWJvcnRDb250cm9sbGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFib3J0Q29udHJvbGxlclxubW9kdWxlLmV4cG9ydHMuQWJvcnRDb250cm9sbGVyID0gbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQWJvcnRDb250cm9sbGVyXG5tb2R1bGUuZXhwb3J0cy5BYm9ydFNpZ25hbCA9IEFib3J0U2lnbmFsXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYm9ydC1jb250cm9sbGVyLmpzLm1hcFxuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXZlbnRUYXJnZXRTaGltIiwicmVxdWlyZSIsIkFib3J0U2lnbmFsIiwiRXZlbnRUYXJnZXQiLCJjb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsImFib3J0ZWQiLCJhYm9ydGVkRmxhZ3MiLCJnZXQiLCJkZWZpbmVFdmVudEF0dHJpYnV0ZSIsInByb3RvdHlwZSIsImNyZWF0ZUFib3J0U2lnbmFsIiwic2lnbmFsIiwiY3JlYXRlIiwiY2FsbCIsInNldCIsImFib3J0U2lnbmFsIiwiZGlzcGF0Y2hFdmVudCIsInR5cGUiLCJXZWFrTWFwIiwiZGVmaW5lUHJvcGVydGllcyIsImVudW1lcmFibGUiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImNvbmZpZ3VyYWJsZSIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbHMiLCJnZXRTaWduYWwiLCJhYm9ydCIsImNvbnRyb2xsZXIiLCJkZWZhdWx0IiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/abort-controller/dist/abort-controller.js\n");

/***/ })

};
;