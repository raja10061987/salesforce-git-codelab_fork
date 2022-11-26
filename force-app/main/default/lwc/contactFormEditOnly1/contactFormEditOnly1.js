import Department from '@salesforce/schema/Contact.Department';
import Email from '@salesforce/schema/Contact.Email';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Phone from '@salesforce/schema/Contact.Phone';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { LightningElement, track, wire } from 'lwc';

export default class ContactFormEditOnly1 extends LightningElement 
{
    orizionalContactRecord={};
    @track
    updatedContactRecord = {};

    @wire(getObjectInfo,{objectApiName: CONTACT_OBJECT})
    contactObjectInfo;

    @wire(getRecord,{
        recordId: '003N000001w5rDWIAY',
        fields:[
            FirstName,
            LastName,
            Phone,
            Email,
            Department

        ]
    })
    contactResult({data,error})
    {
        if(data)
        {
       this.orizionalContactRecord = data; // pass by reference
       this.updatedContactRecord = JSON.parse(JSON.stringify(data)); // deep clone, pass by value
       console.log('orizionalContactRecord: ' + JSON.stringify(this.orizionalContactRecord));
      // console.log('updatedContactRecord: ' + JSON.stringify(this.updatedContactRecord));
     //  console.log('contactObjectInfo: ' + JSON.stringify(this.contactObjectInfo));
        }
        else if(error)
        {
         console.log('error: ' + JSON.stringify(error));
        }
    }

    

    get contactFields()
    {
        if(this.updatedContactRecord && this.contactObjectInfo.data)
        {
            let contactFieldsArray = [];
            let key = 0;
            for(let field in this.updatedContactRecord.fields)
            {
               if(Object.prototype.hasOwnProperty.call(this.updatedContactRecord.fields,field))
               {
                  contactFieldsArray.push({
                    key: key++,
                    apiName:field,
                    label: this.contactObjectInfo.data.fields[field].label,
                    value: this.updatedContactRecord.fields[field].value
                  });
               }
            }
            console.log('contactFieldsArray: ' + JSON.stringify(contactFieldsArray));
            return contactFieldsArray;


        }
    }

    updateContactField(event)
    {
      let fieldApiName = event.target.name;
      console.log('fieldApiName: ' + fieldApiName);
      if(Object.prototype.hasOwnProperty.call(this.updatedContactRecord.fields,fieldApiName) && this.updatedContactRecord.fields[fieldApiName])
      {
        this.updatedContactRecord.fields[fieldApiName].value = event.target.value;
      }
      console.log('updatedContactRecord@123: ' + JSON.stringify(this.updatedContactRecord));
      
    }
    updateContactRecord()
    {
        alert('update contact record called');
         let contact = {};
         contact.fields = JSON.parse(JSON.stringify(this.updatedContactRecord.fields));
        // console.log('need to update Record: ' + JSON.stringify(contact));
         
        for(let field in contact.fields)
        {
         contact.fields[field] = contact.fields[field].value;
        }

         contact.fields.Id = this.updatedContactRecord.id;
         console.log('need to update Record: ' + JSON.stringify(contact));


       updateRecord(contact)
       .then( () => {
         console.log("Record Updated");
         alert('contact record updated successfully');
       })
       .catch((error) => {
         console.log("Unable to update record");
         console.log('error: ' + JSON.stringify(error));
        alert('unable to update the record');
        
       });

    }

    updateRecord()
    {
        let contact = {};
    // contact.fields = { ...this.updatedContactRecord.fields };
    contact.fields = JSON.parse(JSON.stringify(this.updatedContactRecord.fields));
    for (let field in contact.fields) {
      if (Object.prototype.hasOwnProperty.call(contact.fields, field)) {
        contact.fields[field] = contact.fields[field].value;
      }
    }
    contact.fields.id = this.updatedContactRecord.id;
    console.log(JSON.stringify(contact));
    updateRecord(contact)
      .then((response) => {
        console.log("Record Updated");
        console.log('success response: ' + JSON.stringify(response));
        alert('contact record updated successfully');
      })
      .catch((error) => {
        console.log("Unable to update record");
        console.log('error: ' + JSON.stringify(error));
       alert('unable to update the record');
       
      });
    }

    resetForm()
    {
        this.updatedContactRecord = JSON.parse(JSON.stringify(this.orizionalContactRecord));
    }
}