webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_front_component__ = __webpack_require__("../../../../../src/app/static/front.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_jobs_component__ = __webpack_require__("../../../../../src/app/work/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_section_process_component__ = __webpack_require__("../../../../../src/app/static/section-process.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_section_identity_component__ = __webpack_require__("../../../../../src/app/static/section-identity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_section_about_component__ = __webpack_require__("../../../../../src/app/static/section-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_section_contact_component__ = __webpack_require__("../../../../../src/app/forms/section-contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'front', component: __WEBPACK_IMPORTED_MODULE_2__static_front_component__["a" /* FrontComponent */] },
    { path: '', redirectTo: '/front', pathMatch: 'full' },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_3__work_jobs_component__["a" /* JobsComponent */] },
    { path: 'process', component: __WEBPACK_IMPORTED_MODULE_4__static_section_process_component__["a" /* ProcessComponent */] },
    { path: 'identity', component: __WEBPACK_IMPORTED_MODULE_5__static_section_identity_component__["a" /* IdentityComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__static_section_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__forms_section_contact_component__["a" /* ContactComponent */] }
    /*{ path: '**', component: PageNotFoundComponent },
    { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' }}*/
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes
            //{ enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--navigation-->\n<navigation></navigation>\n<div class=\"go-down hide-on-med-and-down\"><i class=\"material-icons\">navigate_next</i></div>\n<div class=\"go-up\"><i class=\"material-icons\">navigate_next</i></div>\n<!--routeroulet-->\n<router-outlet></router-outlet>\n\n<!--main section-->\n<!--section-front></section-front-->\n\n<!--new works-->\n<!--section-jobs></section-jobs-->\n\n<!--process section-->\n<!--section-process></section-process-->\n\n<!--process section-->\n<!--section-identity></section-identity-->\n\n<!--about me section-->\n<!--section-about></section-about-->\n\n<!--contact section-->\n<!--section-contact></section-contact-->\n\n<!--footer-->\n<section-footer></section-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__ = __webpack_require__("../../../../../src/app/mocks/mock-i18n.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import 'assets/js/init-ng.js';
//declare var initPage: any;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.I18n = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__["a" /* I18N */];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__work_work_component__ = __webpack_require__("../../../../../src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_work_service__ = __webpack_require__("../../../../../src/app/work/work.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__work_jobs_component__ = __webpack_require__("../../../../../src/app/work/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_navigation_component__ = __webpack_require__("../../../../../src/app/nav/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_front_component__ = __webpack_require__("../../../../../src/app/static/front.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_section_about_component__ = __webpack_require__("../../../../../src/app/static/section-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__static_section_process_component__ = __webpack_require__("../../../../../src/app/static/section-process.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__static_section_identity_component__ = __webpack_require__("../../../../../src/app/static/section-identity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__forms_section_contact_component__ = __webpack_require__("../../../../../src/app/forms/section-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__static_footer_component__ = __webpack_require__("../../../../../src/app/static/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nav_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__work_work_component__["a" /* WorkComponent */],
            __WEBPACK_IMPORTED_MODULE_8__work_jobs_component__["a" /* JobsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__static_section_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__static_front_component__["a" /* FrontComponent */],
            __WEBPACK_IMPORTED_MODULE_12__static_section_process_component__["a" /* ProcessComponent */],
            __WEBPACK_IMPORTED_MODULE_13__static_section_identity_component__["a" /* IdentityComponent */],
            __WEBPACK_IMPORTED_MODULE_14__forms_section_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_15__static_footer_component__["a" /* FooterComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__work_work_service__["a" /* WorkService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/forms/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, name, email, message, subject) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.message = message;
        this.subject = subject;
    }
    return Contact;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ "../../../../../src/app/forms/section-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!--contacto-->\n<div class=\"section\">\n    <div class=\"parallax-container valign-wrapper\">\n        <div class=\"section no-pad-bot\">\n          <div class=\"container section scrollme\">\n            <div class=\"row center animateme\" data-when=\"enter\" data-from=\"0.5\" data-to=\"0\" data-crop=\"false\" data-opacity=\"0\" data-scale=\"1.5\">\n              <h5 class=\"header col s12 white-text\">{{getI18n('tit4').desc}}</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"parallax\"><img src=\"assets/img/background6.jpg\" alt=\"background img 6\"></div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"section scrollspy\" id=\"contact\">\n          <div class=\"row\">\n            <div class=\"col s12 center\">\n              <h3 class=\"center deep-orange-text\"><i class=\"large material-icons\">send</i></h3>\n              <h4>{{getI18n('contact').desc}}</h4>\n              <p class=\"left-align light\">{{getI18n('sec4').desc}}</p>\n                <!--{{diagnostic}}-->\n                <div [hidden]=\"!submitted\" class=\"success-send\">\n                    <!--div class=\"row\">\n                        <div class=\"col m12 l6\">\n                            <p class=\"left-align light pre-name\">{{model.name}}</p>\n                        </div>\n                        <div class=\"col m12 l6\">\n                            <p class=\"right-align light pre-mail\">{{model.email}}</p>\n                        </div>\n                        <div class=\"col s12\">\n                            <p class=\"left-align light pre-subject\">{{model.subject}}</p>\n                        </div>\n                        <div class=\"col s12\">\n                            <p class=\"left-align light pre-message\">{{model.message}}</p></div>\n                    </div-->\n                    <p>\n                        Gracias! Me pongo en contacto contigo.<br>\n                        <a (click)=\"sendAgain();\" class=\"btn waves-effect waves-light dark-primary-color\"><i class=\"material-icons right\">send</i>Enviar de nuevo</a>\n                    </p>                    \n                </div>\n                <div [hidden]=\"submitted\" class=\"letter\">\n                    <form #contact=\"ngForm\" id=\"ngForm\" method=\"post\">\n                        <div class=\"row\">\n                            <div class=\"input-field col s12 m6\">\n                                <i class=\"material-icons prefix\">account_circle</i>\n                                <input [(ngModel)]=\"model.name\" id=\"name\" type=\"text\" name=\"name\" required aria-required=\"true\">\n                                <label for=\"last_name\"><sup>*</sup>{{getI18n('name').desc}}</label>\n                            </div>\n                            \n                            <div class=\"input-field col s12 m6\">\n                                <i class=\"material-icons prefix\">email</i>\n                                <input [(ngModel)]=\"model.email\" id=\"email\" type=\"email\" name=\"email\" required aria-required=\"true\">\n                                <label for=\"last_name\"><sup>*</sup>{{getI18n('email').desc}}</label>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"input-field col s12\">\n                                <i class=\"material-icons prefix\">subject</i>\n                                <input [(ngModel)]=\"model.subject\" id=\"subject\" type=\"text\" name=\"subject\">\n                                <label for=\"last_name\">{{getI18n('subject').desc}}</label>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"input-field col s12\">\n                                <i class=\"material-icons prefix\">mode_edit</i>\n                                <textarea [(ngModel)]=\"model.message\" id=\"message\" name=\"message\" class=\"materialize-textarea\"></textarea>\n                                <label for=\"last_name\"><sup>*</sup>{{getI18n('message').desc}}</label>\n                            </div>\n                        </div>\n                        <div class=\"row\" style=\"display: flex;\">\n                            <div class=\"g-recaptcha\" data-sitekey=\"6Lcd5EIUAAAAAAtxHzVjVSzgQa81fnWvLRLsI4Oe\"></div>\n                        </div>\n                        <div class=\"row\">\n                          <button (click)=\"newContact(); contact.reset()\" [disabled]=\"!contact.form.valid\" class=\"btn waves-effect waves-light dark-primary-color\" type=\"submit\" name=\"action\">{{getI18n('send').desc}}\n                            <i class=\"material-icons right\">send</i>\n                          </button>\n                        </div>\n                    </form>\n                </div>                \n            </div>\n          </div>\n        </div>\n    </div>\n    <div style=\"margin-bottom: -45px;\">\n        <div id=\"map\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forms/section-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_mock_i18n__ = __webpack_require__("../../../../../src/app/mocks/mock-i18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact__ = __webpack_require__("../../../../../src/app/forms/contact.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    // Inject HttpClient into your component or service.
    function ContactComponent(http) {
        this.http = http;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__contact__["a" /* Contact */](99, '', '', '', '');
        this.submitted = false;
    }
    ContactComponent.prototype.getI18n = function (title) {
        return __WEBPACK_IMPORTED_MODULE_2__mocks_mock_i18n__["a" /* I18N */].find(function (x) { return x.title === title; });
    };
    ContactComponent.prototype.newContact = function () {
        $('.letter').addClass('sending');
        setTimeout(function () {
            this.submitted = true;
            $('.letter').removeClass('sending');
            $('.success-send').addClass('sended valign-wrapper');
        }.bind(this), 300);
        //alert('saved:'+ JSON.stringify(this.model.name));
        //using emailjs
        // parameters: service_id, template_id, template_parameters
        emailjs.sendForm("gmail", "angular_form", "ngForm")
            .then(function (response) {
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function (err) {
            console.log("FAILED. error=", err);
        });
    };
    ContactComponent.prototype.sendAgain = function () {
        this.submitted = false;
        $('.success-send').removeClass('sended valign-wrapper');
    };
    ContactComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/init.js');
        $.getScript('../assets/js/myMap.js');
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'section-contact',
        template: __webpack_require__("../../../../../src/app/forms/section-contact.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=section-contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/mocks/mock-i18n.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18N; });
var I18N = [
    { id: 0, title: "home", desc: "Home" },
    { id: 1, title: "work_tit", desc: "Trabajos" },
    { id: 2, title: "process", desc: "Procesos" },
    { id: 3, title: "about", desc: "Sobre mí" },
    { id: 4, title: "contact", desc: "Contacto" },
    { id: 5, title: "slogan", desc: "Usabilidad y Diseño de Interface sin Contrariedades" },
    { id: 6, title: "slogan2", desc: "El diseño como forma de entender la comunicación digital" },
    { id: 7, title: "localization", desc: "Localización" },
    { id: 8, title: "loc_text", desc: "Nada como el tratamiento del usuario respecto a su mundo. Ubicación, uso de los metadatos, realidad aumentada. Geoposicionamiento, oferta centrada en los intereses de cada persona en cada lugar concreto." },
    { id: 9, title: "ux", desc: "UX" },
    { id: 10, title: "ux_text", desc: "La prioridad en el diseño revierte directamente en la experiencia del usuario que lo consume. Diseñar es facilitar, agilizar, reducir la curva de aprendizaje, optimizar el rendimiento. usabilidad, usabilidad..." },
    { id: 32, title: "ixd", desc: "IxD" },
    { id: 33, title: "ixd_text", desc: "El diseño de interacción es algo natural que lleva con nosotros desde el comienzo. Definir con exactitud los patrones mejor adaptados al arquetipo del usuario tras analizar su experiencia es una necesidad." },
    { id: 11, title: "rwd_text", desc: "Diseño responsivo. Donde estés, con lo que estés. Utiliza lo que necesites donde lo necesites. Aprovechar cada micromomento ofreciendo lo que se demanda en ese instante." },
    { id: 12, title: "tit1", desc: "La motivación es la clave de la vida" },
    { id: 13, title: "sec1", desc: "Tanto como empleado, como freelance, como para amigos, como para mí mismo, he participado en unos cuantos proyectos. Aquí una pequeña referencia:" },
    { id: 14, title: "sec1_2", desc: "Hay más, mucho más, pero se va quedando obsoleto o sin posibilidad de visualizar. Mantengo alguna referencia más en el tintero." },
    { id: 15, title: "tit1_2", desc: "Cronología laboral" },
    { id: 16, title: "tit2", desc: "Procesos cognitivos" },
    { id: 17, title: "tit2_2", desc: "Flujos de trabajo" },
    { id: 18, title: "sec2", desc: "Gestación y generación de ideas, resolución de problemas,... todo el proceso de creación es parte del proceso cognitivo del usuario." },
    { id: 19, title: "tit3", desc: "Nada es simple, todo debe resultar sencillo" },
    { id: 20, title: "sec3", desc: "Usabilidad y accesibilidad de aplicaciones, contenidos, arquitectura de la información, portales corporativos, animación, marketing online, diseño web, posicionamiento SEO, producción y postproducción de vídeo digital... Muchas han sido las Áreas que durante todos estos años he tratado, siempre orientado hacia la comunicación visual en formatos electrónicos." },
    { id: 21, title: "tit3_2", desc: "Sobre mí" },
    { id: 22, title: "tit3_3", desc: "Habilidades que entreno a diario... o casi!" },
    { id: 23, title: "tit4", desc: "Los seres humanos son el potencial básico de todo el proceso" },
    { id: 24, title: "sec4", desc: "Si quieres hablamos sobre proyectos. Siempre estoy abierto a nuevos retos. Quieres materializar algo online? Seguramente podamos ponernos de acuerdo ;-)" },
    { id: 38, title: "sec5", desc: "Ando probando el formulario de envío, escríbeme de momento a ddaniel.gomez@gmail.com. Gracias!" },
    { id: 25, title: "send", desc: "Enviar" },
    { id: 26, title: "message", desc: "Mensaje" },
    { id: 27, title: "subject", desc: "Asunto" },
    { id: 28, title: "email", desc: "Email" },
    { id: 29, title: "name", desc: "Nombre" },
    { id: 30, title: "resume", desc: "Ver Currículum ES" },
    { id: 31, title: "resume2", desc: "Ver Currículum EN" },
    { id: 34, title: "identity", desc: "Identidad" },
    { id: 35, title: "identidad_tit", desc: "Identidad y creatividad" },
    { id: 36, title: "identidad_tit2", desc: "Logotipos" },
    { id: 37, title: "identidad_sec2", desc: "Estudio y diseño de logotipos de compañía o producto. Manuales de marca, identidad corporativa visual." }
];
//# sourceMappingURL=mock-i18n.js.map

/***/ }),

