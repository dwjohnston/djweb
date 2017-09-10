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

__webpack_require__(1);

document.write(__webpack_require__(2));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <div class =\"page\">\r\n\r\n\r\n    <div class =\"page-inner\">\r\n      <header>\r\n\r\n        <div>\r\n          <h1>David Johnston</h1>\r\n          <span>Full stack web developer</span>\r\n\r\n      </div>\r\n\r\n        <div class = \"contact-details\">\r\n          <table class = \"contact-details\">\r\n\r\n            <tr>\r\n              <td><img class =\"icon icon-email\"/> </td> <td>+64 22 473 8301 <td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td><img class =\"icon icon-phone\"/> </td> <td>david@blacksheepcode.com <td>\r\n            </tr>\r\n\r\n              <tr>\r\n                <td><img class =\"icon icon-github\"/> </td> <td>https://github.com/dwjohnston <td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td><img class =\"icon icon-stackoverflow\"/> </td> <td>https://stackoverflow.com<br/>/users/1068446/dwjohnston <td>\r\n              </tr>\r\n            </table>\r\n        </div>\r\n\r\n      </header>\r\n\r\n\r\n      <div class =\"body\">\r\n        <div class=\"column column-left\">\r\n          <section id =\"profile\">\r\n            <h2> Profile</h2>\r\n\r\n            <p>\r\n              I'm an full stack developer, with experience ranging from front-end HTML, CSS and JavaScript, to backend JavaScript and Java, API creation, build pipeline management, database querying and DNS and proxy managment.\r\n            </p>\r\n\r\n            <p>\r\n              I enjoy working in agile and fast paced teams, with tight feedback loops.\r\n            </p>\r\n\r\n            <p>\r\n             I enjoy creating rich but lightweight and pleasant to use, and pleasant to write, web-applications.\r\n            </p>\r\n\r\n            <p>\r\n              When I'm not writing code, I keep active with pinball, writing, photography, and I enjoy dancing.\r\n            </p>\r\n\r\n          </section>\r\n\r\n          <section id =\"skill-set\">\r\n            <h2> Skill Set </h2>\r\n\r\n\r\n<div>\r\n\r\n            <section>\r\n            <h3> Front End </h3>\r\n            <ul>\r\n              <li> CSS3</li>\r\n              <li> HTML5 </li>\r\n              <li> JavaScript (ES5/ES6)</li>\r\n              <li> React </li>\r\n              <li> Redux </li>\r\n              <li> Angular (1.4.x)</li>\r\n              <li> Bootstrap</li>\r\n              <li> JQuery</li>\r\n            </ul>\r\n          </section>\r\n\r\n          <section>\r\n\r\n            <h3> Backend </h3>\r\n            <ul>\r\n              <li> NodeJs</li>\r\n              <li> Java (7/8)</li>\r\n              <li> SQL</li>\r\n              <li> NoSQL (Mongo, Neo4j)</li>\r\n              <li> ExpressJs</li>\r\n              <li> Linux </li>\r\n            </ul>\r\n          </section>\r\n\r\n\r\n\r\n      <section>\r\n            <h3> Dev Ops </h3>\r\n            <ul>\r\n              <li> Maven </li>\r\n              <li> Webpack </li>\r\n              <li> Jenkins </li>\r\n              <li> AWS </li>\r\n              <li> Heroku</li>\r\n            </ul>\r\n\r\n      </section>\r\n      <section>\r\n            <h3> Testing </h3>\r\n            <ul>\r\n              <li> JUnit</li>\r\n              <li> Mockito</li>\r\n              <li> Selium </li>\r\n              <li> Jasmine </li>\r\n            </ul>\r\n      </section>\r\n\r\n\r\n    </div>\r\n          </section>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"column  column-right\">\r\n          <section id =\"experience\">\r\n            <h2>Commercial Experience</h2>\r\n\r\n            <h3>Datacom</h3>\r\n            <span class =\"experience-job-title\"> Intermediate Java Developer </span>\r\n            <span class =\"experience-time-period\"> August 2016 - Present</span>\r\n\r\n            <p class = \"job-summary\">\r\n              Developer for business unit providing Single Sign On and Digital Identity solutions. <br/>\r\n              I've worked on the government provided RealMe digital identity, and a single sign on for teachers.\r\n            </p>\r\n\r\n            <h4> Responsiblities</h4>\r\n            <ul>\r\n                <li>Implementing designs created by graphic designer as CSS and HTML </li>\r\n                <li>Creating reusable JSF components</li>\r\n                <li>Configuring Maven for assets build pipeline (SCSS compilation, JS validation, minification) </li>\r\n                <li>Configuring Jenkins for automating release to develoment/test environments</li>\r\n                <li>Providing process feedback to optimise our requirements gathering workflow.</li>\r\n            </ul>\r\n\r\n\r\n            <h3>Inland Revenue</h3>\r\n            <span class =\"experience-job-title\">Intelligence Analyst </span>\r\n            <span class =\"experience-time-period\"> January 2013 - August 2016</span>\r\n            <p class =\"job-summary\">\r\n              Extract Transform Load (ETL) development on big data business intelligence project.\r\n            </p>\r\n            <h4> Responsiblities</h4>\r\n            <ul>\r\n              <li>\r\n                Writing SAS code to transform and consolidate raw business data into a coherrent document format, to feed into intelligence extraction algorithm.\r\n              </li>\r\n              <li>\r\n                Created a browser-based web application for displaying and exploring Neo4j graph data.\r\n              </li>\r\n            </ul>\r\n\r\n\r\n\r\n          </section>\r\n\r\n          <section id=\"education\">\r\n            <h2> Education </h2>\r\n\r\n            <ul>\r\n              <li> University of Canterbury - Bachelor of Science (Computer Science) - 2012 </li>\r\n              <li> University of Otago - Bachelor of Art (Philosophy) - 2007 </li>\r\n              <li> Oracle Certified Associate - Java SE 8 Programmer</li>\r\n            </ul>\r\n\r\n          </section>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <footer>\r\n\r\n        <div class =\"about\">\r\n        <h6> About this CV </h6>\r\n        <p> This is an HTML CV.</p>\r\n        <p> I created it using webpack and a node module called <span class =\"pre\"> html5-to-pdf</span>\r\n        </div>\r\n\r\n        <div class =\"github\">\r\n          <h6> See it on Github: </h6>\r\n          <table class =\"contact-details\">\r\n            <tr>\r\n              <td><img class =\"icon icon-github\"/> </td> <td>https://github.com/dwjohnston/cv<td>\r\n            </tr>\r\n          </table>\r\n\r\n          <p>  <b> Theme:</b> I ain't no graphic designer </p>\r\n        </div>\r\n\r\n\r\n      </footer>\r\n\r\n    </div>\r\n\r\n  </div>\r\n";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map