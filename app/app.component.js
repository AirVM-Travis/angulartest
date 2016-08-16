System.register(['angular2/core', './courses.component', './authors.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<header class=\"header\"> </header>\n\t\t\n\t\t<section class=\"main\">\t\n\t\t\t<div class=\"main__nav\">\n\t\t\t\t<nav id=\"menu\" class=\"main__nav__menu\">\n\t\t\t\t</nav>\n\n\t\t\t\t<div class=\"main__nav__mask\"></div>\n\n\t\t\t</div> <!-- / main__nav -->\n\t\t\t<div class=\"main__content\">\n\n\t\t\t\t<div class=\"main__content__inner\">\n\n\t\t\t\t\t<div class=\"grid\">\n\n\t\t\t\t\t\t<h1>Welcome to Angular2!</h1>\n\t\t\t\t\t\t<courses></courses>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<authors></authors>\n\t\t\t\t\t</div><!-- end container -->\n\t\t\t\t</div><!-- /main__content__inner -->\n\t\t\t</div><!-- end main__content -->\n\t\t</section>\n\t\t<footer class=\"footer\">\n\t\t<div class=\"brand\">\n\t\t\t<span class=\"brand__label hidden--sm hidden--xs\">\"Aura\" Angular Prototype <small>v.0.1</small></span>\n\t\t</div><!-- end foot-left -->\n\t\t</footer>\n\t    ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map