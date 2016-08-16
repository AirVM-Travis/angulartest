import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: `
    	<header class="header"> </header>
		
		<section class="main">	
			<div class="main__nav">
				<nav id="menu" class="main__nav__menu">
				</nav>

				<div class="main__nav__mask"></div>

			</div> <!-- / main__nav -->
			<div class="main__content">

				<div class="main__content__inner">

					<div class="grid">

						<h1>Welcome to Angular2!</h1>
						<courses></courses>
						<hr>
						<authors></authors>
					</div><!-- end container -->
				</div><!-- /main__content__inner -->
			</div><!-- end main__content -->
		</section>
		<footer class="footer">
		<div class="brand">
			<span class="brand__label hidden--sm hidden--xs">"Aura" Angular Prototype <small>v.0.1</small></span>
		</div><!-- end foot-left -->
		</footer>
	    `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }