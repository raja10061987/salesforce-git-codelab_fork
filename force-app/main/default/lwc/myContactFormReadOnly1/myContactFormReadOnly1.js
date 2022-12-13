import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getRecord } from 'lightning/uiRecordApi';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Phone from '@salesforce/schema/Contact.Phone';
import Email from '@salesforce/schema/Contact.Email';
import { LightningElement, wire } from 'lwc';

export default class MyContactFormReadOnly1 extends LightningElement 
{
    contactRecordId = '003N000001w5rDWIAY';   
    @wire(getRecord,{  
        recordId:"$contactRecordId",
        fields: [
            FirstName,
            LastName,
            Phone,
            Email
        ]
    })
    contactRecordInfo;

    @wire(getObjectInfo,{
        objectApiName: 'Contact'
    })
    contactObjectInfo;

    get contactsData()
    {
        if(this.contactObjectInfo.data && this.contactRecordInfo.data)
        {
        console.log('contactObjectInfo: ' + JSON.stringify(this.contactObjectInfo.data));
        console.log('contactRecordInfo: ' + JSON.stringify(this.contactRecordInfo.data));
            let contactsfieldsArray = [];
            let key = 1;
            for(let field in this.contactRecordInfo.data.fields)
            {
                if(Object.prototype.hasOwnProperty.call(this.contactRecordInfo.data.fields,field))
                {
                 console.log('each field: ' + field);
                 contactsfieldsArray.push({
                    key:key++,
                    apiName:field,
                    label: this.contactObjectInfo.data.fields[field].label,
                    value: this.contactRecordInfo.data.fields[field].value
                 });

                }
            }
            console.log('contactsfieldsArray: ' + JSON.stringify(contactsfieldsArray));
            return contactsfieldsArray;
           
        }
    }


}