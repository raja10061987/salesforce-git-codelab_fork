({
    loadObjectData : function(component, event, helper) 
    {
        component.set('v.columns',
        [
            { label: 'Name',fieldName: 'Name',type: 'text'}
        ]);
       helper.loadObjectDataHelper(component,event,helper);
    }
})
