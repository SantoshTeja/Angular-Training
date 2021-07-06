import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-forms',
  templateUrl: './react-forms.component.html',
  styleUrls: ['./react-forms.component.css']
})
export class ReactFormsComponent {

  /*=============== Without using FormBuilder API ================*/

  // productForm = new FormGroup({
  //   productName: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[a-zA-z]{5,9}$')
  //   ])
  // })
  /*=============== With using FormBuilder API ================*/
  constructor(private formBuilder:FormBuilder){}
  productForm = this.formBuilder.group({
    productName: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]]
  })

  submitData() {
    console.log(this.productForm)
    console.log(this.productForm.value)

  }

}

