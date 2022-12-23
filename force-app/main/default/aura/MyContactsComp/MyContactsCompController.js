({
    getContatcts : function(component, event, helper) 
    {
        helper.fetchContatcts(component,event,helper);
    },
    createContact: function(component,event,helper)
    {
      // get global event
      var contEvent = $A.get('e.force:createRecord');
      contEvent.setParams({
         "entityApiName": 'Contact',
         "defaultFieldValues":{
            'AccountId': component.get('v.recordId'),
            'Email': 'xxxx@example.com'
         }

      });
      // set params

      // fire event
      contEvent.fire();
    }
})
