"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var component_main_page_1 = require('./main_page/component_main_page');
var component_chapter1_1 = require('./chapter1/component_chapter1');
var component_chapter2_1 = require('./chapter2/component_chapter2');
var component_chapter3_1 = require('./chapter3/component_chapter3');
var component_chapter4_1 = require('./chapter4/component_chapter4');
var component_chapter5_1 = require('./chapter5/component_chapter5');
var component_page_header_1 = require('./common_things/page_header/component_page_header');
var component_page_footer_1 = require('./common_things/page_footer/component_page_footer');
var component_shyam_1 = require('./chapter1/shyam/component_shyam');
var component_priyanka_1 = require('./chapter1/priyanka/component_priyanka');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                component_main_page_1.component_main_page,
                component_chapter1_1.component_chapter1,
                component_chapter2_1.component_chapter2,
                component_chapter3_1.component_chapter3,
                component_chapter4_1.component_chapter4,
                component_chapter5_1.component_chapter5,
                component_page_header_1.component_page_header,
                component_page_footer_1.component_page_footer,
                component_shyam_1.component_shyam,
                component_priyanka_1.component_priyanka,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'component_chapter1', component: component_chapter1_1.component_chapter1 },
                    { path: 'component_chapter2', component: component_chapter2_1.component_chapter2 },
                    { path: 'component_chapter3', component: component_chapter3_1.component_chapter3 },
                    { path: 'component_chapter4', component: component_chapter4_1.component_chapter4 },
                    { path: 'component_chapter5', component: component_chapter5_1.component_chapter5 },
                ])
            ],
            bootstrap: [component_main_page_1.component_main_page]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map