"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-retry";
exports.ids = ["vendor-chunks/p-retry"];
exports.modules = {

/***/ "(rsc)/./node_modules/p-retry/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-retry/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst retry = __webpack_require__(/*! retry */ \"(rsc)/./node_modules/retry/index.js\");\nconst networkErrorMsgs = [\n    \"Failed to fetch\",\n    \"NetworkError when attempting to fetch resource.\",\n    \"The Internet connection appears to be offline.\",\n    \"Network request failed\" // `cross-fetch`\n];\nclass AbortError extends Error {\n    constructor(message){\n        super();\n        if (message instanceof Error) {\n            this.originalError = message;\n            ({ message } = message);\n        } else {\n            this.originalError = new Error(message);\n            this.originalError.stack = this.stack;\n        }\n        this.name = \"AbortError\";\n        this.message = message;\n    }\n}\nconst decorateErrorWithCounts = (error, attemptNumber, options)=>{\n    // Minus 1 from attemptNumber because the first attempt does not count as a retry\n    const retriesLeft = options.retries - (attemptNumber - 1);\n    error.attemptNumber = attemptNumber;\n    error.retriesLeft = retriesLeft;\n    return error;\n};\nconst isNetworkError = (errorMessage)=>networkErrorMsgs.includes(errorMessage);\nconst pRetry = (input, options)=>new Promise((resolve, reject)=>{\n        options = {\n            onFailedAttempt: ()=>{},\n            retries: 10,\n            ...options\n        };\n        const operation = retry.operation(options);\n        operation.attempt(async (attemptNumber)=>{\n            try {\n                resolve(await input(attemptNumber));\n            } catch (error) {\n                if (!(error instanceof Error)) {\n                    reject(new TypeError(`Non-error was thrown: \"${error}\". You should only throw errors.`));\n                    return;\n                }\n                if (error instanceof AbortError) {\n                    operation.stop();\n                    reject(error.originalError);\n                } else if (error instanceof TypeError && !isNetworkError(error.message)) {\n                    operation.stop();\n                    reject(error);\n                } else {\n                    decorateErrorWithCounts(error, attemptNumber, options);\n                    try {\n                        await options.onFailedAttempt(error);\n                    } catch (error) {\n                        reject(error);\n                        return;\n                    }\n                    if (!operation.retry(error)) {\n                        reject(operation.mainError());\n                    }\n                }\n            }\n        });\n    });\nmodule.exports = pRetry;\n// TODO: remove this in the next major version\nmodule.exports[\"default\"] = pRetry;\nmodule.exports.AbortError = AbortError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcC1yZXRyeS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE1BQU1BLFFBQVFDLG1CQUFPQSxDQUFDO0FBRXRCLE1BQU1DLG1CQUFtQjtJQUN4QjtJQUNBO0lBQ0E7SUFDQSx5QkFBeUIsZ0JBQWdCO0NBQ3pDO0FBRUQsTUFBTUMsbUJBQW1CQztJQUN4QkMsWUFBWUMsT0FBTyxDQUFFO1FBQ3BCLEtBQUs7UUFFTCxJQUFJQSxtQkFBbUJGLE9BQU87WUFDN0IsSUFBSSxDQUFDRyxhQUFhLEdBQUdEO1lBQ3BCLEdBQUNBLE9BQU8sRUFBQyxHQUFHQSxPQUFNO1FBQ3BCLE9BQU87WUFDTixJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJSCxNQUFNRTtZQUMvQixJQUFJLENBQUNDLGFBQWEsQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztRQUN0QztRQUVBLElBQUksQ0FBQ0MsSUFBSSxHQUFHO1FBQ1osSUFBSSxDQUFDSCxPQUFPLEdBQUdBO0lBQ2hCO0FBQ0Q7QUFFQSxNQUFNSSwwQkFBMEIsQ0FBQ0MsT0FBT0MsZUFBZUM7SUFDdEQsaUZBQWlGO0lBQ2pGLE1BQU1DLGNBQWNELFFBQVFFLE9BQU8sR0FBSUgsQ0FBQUEsZ0JBQWdCO0lBRXZERCxNQUFNQyxhQUFhLEdBQUdBO0lBQ3RCRCxNQUFNRyxXQUFXLEdBQUdBO0lBQ3BCLE9BQU9IO0FBQ1I7QUFFQSxNQUFNSyxpQkFBaUJDLENBQUFBLGVBQWdCZixpQkFBaUJnQixRQUFRLENBQUNEO0FBRWpFLE1BQU1FLFNBQVMsQ0FBQ0MsT0FBT1AsVUFBWSxJQUFJUSxRQUFRLENBQUNDLFNBQVNDO1FBQ3hEVixVQUFVO1lBQ1RXLGlCQUFpQixLQUFPO1lBQ3hCVCxTQUFTO1lBQ1QsR0FBR0YsT0FBTztRQUNYO1FBRUEsTUFBTVksWUFBWXpCLE1BQU15QixTQUFTLENBQUNaO1FBRWxDWSxVQUFVQyxPQUFPLENBQUMsT0FBTWQ7WUFDdkIsSUFBSTtnQkFDSFUsUUFBUSxNQUFNRixNQUFNUjtZQUNyQixFQUFFLE9BQU9ELE9BQU87Z0JBQ2YsSUFBSSxDQUFFQSxDQUFBQSxpQkFBaUJQLEtBQUksR0FBSTtvQkFDOUJtQixPQUFPLElBQUlJLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRWhCLE1BQU0sZ0NBQWdDLENBQUM7b0JBQ3RGO2dCQUNEO2dCQUVBLElBQUlBLGlCQUFpQlIsWUFBWTtvQkFDaENzQixVQUFVRyxJQUFJO29CQUNkTCxPQUFPWixNQUFNSixhQUFhO2dCQUMzQixPQUFPLElBQUlJLGlCQUFpQmdCLGFBQWEsQ0FBQ1gsZUFBZUwsTUFBTUwsT0FBTyxHQUFHO29CQUN4RW1CLFVBQVVHLElBQUk7b0JBQ2RMLE9BQU9aO2dCQUNSLE9BQU87b0JBQ05ELHdCQUF3QkMsT0FBT0MsZUFBZUM7b0JBRTlDLElBQUk7d0JBQ0gsTUFBTUEsUUFBUVcsZUFBZSxDQUFDYjtvQkFDL0IsRUFBRSxPQUFPQSxPQUFPO3dCQUNmWSxPQUFPWjt3QkFDUDtvQkFDRDtvQkFFQSxJQUFJLENBQUNjLFVBQVV6QixLQUFLLENBQUNXLFFBQVE7d0JBQzVCWSxPQUFPRSxVQUFVSSxTQUFTO29CQUMzQjtnQkFDRDtZQUNEO1FBQ0Q7SUFDRDtBQUVBQyxPQUFPQyxPQUFPLEdBQUdaO0FBQ2pCLDhDQUE4QztBQUM5Q1cseUJBQXNCLEdBQUdYO0FBRXpCVyx5QkFBeUIsR0FBRzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3luY2NoYXQvLi9ub2RlX21vZHVsZXMvcC1yZXRyeS9pbmRleC5qcz83MDJhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IHJldHJ5ID0gcmVxdWlyZSgncmV0cnknKTtcblxuY29uc3QgbmV0d29ya0Vycm9yTXNncyA9IFtcblx0J0ZhaWxlZCB0byBmZXRjaCcsIC8vIENocm9tZVxuXHQnTmV0d29ya0Vycm9yIHdoZW4gYXR0ZW1wdGluZyB0byBmZXRjaCByZXNvdXJjZS4nLCAvLyBGaXJlZm94XG5cdCdUaGUgSW50ZXJuZXQgY29ubmVjdGlvbiBhcHBlYXJzIHRvIGJlIG9mZmxpbmUuJywgLy8gU2FmYXJpXG5cdCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJyAvLyBgY3Jvc3MtZmV0Y2hgXG5dO1xuXG5jbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHRoaXMub3JpZ2luYWxFcnJvciA9IG1lc3NhZ2U7XG5cdFx0XHQoe21lc3NhZ2V9ID0gbWVzc2FnZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3JpZ2luYWxFcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0XHRcdHRoaXMub3JpZ2luYWxFcnJvci5zdGFjayA9IHRoaXMuc3RhY2s7XG5cdFx0fVxuXG5cdFx0dGhpcy5uYW1lID0gJ0Fib3J0RXJyb3InO1xuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH1cbn1cblxuY29uc3QgZGVjb3JhdGVFcnJvcldpdGhDb3VudHMgPSAoZXJyb3IsIGF0dGVtcHROdW1iZXIsIG9wdGlvbnMpID0+IHtcblx0Ly8gTWludXMgMSBmcm9tIGF0dGVtcHROdW1iZXIgYmVjYXVzZSB0aGUgZmlyc3QgYXR0ZW1wdCBkb2VzIG5vdCBjb3VudCBhcyBhIHJldHJ5XG5cdGNvbnN0IHJldHJpZXNMZWZ0ID0gb3B0aW9ucy5yZXRyaWVzIC0gKGF0dGVtcHROdW1iZXIgLSAxKTtcblxuXHRlcnJvci5hdHRlbXB0TnVtYmVyID0gYXR0ZW1wdE51bWJlcjtcblx0ZXJyb3IucmV0cmllc0xlZnQgPSByZXRyaWVzTGVmdDtcblx0cmV0dXJuIGVycm9yO1xufTtcblxuY29uc3QgaXNOZXR3b3JrRXJyb3IgPSBlcnJvck1lc3NhZ2UgPT4gbmV0d29ya0Vycm9yTXNncy5pbmNsdWRlcyhlcnJvck1lc3NhZ2UpO1xuXG5jb25zdCBwUmV0cnkgPSAoaW5wdXQsIG9wdGlvbnMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0b3B0aW9ucyA9IHtcblx0XHRvbkZhaWxlZEF0dGVtcHQ6ICgpID0+IHt9LFxuXHRcdHJldHJpZXM6IDEwLFxuXHRcdC4uLm9wdGlvbnNcblx0fTtcblxuXHRjb25zdCBvcGVyYXRpb24gPSByZXRyeS5vcGVyYXRpb24ob3B0aW9ucyk7XG5cblx0b3BlcmF0aW9uLmF0dGVtcHQoYXN5bmMgYXR0ZW1wdE51bWJlciA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc29sdmUoYXdhaXQgaW5wdXQoYXR0ZW1wdE51bWJlcikpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRpZiAoIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuXHRcdFx0XHRyZWplY3QobmV3IFR5cGVFcnJvcihgTm9uLWVycm9yIHdhcyB0aHJvd246IFwiJHtlcnJvcn1cIi4gWW91IHNob3VsZCBvbmx5IHRocm93IGVycm9ycy5gKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgQWJvcnRFcnJvcikge1xuXHRcdFx0XHRvcGVyYXRpb24uc3RvcCgpO1xuXHRcdFx0XHRyZWplY3QoZXJyb3Iub3JpZ2luYWxFcnJvcik7XG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yICYmICFpc05ldHdvcmtFcnJvcihlcnJvci5tZXNzYWdlKSkge1xuXHRcdFx0XHRvcGVyYXRpb24uc3RvcCgpO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVjb3JhdGVFcnJvcldpdGhDb3VudHMoZXJyb3IsIGF0dGVtcHROdW1iZXIsIG9wdGlvbnMpO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgb3B0aW9ucy5vbkZhaWxlZEF0dGVtcHQoZXJyb3IpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFvcGVyYXRpb24ucmV0cnkoZXJyb3IpKSB7XG5cdFx0XHRcdFx0cmVqZWN0KG9wZXJhdGlvbi5tYWluRXJyb3IoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcFJldHJ5O1xuLy8gVE9ETzogcmVtb3ZlIHRoaXMgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHBSZXRyeTtcblxubW9kdWxlLmV4cG9ydHMuQWJvcnRFcnJvciA9IEFib3J0RXJyb3I7XG4iXSwibmFtZXMiOlsicmV0cnkiLCJyZXF1aXJlIiwibmV0d29ya0Vycm9yTXNncyIsIkFib3J0RXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsIm9yaWdpbmFsRXJyb3IiLCJzdGFjayIsIm5hbWUiLCJkZWNvcmF0ZUVycm9yV2l0aENvdW50cyIsImVycm9yIiwiYXR0ZW1wdE51bWJlciIsIm9wdGlvbnMiLCJyZXRyaWVzTGVmdCIsInJldHJpZXMiLCJpc05ldHdvcmtFcnJvciIsImVycm9yTWVzc2FnZSIsImluY2x1ZGVzIiwicFJldHJ5IiwiaW5wdXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uRmFpbGVkQXR0ZW1wdCIsIm9wZXJhdGlvbiIsImF0dGVtcHQiLCJUeXBlRXJyb3IiLCJzdG9wIiwibWFpbkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/p-retry/index.js\n");

/***/ })

};
;