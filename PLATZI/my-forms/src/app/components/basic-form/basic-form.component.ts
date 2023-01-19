import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {

  nameField = new FormControl();
  emailField = new FormControl();
  phoneField = new FormControl();
  colorField = new FormControl();
  dateField = new FormControl();
  numberField = new FormControl();
  urlField = new FormControl();
  rangeField = new FormControl();
  timeField = new FormControl();
  areaField = new FormControl();
  categoryField = new FormControl();
  tagsField = new FormControl();

  agreeField = new FormControl(false);
  genderField = new FormControl('');
  zoneField = new FormControl('');

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value =>{
      console.log(value);
    });
  }

  getNameValue(){
    console.log(this.nameField.value);
  }

}
