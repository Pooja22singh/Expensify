/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//Object Destructuring\n\n\n// const person={\n//     name:\"Pooja\",\n//     age:26,\n//     location:{\n//         city:'Gurgaon',\n//         temperature:\"25\"\n//     }\n// }\n// //const [name,age]=[person.name,person.age];\n// const {name:firstName=\"Anonymous\",age:newAge,location}=person;\n// const {city,temperature:temp}=person.location;\n// console.log(`${firstName} is of ${newAge} yr(s). and live in ${city} and the temperature is ${temp}`);\n\n// const book={\n//     title:\"abcdef\",\n//     author:\"rfergerfrf\",\n//     publisher:{\n//         name:\"dbkidfeiuw\"\n//     }\n// };\n// const {title,author}=book;\n// const {name:firstNamme=\"fesfsfsdfsdfdsfdsd\"}=book.publisher;\n// console.log(`Hello I am ${title} and with author ${author} and publisher ${firstNamme}`)\n//Array Destructuring\nvar address = [\"Pooja\", \"U10/42\", \"Galli Number 10\", \"U Block\", \"DLF Phase 3\", \"Gurgaon\"];\nname = address[0];\nhouse = address[1];\nstreet = address[2];\nblock = address[3];\narea = address[4];\nvar _address$ = address[5];\ncity = _address$ === undefined ? \"Gurugram\" : _address$;\n\nconsole.log(name + \" lives in \" + house + \", \" + street + \", \" + block + \", \" + area + \",\" + city);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGxheWdyb3VuZC9kZXN0cnVjdHVyaW5nLmpzP2Y2ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy9PYmplY3QgRGVzdHJ1Y3R1cmluZ1xyXG5cclxuXHJcbi8vIGNvbnN0IHBlcnNvbj17XHJcbi8vICAgICBuYW1lOlwiUG9vamFcIixcclxuLy8gICAgIGFnZToyNixcclxuLy8gICAgIGxvY2F0aW9uOntcclxuLy8gICAgICAgICBjaXR5OidHdXJnYW9uJyxcclxuLy8gICAgICAgICB0ZW1wZXJhdHVyZTpcIjI1XCJcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAvL2NvbnN0IFtuYW1lLGFnZV09W3BlcnNvbi5uYW1lLHBlcnNvbi5hZ2VdO1xyXG4vLyBjb25zdCB7bmFtZTpmaXJzdE5hbWU9XCJBbm9ueW1vdXNcIixhZ2U6bmV3QWdlLGxvY2F0aW9ufT1wZXJzb247XHJcbi8vIGNvbnN0IHtjaXR5LHRlbXBlcmF0dXJlOnRlbXB9PXBlcnNvbi5sb2NhdGlvbjtcclxuLy8gY29uc29sZS5sb2coYCR7Zmlyc3ROYW1lfSBpcyBvZiAke25ld0FnZX0geXIocykuIGFuZCBsaXZlIGluICR7Y2l0eX0gYW5kIHRoZSB0ZW1wZXJhdHVyZSBpcyAke3RlbXB9YCk7XHJcblxyXG4vLyBjb25zdCBib29rPXtcclxuLy8gICAgIHRpdGxlOlwiYWJjZGVmXCIsXHJcbi8vICAgICBhdXRob3I6XCJyZmVyZ2VyZnJmXCIsXHJcbi8vICAgICBwdWJsaXNoZXI6e1xyXG4vLyAgICAgICAgIG5hbWU6XCJkYmtpZGZlaXV3XCJcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy8gY29uc3Qge3RpdGxlLGF1dGhvcn09Ym9vaztcclxuLy8gY29uc3Qge25hbWU6Zmlyc3ROYW1tZT1cImZlc2ZzZnNkZnNkZmRzZmRzZFwifT1ib29rLnB1Ymxpc2hlcjtcclxuLy8gY29uc29sZS5sb2coYEhlbGxvIEkgYW0gJHt0aXRsZX0gYW5kIHdpdGggYXV0aG9yICR7YXV0aG9yfSBhbmQgcHVibGlzaGVyICR7Zmlyc3ROYW1tZX1gKVxyXG4vL0FycmF5IERlc3RydWN0dXJpbmdcclxuY29uc3QgYWRkcmVzcz1bXCJQb29qYVwiLFwiVTEwLzQyXCIsXCJHYWxsaSBOdW1iZXIgMTBcIixcIlUgQmxvY2tcIixcIkRMRiBQaGFzZSAzXCIsXCJHdXJnYW9uXCJdO1xyXG5bbmFtZSxob3VzZSxzdHJlZXQsYmxvY2ssYXJlYSxjaXR5PVwiR3VydWdyYW1cIl09YWRkcmVzcztcclxuY29uc29sZS5sb2coYCR7bmFtZX0gbGl2ZXMgaW4gJHtob3VzZX0sICR7c3RyZWV0fSwgJHtibG9ja30sICR7YXJlYX0sJHtjaXR5fWApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGxheWdyb3VuZC9kZXN0cnVjdHVyaW5nLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);