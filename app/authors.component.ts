import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
	selector: 'authors',
	template: `
		<h2>{{title}}</h2>
		<p>{{desc}}</p>
		<ul>
			<li *ngFor="#author of authors">
				{{author}}
			</li>
		</ul>
		`,
	providers: [AuthorService]
})

export class AuthorsComponent {
	title = "Authors";
	desc = "Our contributing writers.";
	authors: string[];
	constructor(authorService: AuthorService) {
		this.authors = authorService.getAuthors();
	}
}