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
var component_page_header = (function () {
    function component_page_header() {
        this.page_title = 'Main Page Header';
    }
    component_page_header = __decorate([
        core_1.Component({
            selector: 'component_page_header',
            templateUrl: '/app/common_things/page_header/page_header.html'
        }), 
        __metadata('design:paramtypes', [])
    ], component_page_header);
    return component_page_header;
}());
exports.component_page_header = component_page_header;
//# sourceMappingURL=component_page_header.js.map