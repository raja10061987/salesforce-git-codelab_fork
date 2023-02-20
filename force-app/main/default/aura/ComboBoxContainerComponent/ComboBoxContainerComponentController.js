({
    handleEvent : function(component, event, helper) {
      alert('parent component handled event: ' + event.getParam('selectedVal'));
      console.log('parent component fired:');
      let selectedValue = event.getParam('selectedVal');
      component.set('v.selectedValue',selectedValue);

    }
})
