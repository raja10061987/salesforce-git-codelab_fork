import { LightningElement, track } from 'lwc';
import {subscribe} from 'lightning/empApi';
// import { subscribe } from 'lightning/empApi';


export default class LWCPlatformEvent extends LightningElement 
{

      channelName = '/event/Account_Creation_Event__e';
      relayId = -1;
      subscription = {};
     @track accountName = '';
     @track phone = '';

    connectedCallback()
    {
      this.handleSubscribe();
    }
    handleSubscribe()
    {
          const self = this;
        //  const mesaageCallBack = function(eventReceived)
        //  {
        //     console.log('eventReceived payload: ' + JSON.stringify(eventReceived));
        //     self.accountName = eventReceived.data.payload.account_Name__c;
        //     self.phone = eventReceived.data.payload.Phone__c;
        //     alert('acctName: ' + self.accountName);
        //     alert('phone: ' +  self.phone);

        //  }
         subscribe(this.channelName,this.relayId,function(eventReceived)
         {
            console.log('eventReceived payload: ' + JSON.stringify(eventReceived));
            self.accountName = eventReceived.data.payload.account_Name__c;
            self.phone = eventReceived.data.payload.Phone__c;
            alert('acctName: ' + self.accountName);
            alert('phone: ' +  self.phone);

         })
         .then(response => {
            this.subscription = response;
            console.log('event listened successfully');

         })
    }

    

}