({
    handleOnLoad : function(component, event, helper) 
    {
        let saveAction = component.get('c.CreateContactWithAccountDetails');
        let accountId = component.get('v.recordId');
        saveAction.setParams({accountId: accountId});
        saveAction.setCallback(this,function(response)
        {
            let returnedState = response.getState();
            if(returnedState === 'SUCCESS')
            {
                let returnedContactId = response.getReturnValue();
                console.log('returnedContactId: ' + returnedContactId);
                let quickActionClose = $A.get('e.force:closeQuickAction'); // close quickAction
                quickActionClose.fire();
                $A.get('e.force:showToast').setParams({'title': 'saved','message': 'contatct Record saved successfully'}).fire(); // show toast messgae
                $A.get('e.force:refreshView').fire();



            }
            else
            {
                alert('error occured while inserting contact record');
            }

        });
        $A.enqueueAction(saveAction);

    },
    handleSave: function(component,event,helper)
    {
        let createAction = component.get('c.createContact');
        let accountId = component.get('v.recordId');
        component.set('v.contObj.AccountId',accountId);
        let contObj = component.get('v.contObj');
        console.log('contObj: ' + JSON.stringify(contObj));
        createAction.setParams({'conObj': contObj});
        createAction.setCallback(this,function(response){
            let responseState = response.getState();
            if(responseState === 'SUCCESS')
            {
             let contactId = response.getReturnValue();
             console.log('contactId: ' + contactId);
             $A.get('e.force:closeQuickAction').fire();
             $A.get('e.force:showToast').setParams({'title': 'saved','message': 'Contact Saved successfully'}).fire();
             $A.get('e.force:refreshView').fire();
            }
            else
            {
                alert('error occured while creating Contact');
            }
        });
        $A.enqueueAction(createAction);
    }
})
