({
    fetchContacts : function(component, event, helper) 
    {
        let fetchAction = component.get('c.retriveContacts');
        fetchAction.setCallback(this,function(fetchResponse)
        {
            let fetchState = fetchResponse.getState();
            if(fetchState === 'SUCCESS')
            {
            let contactList = fetchResponse.getReturnValue();
            console.log('contactList: ' + JSON.stringify(contactList));
            component.set('v.contactList',contactList);
            }

        });
        $A.enqueueAction(fetchAction);

    },
    SaveContact: function(component,event,helper)
    {
        let contObj = component.get('v.contact');
        let contList = component.get('v.contactList');
        console.log('contObj1@@: ' + JSON.stringify(contObj));
        let saveAction = component.get('c.saveContact');
        saveAction.setParams({'conObj': contObj});
        saveAction.setCallback(this,function(response){
          let myState = response.getState();
          if(myState === 'SUCCESS')
          {
           let contactId = response.getReturnValue();
           console.log('contactId: ' + contactId);
           component.set('v.contactId',contactId);
           contList.splice(0,0,contObj); // push at index position 0 newly inserted record
           component.set('v.contactList',contList);
           console.log('after saving new record: ' + JSON.stringify(contList));
           // after saving resetting contact values to null
           component.set('v.contact','');
          }
          else
          {
            alert('error occured while inserting contact record');
          }
        });
        $A.enqueueAction(saveAction);

    }
})