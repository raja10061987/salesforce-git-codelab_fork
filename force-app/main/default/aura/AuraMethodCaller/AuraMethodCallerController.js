({
    getRecords : function(component, event, helper) 
    {
        let chilCompRef = component.find('child');
        chilCompRef.retriveRecords(function(result)
        {
          console.log('parent component retrived result: ' + JSON.stringify(result));
          component.set('v.recordsList',result);  
        },'Contact','Email');

    }
})
