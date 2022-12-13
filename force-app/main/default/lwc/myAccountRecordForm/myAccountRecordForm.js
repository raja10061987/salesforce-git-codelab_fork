import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import NUMBEROFEMPLOYEES_FIELD from '@salesforce/schema/Account.NumberOfEmployees';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import Type from '@salesforce/schema/Account.Type';

export default class MyAccountRecordForm extends LightningElement {
    objectAPIName = ACCOUNT_OBJECT;
    objectFields = [NAME_FIELD,PHONE_FIELD,RATING_FIELD,NUMBEROFEMPLOYEES_FIELD,ANNUALREVENUE_FIELD,Type];
    handleLoad(event)
    {
      console.log(event.type);
      console.log(JSON.stringify(event.detail));
      console.log('ACCOUNT_OBJECT: ' + JSON.stringify(ACCOUNT_OBJECT));
      console.log(NUMBEROFEMPLOYEES_FIELD);

    }
    handleSubmit(event)
    {
        console.log(event.type);
        console.log(JSON.stringify(event.detail));
    }
    handlesuccess(event)
    {
        console.log(event.type);
        console.log(JSON.stringify(event.detail));
    }
    handleError(event)
    {
        console.log(event.type);
        console.log(JSON.stringify(event.detail));
    }
    handleCancel(event)
    {
        console.log(event.type);
      console.log(JSON.stringify(event.detail));

    }

}