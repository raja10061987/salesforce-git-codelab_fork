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
    },
    editContact: function(component,event,helper)
    {
      var btn = event.getSource();
      var btnName = btn.get('v.name');
      var recordViewForm = component.find('recordViewForm');
      var recordEditForm = component.find('recordEditForm');
      if(btnName == 'edit')
      {
       $A.util.addClass(recordViewForm,"formHide");  // hiding view form
       $A.util.removeClass(recordEditForm,"formHide"); // displaying edit form
       btn.set('v.name','save');
       btn.set('v.label','save'); 

      }
      else if(btnName == 'save')
      {
       // alert('btn save called@@');
       helper.saveContacts(component,event,helper);
      }

    },
    deleteContacts: function(component,event,helper)
    {
      helper.removeContacts(component,event,helper);

    },
    recordSaveContact: function(component,event,helper)
    {
      let contact = component.get('v.contact');
      console.log('contact: ' + contact);
       helper.helperSaveContact(component,event,helper);
    },
    openModal: function(component,event,helper)
    {
      // slds-fade-in-open
      // slds-backdrop_open
      let modalFadeinOpen = component.find('modalFadeInOpen');
      let modalBackDropOpen = component.find('modalBackDrop');
      $A.util.addClass(modalFadeinOpen,'slds-fade-in-open');
      $A.util.addClass(modalBackDropOpen,'slds-backdrop_open');
    },
    closeModal: function(component,event,helper)
    {
      let modalFadeinOpen = component.find('modalFadeInOpen');
      let modalBackDropOpen = component.find('modalBackDrop');
      $A.util.removeClass(modalFadeinOpen,'slds-fade-in-open');
      $A.util.removeClass(modalBackDropOpen,'slds-backdrop_open');

    }
})
