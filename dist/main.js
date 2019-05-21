(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            if (_this.location.path() !== '/sections') {
                if (window.outerWidth > 991) {
                    window.document.children[0].scrollTop = 0;
                }
                else {
                    window.document.activeElement.scrollTop = 0;
                }
            }
            _this.navbar.sidebarClose();
            _this.renderer.listenGlobal('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (_this.location.path() !== '/sections') {
                    if (number > 150 || window.pageYOffset > 150) {
                        // add logic
                        if (_location !== 'register') {
                            navbar.classList.remove('navbar-transparent');
                        }
                    }
                    else if (_location !== 'addproduct' && _location !== 'login' && _location !== 'register' && _this.location.path() !== '/nucleoicons') {
                        // remove logic
                        navbar.classList.add('navbar-transparent');
                    }
                }
            });
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _live_live_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./live/live.module */ "./src/app/live/live.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");

 // this is needed!








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _live_live_module__WEBPACK_IMPORTED_MODULE_7__["LiveModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _live_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./live/landing/landing.component */ "./src/app/live/landing/landing.component.ts");
/* harmony import */ var _live_blogposts_blogposts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./live/blogposts/blogposts.component */ "./src/app/live/blogposts/blogposts.component.ts");
/* harmony import */ var _live_blogpost_swtd_blogpost_swtd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./live/blogpost-swtd/blogpost-swtd.component */ "./src/app/live/blogpost-swtd/blogpost-swtd.component.ts");
/* harmony import */ var _live_blogpost_rwea_blogpost_rwea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./live/blogpost-rwea/blogpost-rwea.component */ "./src/app/live/blogpost-rwea/blogpost-rwea.component.ts");









