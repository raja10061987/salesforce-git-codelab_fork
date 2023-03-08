import { LightningElement, track, wire } from 'lwc';
import getMyAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class DisplayDataUsingWire extends LightningElement 
{
    @track actsData = [];
    @track columns = [
        {label: 'Name',fieldName: 'Name', type: 'text'},
        {'label': 'Phone','fieldName': 'Phone'},
        {'label': 'Rating', 'fieldName': 'Rating'},
        {'label': 'Industry', 'fieldName': 'Industry'}
    ];

    @wire(getMyAccounts)
    getActRecords({error,data})
    {
        if(data)
        {
          this.actsData = data;
          console.log('actsData: ' + JSON.stringify(this.actsData)); // [{Id:'001askdcnm',Name:'raja'},{Id:'001asnmcsa',Name:'pavan'}]
        }
        else if(error)
        {
          this.actsData = [];
          console.log('error occured while retriving acts records: ' + error.message.data);
        }

    }
}