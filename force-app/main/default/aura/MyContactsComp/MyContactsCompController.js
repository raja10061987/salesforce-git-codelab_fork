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
       let blank = 0;
       let contactFields = component.find('fieldToValidate');
       if(Array.isArray(contactFields))
       { // if it is array

        let isValidAllFields = contactFields.reduce(function(validSoFar,inputComp)
        {
           inputComp.showHelpMessageIfInvalid(); // when you click on save button, at the spot it will show all error messages
               return validSoFar && inputComp.get('v.validity').valid;
         },true);
         if(!isValidAllFields)
         {
           blank++;
         }
       }
       else
       { // if it is Object
        if(!contactFields.get(v.validity).valid)
        {
           blank ++;
        }

       }
       if(blank == 0)
       {
        helper.saveContacts(component,event,helper);
       }
      }

    },
    deleteContacts: function(component,event,helper)
    {
      helper.removeContacts(component,event,helper);

    },
    recordSaveContact: function(component,event,helper)
    {
     let isValidFields = component.myValidateContact(component,event,helper);
      console.log('isValidFields: ' + isValidFields);
     if(isValidFields)
     {
      helper.helperSaveContact(component,event,helper);
     }
    },
    validateContact: function(component,event,helper)
    {
       let contactFields = component.find('contactFieldToValidate');
      let allFields =  contactFields.reduce(function(validSoFar,inputComp)
      {
        inputComp.showHelpMessageIfInvalid();

        let inputName = inputComp.get('v.name');
        if(inputName == 'email')
        { // setting custom validation
          let emailValue = inputComp.get('v.value');
          if(emailValue == 'reddyy843@gmail.com')
          {
           inputComp.focus();
           inputComp.set('v.validity',{valid: false,badInput: true});
          }

        }
        return validSoFar && inputComp.get('v.validity').valid;
       },true);
       return allFields;
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