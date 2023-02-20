({
    calculateTotal : function(component, event, helper) 
    {
        let firstNumber =  Number(component.get('v.firstNumber'));
        let secondNumber = Number(component.get('v.secondNumber'));
        let sum = firstNumber + secondNumber;
         // let compEvent = component.getEvent('componentEvent');
         let compEvent = $A.get('e.c:CalculatorEvent');
         compEvent.setParams({'sumResult': sum});
         compEvent.fire();
         console.log('my component event fired');
         alert('event fired: ' + sum);
    },
    handleSourceEvent: function(component,event,helper)
    {
        alert('source component handled event: ' + event.getParam('sumResult'));
    }
})
