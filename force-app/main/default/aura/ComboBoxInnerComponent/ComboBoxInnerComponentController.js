({
    handleChange : function(component, event, helper) 
    {
        let seletcedOption = component.get('v.selectedOption');
        console.log('seletcedOption: ' + seletcedOption);
        // get event
        let componentEvent = component.getEvent('cmpEvent');
        // set Params
        componentEvent.setParams({'selectedVal': seletcedOption});
        alert('source component event fired: ' + seletcedOption);
        // fire event
        componentEvent.fire();

    },
    handleSourceComponent: function(component,event,helper)
    {
        alert('source component handled event: ' + event.getParam('selectedVal'));
    }
})
