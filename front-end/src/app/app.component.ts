import { Component } from '@angular/core';
import { SmsServiceService } from './sms-service.service';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'SMS TEST';
  displayDialog: boolean;

  City: City = {};

  selectedCity: City;

  newCity: boolean;

  Citys: City[];

  cols: any[];
  smsData: any;
  constructor(private smsService: SmsServiceService) { }

  ngOnInit() {
    this.smsService.getSmsData().subscribe(res =>{
      console.log(res);
      this.smsData= res['data']['customerDetails']
    },err=>{
      console.log(err);
    }); 

    this.cols = [
      { field: 'id', header: 'Sr. No.' },
        { field: 'city', header: 'City' },
        { field: 'start_date', header: 'Start Date' },
        { field: 'end_date', header: 'End Date' },
        { field: 'price', header: 'Price' },
        { field: 'status', header: 'Status' }
    ];
}
showDialogToAdd() {
  this.newCity = true;
  this.City = {};
  this.displayDialog = true;
}

save() {
  let Citys = [...this.Citys];
  if (this.newCity)
      Citys.push(this.City);
  else
      Citys[this.Citys.indexOf(this.selectedCity)] = this.City;

  this.Citys = Citys;
  this.City = null;
  this.displayDialog = false;
}

delete() {
  let index = this.Citys.indexOf(this.selectedCity);
  this.Citys = this.Citys.filter((val, i) => i != index);
  this.City = null;
  this.displayDialog = false;
}

onRowSelect(event) {
  this.newCity = false;
  this.City = this.cloneCity(event.data);
  this.displayDialog = true;
}

cloneCity(c: City): City {
  let City = {};
  for (let prop in c) {
      City[prop] = c[prop];
  }
  return City;
}
}
