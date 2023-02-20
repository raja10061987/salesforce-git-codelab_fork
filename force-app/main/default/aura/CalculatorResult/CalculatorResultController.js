({
    handleEvent : function(component, event, helper) 
    {
        let sum = event.getParam('sumResult');
        console.log('sum Result: ' + sum);
        component.set('v.result',sum);
        alert('handle calculator result component: ' + sum);

    }
})