var routes = [
    { path: '', redirectTo: 'live/landing', pathMatch: 'full' },
    { path: 'live/landing', component: _live_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'live/blogposts', component: _live_blogposts_blogposts_component__WEBPACK_IMPORTED_MODULE_6__["BlogpostsComponent"] },
    { path: 'live/blogpost-swtd', component: _live_blogpost_swtd_blogpost_swtd_component__WEBPACK_IMPORTED_MODULE_7__["BlogpostSwtdComponent"] },
    { path: 'live/blogpost-rwea', component: _live_blogpost_rwea_blogpost_rwea_component__WEBPACK_IMPORTED_MODULE_8__["BlogpostRweaComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/live/blogpost-rwea/blogpost-rwea.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/live/blogpost-rwea/blogpost-rwea.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n  <div class=\"page-header page-header-small\">\r\n      <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/Alpine_1.jpg') ;\">\r\n      </div>\r\n      <div class=\"content-center\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                  <h2 class=\"title\">An Unusual Evening in Alpine</h2>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section\">\r\n      <div class=\"section\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-8 ml-auto mr-auto\">\r\n                      <h3 class=\"title\">We struck up a conversation with the bartender...</h3>\r\n                      <p>...in the Hotel Paisano in Marfa, Texas. He told us that while he works in Marfa, \r\n                        he actually lives in Alpine, about 20 miles east on highway 90 and since we were staying \r\n                        in the Lost Alaskan RV park in Alpine, we asked him to recommend some cool, local places \r\n                        to get a drink. He said we should try either Harry's Tenaja or the Hotel Ritchey.\r\n                        <br />\r\n                        <br/> A few nights later we found ourselves going into the Hotel Ritchey, once a hotel \r\n                          but now a wine saloon and beer garden, where I ordered a sparkling water and the wife \r\n                          ordered a glass of Spanish red. The main room in the bar has about 6 small tables so \r\n                          we picked one out and sat down. \r\n                        </p>\r\n                      <p class=\"blockquote blockquote-primary\">\r\n                        “Austin may be weird, but Alpine is far out\"  \r\n                          <br>\r\n                          <br>\r\n                          <small>\r\n                            unofficial slogan of Alpine, Texas  \r\n                          </small>\r\n                      </p>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-blog col-md-10 ml-auto mr-auto\">\r\n          <div class=\"container\">\r\n              <div class=\"section-story-overview\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                          <div class=\"image-container image-left\" style=\"background-image: url('assets/img/Seminole_7.jpg')\">\r\n                              <!-- First image on the left side -->\r\n                              <p class=\"blockquote blockquote-primary\">“The Murphys, who were Irish Catholics, officially filed for and developed the plat for the original town of Murphyville. In 1888, the village name was changed to Alpine.” \r\n                                  <br>\r\n                                  <br>\r\n                                  <small>-B.J. Gallego (from La Vista de la Frontera Vol. 16(1):10.)</small>\r\n                              </p>\r\n                          </div>\r\n                          <!-- Second image on the left side of the article -->\r\n                          <div class=\"image-container image-left-bottom\" style=\"background-image: url('assets/img/Alpine_6.jpg')\">\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-5\">\r\n                          <!-- First image on the right side, above the article -->\r\n                          <div class=\"image-container image-right\" style=\"background-image: url('assets/img/Alpine_5.jpg')\">\r\n                          </div>\r\n                          <h3>The bar looks a lot like the Hollywood image of an old West bar...</h3>\r\n                          <p>\r\n                              ...in fact we were commenting on that when Roberta, the woman at the next \r\n                              table began to explain the history of the hotel to us, which you can read \r\n                              <a href=\"http://www.hotelritchey.com\">here.</a> Within a few minutes we were joined \r\n                              by Albert, a scruffy, mildly inebriate character who I assumed was the town drunk. \r\n                              He asked Roberta if he could sit at her table and because she acquiesced so \r\n                              begrudgingly I expected him to be one of those annoying drunks who gets on everyone's nerves.\r\n                              <br>\r\n                              <br>\r\n                              Upon seeing Albert join us, a man named Ted, a temporary Chicago transplant, \r\n                              pulled up a chair.\r\n                          </p>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-8 ml-auto mr-auto\">\r\n                      <h3 class=\"title\">We chatted about the virtues of Alpine for awhile...</h3>\r\n                      <p> ...such as the climate, the restaurants and the people. At some point,\r\n                          someone mentioned the Marfa lights and the term \"weird shit\" was used and \r\n                          that seemed to be the cue Ted was waiting for and he said \"Speaking of weird \r\n                          shit, Albert here is the local expert on weird shit!\". As I began to speculate that\r\n                          he probably worked at the local waste treatment plant, Albert began to expound \r\n                          on his favorite topic: \"Did Indigenous Peoples in the area feed mushrooms to their \r\n                          domesticated turkey's, especially during hard times?\". Determining this involved, \r\n                          among other things, a study of fossilized turkey shit, hence the reference to his expertise.\r\n                      </p>\r\n                         <br />\r\n                      <p> I was shocked...I told Albert \"When you walked up I thought you would have nothing \r\n                          interesting to say\", talk about a lesson in not judging a book by it's cover! \r\n                      </p>\r\n                        <br />\r\n                      <p>\r\n                          Anyway, Albert began to heat up to his topic, in that mildly drunk speed-talking way. \r\n                          He got especially excited when he found out that Eloisa was from Spain. He described \r\n                          how he was researching colonial Spanish papers looking for clues in his search. \r\n                          He explained how there were 3 words in colonial Spanish that were used for \"mushroom\" \r\n                          and he wondered if she could elaborate on the differences between the words. After \r\n                          Eloisa did her best to field his question she finally asked him why he cared about \r\n                          this subject and that's when we learned that Albert taught at Sul Ross University \r\n                          and was on a research grant. He admitted there was no obvious practical application \r\n                          for learning the answer to the turkey shit question, except to gain knowledge for knowledge's sake.\r\n                          <br />\r\n                          <br />\r\n                          After chatting for awhile we got hungry so we decided to go next door to the Mexican restaurant. \r\n                          As we got up to leave, Roberta also made her her escape, it was obvious she'd heard this shit before.\r\n                      </p>\r\n                    </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  <footer class=\"footer \" data-background-color=\"black\">\r\n      <div class=\"container\">\r\n          <div class=\"copyright\">\r\n              &copy; Designed by\r\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim and Ted Garoutte</a>. \r\n          </div>\r\n      </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/live/blogpost-rwea/blogpost-rwea.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/live/blogpost-rwea/blogpost-rwea.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmUvYmxvZ3Bvc3QtcndlYS9ibG9ncG9zdC1yd2VhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/live/blogpost-rwea/blogpost-rwea.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/live/blogpost-rwea/blogpost-rwea.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogpostRweaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostRweaComponent", function() { return BlogpostRweaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var BlogpostRweaComponent = /** @class */ (function () {
    function BlogpostRweaComponent() {
    }
    BlogpostRweaComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('blog-post-rwea');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    BlogpostRweaComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('blog-post-rwea');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    BlogpostRweaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogpost-rwea',
            template: __webpack_require__(/*! ./blogpost-rwea.component.html */ "./src/app/live/blogpost-rwea/blogpost-rwea.component.html"),
            styles: [__webpack_require__(/*! ./blogpost-rwea.component.scss */ "./src/app/live/blogpost-rwea/blogpost-rwea.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogpostRweaComponent);
    return BlogpostRweaComponent;
}());



/***/ }),

/***/ "./src/app/live/blogpost-swtd/blogpost-swtd.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/live/blogpost-swtd/blogpost-swtd.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n  <div class=\"page-header page-header-small\">\r\n      <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/White_Shaman_Cabin_1.jpg') ;\">\r\n      </div>\r\n      <div class=\"content-center\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                  <h2 class=\"title\">The Strange Attraction of Southwest Texas</h2>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section\">\r\n      <div class=\"section\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-8 ml-auto mr-auto\">\r\n                      <h3 class=\"title\">One of the earliest trips Eloisa and I took...</h3>\r\n                      <p>...to the desert in southwest Texas was to spend  \r\n                        a weekend with another couple in a cabin overlooking the Pecos river. The cabin we \r\n                        stayed in was on land once owned by the Rock Art Foundation but now owned by the \r\n                        Witte Museum of San Antonio (you can read about it <a href=\"https://www.wittemuseum.org/rock-art/\">here.</a>\r\n                        <br />\r\n                          <br /> The couple we were staying with, Dave and Patty, had access to the cabin because Dave \r\n                          was one of the guides to the pictograph sites on the land. The cabin was extremely \r\n                          rustic, with no electricity or running water and since this trip occurred in a time before \r\n                          smart phones, we spent the evenings talking to each other. During one of our \r\n                          conversations I remember telling Dave that even though that part of the country is \r\n                          impressive, I just wasn't comfortable there. He asked why, and after a short pause I told \r\n                          him that everything about the area felt dangerous to me. \r\n                          </p>\r\n                      <p class=\"blockquote blockquote-primary\">\r\n                        \"I couldn't believe Texas was real. When I arrived there, there wasn't a blade of green grass or a leaf to be seen, but I was absolutely crazy about it. There wasn't a tree six inches in diameter at the time. For me Texas is the same big wonderful thing that the oceans and the highest mountains are.\"  \r\n                          <br>\r\n                          <br>\r\n                          <small>\r\n                            Georgia O'Keefe - artist  \r\n                          </small>\r\n                      </p>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-blog col-md-10 ml-auto mr-auto\">\r\n          <div class=\"container\">\r\n              <div class=\"section-story-overview\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                          <div class=\"image-container image-left\" style=\"background-image: url('assets/img/Seminole_4.jpg')\">\r\n                              <!-- First image on the left side -->\r\n                              <p class=\"blockquote blockquote-primary\">“This country will kill you in a heartbeat and still people love it.” \r\n                                  <br>\r\n                                  <br>\r\n                                  <small>-Cormac McCarthy, \"No Country for Old Men\"</small>\r\n                              </p>\r\n                          </div>\r\n                          <!-- Second image on the left side of the article -->\r\n                          <div class=\"image-container image-left-bottom\" style=\"background-image: url('assets/img/Seminole_5.jpg')\">\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-5\">\r\n                          <!-- First image on the right side, above the article -->\r\n                          <div class=\"image-container image-right\" style=\"background-image: url('assets/img/Seminole_1.jpg')\">\r\n                          </div>\r\n                          <h3>In truth, the desert near where the Pecos and Rio Grande rivers converge is dangerous.</h3>\r\n                          <p>\r\n                                It's dry scrubland covered with prickly pear cactus, tasajillo, yucca, and Agave \r\n                                lechuguilla...all species of vegetation evolved to poke you with spiny leaves or thorns if \r\n                                you get too close. And the creatures that populate the area aren't much \r\n                                different...scorpions, centipedes, snakes and red ants prevail. It's a very sparsely populated area. \r\n                                From Comstock to Sanderson is 88 miles of of scrubland with only small towns like Langtry (pop. 12) and Dryden (pop. 33) \r\n                                and the occasional scattered ranch house (some occupied, but most abandoned) to break up the monotony of the road. \r\n                                A break-down on this road, where there is often no cell phone service and little traffic could mean hours of \r\n                                sitting and waiting for a Highway Patrol cruiser to happen by.  It truly feels desolate.\r\n                          </p>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-8 ml-auto mr-auto\">\r\n                      <h3 class=\"title\">But...the desolation is also part of its attraction.</h3>\r\n                      <p> Sometimes, the silence is so complete \r\n                            you can feel your mind and body relax like you've been unplugged. And the night sky \r\n                            is so dark you can see a multitude of stars with a clarity not seen in most parts of \r\n                            the country. Dave told me that he knew of a few people who had sold their homes in the\r\n                            city and bought ranches in the area to try to permanently get that feeling of serenity. But\r\n                            after a while, most of them began to go a little crazy from the loneliness and isolation and\r\n                            ran back to the noise and chaos of civilization.\r\n                            \r\n                      </p>\r\n                         <br /> \r\n                      <p> We've been back to the desert many times since that trip. We usually stay at Seminole \r\n                            Canyon State Park, about 10 miles west of Comstock. Sometimes we stay for just a weekend and \r\n                            sometimes we stay for a few weeks. For us, it’s like recharging out “inner-peace” batteries, \r\n                            and it can be an almost spiritual experience…but I wouldn’t want to live there.\r\n                      </p>\r\n                    </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  <footer class=\"footer \" data-background-color=\"black\">\r\n      <div class=\"container\">\r\n          <div class=\"copyright\">\r\n              &copy; Designed by\r\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim and Jim Garoutte</a>.\r\n          </div>\r\n      </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/live/blogpost-swtd/blogpost-swtd.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/live/blogpost-swtd/blogpost-swtd.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmUvYmxvZ3Bvc3Qtc3d0ZC9ibG9ncG9zdC1zd3RkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/live/blogpost-swtd/blogpost-swtd.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/live/blogpost-swtd/blogpost-swtd.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogpostSwtdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostSwtdComponent", function() { return BlogpostSwtdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var BlogpostSwtdComponent = /** @class */ (function () {
    function BlogpostSwtdComponent() {
    }
    BlogpostSwtdComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('blog-post-swtd');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    BlogpostSwtdComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('blog-post-swtd');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    BlogpostSwtdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogpost-swtd',
            template: __webpack_require__(/*! ./blogpost-swtd.component.html */ "./src/app/live/blogpost-swtd/blogpost-swtd.component.html"),
            styles: [__webpack_require__(/*! ./blogpost-swtd.component.scss */ "./src/app/live/blogpost-swtd/blogpost-swtd.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogpostSwtdComponent);
    return BlogpostSwtdComponent;
}());



/***/ }),

/***/ "./src/app/live/blogposts/blogposts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/live/blogposts/blogposts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/Rear_View.jpg') ;\">\r\n        </div>\r\n        <div class=\"content-center\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                    <h2 class=\"title\">Adventures and Lessons Learned</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"projects-4\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 px-0\">\r\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/Seminole_3.jpg')\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-title text-left\">\r\n                                <h2>\r\n                                    <a [routerLink]=\"['/live/blogpost-swtd']\">\r\n                                        The Strange Attraction of Southwest Texas\r\n                                    </a>\r\n                                </h2>\r\n                            </div>\r\n                            <div class=\"card-footer text-left\">\r\n                                <div class=\"stats\">\r\n                                    <span>\r\n                                        <i class=\"now-ui-icons users_circle-08\"></i>Jim Garoutte\r\n                                    </span>\r\n                                    <span>\r\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> February 26, 2019\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"stats-link pull-right\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 px-0\">\r\n                    <div class=\"card card-fashion\">\r\n                        <div class=\"card-title\">\r\n                            <a href=\"#pablo\">\r\n                                <h4>\r\n                                    <a [routerLink]=\"['/live/blogpost-rwea']\">\r\n                                        An Unusual Evening in Alpine...\r\n                                    </a>\r\n                                </h4>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <span>\r\n                                        <i class=\"now-ui-icons users_circle-08\"></i>Jim Garoutte\r\n                                    </span>\r\n                                    <span>\r\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> March 15, 2019\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"stats-link pull-right\">\r\n                                    <!-- <a href=\"#pablo\">Sea</a>&sbquo;\r\n                                    <a href=\"#pablo\">Magazine</a> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 px-0\">\r\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/Alpine_2.jpg')\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-3 px-0\">\r\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project12.jpg')\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 px-0\">\r\n                    <div class=\"card card-fashion arrow-left\">\r\n                        <div class=\"card-title\">\r\n                            <h4>\r\n                                <a href=\"#pablo\">\r\n                                    My Depressing Summers in Belize\r\n                                </a>\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <span>\r\n                                        <i class=\"now-ui-icons users_circle-08\"></i>John Bruno\r\n                                    </span>\r\n                                    <span>\r\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"stats-link pull-right\">\r\n                                    <a href=\"#pablo\">Opinion</a>&sbquo;\r\n                                    <a href=\"#pablo\">Outdoor</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 px-0\">\r\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project13.jpg')\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-title text-left\">\r\n                                <h2>\r\n                                    <a href=\"#pablo\">China Wants Fish, So Africa Goes Hungry</a>\r\n                                </h2>\r\n                            </div>\r\n                            <div class=\"card-footer text-left\">\r\n                                <div class=\"stats\">\r\n                                    <span>\r\n                                        <i class=\"now-ui-icons users_circle-08\"></i>Joanna Klein\r\n                                    </span>\r\n                                    <span>\r\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"stats-link pull-right\">\r\n                                    <a href=\"#pablo\" class=\"footer-link\">People</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"main\">\r\n        <div class=\"container\">\r\n            <!-- <div class=\"section\">\r\n                <h3 class=\"title text-center\">You may also be interested in</h3>\r\n                <br />\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card card-plain card-blog\">\r\n                            <div class=\"card-image\">\r\n                                <a href=\"#pablo\">\r\n                                    <img class=\"img rounded img-raised\" src=\"assets/img/bg5.jpg\" />\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <h6 class=\"category text-info\">Enterprise</h6>\r\n                                <h4 class=\"card-title\">\r\n                                    <a href=\"#pablo\">Autodesk looks to future of 3D printing with Project Escher</a>\r\n                                </h4>\r\n                                <p class=\"card-description\">\r\n                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.\r\n                                    <a href=\"#pablo\"> Read More </a>\r\n                                </p>\r\n                                <div class=\"author\">\r\n                                    <img src=\"assets/img/olivia.jpg\" alt=\"...\" class=\"avatar img-raised\" />\r\n                                    <span>Anna Spark</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card card-plain card-blog\">\r\n                            <div class=\"card-image\">\r\n                                <a href=\"#pablo\">\r\n                                    <img class=\"img rounded img-raised\" src=\"assets/img/bg27.jpg\" />\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <h6 class=\"category text-success\">\r\n                                    Startups\r\n                                </h6>\r\n                                <h4 class=\"card-title\">\r\n                                    <a href=\"#pablo\">Lyft launching cross-platform service this week</a>\r\n                                </h4>\r\n                                <p class=\"card-description\">\r\n                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.\r\n                                    <a href=\"#pablo\"> Read More </a>\r\n                                </p>\r\n                                <div class=\"author\">\r\n                                    <img src=\"assets/img/michael.jpg\" alt=\"...\" class=\"avatar img-raised\">\r\n                                    <span>John Black</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card card-plain card-blog\">\r\n                            <div class=\"card-image\">\r\n                                <a href=\"#pablo\">\r\n                                    <img class=\"img rounded img-raised\" src=\"assets/img/bg21.jpg\" />\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <h6 class=\"category text-danger\">\r\n                                    <i class=\"now-ui-icons media-2_sound-wave\"></i> Enterprise\r\n                                </h6>\r\n                                <h4 class=\"card-title\">\r\n                                    <a href=\"#pablo\">6 insights into the French Fashion landscape</a>\r\n                                </h4>\r\n                                <p class=\"card-description\">\r\n                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.\r\n                                    <a href=\"#pablo\"> Read More </a>\r\n                                </p>\r\n                                <div class=\"author\">\r\n                                    <img src=\"assets/img/james.jpg\" alt=\"...\" class=\"avatar img-raised\">\r\n                                    <span>James Newman</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n        <!-- <div class=\"section pt-0 pb-0\">\r\n            <div class=\"team-3 section-image\" data-parallax=\"true\" style=\"background-image: url('assets/img/bg26.jpg')\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                            <h2 class=\"title\">Our little team.</h2>\r\n                            <h4 class=\"description\">\r\n                                This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\r\n                            <div class=\"card card-profile\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"card-image\">\r\n                                            <a href=\"#pablo\">\r\n                                                <img class=\"img\" src=\"assets/img/olivia.jpg\">\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7\">\r\n                                        <div class=\"card-body\">\r\n                                            <h3 class=\"card-title\">Ariana Hazel</h3>\r\n                                            <h6 class=\"category text-primary\"> Fashion Designer</h6>\r\n                                            <p class=\"card-description\">\r\n                                                Happiness resides not in possessions, and not in gold, happiness dwells in the soul...\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\r\n                            <div class=\"card card-profile\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"card-image\">\r\n                                            <a href=\"#pablo\">\r\n                                                <img class=\"img\" src=\"assets/img/james.jpg\">\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7\">\r\n                                        <div class=\"card-body\">\r\n                                            <h3 class=\"card-title\">Ryan Samuel</h3>\r\n                                            <h6 class=\"category text-primary\">Financial Examiner</h6>\r\n                                            <p class=\"card-description\">\r\n                                                Today you are you! That is truer than true! There is no one alive who is you-er than you!..\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <!-- <div class=\"subscribe-line subscribe-line-white\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h4 class=\"title\">Get Tips &amp; Tricks every Week!</h4>\r\n                        <p class=\"description\">\r\n                            Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"card card-plain card-form-horizontal\">\r\n                            <div class=\"card-content\">\r\n                                <form method=\"\" action=\"\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-8\">\r\n                                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                              <div class=\"input-group-prepend\">\r\n                                                  <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                                              </div>\r\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"button\" class=\"btn btn-primary btn-round btn-block\">Subscribe</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n    <footer class=\"footer \" data-background-color=\"black\">\r\n        <div class=\"container\">\r\n            <div class=\"content\">\r\n                <div class=\"row\">\r\n                    <!-- <div class=\"col-md-2\">\r\n                        <h5>About Us</h5>\r\n                        <ul class=\"links-vertical\">\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    Blog\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    About Us\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    Presentation\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    Contact Us\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <h5>Market</h5>\r\n                        <ul class=\"links-vertical\">\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    Sales FAQ\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    How to Register\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    Sell Goods\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    Receive Payment\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    Transactions Issues\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"text-muted\">\r\n                                    Affiliates Program\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <h5>Social Feed</h5>\r\n                        <div class=\"social-feed\">\r\n                            <div class=\"feed-line\">\r\n                                <i class=\"fa fa-twitter\"></i>\r\n                                <p>How to handle ethical disagreements with your clients.</p>\r\n                            </div>\r\n                            <div class=\"feed-line\">\r\n                                <i class=\"fa fa-twitter\"></i>\r\n                                <p>The tangible benefits of designing at 1x pixel density.</p>\r\n                            </div>\r\n                            <div class=\"feed-line\">\r\n                                <i class=\"fa fa-facebook-square\"></i>\r\n                                <p>A collection of 25 stunning sites that you can use for inspiration.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <h5>Follow Us</h5>\r\n                        <ul class=\"social-buttons\">\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-twitter btn-round\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-facebook btn-round\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-dribbble btn-round\">\r\n                                    <i class=\"fa fa-dribbble\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-google btn-round\">\r\n                                    <i class=\"fa fa-google-plus\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-instagram btn-round\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                        <h5>\r\n                            <small>Numbers Don't Lie</small>\r\n                        </h5>\r\n                        <h5>14.521\r\n                            <small class=\"text-muted\">Freelancers</small>\r\n                        </h5>\r\n                        <h5>1.423.183\r\n                            <small class=\"text-muted\">Transactions</small>\r\n                        </h5>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <hr />\r\n            <div class=\"copyright\">\r\n                    &copy; Designed by\r\n                    <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                    <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim and Jim Garoutte</a>.\r\n                </div>\r\n            <!-- <div class=\"copyright\">\r\n              © {{data | date: 'yyyy'}} Creative Tim All Rights Reserved.\r\n            </div> -->\r\n        </div>\r\n    </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/live/blogposts/blogposts.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/live/blogposts/blogposts.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmUvYmxvZ3Bvc3RzL2Jsb2dwb3N0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/live/blogposts/blogposts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/live/blogposts/blogposts.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogpostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostsComponent", function() { return BlogpostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var BlogpostsComponent = /** @class */ (function () {
    function BlogpostsComponent() {
        this.data = new Date();
    }
    BlogpostsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('blog-posts');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    BlogpostsComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('blog-posts');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    BlogpostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogposts',
            template: __webpack_require__(/*! ./blogposts.component.html */ "./src/app/live/blogposts/blogposts.component.html"),
            styles: [__webpack_require__(/*! ./blogposts.component.scss */ "./src/app/live/blogposts/blogposts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogpostsComponent);
    return BlogpostsComponent;
}());



/***/ }),

/***/ "./src/app/live/landing/landing.component.html":
/*!*****************************************************!*\
  !*** ./src/app/live/landing/landing.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">3  <div class=\"page-header page-header-large\">\r\n      <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/2375_4a.jpg');\">\r\n      </div>\r\n      <div class=\"container\">\r\n          <div class=\"content-center\">\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <h1 class=\"title\">Life, as we know it...</h1>\r\n              <!-- <div class=\"text-center\">\r\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                      <i class=\"fa fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                      <i class=\"fa fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                      <i class=\"fa fa-google-plus\"></i>\r\n                  </a>\r\n              </div> -->\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-about-us\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                  <h2 class=\"title\">Who we are</h2>\r\n                  <h5 class=\"description\">We're Jim and Eloisa Garoutte and we're lucky enough to be living our dream!\r\n                  </h5>\r\n              </div>\r\n          </div>\r\n          <div class=\"separator separator-primary\"></div>\r\n          <div class=\"section-story-overview\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <div class=\"image-container image-left\" style=\"background-image: url('assets/img/September_2018_route.jpg')\">\r\n                          <!-- First image on the left side -->\r\n                          <p class=\"blockquote blockquote-primary\">\"Moving me down the highway. Rolling me down the highway. Moving ahead so life won't pass me by. \"\r\n                              <br>\r\n                              <br>\r\n                              <small>-Jim Croce</small>\r\n                          </p>\r\n                      </div>\r\n                      <!-- Second image on the left side of the article -->\r\n                      <div class=\"image-container\" style=\"background-image: url('assets/img/2375_2.jpg')\"></div>\r\n                  </div>\r\n                  <div class=\"col-md-5\">\r\n                      <!-- First image on the right side, above the article -->\r\n                      <div class=\"image-container image-right\" style=\"background-image: url('assets/img/Jim_Elo_1.jpg')\"></div>\r\n                      <h3>Pursuing a life filled with new experiences.</h3>\r\n                      <p>\r\n                          Eloisa always said \"I don't want to wait until we retire to get to travel!\". But like most people, jobs and children kept us locked into a schedule that only allowed us the opportunity to travel on weekends, holidays and for two weeks of vacation each year. Coincidentally, that all changed in 2018 when two things happened: I got a remote job and our only child went off to college.\r\n                      </p> \r\n                      <p>\r\n                          Suddenly we had all this freedom to travel, but travelling is expensive...so how can we do it without going into debt? Well, we've always loved to camp. In fact, we were avid tent campers for 25 years. But in 2011 we felt we were getting a bit too old to crawl in and out of a tent so we took the plunge and bought our first travel trailer, a used 21 foot bunkhouse model made by R-Vision. Here was our solution, we'd see the country in our 21 foot travel trailer!\r\n                      </p>\r\n                      <p>\r\n                          Our first trip (as empty nesters) was for the entire month of September 2018, right after we dropped our daughter off at college. We took a 2000 mile jaunt through parts of Texas, New Mexico, and Colorado and that's where we discovered that our little travel trailer just wasn't big enough for our new lifestyle. After lots of research by Eloisa, we decided on replacing it with the 2019 Lance 2375 you see pictured above.\r\n                      </p>                          \r\n                      <p>\r\n                          The blog posts on this website will contain stories, information and photos about our experiences. Thanks for stopping by!\r\n                      </p>\r\n                      <p>Jim Garoutte, February 2019</p> \r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"section section-team text-center\">\r\n      <div class=\"container\">\r\n          <h2 class=\"title\">Here is our team</h2>\r\n          <div class=\"team\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                      <div class=\"team-player\">\r\n                          <img src=\"assets/img/Eloisa_Garoutte_2.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                          <h4 class=\"title\">Eloisa Garoutte</h4>\r\n                          <p class=\"category text-primary\">Logistics and Photography</p>\r\n                          <p class=\"description\">Eloisa is our resident logistics expert. Every bite of food, \r\n                              item of clothing and creature comfort available in our trailer can be attributed \r\n                              to her skill at planning and preparation. In addition, she is an artist of \r\n                              considerable range. She draws, paints, and documents our travels through her \r\n                              beautiful photography. And finally, she's an extremely talented chef who prepares \r\n                              gourmet meals for us while we're on the road!\r\n                              <!-- <a href=\"#\">links</a> for people to be able to follow them outside the site. -->\r\n                          </p>\r\n                          <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\r\n                          <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-instagram\"></i></a>\r\n                          <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-facebook-square\"></i></a> -->\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                      <div class=\"team-player\">\r\n                          <img src=\"assets/img/Jim_Garoutte_8.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                          <h4 class=\"title\">Jim Garoutte</h4>\r\n                          <p class=\"category text-primary\">Driving and Website Development</p>\r\n                          <p class=\"description\">Jim does all of the driving, firewood chopping and outdoor \r\n                              grilling. He also determines which gas stations to stop at, which is not always \r\n                              an easy task while towing a 28 ft travel trailer! Additionally, he is using his \r\n                              Angular programming skills (in conjunction with the Creative Tim template) to \r\n                              develop this website.\r\n                              <!-- <a href=\"#\">links</a> for people to be able to follow them outside the site. -->\r\n                          </p>\r\n                          <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\r\n                          <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-linkedin\"></i></a> -->\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                      <div class=\"team-player\">\r\n                          <img src=\"assets/img/Indi_4.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                          <h4 class=\"title\">Iñigo Montoya (Indi)</h4>\r\n                          <p class=\"category text-primary\">Security and Unconditional Love</p>\r\n                          <p class=\"description\">Indi's vigilance keeps us safe from all manner of real and imaginary threats. He also makes us feel better on drab and dreary days with his gentle demeanor and sweet face. He's a good boy!\r\n                              <!-- <a href=\"#\">links</a> for people to be able to follow them outside the site. -->\r\n                          </p>\r\n                          <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-google-plus\"></i></a>\r\n                          <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-youtube-play\"></i></a>\r\n                          <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a> -->\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <!-- <div class=\"section section-contact-us text-center\">\r\n      <div class=\"container\">\r\n          <h2 class=\"title\">Want to work with us?</h2>\r\n          <p class=\"description\">Your project is very important to us.</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\r\n                <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                  <div class=\"input-group-prepend\" >\r\n                    <span class=\"input-group-text\">\r\n                        <i class=\"now-ui-icons users_circle-08\"></i>\r\n                    </span>\r\n                  </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n                <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                  <div class=\"input-group-prepend\" >\r\n                    <span class=\"input-group-text\">\r\n                          <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                    </span>\r\n                  </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                </div>\r\n                  <div class=\"textarea-container\">\r\n                      <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n                  </div>\r\n                  <div class=\"send-button\">\r\n                      <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div> -->\r\n  <footer class=\"footer footer-default\">\r\n      <div class=\"container\">\r\n          <nav>\r\n              <ul>\r\n                  <!-- <li>\r\n                      <a href=\"https://www.creative-tim.com\">\r\n                          Creative Tim\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com/about-us\">\r\n                          About Us\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"http://blog.creative-tim.com\">\r\n                          Blog\r\n                      </a>\r\n                  </li> -->\r\n                  <li>\r\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                          MIT License\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </nav>\r\n          <div class=\"copyright\">\r\n              &copy;\r\n              {{data | date: 'yyyy'}}, Designed by\r\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim and Jim Garoutte</a>.\r\n          </div>\r\n      </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/live/landing/landing.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/live/landing/landing.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmUvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/live/landing/landing.component.ts":
/*!***************************************************!*\
  !*** ./src/app/live/landing/landing.component.ts ***!
  \***************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/live/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/live/landing/landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/live/live.component.html":
/*!******************************************!*\
  !*** ./src/app/live/live.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  live works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/live/live.component.scss":
/*!******************************************!*\
  !*** ./src/app/live/live.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmUvbGl2ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/live/live.component.ts":
/*!****************************************!*\
  !*** ./src/app/live/live.component.ts ***!
  \****************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LiveComponent = /** @class */ (function () {
    function LiveComponent() {
    }
    LiveComponent.prototype.ngOnInit = function () {
    };
    LiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live',
            template: __webpack_require__(/*! ./live.component.html */ "./src/app/live/live.component.html"),
            styles: [__webpack_require__(/*! ./live.component.scss */ "./src/app/live/live.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LiveComponent);
    return LiveComponent;
}());



/***/ }),

/***/ "./src/app/live/live.module.ts":
/*!*************************************!*\
  !*** ./src/app/live/live.module.ts ***!
  \*************************************/
/*! exports provided: LiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveModule", function() { return LiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/live/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/live/login/login.component.ts");
/* harmony import */ var _live_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./live.component */ "./src/app/live/live.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blogposts_blogposts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blogposts/blogposts.component */ "./src/app/live/blogposts/blogposts.component.ts");
/* harmony import */ var _blogpost_swtd_blogpost_swtd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blogpost-swtd/blogpost-swtd.component */ "./src/app/live/blogpost-swtd/blogpost-swtd.component.ts");
/* harmony import */ var _blogpost_rwea_blogpost_rwea_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blogpost-rwea/blogpost-rwea.component */ "./src/app/live/blogpost-rwea/blogpost-rwea.component.ts");















var LiveModule = /** @class */ (function () {
    function LiveModule() {
    }
    LiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                _live_component__WEBPACK_IMPORTED_MODULE_10__["LiveComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _blogposts_blogposts_component__WEBPACK_IMPORTED_MODULE_12__["BlogpostsComponent"],
                _blogpost_swtd_blogpost_swtd_component__WEBPACK_IMPORTED_MODULE_13__["BlogpostSwtdComponent"],
                _blogpost_rwea_blogpost_rwea_component__WEBPACK_IMPORTED_MODULE_14__["BlogpostRweaComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            ]
        })
    ], LiveModule);
    return LiveModule;
}());



/***/ }),

