({
    loadObjectDataHelper : function(component,event,helper) 
    {
        let getDataAction = component.get('c.getData');
        getDataAction.setParams({'objectApiName': component.get('v.objectApiName')});
        getDataAction.setCallback(this,function(response)
        {
           let myState = response.getState();
           if(myState === 'SUCCESS')
           {
             let recordsList = response.getReturnValue();
             console.log('recordsList: ' + JSON.stringify(recordsList)); // [{"Id":"001scaskcn","Name": "Pavan"},{"Id":"001jsbcj","Name": "suman"}]
             component.set('v.recordList',recordsList);
           }
           else
           {
            alert('got error while retriving object Records');
           }
        });
        $A.enqueueAction(getDataAction);

    }
})