/***/ "../../../../../src/app/mocks/mock-works.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OLD_WORKS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORKS; });
var OLD_WORKS = [
    { id: 11, pict: 'assets/img/work/op3pharmaceuticals.jpg', name: 'OP3', title: 'OP3 Pharmaceuticals', desc: 'Bolt CMS, twig, Symphony, RWD.' },
    { id: 12, pict: 'assets/img/work/campo4.jpg', name: 'Campo4', title: 'Web social de montaña', desc: 'Drupal 7 CMS, RWD, diseño, geolocalización, tiempo real...' },
    { id: 13, pict: 'assets/img/work/avalon.jpg', name: 'Avalon Informática', title: 'Identidad Corporativa', desc: 'Identidad, gestión de contenidos, i18n...' },
    { id: 14, pict: 'assets/img/work/arcadia.jpg', name: 'Arcadia Suite', title: 'UX en aplicaciones de gestión', desc: 'Aplicación modular de gestión web. Usabilidad, estructuración de contenidos, gestión completa de la interface.' },
    { id: 15, pict: 'assets/img/work/quickimage.jpg', name: 'QuickImage', title: 'Banco de Imágenes', desc: 'Análisis heurístico para relanzar las ventas.' },
    { id: 16, pict: 'assets/img/work/vodafone.jpg', name: 'Vodafone', title: 'Vídeo interno', desc: 'Vídeos internos de seguridad' },
    { id: 17, pict: 'assets/img/work/tfca.jpg', name: 'Hogar Digital', title: 'Telefónica Soluciones', desc: 'Minisites de producto.' },
    { id: 18, pict: 'assets/img/work/prenatal.jpg', name: 'Prenatal', title: 'Telefónica Soluciones', desc: 'Campañas de cliente.' },
    { id: 19, pict: 'assets/img/work/antivirus.jpg', name: 'Antivirus', title: 'Telefónica Soluciones', desc: 'Packs de Telefónica.' },
    { id: 20, pict: 'assets/img/work/seguridad.jpg', name: 'Seguridad Total', title: 'Telefónica Soluciones', desc: 'Packs de producto.' },
    { id: 21, pict: 'assets/img/work/cuentodeinvierno.jpg', name: 'Cuento de invierno', title: 'SPA', desc: 'Landing RWD' },
    { id: 22, pict: 'assets/img/work/quonners.jpg', name: 'Quonners', title: 'Toma de decisiones', desc: 'Web social participativa. Interesante proyecto.' },
    { id: 23, pict: 'assets/img/work/blythe.jpg', name: 'BlytheMuseum', title: 'CMS Artístico', desc: 'Drupal para una web artística.' }
    /*{ id: 24, pict: 'assets/img/work/.jpg', name: '', title: '', desc: '' },
    { id: 25, pict: 'assets/img/work/.jpg', name: '', title: '', desc: '' },
    { id: 26, pict: 'assets/img/work/.jpg', name: '', title: '', desc: '' },*/
];
//new carousel works
var WORKS = [
    { id: 21, pict: 'assets/img/slide/ioBUILDERS.jpg', name: 'test', title: 'io.builders', desc: 'Blockchain venture builders. Golang' },
    { id: 21, pict: 'assets/img/slide/ws.jpg', name: 'test', title: 'wealthsolutions.com', desc: 'Portal corporativo de gestión patrimonial. Golang' },
    { id: 21, pict: 'assets/img/slide/tuequus.jpg', name: 'test', title: 'tuequus.com', desc: 'Portal equino de información. Drupal Builder' },
    { id: 21, pict: 'assets/img/slide/kywyky.jpg', name: 'test', title: 'kywyky.com', desc: 'Mediación de seguros privados. Golang' },
    { id: 1, pict: 'assets/img/slide/op3pharmaceuticals.jpg', name: 'test', title: 'OP3 Pharmaceuticals', desc: 'Bolt CMS, twig, Symphony, RWD.' },
    { id: 2, pict: 'assets/img/slide/campo4.jpg', name: 'test', title: 'Campo4.com', desc: 'Drupal 7 CMS, RWD, diseño, geolocalización, actividades en tiempo real.' },
    { id: 4, pict: 'assets/img/slide/arcadia.jpg', name: 'test', title: 'Arcadia Suite', desc: 'Aplicación modular de gestión web. Usabilidad, estructuración de contenidos, gestión de la interface.' },
    { id: 3, pict: 'assets/img/slide/avalon.jpg', name: 'test', title: 'Avalon Informática', desc: 'Drupal 8. Symfony, twig. Identidad corporativa, gestión de contenidos, desarrollo de módulos, internacionalización, ...' },
    { id: 14, pict: 'assets/img/slide/rumbo.jpg', name: 'test', title: 'Rumbo.es', desc: 'Propuesta para el buscador avanzado.' },
    { id: 15, pict: 'assets/img/slide/google.jpg', name: 'test', title: 'Google', desc: 'Preparación para una entrevista en Google Zurich.' },
    { id: 5, pict: 'assets/img/slide/quickimage.jpg', name: 'test', title: 'QuickImage', desc: 'Análisis heurístico para relanzar las ventas.' },
    { id: 6, pict: 'assets/img/slide/vodafone.jpg', name: 'test', title: 'Vodafone', desc: 'Vídeos interno de seguridad.' },
    { id: 7, pict: 'assets/img/slide/tfca.jpg', name: 'test', title: 'Telefónica Soluciones', desc: 'Minisites de servicios.' },
    { id: 8, pict: 'assets/img/slide/prenatal.jpg', name: 'test', title: 'Prenatal', desc: 'Campañas de cliente.' },
    { id: 9, pict: 'assets/img/slide/antivirus.jpg', name: 'test', title: 'Telefónica Soluciones', desc: 'Minisites de servicios.' },
    { id: 10, pict: 'assets/img/slide/seguridad.jpg', name: 'test', title: 'Telefónica Soluciones', desc: 'Minisites de servicios.' },
    { id: 11, pict: 'assets/img/slide/cuentodeinvierno.jpg', name: 'test', title: 'Cuento de Invierno', desc: 'SPA Materialize' },
    { id: 12, pict: 'assets/img/slide/quonners.jpg', name: 'test', title: 'Quonners', desc: 'Toma de decisiones. Web social participativa.' },
    { id: 13, pict: 'assets/img/slide/blythe.jpg', name: 'test', title: 'BlytheMuseum', desc: 'Dupal CMS para un sitio artístico.' },
    { id: 16, pict: 'assets/img/slide/cibeles.jpg', name: 'test', title: 'Cibeles.net', desc: 'Identidad corporativa. Imagen de marca. Diseño para publicaciones.' },
    { id: 17, pict: 'assets/img/slide/haffiliation.jpg', name: 'test', title: 'Haffiliation', desc: 'Sistema de afiliación para venta online.' },
    { id: 18, pict: 'assets/img/slide/pryconsa.jpg', name: 'test', title: 'Pryconsa', desc: 'Identidad y frescura sobre una empresa de prestigio.' },
    { id: 19, pict: 'assets/img/slide/islacanela.jpg', name: 'test', title: 'Isla Canela', desc: 'Promoción del territorio y la oferta turística.' },
    { id: 20, pict: 'assets/img/slide/travel2ibiza.jpg', name: 'test', title: 'Travel2Ibiza', desc: 'Promoción turística balear. Servicios más allá de los clásicos.' }
];
//# sourceMappingURL=mock-works.js.map

