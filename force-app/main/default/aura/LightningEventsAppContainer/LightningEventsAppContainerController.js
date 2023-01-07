({
    handleApplicationEvent : function(component, event, helper) {
        let id = component.get('v.id');
        console.log('id: ' + id);
        alert('application event in container component: ' + id);
        component.set('v.message',event.getParam('message'));
        event.stopPropagation();
    }
})

// Hirarchy -- capture --Bubble -- default