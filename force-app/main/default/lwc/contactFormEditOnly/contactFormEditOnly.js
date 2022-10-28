import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ContactFormEditOnly extends LightningElement {
    objectApiName = CONTACT_OBJECT;
   // recordId='0031y00000QzMa0AAF';  update the record
   recordId=''; // insert the new record 
   
    handleSubmit(event)
    {
       
        event.preventDefault();
        let fields = event.detail.fields;
        if(fields.Phone === '' || fields.Phone === null)
        {
         fields.Phone = '222222222222222';
        }
        console.log('submit event: ' + JSON.stringify(event.detail.fields));
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    handleLoad(event)
    {
     console.log('load event: ');
    }
    handleerror(event)
    {
       console.log('error event: ' + JSON.stringify(event.detail));
    }
    handleSuccess(event)
    {
     console.log('success event: ' + event.detail.id);
    }
    resetForm(event)
    {
    const fields = this.template.querySelectorAll('lightning-input-field');
    fields.forEach((field) => {
        console.log('field Name: ' + field.fieldName + " <==>" + JSON.stringify(field.value));
        field.reset();
    });
    }
}