/***/ }),

/***/ "../../../../../src/app/nav/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n    <nav class=\"dark-primary-color text-lighten-5\" role=\"navigation\">\n        <div class=\"nav-wrapper\">\n          <a id=\"logo-container\" href=\"https://www.sadmedia.com\" class=\"brand-logo\"><img class=\"responsive-img logo\" src=\"assets/img/sadmedia-logo.svg\"></a>\n          <ul class=\"right hide-on-med-and-down\">\n            <li><a routerLink=\"/front\"    routerLinkActive=\"active\">{{getI18n('home').desc}}</a></li>\n            <li><a routerLink=\"/work\"     routerLinkActive=\"active\">{{getI18n('work_tit').desc}}</a></li>\n            <li><a routerLink=\"/process\"  routerLinkActive=\"active\">{{getI18n('process').desc}}</a></li>\n            <li><a routerLink=\"/identity\" routerLinkActive=\"active\">{{getI18n('identity').desc}}</a></li>\n            <li><a routerLink=\"/about\"    routerLinkActive=\"active\">{{getI18n('about').desc}}</a></li>\n            <li><a routerLink=\"/contact\"  routerLinkActive=\"active\">{{getI18n('contact').desc}}</a></li>\n          </ul>\n\n          <ul id=\"nav-mobile\" class=\"side-nav\">\n            <li><a routerLink=\"/front\"    routerLinkActive=\"active\">{{getI18n('home').desc}}</a></li>\n            <li><a routerLink=\"/work\"     routerLinkActive=\"active\">{{getI18n('work_tit').desc}}</a></li>\n            <li><a routerLink=\"/process\"  routerLinkActive=\"active\">{{getI18n('process').desc}}</a></li>\n            <li><a routerLink=\"/identity\" routerLinkActive=\"active\">{{getI18n('identity').desc}}</a></li>\n            <li><a routerLink=\"/about\"    routerLinkActive=\"active\">{{getI18n('about').desc}}</a></li>\n            <li><a routerLink=\"/contact\"  routerLinkActive=\"active\">{{getI18n('contact').desc}}</a></li>\n          </ul>\n          <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse right\"><i class=\"material-icons\">menu</i></a>\n        </div>\n    </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__ = __webpack_require__("../../../../../src/app/mocks/mock-i18n.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.getI18n = function (title) {
        return __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__["a" /* I18N */].find(function (x) { return x.title === title; });
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navigation',
        template: __webpack_require__("../../../../../src/app/nav/navigation.component.html")
    })
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/static/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer default-primary-color text-lighten-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <h5 class=\"white-text\">In short</h5>\n          <p class=\"grey-text text-lighten-4\"><strong>SADMedia, desarrollo visual a medida</strong><br/>\n                <em>{{getI18n('slogan').desc}}</em><br/><br/>\n                Daniel G&oacute;mez<br/>\n                C/ Francisco Rivas, 1.<br/>\n                Torrelodones 28250 [Madrid]<br/>\n                0034 676 868 046<br/>\n                ddaniel.gomez@gmail.com</p>\n            <p class=\"social\">\n                <a href=\"https://www.facebook.com/ddaniel.gomez\"><img src=\"assets/img/facebook.png\" alt=\"facebook\" /></a>\n                <a href=\"https://www.linkedin.com/in/ddanielgomez/\"><img src=\"assets/img/linkedin.png\" alt=\"LinkedIn\" /></a>\n                <a href=\"https://plus.google.com/u/0/+DanielG%C3%B3mezM\"><img src=\"assets/img/g+.png\" alt=\"G+\" /></a>\n                <a href=\"https://github.com/ddaniel-gomez\"><img src=\"assets/img/github.png\" alt=\"GitHub\" /></a>\n                <a href=\"https://codepen.io/ddanielSan/\"><img src=\"assets/img/codepen.png\" alt=\"CodePen\" /></a>\n            </p>\n        </div>\n        <div class=\"col l6 s12 center\">\n          <h5 class=\"white-text\">Drupal member</h5>\n          <img class=\"drupalcon\" src=\"assets/img/Drupal_Association_ind_member_217.png\" />\n          <p class=\"white-text\"><i class=\"material-icons\" style=\"vertical-align: sub;\">dashboard</i> Drupal builder from 2006</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n        <div class=\"container\">\n            <p></p>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/static/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__ = __webpack_require__("../../../../../src/app/mocks/mock-i18n.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.getI18n = function (title) {
        return __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__["a" /* I18N */].find(function (x) { return x.title === title; });
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'section-footer',
        template: __webpack_require__("../../../../../src/app/static/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/static/front.component.html":
/***/ (function(module, exports) {

module.exports = "<!--index banner-->\n<div class=\"section section scrollspy\" id=\"index-banner\">\n  <div class=\"parallax-container scrollme\">\n      <div class=\"section no-pad-bot\">\n        <div class=\"container section\">\n          <div class=\"row center animateme\" data-when=\"enter\" data-from=\"0.5\" data-to=\"0\" data-crop=\"false\" data-opacity=\"0\" data-scale=\"1.5\">\n            <div id=\"nav-mouse\"><i class=\"material-icons\">navigation</i></div>\n            <h1 class=\"header center deep-orange-text\">{{getI18n('slogan').desc}}</h1>\n            <h5 class=\"header col s12 white-text\">{{getI18n('slogan2').desc}}</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"parallax\"><img class=\"one\" src=\"assets/img/background5.jpg\" alt=\"toubkal\" id=\"head-pict\"></div>\n  </div>\n\n  <!--in short-->\n  <div class=\"container\">\n      <div class=\"section scrollme\">\n          <!--   Icon Section   -->\n          <div class=\"row\">\n              <div class=\"col s12 m4\">\n                <div class=\"icon-block animateme\" data-when=\"enter\" data-from=\"0.4\" data-to=\"0\" data-rotatex=\"180\">\n                  <h2 class=\"center white-text\"><i class=\"large material-icons\">accessibility</i></h2>\n                  <h5 class=\"center white-text\">{{getI18n('ux').desc}}</h5>\n                  <p class=\"light light-c-text\">{{getI18n('ux_text').desc}}</p>\n                </div>\n              </div>\n\n              <div class=\"col s12 m4\">\n                <div class=\"icon-block animateme\" data-when=\"enter\" data-from=\"0.7\" data-to=\"0\" data-rotatex=\"180\">\n                  <h2 class=\"center white-text\"><i class=\"large material-icons\">portrait</i></h2>\n                  <h5 class=\"center white-text\">{{getI18n('ixd').desc}}</h5>\n                  <p class=\"light light-c-text\">{{getI18n('ixd_text').desc}}</p>\n                </div>\n              </div>\n\n              <div class=\"col s12 m4\">\n                <div class=\"icon-block animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatex=\"180\">\n                  <h2 class=\"center white-text\"><i class=\"large material-icons\">phonelink</i></h2>\n                  <h5 class=\"center white-text\">RWD</h5>\n                  <p class=\"light light-c-text\">{{getI18n('rwd_text').desc}}</p>\n                </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/static/front.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__ = __webpack_require__("../../../../../src/app/mocks/mock-i18n.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FrontComponent = (function () {
    function FrontComponent() {
    }
    FrontComponent.prototype.getI18n = function (title) {
        return __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__["a" /* I18N */].find(function (x) { return x.title === title; });
    };
    FrontComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/init.js');
        $.getScript('../assets/js/front.js');
    };
    return FrontComponent;
}());
FrontComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'section-front',
        template: __webpack_require__("../../../../../src/app/static/front.component.html")
    })
], FrontComponent);

