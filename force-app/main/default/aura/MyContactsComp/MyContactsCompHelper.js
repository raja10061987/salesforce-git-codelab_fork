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
           component.set('v.contactList',returnedContatcts);
           console.log('returnedContatcts@@: ' + JSON.stringify(returnedContatcts));
         }
         else
         {
            alert('got error while retriving contact records');
         }
        });

        $A.enqueueAction(action);

    }
})
