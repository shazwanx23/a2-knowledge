import { Component } from '@angular/core';

interface Person{
	firstName: string;
	lastname: string;
	username: string;
}

@Component({
	moduleId: module.id,
	selector: 'list',
	templateUrl: 'list.component.html'
})
export class ListComponent{
	persons : Person[];

	constructor() {
		this.persons = [
			{firstName: 'shazwan', lastname:  'shah', username: 'shazwanshah'},
			{firstName: 'shazwan1', lastname:  'shah1', username: 'shazwanshah1'},
			{firstName: 'shazwan2', lastname:  'shah2', username: 'shazwanshah2'},			
		];
	}
}