/***/ "./src/app/live/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/live/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/live/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/live/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmUvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/live/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/live/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/live/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/live/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n      <div class=\"dropdown button-dropdown\">\r\n        <div ngbDropdown>\r\n         </div>\r\n      </div>\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/live/landing']\" placement=\"bottom\" ngbTooltip=\"\">\r\n                Home\r\n            </a>\r\n            <!-- <a class=\"navbar-brand\" [routerLink]=\"['/live/profile-landing']\" placement=\"bottom\" ngbTooltip=\"Who are these people?\">\r\n                About Us\r\n            </a> -->\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/live/blogposts']\" placement=\"bottom\" ngbTooltip=\"\">\r\n                Blog\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n            </button>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n\r\n<!-- <nav class=\"navbar navbar-expand-lg bg-white fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/presentation']\" placement=\"bottom\" ngbTooltip=\"Designed by Invision. Coded by Creative Tim\">\r\n                Now Ui Kit Pro\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar bar1\"></span>\r\n                <span class=\"navbar-toggler-bar bar2\"></span>\r\n                <span class=\"navbar-toggler-bar bar3\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/components']\">\r\n                      <i class=\"now-ui-icons design_app\"></i>\r\n                      <p>Components</p>\r\n                    </a>\r\n                </li>\r\n                <a ngbDropdown class=\"nav-item dropdown\">\r\n                    <div class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                      <i class=\"now-ui-icons files_paper\" aria-hidden=\"true\"></i>\r\n                      <p>Sections</p>\r\n                    </div>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"headers\"><i class=\"now-ui-icons shopping_box\"></i> Headers</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"features\"><i class=\"now-ui-icons ui-2_settings-90\"></i> Features</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"blogs\"><i class=\"now-ui-icons text_align-left\"></i> Blogs</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"teams\"><i class=\"now-ui-icons sport_user-run\"></i> Teams</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"projects\"><i class=\"now-ui-icons education_paper\"></i> Projects</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"pricing\"><i class=\"now-ui-icons business_money-coins\"></i> Pricing</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"testimonials\"><i class=\"now-ui-icons ui-2_chat-round\"></i> Testimonials</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/sections']\" fragment=\"contact-us\"><i class=\"now-ui-icons tech_mobile\"></i> Contacts</a>\r\n                    </div>\r\n                </a>\r\n                <a ngbDropdown class=\"nav-item dropdown\">\r\n                    <div class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                      <i class=\"now-ui-icons design_image\" aria-hidden=\"true\"></i>\r\n                      <p>Examples</p>\r\n                    </div>\r\n                    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/aboutus']\"><i class=\"now-ui-icons business_bulb-63\"></i> About-us</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/blogpost']\"><i class=\"now-ui-icons text_align-left\"></i> Blog Post</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/blogposts']\"><i class=\"now-ui-icons design_bullet-list-67\"></i> Blog Posts</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/contactus']\"><i class=\"now-ui-icons location_pin\"></i> Contact Us</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/landing']\"><i class=\"now-ui-icons education_paper\"></i> Landing Page</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/login']\">  <i class=\"now-ui-icons users_circle-08\"></i> Login Page</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/pricing']\"><i class=\"now-ui-icons business_money-coins\"></i>&nbsp; Pricing</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/ecommerce']\">  <i class=\"now-ui-icons shopping_shop\"></i> Ecommerce Page</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/productpage']\"><i class=\"now-ui-icons shopping_bag-16\"></i> Product Page</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/profile']\"><i class=\"now-ui-icons users_single-02\"></i> Profile Page</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['/examples/register']\"><i class=\"now-ui-icons tech_mobile\"></i> Signup Page</a>\r\n                    </div>\r\n                </a>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link btn btn-primary\" href=\"https://www.creative-tim.com/product/now-ui-kit-pro-angular\">\r\n                       <p>Buy now</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());