//# sourceMappingURL=front.component.js.map

/***/ }),

/***/ "../../../../../src/app/static/section-about.component.html":
/***/ (function(module, exports) {

module.exports = "<!--sobre mi-->\n<div class=\"section\">\n    <div class=\"parallax-container valign-wrapper\">\n        <div class=\"section no-pad-bot\">\n          <div class=\"container section scrollme\">\n            <div class=\"row center animateme\" data-when=\"enter\" data-from=\"0.5\" data-to=\"0\" data-crop=\"false\" data-opacity=\"0\" data-scale=\"1.5\">\n              <h5 class=\"header col s12 white-text\">{{getI18n('tit3').desc}}</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"parallax\"><img src=\"assets/img/background11.jpg\" alt=\"background img 2\"></div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"section scrollspy\" id=\"about\">\n          <div class=\"row\">\n            <div class=\"col s12 center\">\n              <h3 class=\"center deep-orange-text\"><i class=\"large material-icons\">public</i></h3>\n              <h4>{{getI18n('tit3_2').desc}}</h4>\n                <p class=\"left-align light\">{{getI18n('sec3').desc}}</p>\n                <div class=\"row center\">\n                  <a href=\"https://www.sadmedia.com/docs/DanielGomez.pdf\" id=\"download-button\" class=\"btn-large waves-effect waves-light dark-primary-color\">{{getI18n('resume').desc}}</a>\n                  <a href=\"https://www.sadmedia.com/docs/DanielGomez_EN.pdf\" id=\"download-button\" class=\"btn-large waves-effect waves-light dark-primary-color\">{{getI18n('resume2').desc}}</a>\n                </div>\n                <div class=\"row\"></div>\n                <div class=\"row\"></div>\n                <h5 class=\"center\">{{getI18n('tit3_3').desc}}</h5>\n                <div class=\"row scrollme\">\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"240\" data-opacity=\"0\"><img id=\"i1\" class=\"icon\" src=\"assets/img/i/h.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"220\" data-opacity=\"0\"><img id=\"i2\" class=\"icon\" src=\"assets/img/i/c.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"200\" data-opacity=\"0\"><img id=\"i3\" class=\"icon\" src=\"assets/img/i/d.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"180\" data-opacity=\"0\"><img id=\"i4\" class=\"icon\" src=\"assets/img/i/l.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"160\" data-opacity=\"0\"><img id=\"i5\" class=\"icon\" src=\"assets/img/i/s.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"140\" data-opacity=\"0\"><img id=\"i6\" class=\"icon\" src=\"assets/img/i/m.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"120\" data-opacity=\"0\"><img id=\"i7\" class=\"icon\" src=\"assets/img/i/jq.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"100\" data-opacity=\"0\"><img id=\"i8\" class=\"icon\" src=\"assets/img/i/b.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"80\" data-opacity=\"0\"><img id=\"i9\" class=\"icon\" src=\"assets/img/i/a.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"80\" data-opacity=\"0\"><img id=\"i9\" class=\"icon\" src=\"assets/img/i/r.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"60\" data-opacity=\"0\"><img id=\"i10\" class=\"icon\" src=\"assets/img/i/ma.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"40\" data-opacity=\"0\"><img id=\"i11\" class=\"icon\" src=\"assets/img/i/vs.png\" alt=\"image\" /></div></div>\n                </div>\n                <div class=\"row scrollme\">\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"220\" data-opacity=\"0\"><img id=\"i10\" class=\"icon2\" src=\"assets/img/i/ax.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"200\" data-opacity=\"0\"><img id=\"i11\" class=\"icon2\" src=\"assets/img/i/ba.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"180\" data-opacity=\"0\"><img id=\"i12\" class=\"icon2\" src=\"assets/img/i/p.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"160\" data-opacity=\"0\"><img id=\"i13\" class=\"icon2\" src=\"assets/img/i/ai.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"140\" data-opacity=\"0\"><img id=\"i14\" class=\"icon2\" src=\"assets/img/i/ae.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"120\" data-opacity=\"0\"><img id=\"i15\" class=\"icon2\" src=\"assets/img/i/i.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"100\" data-opacity=\"0\"><img id=\"i16\" class=\"icon2\" src=\"assets/img/i/su.png\" alt=\"image\" /></div></div>\n                    <div class=\"col s4 m3 l2\"><div class=\"animateme\" data-when=\"enter\" data-from=\"1\" data-to=\"0\" data-rotatey=\"80\" data-opacity=\"0\"><img id=\"i17\" class=\"icon2\" src=\"assets/img/i/e.png\" alt=\"image\" /></div></div>\n                </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/static/section-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__ = __webpack_require__("../../../../../src/app/mocks/mock-i18n.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.getI18n = function (title) {
        return __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__["a" /* I18N */].find(function (x) { return x.title === title; });
    };
    AboutComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/init.js');
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'section-about',
        template: __webpack_require__("../../../../../src/app/static/section-about.component.html")
    })
], AboutComponent);

//# sourceMappingURL=section-about.component.js.map

/***/ }),

/***/ "../../../../../src/app/static/section-identity.component.html":
/***/ (function(module, exports) {

module.exports = "<!--sobre mi-->\n<div class=\"section\">\n    <div class=\"parallax-container valign-wrapper\">\n        <div class=\"section no-pad-bot\">\n          <div class=\"anchor\"></div>\n          <div class=\"container section scrollme\">\n            <div class=\"row center animateme\" data-when=\"enter\" data-from=\"0.5\" data-to=\"0\" data-crop=\"false\" data-opacity=\"0\" data-scale=\"1.5\">\n              <h5 class=\"header col s12 white-text\">{{getI18n('identidad_tit').desc}}</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"parallax\"><img src=\"assets/img/background1.jpg\" alt=\"background img 4\"></div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"section scrollspy\" id=\"identity\">\n          <div class=\"row\">\n            <div class=\"col s12 center\">\n              <h3 class=\"center deep-orange-text\"><i class=\"large material-icons\">thumb_up</i></h3>\n              <h4>{{getI18n('identidad_tit2').desc}}</h4>\n                <p class=\"left-align light\">{{getI18n('identidad_sec2').desc}}</p>\n            </div>\n            <ul class=\"row\">\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/clappy.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Clappy</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>The tangible feedback</span>\n                            <p>Logotipo para un servicio de refuerzo de equipos en empresa.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/khipus.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Khipus</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Tu móvil, tu testigo legal</span>\n                            <p>Logotipo para una DApp de blockchain para certificación de documentos.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/ioBUILDERS.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">ioBUILDERS</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Venture builder</span>\n                            <p>Identidad para venture builder de blockchain.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/kywyky.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Kywyky</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Mediación de seguros</span>\n                            <p>Logotipo para compañía de mediación de seguros.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/c4.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Campo4.com</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Diarios de Montaña</span>\n                            <p>Imagen para un website deportivo de deportes de montaña.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/avalon.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Avalon Informática</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Logotipo de marca</span>\n                            <p>Imagen sobria para una empresa con más de 30 años en su sector.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/sadmedia.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">SADMedia</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Logotipo de marca</span>\n                            <p>Es mi firma! :-)</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/medical-quatro.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Medical Quatro</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Imagen deportiva</span>\n                            <p>Logotipo orientado a la imagen de medicina deportiva.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/openpos.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">OpenPOS <sup>NG</sup></span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Logotipo de producto</span>\n                            <p>Imagen de un producto principal de la compañía.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/op3.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">OP3 Pharmaceuticals</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Marca independiente</span>\n                            <p>Logotipo de empresa.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/zenroot.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">ZenRoot</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Logotipo de servicio</span>\n                            <p>Imagen de un servicio de compañía.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/todovertical.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Todo Vertical</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Logotipo de montaña</span>\n                            <p>Logotipo para una compañía de guías de montaña.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/cibeles.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Cibeles.net</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Logotipo para empresa</span>\n                            <p>Diseño para una empresa online de soluciones para publicaciones.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/blythe.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Blythe Museum</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Imagen web</span>\n                            <p>Logotipo para un portal de exposición.</p>\n                        </div>\n                    </div>\n                </li>\n                <!--card-->\n                <li class=\"col s6 m4\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/identity/abril-aguilar.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Abril&Aguilar</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Imagen jurídica</span>\n                            <p>Logotipo para firma jurídica.</p>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/static/section-identity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__ = __webpack_require__("../../../../../src/app/mocks/mock-i18n.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var IdentityComponent = (function () {
    function IdentityComponent() {
    }
    IdentityComponent.prototype.getI18n = function (title) {
        return __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__["a" /* I18N */].find(function (x) { return x.title === title; });
    };
    IdentityComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/init.js');
    };
    return IdentityComponent;
}());
IdentityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'section-identity',
        template: __webpack_require__("../../../../../src/app/static/section-identity.component.html")
    })
], IdentityComponent);

