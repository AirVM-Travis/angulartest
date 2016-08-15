import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
	selector: 'courses',
	template: `
		<h2>{{title}}</h2>
		<p>{{ desc }}</p>
		<label> Search Courses: <input type="text" width="80" autoGrow /></label> 
		<ul>
			<li *ngFor="#course of courses">
			{{course}}
			</li>
		</ul>
		`,
	providers: [CourseService],
	directives: [AutoGrowDirective]
})

export class CoursesComponent {
	title = "Courses";
	desc = "Currently available courses:";
	courses;
	constructor(courseService: CourseService) {
		this.courses = courseService.getCourses();
	}
}