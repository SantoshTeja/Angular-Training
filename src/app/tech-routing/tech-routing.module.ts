import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { AdvwebComponent } from '../advweb/advweb.component';
import { CorewebComponent } from '../coreweb/coreweb.component';
import { CorejavaComponent } from '../corejava/corejava.component';
import { AdvjavaComponent } from '../advjava/advjava.component';
import { ProductsComponent } from '../products/products.component';
import { ReactForms1Component } from '../react-forms1/react-forms1.component';
import { TempDrivenFormComponent } from '../temp-driven-form/temp-driven-form.component';
const routes:Routes = [
  // {path:'web', component:WebComponent },
  // {path:'java', component:JavaComponent }
  {path:'web', component:WebComponent, 
  children:[
    {path:'coreweb', component:CorewebComponent },
    {path:'advweb', component:AdvwebComponent}
   ] },
  {path:'java', component:JavaComponent,
   children:[
    {path:'corejava', component:CorejavaComponent },
    {path:'advjava', component:AdvjavaComponent}
   ]
 },
 {path:'products', component:ProductsComponent },
 {path:'react-forms1', component: ReactForms1Component},
 {path:'temp-driven-form', component: TempDrivenFormComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent,JavaComponent,ProductsComponent,ReactForms1Component,TempDrivenFormComponent]