//# sourceMappingURL=section-identity.component.js.map

/***/ }),

/***/ "../../../../../src/app/static/section-process.component.html":
/***/ (function(module, exports) {

module.exports = "<!--procesos-->\n<div class=\"section scrollspy\" id=\"process\">\n    <div class=\"parallax-container valign-wrapper\">\n        <div class=\"section no-pad-bot\">\n          <div class=\"container section scrollme\">\n            <div class=\"row center animateme\" data-when=\"enter\" data-from=\"0.5\" data-to=\"0\" data-crop=\"false\" data-opacity=\"0\" data-scale=\"1.5\">\n              <h5 class=\"header col s12 white-text\">{{getI18n('tit2').desc}}</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"parallax\"><img src=\"assets/img/background7.jpg\" alt=\"background img 4\"></div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"section\">\n          <div class=\"row\">\n            <div class=\"col s12 center\">\n              <h3 class=\"center deep-orange-text\"><i class=\"large material-icons\">accessibility</i></h3>\n              <h4>{{getI18n('tit2_2').desc}}</h4>\n                <p class=\"left-align light\">{{getI18n('sec2').desc}}</p>\n            </div>\n            <ul class=\"row\" id=\"cogCards\">\n                <!--card-->\n                <li class=\"col s12 m6\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/work/iob.jpg\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Design sprints</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Diseño de producto</span>\n                            <p>Conceptualización, storyboard, prototipado,...</p>\n                        </div>\n                    </div>\n                </li>\n                \n                <!--card-->\n                <li class=\"col s12 m6\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/work/webapp1.png\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Gesti&oacute;n online</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Gesti&oacute;n online</span>\n                            <p>Flujos de trabajo, wireframming, integraci&oacute;n para pantallas gigantes, tablets, m&oacute;viles...</p>\n                        </div>\n                    </div>\n                </li>\n\n                <!--card-->\n                <li class=\"col s12 m6\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/work/webapp4.png\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">RWD</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Dise&ntilde;o responsivo</span>\n                            <p>Estructuras responsivas desde pantalla gigante hasta m&oacute;vil. Mediante librer&iacute;as o de creaci&oacute;n propia.</p>\n                        </div>\n                    </div>\n                </li>\n\n                <!--card-->\n                <li class=\"col s12 m6\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/work/webapp2.png\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Kioskos interactivos</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Kioscos interactivos</span>\n                            <p>Flujos de trabajo, wireframming, integraci&oacute;n, etc. en sistemas t&aacute;ctiles de interacci&oacute;n bancaria e informaci&oacute;n.</p>\n                        </div>\n                    </div>\n                </li>\n\n                <!--card-->\n                <li class=\"col s12 m6\">\n                    <div class=\"card\">\n                        <div class=\"card-image waves-effect waves-block waves-light\">\n                            <img class=\"activator responsive-img\" src=\"assets/img/work/webapp3.png\">\n                        </div>\n                        <div class=\"card-content activator\">\n                            <i class=\"material-icons right\">more_vert</i>\n                            <span class=\"card-title activator grey-text text-darken-4\">Apps escritorio</span>\n                        </div>\n                        <div class=\"card-reveal\">\n                            <span class=\"card-title grey-text text-darken-4\"><i class=\"material-icons right\">close</i>Aplicaciones JavaFX</span>\n                            <p>Dise&ntilde;o de interfaces para multiplataforma tras estudios de uso y prototipado.</p>\n                        </div>\n                    </div>\n                </li>\n\n            </ul>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/static/section-process.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__ = __webpack_require__("../../../../../src/app/mocks/mock-i18n.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProcessComponent = (function () {
    function ProcessComponent() {
    }
    ProcessComponent.prototype.getI18n = function (title) {
        return __WEBPACK_IMPORTED_MODULE_1__mocks_mock_i18n__["a" /* I18N */].find(function (x) { return x.title === title; });
    };
    ProcessComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/init.js');
    };
    return ProcessComponent;
}());
ProcessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'section-process',
        template: __webpack_require__("../../../../../src/app/static/section-process.component.html")
    })
], ProcessComponent);

