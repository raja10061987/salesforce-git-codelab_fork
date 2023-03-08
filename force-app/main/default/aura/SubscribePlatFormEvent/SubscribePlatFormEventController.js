({
    subscribeMethod : function(component, event, helper) 
    {
        let empAPI = component.find('empAPI');
        let channel = '/event/Account_Creation_Event__e';
        let relayId = '-1';
        component.set('v.notifications',[]);
        empAPI.subscribe(channel,relayId,$A.getCallback((eventReceived) => 
        {
            console.log('eventReceived: ' + JSON.stringify(eventReceived));
            let accountName = eventReceived.data.payload.account_Name__c;
            let phone = eventReceived.data.payload.Phone__c;
            const notifications = component.get('v.notifications');
            notifications.push({'Name': accountName,'Phone': phone});
            console.log('notifications: ' + JSON.stringify(notifications));
            component.set('v.notifications',notifications);
            component.set('v.isEventReceived',true);

        })).then((subscription) => {
           console.log('event successfully subscribed');
        });

    }
})
