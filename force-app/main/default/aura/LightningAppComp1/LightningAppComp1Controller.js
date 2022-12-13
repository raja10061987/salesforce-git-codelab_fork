({
    handleApplicationEvent : function(component, event, helper) {
       var id= component.get('v.id');
       alert('Application event in source component: ' + id);
       // event.preventDefault();
       // event.stopPropagation();
    },
    fireApplicationEvent: function(component,event,helper)
    {
      var appEvent = $A.get('e.c:LightningApplicationEvent');
      appEvent.setParams({
        message: 'hello'
      });
      appEvent.fire();
    }
})