// import { Component, OnInit, ElementRef } from '@angular/core';
// import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// @Component({
//     selector: 'app-navbar',
//     templateUrl: './navbar.component.html',
//     styleUrls: ['./navbar.component.scss']
// })
// export class NavbarComponent implements OnInit {
//     private toggleButton: any;
//     private sidebarVisible: boolean;
//     constructor(public location: Location, private element : ElementRef) {
//         this.sidebarVisible = false;
//     }
//     ngOnInit() {
//         const navbar: HTMLElement = this.element.nativeElement;
//         this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
//     }
//     sidebarOpen() {
//         const toggleButton = this.toggleButton;
//         const html = document.getElementsByTagName('html')[0];
//         setTimeout(function(){
//             toggleButton.classList.add('toggled');
//         }, 500);
//         html.classList.add('nav-open');
//         this.sidebarVisible = true;
//     };
//     sidebarClose() {
//         const html = document.getElementsByTagName('html')[0];
//         // console.log(html);
//         this.toggleButton.classList.remove('toggled');
//         this.sidebarVisible = false;
//         html.classList.remove('nav-open');
//     };
//     sidebarToggle() {
//         // const toggleButton = this.toggleButton;
//         // const body = document.getElementsByTagName('body')[0];
//         if (this.sidebarVisible === false) {
//             this.sidebarOpen();
//         } else {
//             this.sidebarClose();
//         }
//     };
//     isHome() {
//         var titlee = this.location.prepareExternalUrl(this.location.path());
//         if( titlee === '/home' ) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     isDocumentation() {
//         var titlee = this.location.prepareExternalUrl(this.location.path());
//         if( titlee === '/documentation' ) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Documents\GitHub\travel-trailer-gypsies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map