//# sourceMappingURL=section-process.component.js.map

/***/ }),

/***/ "../../../../../src/app/work/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<!--work-->\n<div class=\"section\">\n    <div class=\"parallax-container valign-wrapper\">\n        <div class=\"section no-pad-bot\">\n          <div class=\"container section scrollme\">\n            <div class=\"row center animateme\" data-when=\"enter\" data-from=\"0.5\" data-to=\"0\" data-crop=\"false\" data-opacity=\"0\" data-scale=\"1.5\">\n              <h5 class=\"header col s12 white-text\">{{getI18n('tit1').desc}}</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"parallax\"><img src=\"assets/img/background2.jpg\" alt=\"background img 2\"></div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"section scrollspy\" id=\"work\">\n          <div class=\"row\">\n            <div class=\"col s12 center\">\n              <h3 class=\"center deep-orange-text\"><i class=\"large material-icons\">play_for_work</i></h3>\n              <h4>{{getI18n('work_tit').desc}}</h4>\n              <p class=\"left-align light\">{{getI18n('sec1').desc}}</p>\n            </div>\n          </div>\n          <div class=\"row row-flex\">\n            <div class=\"box\">\n              <div class=\"owl-carousel owl-theme content-box\">\n                <div class=\"slide-block\" *ngFor=\"let work of works\">\n                    <div class=\"alt\">\n                        <h3>{{work.title}}</h3>\n                        <p>{{work.desc}}</p>\n                    </div>\n                    <img [src]=\"work.pict\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col s12 center\">\n              <p class=\"left-align light\">{{getI18n('sec1_2').desc}}</p>\n              <h5 class=\"center\">{{getI18n('tit1_2').desc}}</h5>\n              <div class=\"chalk\">\n                <div id=\"chartdiv\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/work/jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__work_service__ = __webpack_require__("../../../../../src/app/work/work.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_mock_i18n__ = __webpack_require__("../../../../../src/app/mocks/mock-i18n.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//declare var initPage: any;
var JobsComponent = (function () {
    function JobsComponent(workService) {
        this.workService = workService;
        //initPage.init();
    }
    JobsComponent.prototype.getWorks = function () {
        var _this = this;
        this.workService.getWorks().then(function (works) { return _this.works = works; });
    };
    JobsComponent.prototype.getI18n = function (title) {
        return __WEBPACK_IMPORTED_MODULE_2__mocks_mock_i18n__["a" /* I18N */].find(function (x) { return x.title === title; });
    };
    JobsComponent.prototype.ngOnInit = function () {
        this.getWorks();
        $.getScript('../assets/js/init.js');
        $.getScript('../assets/js/jobs.js');
    };
    return JobsComponent;
}());
JobsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'section-jobs',
        template: __webpack_require__("../../../../../src/app/work/jobs.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__work_service__["a" /* WorkService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__work_service__["a" /* WorkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__work_service__["a" /* WorkService */]) === "function" && _a || Object])
], JobsComponent);

var _a;
//# sourceMappingURL=jobs.component.js.map

/***/ }),

/***/ "../../../../../src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__work_service__ = __webpack_require__("../../../../../src/app/work/work.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkComponent = (function () {
    function WorkComponent(workService) {
        this.workService = workService;
        this.works = [];
    }
    return WorkComponent;
}());
WorkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-work',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__work_service__["a" /* WorkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__work_service__["a" /* WorkService */]) === "function" && _a || Object])
], WorkComponent);

var _a;
//# sourceMappingURL=work.component.js.map

/***/ }),

/***/ "../../../../../src/app/work/work.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_works__ = __webpack_require__("../../../../../src/app/mocks/mock-works.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkService = (function () {
    function WorkService() {
    }
    WorkService.prototype.getWorks = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mocks_mock_works__["a" /* WORKS */]);
    };
    return WorkService;
}());
WorkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], WorkService);

//# sourceMappingURL=work.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map