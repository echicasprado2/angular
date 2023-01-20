import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent {

  formGroup!: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ){
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      fullname: this.formBuilder.group({
        name : ['',[Validators.required, Validators.maxLength(10)]],
        last : ['',[Validators.required, Validators.maxLength(10)]]
      }),
      email : [''],
      phone : [''],
      color : [''],
      date : [''],
      number : [0],
      url : [''],
      range : [''],
      time : [''],
      area : [''],
      category : [''],
      tags : [''],
      agree : [false],
      gender : [''],
      zone : ['']
    });
  }

  save(event:any){
    if(this.formGroup.valid){
      console.log(this.formGroup.value);
    }else{
      this.formGroup.markAllAsTouched();
    }
  }

  get nameField(){
    return this.formGroup.get('fullname.name');
  }

  get lastField(){
    return this.formGroup.get('fullname.last');
  }

  get emailField(){
    return this.formGroup.get('email');
  }

  get phoneField(){
    return this.formGroup.get('phone');
  }

  get colorField(){
    return this.formGroup.get('color');
  }

  get dateField(){
    return this.formGroup.get('date');
  }

  get numberField(){
    return this.formGroup.get('number');
  }

  get urlField(){
    return this.formGroup.get('url');
  }

  get rangeField(){
    return this.formGroup.get('range');
  }

  get timeField(){
    return this.formGroup.get('time');
  }

  get areaField(){
    return this.formGroup.get('area');
  }

  get categoryField(){
    return this.formGroup.get('category');
  }

  get tagsField(){
    return this.formGroup.get('tags');
  }

  get agreeField(){
    return this.formGroup.get('agree');
  }

  get genderField(){
    return this.formGroup.get('gender');
  }

  get zoneField(){
    return this.formGroup.get('zone');
  }

  get isNameFieldValid(){
    return this.nameField?.touched && this.nameField?.valid;
  }

  get isNameFieldInValid(){
    return this.nameField?.touched && this.nameField?.invalid;
  }

}
