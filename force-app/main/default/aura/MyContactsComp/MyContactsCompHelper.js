({
    fetchContatcts : function(component,event,helper) 
    {
        var action = component.get('c.getContacts');
        action.setParams({
            'actids': component.get('v.recordId')
        });
        action.setCallback(this,function(response){
         let state = response.getState();
         if(state == 'SUCCESS')
         {
           let returnedContatcts = response.getReturnValue();
           var contactList = component.get('v.contactList');
            component.set('v.contactList',returnedContatcts);
           console.log('returnedContatcts@@: ' + JSON.stringify(returnedContatcts));
         }
         else
         {
            alert('got error while retriving contact records');
         }
        });

        $A.enqueueAction(action);

    },
    saveContacts : function(component,event,helper)
    {
           var contactList = component.get('v.contactList');
           var saveAction = component.get('c.saveContacts');
           var recordViewForm = component.find('recordViewForm');
           var recordEditForm = component.find('recordEditForm');
           var btn = event.getSource();
           helper.fetchContatcts(component,event,helper);  
          // var btnName = btn.get('v.name');
           var toastEvent = $A.get('e.force:showToast'); // get event
           saveAction.setParams({contList: contactList});
           saveAction.setCallback(this,function(response)
           {
             let state = response.getState();
             if(state === 'SUCCESS')
             {
               let dataMap = response.getReturnValue();
               // one app container
               if(dataMap.status === 'success')
               {
                helper.fetchContatcts(component,event,helper);
                $A.util.addClass(recordEditForm,'formHide');  
                $A.util.removeClass(recordViewForm,'formHide');
                btn.set("v.label","edit");
                btn.set("v.name","edit");
                // set params
                   toastEvent.setParams({
                    'title': 'success!',
                    'type': 'success',
                    'mode': 'dismissable',
                    'message': dataMap.message
                   });

                // fire event
                toastEvent.fire();
               // component.set('v.contactList',contactList);

               }
               else if(dataMap.status === 'error')
               {
                // set params
                toastEvent.setParams({
                    'title': 'error!',
                    'type': 'error',
                    'mode': 'dismissable',
                    'message': dataMap.message
                   });
                // fire event
                toastEvent.fire();


               }

             }
             else
             {
             alert('error occured while updating record');
             }
           });
           $A.enqueueAction(saveAction);
    },
    removeContacts: function(component,event,helper)
    {
       let contactsList = component.find('deleteContact');
       let contctstoDelete = [];
       let toastEvent = $A.get('e.force:showToast');

       if(contactsList.length != undefined)
       { // if it is array
        for (let i = 0; i < contactsList.length; i++) 
        {
          let isContactChecked = contactsList[i].get('v.checked');
          if(isContactChecked)
          {
            contctstoDelete.push(contactsList[i].get('v.value'));
          }
        }
       }
       else
       { // if it is object
        let isContactSelected = contactsList.get('v.checked');
        if(isContactSelected)
        {
         contctstoDelete.push(contactsList.get('v.value'));
        }
       }
       console.log('contctstoDelete: ' + contctstoDelete);
       if(contctstoDelete.length == 0)
       {
         alert('please select at least one contact to delete');
         return;
       }

       let deleteAction = component.get('c.removeContacts');
       deleteAction.setParams({
        contidList:contctstoDelete
       });
       deleteAction.setCallback(this,function(response)
       {
        let returnedState = response.getState();
        if(returnedState == 'SUCCESS')
        {
         let dataMap = response.getReturnValue();
         if(dataMap.status == 'success')
         {
          // display success toast messgae
          toastEvent.setParams({
              'title': 'success!',
              'type': 'success',
              'mode': 'dismissable',
              'message': dataMap.message
          });

          toastEvent.fire();
          window.location.reload(); // refresh the page
           
         }
         else if(dataMap.status == 'error')
         { // display error toast message
          toastEvent.setParams({
            'title': 'error!',
            'type': 'error',
            'mode': 'dismissable',
            'message': dataMap.message
           });
           toastEvent.fire();

         }
        }
        else
        {
          alert('error occured while deleting contact');
        }
       });
     $A.enqueueAction(deleteAction);


    },
    helperSaveContact: function(component,event,helper)
    {
      let contact = component.get('v.contact');
      contact.AccountId = component.get('v.recordId');
       console.log('contact Obj: ' +  JSON.stringify(contact));
       let toastEvent = $A.get('e.force:showToast')
     let saveAction = component.get('c.createContactmyRecord');
       saveAction.setParams({
        conObj: contact
       });
       saveAction.setCallback(this,function(response)
       {
        let state = response.getState();
        if(state == 'SUCCESS') 
        {
          let dataMap = response.getReturnValue();
          if(dataMap.status == 'success')
          {
            toastEvent.setParams({
              'title': 'success!',
              'type': 'success',
              'mode': 'dismissable',
              'message': dataMap.message
             });
             toastEvent.fire();
             window.location.reload();


          }
          else if(dataMap.status == 'error')
          {
            toastEvent.setParams({
              'title': 'error!',
              'type': 'error',
              'mode': 'dismissable',
              'message': dataMap.message
            });
            toastEvent.fire();
          
          }

        }
        else
        {
          alert('getting error while inserting record');
        }

       });

      $A.enqueueAction(saveAction);



    }
       
})