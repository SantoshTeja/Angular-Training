import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SantoshComponent } from './santosh/santosh.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';
import { AttributeDirsComponent } from './attribute-dirs/attribute-dirs.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { PipesComponent } from './pipes/pipes.component';
import { MyuppercasePipe } from './mypipes/myuppercase.pipe';
import { SearchpipePipe } from './mypipes/searchpipe.pipe';
import { SortpipePipe } from './mypipes/sortpipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { CoursesortPipe } from './mypipes/coursesort.pipe';
import { CoursesearchPipe } from './mypipes/coursesearch.pipe';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { ReactForms1Component } from './react-forms1/react-forms1.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SantoshComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    StructDirectivesComponent,
    CalculatorComponent,
    ProductsComponent,
    AttributeDirsComponent,
    MycolorDirective,
    PipesComponent,
    MyuppercasePipe,
    SearchpipePipe,
    SortpipePipe,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    FirstComponent,
    SecondComponent,
    WebComponent,
    JavaComponent,
    routingComponents,
    CoursesortPipe,
    CoursesearchPipe,
    Sibling1Component,
    Sibling2Component,
    ReactFormsComponent,
    ReactForms1Component,
    TempDrivenFormComponent,

  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,TechRoutingModule,ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }