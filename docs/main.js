(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Desktop\mk\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentation/presentation.component */ "gVBG");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/skills.component */ "fGbd");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interests/interests.component */ "ZSS5");





class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 4, vars: 0, consts: [["id", "about"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_1__["PresentationComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"], _interests_interests_component__WEBPACK_IMPORTED_MODULE_3__["InterestsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 9, vars: 0, consts: [["id", "home", 1, "landing"], [1, "container"], [1, "box"], ["href", "assets/cv/Malek.pdf", "download", "", 1, "main-btn"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello, I'm Malek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome To My World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Download my cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".landing[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    background: url('landing.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .landing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: rgb(15, 1, 1);\r\n    line-height: 1.5;\r\n    animation: fadeInLeft 1.3s ease-in-out;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 55px;\r\n    font-weight: bold;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n  }\r\n  @keyframes fadeInLeft {\r\n    from {\r\n      opacity: 0;\r\n      transform: translateX(-300px);\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .landing[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%] {\r\n    background-color: rgb(59, 111, 189);\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    padding: 15px;\r\n    text-transform: uppercase;\r\n    border-radius: 30px;\r\n    display: inline-block;\r\n    transition: 0.7s ease;\r\n    margin-top: 25px;\r\n  }\r\n  .landing[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(106, 161, 243);\r\n    transform: scale(1.1);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0NBQTBEO0lBQzFELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsNkJBQTZCO0lBQy9CO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjtFQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vYXNzZXRzL2ltZ3MvbGFuZGluZy5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIH1cclxuICAubGFuZGluZyAuYm94IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxhbmRpbmcgaDEsXHJcbiAgLmxhbmRpbmcgaDIge1xyXG4gICAgY29sb3I6IHJnYigxNSwgMSwgMSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0IDEuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5sYW5kaW5nIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAubGFuZGluZyBoMiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgLmxhbmRpbmcgLm1haW4tYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTExLCAxODkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgLmxhbmRpbmcgLm1haW4tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDE2MSwgMjQzKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KPQl":
/*!**********************************************!*\
  !*** ./src/app/bullets/bullets.component.ts ***!
  \**********************************************/
/*! exports provided: BulletsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletsComponent", function() { return BulletsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BulletsComponent {
    constructor() { }
    ngOnInit() {
    }
    toHome() {
        document.getElementById("home").scrollIntoView();
    }
    toAbout() {
        document.getElementById("about").scrollIntoView();
    }
    toResume() {
        document.getElementById("resume").scrollIntoView();
    }
    toPortfolio() {
        document.getElementById("portfolio").scrollIntoView();
    }
    toContact() {
        document.getElementById("contact").scrollIntoView();
    }
}
BulletsComponent.ɵfac = function BulletsComponent_Factory(t) { return new (t || BulletsComponent)(); };
BulletsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BulletsComponent, selectors: [["app-bullets"]], decls: 21, vars: 0, consts: [[1, "navBullets"], [3, "click"], [1, "bi", "bi-house-door"], [1, "tooltips"], [1, "bi", "bi-person"], [1, "bi", "bi-file-earmark"], [1, "bi", "bi-card-text"], [1, "bi", "bi-envelope"]], template: function BulletsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BulletsComponent_Template_li_click_1_listener() { return ctx.toHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BulletsComponent_Template_li_click_5_listener() { return ctx.toAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BulletsComponent_Template_li_click_9_listener() { return ctx.toResume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BulletsComponent_Template_li_click_13_listener() { return ctx.toPortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BulletsComponent_Template_li_click_17_listener() { return ctx.toContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navBullets[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: 40px;\r\n    list-style: none;\r\n    z-index: 1000;\r\n  }\r\n  @media (max-width: 991px) {\r\n    .navBullets[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }\r\n  .navBullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 54px;\r\n    height: 54px;\r\n    background-color: #232324;\r\n    box-shadow: 0 0 10px #eaecee;\r\n    margin: 10px 0;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    position: relative;\r\n    padding: 11px 17px;\r\n    transition: transform 1s;\r\n  }\r\n  .navBullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    border-radius: 50% 0 0 50%;\r\n    background-color: #232324;\r\n    transform: translateX(10px);\r\n  }\r\n  .navBullets[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 0.877);\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n  }\r\n  .navBullets[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n  }\r\n  .navBullets[_ngcontent-%COMP%]   .tooltips[_ngcontent-%COMP%] {\r\n    background-color: #232324;\r\n    width: 90px;\r\n    color: rgba(255, 255, 255, 0.877);\r\n    padding: 15px 10px;\r\n    position: absolute;\r\n    left: 38px;\r\n    top: 0;\r\n    border-radius: 0 10% 10% 0;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    display: none;\r\n  }\r\n  .navBullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .tooltips[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVsbGV0cy9idWxsZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYnVsbGV0cy9idWxsZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2QnVsbGV0cyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5uYXZCdWxsZXRzIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLm5hdkJ1bGxldHMgbGkge1xyXG4gICAgd2lkdGg6IDU0cHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzI0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2VhZWNlZTtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTFweCAxN3B4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gIH1cclxuICAubmF2QnVsbGV0cyBsaTpob3ZlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMCAwIDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgfVxyXG4gIC5uYXZCdWxsZXRzIGkge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgfVxyXG4gIC5uYXZCdWxsZXRzIGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5uYXZCdWxsZXRzIC50b29sdGlwcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzI0O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3Nyk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzOHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMCUgMTAlIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubmF2QnVsbGV0cyBsaTpob3ZlciAudG9vbHRpcHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BulletsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bullets',
                templateUrl: './bullets.component.html',
                styleUrls: ['./bullets.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Q0x9":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 27, vars: 0, consts: [["id", "resume", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "resume"], [1, "main-heading"], [1, "container"], [1, "timeline-content"], [1, "title"], [1, "left"], [1, "content"], [1, "clearfix"], [1, "right"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Master Of Services And Network Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2019 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Applied Licence In Industrial IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2016 - 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Bachelor In Technical Sciences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2015 - 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #eaecee;\r\n    text-transform: uppercase;\r\n  }\r\n.main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: rgb(59, 111, 189);\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n\r\n.resume[_ngcontent-%COMP%] {\r\n    margin-top: 80px;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    width: 3px;\r\n    height: 100%;\r\n    background-color: #232324;\r\n    box-shadow: 0 0 10px #eaecee;\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -1px;\r\n    top: 0;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    margin: 20px auto;\r\n    width: 20%;\r\n    background-color: #232324;\r\n    box-shadow: 0 0 10px #eaecee;\r\n    position: relative;\r\n    z-index: 2;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    color: rgba(255, 255, 255, 0.877);\r\n    padding: 10px 30px;\r\n    font-weight: 600;\r\n    font-size: 22px;\r\n    margin-bottom: 45px;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: calc(50% - 25px);\r\n    margin-bottom: 40px;\r\n    position: relative;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]:before {\r\n    right: -35px;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:before {\r\n    left: -35px;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]:before, .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid #232324;\r\n    box-shadow: 0 0 10px #eaecee;\r\n    background-color: #171718;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    top: 20px;\r\n  }\r\n.clearfix[_ngcontent-%COMP%] {\r\n    clear: both;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n    background-color: #232324;\r\n    box-shadow: 0 0 10px #eaecee;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 0.877);\r\n    font-size: 17px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n  }\r\n.resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    color: rgba(255, 255, 255, 0.877);\r\n  }\r\n@media (max-width: 992px) {\r\n    .resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n      width: 60%;\r\n    }\r\n    .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      margin-bottom: 20px;\r\n    }\r\n    .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]:before, .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]:before {\r\n      display: none;\r\n    }\r\n    .resume[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQztJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtBQUNBLDhCQUE4QjtBQUU5QjtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixNQUFNO0VBQ1I7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNBOztJQUVFLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDQTs7SUFFRSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0E7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDRCQUE0QjtFQUM5QjtBQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztFQUNuQztBQUNBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7SUFDQTs7TUFFRSxXQUFXO01BQ1gsbUJBQW1CO0lBQ3JCO0lBQ0E7O01BRUUsYUFBYTtJQUNmO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tICMgU3RhcnQgVGl0bGUgIyAtLS0tLSAqL1xyXG4ubWFpbi1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG4gICAgY29sb3I6ICNlYWVjZWU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAubWFpbi1oZWFkaW5nOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTExLCAxODkpO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYm90dG9tOiAtMjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgfVxyXG4gIC8qIC0tLS0tICMgRW5kIFRpdGxlICMgLS0tLS0gKi9cclxuXHJcbiAgLnJlc3VtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIH1cclxuICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyNDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNlYWVjZWU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnJlc3VtZSAudGl0bGUge1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyNDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNlYWVjZWU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgfVxyXG4gIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLmxlZnQsXHJcbiAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCAucmlnaHQge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMjVweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IC5sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IC5sZWZ0OmJlZm9yZSB7XHJcbiAgICByaWdodDogLTM1cHg7XHJcbiAgfVxyXG4gIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLnJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCAucmlnaHQ6YmVmb3JlIHtcclxuICAgIGxlZnQ6IC0zNXB4O1xyXG4gIH1cclxuICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IC5sZWZ0OmJlZm9yZSxcclxuICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IC5yaWdodDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzIzMjMyNDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNlYWVjZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuY2xlYXJmaXgge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZWFlY2VlO1xyXG4gIH1cclxuICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IC5jb250ZW50IGgzIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc3KTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCAuY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3Nyk7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnJlc3VtZSAudGl0bGUge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgLnJlc3VtZSAudGltZWxpbmUtY29udGVudCAubGVmdCxcclxuICAgIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLnJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IC5sZWZ0OmJlZm9yZSxcclxuICAgIC5yZXN1bWUgLnRpbWVsaW5lLWNvbnRlbnQgLnJpZ2h0OmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucmVzdW1lIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _bullets_bullets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bullets/bullets.component */ "KPQl");











class AppComponent {
    constructor() {
        this.title = 'mk';
    }
    onWindowScroll() {
        this.scrollFunction();
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
    onscroll() {
        this.scrollFunction();
    }
    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btn-back-to-top").style.display = "block";
        }
        else {
            document.getElementById("btn-back-to-top").style.display = "none";
        }
    }
    topFunction() {
        document.body.scrollTop = 0; //For Safari
        document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 11, vars: 0, consts: [[1, "color"], ["type", "button", "id", "btn-back-to-top", 1, "btn", "btn-lg", 3, "click"], [1, "bi", "bi-arrow-up"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-bullets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() { return ctx.topFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _bullets_bullets_component__WEBPACK_IMPORTED_MODULE_9__["BulletsComponent"]], styles: [".color[_ngcontent-%COMP%] {\r\n    background-color: #171718;\r\n}\r\n#btn-back-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: #232324;\r\n    box-shadow: 0 0 10px #eaecee;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    display: none;\r\n    z-index: 1;\r\n}\r\n#btn-back-to-top[_ngcontent-%COMP%]:hover {\r\n    background-color: #4e4e4e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE4O1xyXG59XHJcbiNidG4tYmFjay10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzI0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2VhZWNlZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuI2J0bi1iYWNrLXRvLXRvcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presentation/presentation.component */ "gVBG");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interests/interests.component */ "ZSS5");
/* harmony import */ var _bullets_bullets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bullets/bullets.component */ "KPQl");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
        _interests_interests_component__WEBPACK_IMPORTED_MODULE_9__["InterestsComponent"],
        _bullets_bullets_component__WEBPACK_IMPORTED_MODULE_10__["BulletsComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
                    _interests_interests_component__WEBPACK_IMPORTED_MODULE_9__["InterestsComponent"],
                    _bullets_bullets_component__WEBPACK_IMPORTED_MODULE_10__["BulletsComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZSS5":
/*!**************************************************!*\
  !*** ./src/app/interests/interests.component.ts ***!
  \**************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InterestsComponent {
    constructor() { }
    ngOnInit() {
    }
}
InterestsComponent.ɵfac = function InterestsComponent_Factory(t) { return new (t || InterestsComponent)(); };
InterestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterestsComponent, selectors: [["app-interests"]], decls: 23, vars: 0, consts: [[1, "interests"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "main-heading"], [1, "container"], [1, "row"], [1, "col-sm-6", "col-md-6", "col-lg-4"], ["data-work", "Swimming", 1, "box", "mb-3"], ["src", "assets/imgs/interests/interests01.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Trainning", 1, "box", "mb-3"], ["src", "assets/imgs/interests/interests02.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Hiking", 1, "box", "mb-3"], ["src", "assets/imgs/interests/interests03.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Camping", 1, "box", "mb-3"], ["src", "assets/imgs/interests/interests04.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Coding", 1, "box", "mb-3"], ["src", "assets/imgs/interests/interests05.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"], ["data-work", "Cooking", 1, "box", "mb-3"], ["src", "assets/imgs/interests/interests06.jpg", "alt", "", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-once", "true", 1, "img-fluid"]], template: function InterestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Interests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #eaecee;\r\n    text-transform: uppercase;\r\n  }\r\n  .main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: rgb(59, 111, 189);\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n  \r\n  .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 17rem;\r\n    width: 26rem;\r\n  }\r\n  @media (max-width: 565px) {\r\n    .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  }\r\n  .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\n  .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]::before {\r\n    content: attr(data-work);\r\n    position: absolute;\r\n    background-color: rgba(213, 228, 252, 0.75);\r\n    width: calc(100% - 10px);\r\n    height: calc(100% - 10px);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    color: white;\r\n    transition: 0.3s;\r\n    font-size: 1.5rem;\r\n    transform: translateX(calc(-100% - 5px));\r\n    z-index: 1;\r\n  }\r\n  .interests[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover::before {\r\n    transform: translateX(0);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLGdDQUFnQztFQUNoQztJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBLDhCQUE4QjtFQUU5QjtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7RUFDQTtJQUNFO01BQ0UsV0FBVztJQUNiO0VBQ0Y7RUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUIiLCJmaWxlIjoic3JjL2FwcC9pbnRlcmVzdHMvaW50ZXJlc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qIC0tLS0tICMgU3RhcnQgVGl0bGUgIyAtLS0tLSAqL1xyXG4gIC5tYWluLWhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XHJcbiAgICBjb2xvcjogI2VhZWNlZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5tYWluLWhlYWRpbmc6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCAxMTEsIDE4OSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBib3R0b206IC0yNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICB9XHJcbiAgLyogLS0tLS0gIyBFbmQgVGl0bGUgIyAtLS0tLSAqL1xyXG5cclxuICAuaW50ZXJlc3RzIC5yb3cgaW1nIHtcclxuICAgIGhlaWdodDogMTdyZW07XHJcbiAgICB3aWR0aDogMjZyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjVweCkge1xyXG4gICAgLmludGVyZXN0cyAucm93IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW50ZXJlc3RzIC5yb3cgLmJveCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuaW50ZXJlc3RzIC5yb3cgLmJveDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS13b3JrKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEzLCAyMjgsIDI1MiwgMC43NSk7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEwMCUgLSA1cHgpKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5pbnRlcmVzdHMgLnJvdyAuYm94OmhvdmVyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interests',
                templateUrl: './interests.component.html',
                styleUrls: ['./interests.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 32, vars: 0, consts: [["id", "contact", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "contact"], [1, "main-heading"], [1, "container"], [1, "row", "text-center"], [1, "col-sm-6", "col-md-4", "col-lg-4", "mb-4"], [1, "card", "border-0"], [1, "h1", "mt-4"], [1, "bi", "bi-geo-alt"], [1, "card-body", "text-center"], [1, "card-title"], [1, "bi", "bi-envelope"], [1, "bi", "bi-telephone"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "koukimalek97@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "(+216) 58 787 449");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #eaecee;\r\n    text-transform: uppercase;\r\n    margin-top: 100px;\r\n  }\r\n.main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: rgb(59, 111, 189);\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%] {\r\n    padding-bottom: 50px;\r\n  }\r\n.contact[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #232324;\r\n    box-shadow: 0 0 10px rgb(59, 111, 189);\r\n  }\r\n.contact[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #fff;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtBQUNBLDhCQUE4QjtBQUU5QjtJQUNFLG9CQUFvQjtFQUN0QjtBQUNBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixzQ0FBc0M7RUFDeEM7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tICMgU3RhcnQgVGl0bGUgIyAtLS0tLSAqL1xyXG4ubWFpbi1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG4gICAgY29sb3I6ICNlYWVjZWU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG4gIC5tYWluLWhlYWRpbmc6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCAxMTEsIDE4OSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBib3R0b206IC0yNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICB9XHJcbiAgLyogLS0tLS0gIyBFbmQgVGl0bGUgIyAtLS0tLSAqL1xyXG5cclxuICAuY29udGFjdCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLmNvbnRhY3QgLmNhcmQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzI0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDU5LCAxMTEsIDE4OSk7XHJcbiAgfVxyXG4gIC5jb250YWN0IC5jYXJkIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "navbar"], [1, "container"], [1, "navbar-brand", "mb-0", "h1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Malek Kouki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    background-color: #232324;\r\n    box-shadow: 0 0 10px #eaecee;\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n  }\r\n  \r\n  .navbar-brand[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 0.877);\r\n    font-size: 35px;\r\n    font-weight: 500;\r\n    font-family: \"Brush Script MT\";\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOEJBQThCO0VBQ2hDIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAubmF2YmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzI0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2VhZWNlZTtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc3KTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogXCJCcnVzaCBTY3JpcHQgTVRcIjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 19, vars: 0, consts: [["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "skills"], [1, "main-heading"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-3", "col-sm-6", "logoHtml"], ["src", "../../assets/imgs/logo/html.png", "alt", ""], [1, "col-lg-3", "col-sm-6", "logoCss"], ["src", "../../assets/imgs/logo/css.png", "alt", ""], [1, "col-lg-3", "col-sm-6", "logoJs"], ["src", "../../assets/imgs/logo/js.png", "alt", ""], [1, "col-lg-3", "col-sm-6", "logoGitHub", "mb-5"], ["src", "../../assets/imgs/logo/github.png", "alt", ""], [1, "col-lg-3", "col-sm-6", "logoBootstrap"], ["src", "../../assets/imgs/logo/bootstrap.png", "alt", ""], [1, "col-lg-3", "col-sm-6", "logoGit"], ["src", "../../assets/imgs/logo/git.png", "alt", ""], [1, "col-lg-3", "col-sm-6", "logoNpm"], ["src", "../../assets/imgs/logo/npm.png", "alt", ""]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        font-weight: 600;\r\n        font-size: 28px;\r\n        position: relative;\r\n        margin-bottom: 55px;\r\n        color: #eaecee;\r\n        text-transform: uppercase;\r\n      }\r\n    .main-heading[_ngcontent-%COMP%]::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        background-color: rgb(59, 111, 189);\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n        bottom: -25px;\r\n        width: 50px;\r\n        height: 3px;\r\n      }\r\n    \r\n    .skills[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n   }\r\n    .logoHtml[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: 250px;\r\n  }\r\n    .logoCss[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    height: 180px;\r\n  }\r\n    .logoJs[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: 250px;\r\n  }\r\n    .logoGitHub[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: 250px;\r\n  }\r\n    .logoGit[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: 250px;\r\n  }\r\n    .logoBootstrap[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n    .logoNpm[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJLGdDQUFnQztJQUNoQztRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLHlCQUF5QjtNQUMzQjtJQUNBO1FBQ0UsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixtQ0FBbUM7UUFDbkMsU0FBUztRQUNULDJCQUEyQjtRQUMzQixhQUFhO1FBQ2IsV0FBVztRQUNYLFdBQVc7TUFDYjtJQUNBLDhCQUE4QjtJQUVqQztJQUNDLGdCQUFnQjtHQUNqQjtJQUNEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtJQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtJQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtJQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtJQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtJQUNBO0lBQ0UsWUFBWTtFQUNkO0lBQ0E7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLyogLS0tLS0gIyBTdGFydCBUaXRsZSAjIC0tLS0tICovXHJcbiAgICAubWFpbi1oZWFkaW5nIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbiAgICAgICAgY29sb3I6ICNlYWVjZWU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgICAubWFpbi1oZWFkaW5nOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTExLCAxODkpO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgYm90dG9tOiAtMjVweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgfVxyXG4gICAgICAvKiAtLS0tLSAjIEVuZCBUaXRsZSAjIC0tLS0tICovXHJcblxyXG4gICAuc2tpbGxzIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgIH1cclxuICAubG9nb0h0bWwge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgLmxvZ29Dc3Mge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICB9XHJcbiAgLmxvZ29KcyB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuICAubG9nb0dpdEh1YiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuICAubG9nb0dpdCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuICAubG9nb0Jvb3RzdHJhcCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIC5sb2dvTnBtIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 0, consts: [[1, "footer"], [1, "social"], ["href", "https://github.com/Project-dev2", "target", "_blank", 1, "github"], [1, "bi", "bi-github"], ["routerLink", "", 1, "facebook"], [1, "bi", "bi-facebook"], ["routerLink", "", 1, "instagram"], [1, "bi", "bi-instagram"], ["routerLink", "", 1, "linkedin"], [1, "bi", "bi-linkedin"], [1, "copyright", "mt-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A9 Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Malek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ". All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%] {\r\n    background-color: #2b2b2c;\r\n    text-align: center;\r\n    padding: 15px;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    list-style: none;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: white;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\r\n    background-color: #1877f2;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover {\r\n    background-color: #5897eb;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%] {\r\n    background-color: #dd2a7b;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]:hover {\r\n    background-color: #db659a;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%] {\r\n    background-color: #0077b5;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%]:hover {\r\n    background-color: #2197d6;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%] {\r\n    background-color: #3f3e3e;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover {\r\n    background-color: #6e6a6a;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n    color: #eaecee;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwgbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgLmZvb3RlciAuc29jaWFsIGxpIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLmZvb3RlciAuc29jaWFsIC5mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N2YyO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwgLmZhY2Vib29rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODk3ZWI7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbCAuaW5zdGFncmFtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDJhN2I7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbCAuaW5zdGFncmFtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjY1OWE7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbCAubGlua2VkaW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdiNTtcclxuICB9XHJcbiAgLmZvb3RlciAuc29jaWFsIC5saW5rZWRpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5N2Q2O1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwgLmdpdGh1YiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZTNlO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwgLmdpdGh1Yjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU2YTZhO1xyXG4gIH1cclxuICAuZm9vdGVyIC5jb3B5cmlnaHQge1xyXG4gICAgY29sb3I6ICNlYWVjZWU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAuZm9vdGVyIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gVBG":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PresentationComponent {
    constructor() { }
    ngOnInit() {
    }
}
PresentationComponent.ɵfac = function PresentationComponent_Factory(t) { return new (t || PresentationComponent)(); };
PresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresentationComponent, selectors: [["app-presentation"]], decls: 35, vars: 0, consts: [["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "about"], [1, "main-heading"], [1, "container"], [1, "image"], ["src", "assets/imgs/about.jpg", 1, "img-fluid"], [1, "text"], [1, "card", "border-0", "mb-4"], [1, "fw-bold"], [1, "card", "border-0"]], template: function PresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I am a person who is passionate about everything related to IT and I am quite ambitious when it comes to discovering new technologies. I always try to develop my knowledge and skills in the IT world on my own with only personal knowledge and for this reason I consider myself self-taught. I would like to acquire new skills and challenges to enhance my experience in the professional world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Birthday :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 07 August 1997");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Phone :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " (+216) 58 787 449");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "City :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Age :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Degree :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " koukimalek97@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #eaecee;\r\n    text-transform: uppercase;\r\n  }\r\n  .main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: rgb(59, 111, 189);\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n  \r\n  .about[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 504;\r\n    height: 255px;\r\n    margin-right: 30px;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n    line-height: 1.5;\r\n    font-size: 15px;\r\n    color: #eaecee;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    line-height: 0;\r\n    background-color: #171718;\r\n    color: #eaecee;\r\n  }\r\n  @media (max-width: 992px) {\r\n    .about[_ngcontent-%COMP%] {\r\n      margin-bottom: 25px;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-wrap: wrap;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      display: block;\r\n      margin: auto;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n      margin-top: 15px;\r\n    }\r\n  }\r\n  @media (min-width: 992px) {\r\n    .about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n      float: left;\r\n      margin-right: 145px;\r\n    }\r\n    .about[_ngcontent-%COMP%] {\r\n      min-height: 63vh;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLGdDQUFnQztFQUNoQztJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBLDhCQUE4QjtFQUU5QjtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7RUFDQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxjQUFjO01BQ2QsWUFBWTtJQUNkO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjtFQUNBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLyogLS0tLS0gIyBTdGFydCBUaXRsZSAjIC0tLS0tICovXHJcbiAgLm1haW4taGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxuICAgIGNvbG9yOiAjZWFlY2VlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLm1haW4taGVhZGluZzo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDExMSwgMTg5KTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gIH1cclxuICAvKiAtLS0tLSAjIEVuZCBUaXRsZSAjIC0tLS0tICovXHJcblxyXG4gIC5hYm91dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuYWJvdXQgLmNvbnRhaW5lciBpbWcge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTA0O1xyXG4gICAgaGVpZ2h0OiAyNTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcbiAgLmFib3V0IC5jb250YWluZXIgLnRleHQge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI2VhZWNlZTtcclxuICB9XHJcbiAgLmFib3V0IC5jb250YWluZXIgLmNhcmQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE4O1xyXG4gICAgY29sb3I6ICNlYWVjZWU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmFib3V0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIC5hYm91dCAuY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgIC5hYm91dCAuY29udGFpbmVyIGltZyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgLmNvbnRhaW5lciAudGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmFib3V0IC5jb250YWluZXIgLmNhcmQge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNDVweDtcclxuICAgIH1cclxuICAgIC5hYm91dCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDYzdmg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presentation',
                templateUrl: './presentation.component.html',
                styleUrls: ['./presentation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 54, vars: 0, consts: [[1, "portfolio"], [1, "main-heading"], ["id", "portfolio"], [1, "container", "filter"], ["type", "radio", "id", "all", "name", "project"], ["for", "all"], ["type", "radio", "id", "recent", "name", "project"], ["for", "recent"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "row", "work", "recent", "mb-5", "align-items-center", "justify-content-center"], [1, "col-md"], ["src", "assets/imgs/portfolio/portfolio02.png"], [1, "col-md", "py-4", "school"], [1, "mb-5"], ["href", "https://github.com/Project-Dev2/CarthageSchool", "target", "_blank"], ["data-bs-toggle", "modal", "data-bs-target", "#school"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "row", "work", "old", "mb-5", "align-items-center", "justify-content-center"], ["src", "assets/imgs/portfolio/portfolio01.png"], [1, "col-md", "py-4", "med"], ["href", "https://github.com/Project-Dev2/ProjectCabinet", "target", "_blank"], ["href", "https://project-dev2.github.io/ProjectCabinet/", "target", "_blank"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-once", "true", 1, "row", "work", "old", "align-items-center", "justify-content-center"], ["src", "assets/imgs/portfolio/portfolio03.png"], [1, "col-md", "shop"], ["href", "https://github.com/Project-Dev2/ProjectPara", "target", "_blank"], ["href", "https://project-dev2.github.io/ProjectPara/", "target", "_blank"], ["id", "school", "tabindex", "-1", "aria-labelledby", "schoolLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], ["controls", ""], ["src", "assets/vds/school.mp4", "type", "video/mp4"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Some Works from my portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Carthage School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "html5 / css3 / bootstrap / angular10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "DermaMed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "html5 / css3 / bootstrap / javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Para Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "html5 / css3 / bootstrap / javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "video", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "source", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n    position: relative;\r\n    margin-bottom: 65px;\r\n    color: #eaecee;\r\n    text-transform: uppercase;\r\n  }\r\n  .main-heading[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background-color: rgb(59, 111, 189);\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    bottom: -25px;\r\n    width: 50px;\r\n    height: 3px;\r\n  }\r\n  \r\n  .works[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n  }\r\n  .portfolio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    color: #eaecee;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    margin-bottom: 5px;\r\n  }\r\n  .portfolio[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n  }\r\n  .work[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px #eaecee;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n  }\r\n  .school[_ngcontent-%COMP%], .shop[_ngcontent-%COMP%], .med[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {    \r\n    font-size: 14px;\r\n    color: #eaecee;\r\n    margin-bottom: 25px;\r\n  }\r\n  section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n    border: 1px solid #eaecee;\r\n    border-radius: 8px;\r\n    padding: 5px 9px;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n    color: #eaecee;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  .modal[_ngcontent-%COMP%] {\r\n    padding-top: 150px;\r\n  }\r\n  .school[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #3cb371;\r\n    border: 1px solid #3cb371;\r\n    color: #fff;\r\n  }\r\n  .med[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #20b2aa;\r\n    border: 1px solid #20b2aa;\r\n    color: #fff;\r\n  }\r\n  .shop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #60c7c1;\r\n    border: 1px solid #60c7c1;\r\n    color: #fff;\r\n  }\r\n  img[_ngcontent-%COMP%] {\r\n    border-radius: 8px;\r\n  }\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    font-weight: 600;\r\n    color: #eaecee;\r\n  }\r\n  input[type=\"radio\"][_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .filter[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  label[_ngcontent-%COMP%] {\r\n    border: 2px solid rgb(59, 111, 189);\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    color: rgb(59, 111, 189);\r\n    cursor: pointer;\r\n    margin: 15px 10px;\r\n    padding: 5px 15px;\r\n    font-weight: 500;\r\n    border-radius: 8px;\r\n  }\r\n  input[type=\"radio\"][id=\"recent\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], input[type=\"radio\"][id=\"recent\"][_ngcontent-%COMP%]:hover    + label[_ngcontent-%COMP%], input[type=\"radio\"][id=\"all\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], input[type=\"radio\"][id=\"all\"][_ngcontent-%COMP%]:hover    + label[_ngcontent-%COMP%] {\r\n    background: rgb(59, 111, 189);\r\n    color: #fff;\r\n  }\r\n  input[type=\"radio\"][id=\"recent\"][_ngcontent-%COMP%]:checked    ~ .old[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLGdDQUFnQztFQUNoQztJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsU0FBUztJQUNULDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBLDhCQUE4QjtFQUU5QjtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7RUFDQTs7O0lBR0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxxQkFBcUI7O0VBRXZCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTs7OztJQUlFLDZCQUE2QjtJQUM3QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLyogLS0tLS0gIyBTdGFydCBUaXRsZSAjIC0tLS0tICovXHJcbiAgLm1haW4taGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxuICAgIGNvbG9yOiAjZWFlY2VlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLm1haW4taGVhZGluZzo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDExMSwgMTg5KTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gIH1cclxuICAvKiAtLS0tLSAjIEVuZCBUaXRsZSAjIC0tLS0tICovXHJcblxyXG4gIC53b3JrcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAucG9ydGZvbGlvIHB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogI2VhZWNlZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAucG9ydGZvbGlvIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICAud29yayB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZWFlY2VlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC5zY2hvb2wsXHJcbiAgLnNob3AsXHJcbiAgLm1lZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIHNlY3Rpb24gcCB7ICAgIFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNlYWVjZWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICBzZWN0aW9uIGF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlY2VlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDlweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2VhZWNlZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICAubW9kYWwge1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gIH1cclxuICAuc2Nob29sIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjYjM3MTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzY2IzNzE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLm1lZCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGIyYWE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjBiMmFhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5zaG9wIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwYzdjMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MGM3YzE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjZWFlY2VlO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZpbHRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1OSwgMTExLCAxODkpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoNTksIDExMSwgMTg5KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMTVweCAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl1baWQ9XCJyZWNlbnRcIl06Y2hlY2tlZCArIGxhYmVsLFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXVtpZD1cInJlY2VudFwiXTpob3ZlciArIGxhYmVsLFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXVtpZD1cImFsbFwiXTpjaGVja2VkICsgbGFiZWwsXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdW2lkPVwiYWxsXCJdOmhvdmVyICsgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU5LCAxMTEsIDE4OSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdW2lkPVwicmVjZW50XCJdOmNoZWNrZWQgfiAub2xkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map