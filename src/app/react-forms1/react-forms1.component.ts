import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-forms1',
  templateUrl: './react-forms1.component.html',
  styleUrls: ['./react-forms1.component.css']
})
export class ReactForms1Component {

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
    productName: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]],
    address : this.formBuilder.group({
      city : [23],// city: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]],
      postalcode :[34]//postalcode: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]]
    })
  })

  submitData() {
    console.log(this.productForm)
    console.log(this.productForm.value)

  }

}


