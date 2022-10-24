import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import { LightningElement } from 'lwc';

export default class AccountFormReadOnly extends LightningElement {
    recordId='0011y00000XifP7AAJ';
    objectApiName = 'Account';
    formLoaded(event)
    {
        console.log('event form loaded: ' + event.type);
        console.log('event form detail: ' + JSON.stringify(event.detail));
    }
    updateId(event)
    {
     console.log('button clicked event: ' + event.type);   
     this.recordId = '0011y00000XifPCAAZ'
    }
}