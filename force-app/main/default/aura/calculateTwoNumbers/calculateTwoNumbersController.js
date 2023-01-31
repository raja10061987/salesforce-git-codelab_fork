({
    calculate : function(component, event, helper) 
    {
        // calculate 2 numbers by using aura find method
        // let firstNumber = component.find('fNumber').get('v.value');
        // let secondNumber = component.find('sNumber').get('v.value');
        // let result = component.find('result');
        // result.set('v.value', firstNumber + secondNumber);

        // calculate 2 numbers by using aura:attribute
        // let firstNumber = component.get('v.fNumber1');
        // let secondNumber = component.get('v.sNumber1');
        // component.set('v.result1',firstNumber + secondNumber);

        // calculate 2 numbers by using apex class

        let firstNumber = component.get('v.fNumber1');
        let secondNumber = component.get('v.sNumber1');
        let calculateAction = component.get('c.add2Numbers');
        calculateAction.setParams({'firstNumber': firstNumber,'secondNumber': secondNumber });
        calculateAction.setCallback(this,function(response){
            let retunedState = response.getState();
            if(retunedState === 'SUCCESS')
            {
              let sumResponse = response.getReturnValue();
              console.log('sumResponse: ' + sumResponse);
              component.set('v.result1',sumResponse);
            }
            else
            {
                alert('error occured while adding 2 numbers');
            }
        });

        $A.enqueueAction(calculateAction);


    


    }
})