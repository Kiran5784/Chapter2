import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { component_main_page }  from './main_page/component_main_page';
import { component_chapter1 }  from './chapter1/component_chapter1';
import { component_chapter2 }  from './chapter2/component_chapter2';
import { component_chapter3 }  from './chapter3/component_chapter3';
import { component_chapter4 }  from './chapter4/component_chapter4';
import { component_chapter5 }  from './chapter5/component_chapter5';
import { component_page_header }  from './common_things/page_header/component_page_header';
import { component_page_footer }  from './common_things/page_footer/component_page_footer';
import { component_shyam }  from './chapter1/shyam/component_shyam';
import { component_priyanka }  from './chapter1/priyanka/component_priyanka';

@NgModule({
	declarations: [ 
		component_main_page, 
		component_chapter1, 
		component_chapter2, 
		component_chapter3,
		component_chapter4,
		component_chapter5,
		component_page_header,
		component_page_footer,
		component_shyam,
		component_priyanka,
	],
	imports: [ 
		BrowserModule, 
		FormsModule, 
		RouterModule.forRoot([
			{ path: 'component_chapter1', component: component_chapter1 },
			{ path: 'component_chapter2', component: component_chapter2 },
			{ path: 'component_chapter3', component: component_chapter3 },
			{ path: 'component_chapter4', component: component_chapter4 },
			{ path: 'component_chapter5', component: component_chapter5 },
		]) 
	],
	bootstrap: [ component_main_page ]
})
export class AppModule { }