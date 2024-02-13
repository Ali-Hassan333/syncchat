"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-timeout";
exports.ids = ["vendor-chunks/p-timeout"];
exports.modules = {

/***/ "(rsc)/./node_modules/p-timeout/index.js":
/*!*****************************************!*\
  !*** ./node_modules/p-timeout/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst pFinally = __webpack_require__(/*! p-finally */ \"(rsc)/./node_modules/p-finally/index.js\");\nclass TimeoutError extends Error {\n    constructor(message){\n        super(message);\n        this.name = \"TimeoutError\";\n    }\n}\nconst pTimeout = (promise, milliseconds, fallback)=>new Promise((resolve, reject)=>{\n        if (typeof milliseconds !== \"number\" || milliseconds < 0) {\n            throw new TypeError(\"Expected `milliseconds` to be a positive number\");\n        }\n        if (milliseconds === Infinity) {\n            resolve(promise);\n            return;\n        }\n        const timer = setTimeout(()=>{\n            if (typeof fallback === \"function\") {\n                try {\n                    resolve(fallback());\n                } catch (error) {\n                    reject(error);\n                }\n                return;\n            }\n            const message = typeof fallback === \"string\" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;\n            const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);\n            if (typeof promise.cancel === \"function\") {\n                promise.cancel();\n            }\n            reject(timeoutError);\n        }, milliseconds);\n        // TODO: Use native `finally` keyword when targeting Node.js 10\n        pFinally(// eslint-disable-next-line promise/prefer-await-to-then\n        promise.then(resolve, reject), ()=>{\n            clearTimeout(timer);\n        });\n    });\nmodule.exports = pTimeout;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = pTimeout;\nmodule.exports.TimeoutError = TimeoutError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcC10aW1lb3V0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMscUJBQXFCQztJQUMxQkMsWUFBWUMsT0FBTyxDQUFFO1FBQ3BCLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUNDLElBQUksR0FBRztJQUNiO0FBQ0Q7QUFFQSxNQUFNQyxXQUFXLENBQUNDLFNBQVNDLGNBQWNDLFdBQWEsSUFBSUMsUUFBUSxDQUFDQyxTQUFTQztRQUMzRSxJQUFJLE9BQU9KLGlCQUFpQixZQUFZQSxlQUFlLEdBQUc7WUFDekQsTUFBTSxJQUFJSyxVQUFVO1FBQ3JCO1FBRUEsSUFBSUwsaUJBQWlCTSxVQUFVO1lBQzlCSCxRQUFRSjtZQUNSO1FBQ0Q7UUFFQSxNQUFNUSxRQUFRQyxXQUFXO1lBQ3hCLElBQUksT0FBT1AsYUFBYSxZQUFZO2dCQUNuQyxJQUFJO29CQUNIRSxRQUFRRjtnQkFDVCxFQUFFLE9BQU9RLE9BQU87b0JBQ2ZMLE9BQU9LO2dCQUNSO2dCQUVBO1lBQ0Q7WUFFQSxNQUFNYixVQUFVLE9BQU9LLGFBQWEsV0FBV0EsV0FBVyxDQUFDLHdCQUF3QixFQUFFRCxhQUFhLGFBQWEsQ0FBQztZQUNoSCxNQUFNVSxlQUFlVCxvQkFBb0JQLFFBQVFPLFdBQVcsSUFBSVIsYUFBYUc7WUFFN0UsSUFBSSxPQUFPRyxRQUFRWSxNQUFNLEtBQUssWUFBWTtnQkFDekNaLFFBQVFZLE1BQU07WUFDZjtZQUVBUCxPQUFPTTtRQUNSLEdBQUdWO1FBRUgsK0RBQStEO1FBQy9EVCxTQUNDLHdEQUF3RDtRQUN4RFEsUUFBUWEsSUFBSSxDQUFDVCxTQUFTQyxTQUN0QjtZQUNDUyxhQUFhTjtRQUNkO0lBRUY7QUFFQU8sT0FBT0MsT0FBTyxHQUFHakI7QUFDakIsK0NBQStDO0FBQy9DZ0IseUJBQXNCLEdBQUdoQjtBQUV6QmdCLDJCQUEyQixHQUFHckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW5jY2hhdC8uL25vZGVfbW9kdWxlcy9wLXRpbWVvdXQvaW5kZXguanM/N2FhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBGaW5hbGx5ID0gcmVxdWlyZSgncC1maW5hbGx5Jyk7XG5cbmNsYXNzIFRpbWVvdXRFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMubmFtZSA9ICdUaW1lb3V0RXJyb3InO1xuXHR9XG59XG5cbmNvbnN0IHBUaW1lb3V0ID0gKHByb21pc2UsIG1pbGxpc2Vjb25kcywgZmFsbGJhY2spID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0aWYgKHR5cGVvZiBtaWxsaXNlY29uZHMgIT09ICdudW1iZXInIHx8IG1pbGxpc2Vjb25kcyA8IDApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBgbWlsbGlzZWNvbmRzYCB0byBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuXHR9XG5cblx0aWYgKG1pbGxpc2Vjb25kcyA9PT0gSW5maW5pdHkpIHtcblx0XHRyZXNvbHZlKHByb21pc2UpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBmYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzb2x2ZShmYWxsYmFjaygpKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBtZXNzYWdlID0gdHlwZW9mIGZhbGxiYWNrID09PSAnc3RyaW5nJyA/IGZhbGxiYWNrIDogYFByb21pc2UgdGltZWQgb3V0IGFmdGVyICR7bWlsbGlzZWNvbmRzfSBtaWxsaXNlY29uZHNgO1xuXHRcdGNvbnN0IHRpbWVvdXRFcnJvciA9IGZhbGxiYWNrIGluc3RhbmNlb2YgRXJyb3IgPyBmYWxsYmFjayA6IG5ldyBUaW1lb3V0RXJyb3IobWVzc2FnZSk7XG5cblx0XHRpZiAodHlwZW9mIHByb21pc2UuY2FuY2VsID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRwcm9taXNlLmNhbmNlbCgpO1xuXHRcdH1cblxuXHRcdHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuXHR9LCBtaWxsaXNlY29uZHMpO1xuXG5cdC8vIFRPRE86IFVzZSBuYXRpdmUgYGZpbmFsbHlgIGtleXdvcmQgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxMFxuXHRwRmluYWxseShcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9wcmVmZXItYXdhaXQtdG8tdGhlblxuXHRcdHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpLFxuXHRcdCgpID0+IHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0fVxuXHQpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcFRpbWVvdXQ7XG4vLyBUT0RPOiBSZW1vdmUgdGhpcyBmb3IgdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHBUaW1lb3V0O1xuXG5tb2R1bGUuZXhwb3J0cy5UaW1lb3V0RXJyb3IgPSBUaW1lb3V0RXJyb3I7XG4iXSwibmFtZXMiOlsicEZpbmFsbHkiLCJyZXF1aXJlIiwiVGltZW91dEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJuYW1lIiwicFRpbWVvdXQiLCJwcm9taXNlIiwibWlsbGlzZWNvbmRzIiwiZmFsbGJhY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIlR5cGVFcnJvciIsIkluZmluaXR5IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJ0aW1lb3V0RXJyb3IiLCJjYW5jZWwiLCJ0aGVuIiwiY2xlYXJUaW1lb3V0IiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/p-timeout/index.js\n");

/***/ })

};
;