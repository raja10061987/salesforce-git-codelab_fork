({
    helperLoadData : function(component,event,helper) 
    {
        let getAction = component.get('c.getDetails');
        let accountOptions = [];
        getAction.setCallback(this,function(response)
        {
            let getState = response.getState();
            if(getState === 'SUCCESS')
            {
            let responseProperties = response.getReturnValue();
            console.log('responseProperties: ' + JSON.stringify(responseProperties));
            component.set('v.wrapperObject',responseProperties);
            responseProperties.accountList.forEach((eachObject) => {
              console.log('eachObject: ' + JSON.stringify(eachObject));
              accountOptions.push({'label': eachObject.Name, 'value': eachObject.Id });
            });
            component.set('v.accountOptions',accountOptions);
            console.log('responseProperties.accountList: ' + JSON.stringify(responseProperties.accountList)); // [{'id': 'dnmcsd','Name': 'raja','type': 'prospect'},{}]
            component.set('v.actList',responseProperties.accountList);
            console.log('accountOptions: ' + JSON.stringify(accountOptions));

            }
            else
            {
                alert('got error while retriving accounts');
            }

        });
        $A.enqueueAction(getAction);

    }
})
