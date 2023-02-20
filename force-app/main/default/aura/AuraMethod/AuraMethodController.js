({
    retriveRecords : function(component, event, helper) 
    {
        let myAction = component.get('c.getObjectRecords');
        let params = event.getParam('arguments');
        let actCallBack = '';
        if(params)
        {
        actCallBack = params.callBack;
        }
        myAction.setParams({'objectName':params.objectName,'fields': params.fieldNames});
        myAction.setCallback(this,function(response)
        {
            let myState = response.getState();
            if(myState === 'SUCCESS')
            {
             let records = response.getReturnValue();
             console.log('records@@: ' + JSON.stringify(records));
             actCallBack(records);
            }
            else
            {
                alert('error occured while retriving records');
            }
 
        });

        $A.enqueueAction(myAction);

    }
})
