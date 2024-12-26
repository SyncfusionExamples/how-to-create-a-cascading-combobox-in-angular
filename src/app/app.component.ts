import { ComboBoxModule, ComboBoxComponent } 
  from '@syncfusion/ej2-angular-dropdowns'
import { Component, ViewChild } from '@angular/core';
import { Query } from '@syncfusion/ej2-data';

@Component({
imports: [ ComboBoxModule ],
standalone: true,
    selector: 'app-root',
    templateUrl: `app.component.html`
})
export class AppComponent {
@ViewChild('country') countryObj?: ComboBoxComponent | any;
@ViewChild('state') stateObj?: ComboBoxComponent | any;
public countryChange(): void {
  let childDataQuery: Query = 
  new Query().where('countryId', 'equal', this.countryObj.value);
  this.stateObj.query = childDataQuery;
  this.stateObj.enabled = true;
  this.stateObj.text = null;
  this.stateObj.dataBind();
};
public stateWatermark: string = "Select a state";


public stateFields: Object = 
  { text: 'stateName', value: 'stateId' };



  public stateData: { [key: string]: Object }[] = [
    { stateName: 'New York', countryId: '1', stateId: '101' },
    { stateName: 'Queensland', countryId: '2', stateId: '104' },
    { stateName: 'Tasmania ', countryId: '2', stateId: '105' }, 
    { stateName: 'Victoria', countryId: '2', stateId: '106' },
    { stateName: 'Virginia ', countryId: '1', stateId: '102' },
    { stateName: 'Washington', countryId: '1', stateId: '103' }
  ];



public countryData: { [key: string]: Object }[] = [
  { countryName: 'Australia', countryId: '2' },
  { countryName: 'United States', countryId: '1' }
];
public countryFields: Object = 
  { text: 'countryName', value: 'countryId' };
public countryWatermark: string = "Select a country";
}