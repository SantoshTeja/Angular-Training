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
  addressForm = this.formBuilder.group({
    Name: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]],
    address : this.formBuilder.group({
     city: ['', [Validators.required, Validators.pattern('^[a-zA-z]{5,9}$')]],
    postalcode: ['', [Validators.required, Validators.pattern('^[0-9]{5,9}$')]]
    })
  })

  submitData() {
    console.log(this.addressForm)
    console.log(this.addressForm.value)

  }

}


