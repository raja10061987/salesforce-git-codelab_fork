({
    doinIt : function(component, event, helper) {
     component.set('v.columns',[
        {label: 'Sno.', fieldName: 'sno', type: 'number'},
        { label: 'source',fieldName: 'source', type: 'text'},
        { label: 'amount', fieldName: 'amount', type: 'decimal'}
     ]);

     component.set('v.incomes',[
        { sno: 1, source: 'part 1',amount: '7000'},
        { sno: 2, source: 'part 2',amount: '5000'}
     ]);

     let incomes = component.get('v.incomes');
     let columns = component.get('v.columns');
    //  console.log('incomes: ' + JSON.stringify(incomes));
    //  console.log('columns: ' + JSON.stringify(columns));
    },
    addIncome: function(component,event,helper)
    {
      let incomes = component.get('v.incomes');
      let newIncome = {
        sno: incomes.length + 1,
        source: component.find('source').get('v.value'),
        amount: component.find('amount').get('v.value')
      }
      console.log('newIncome: ' + JSON.stringify(newIncome));
      if(newIncome.source != '' && newIncome.amount !='')
      {
        incomes.push(newIncome);
        component.set('v.incomes',incomes);
        console.log('after pushing: ' + JSON.stringify(incomes));
        component.find('source').set('v.value','');
        component.find('amount').set('v.value', '');

      }
    },
    toggleIncomeForm: function(component,event,helper)
    {
       let incomeForm = component.find('incomeForm');
       $A.util.toggleClass(incomeForm,'hideorshow');
    },
    handleRegisteredComponentEvent: function(component,event,helper)
    {
     var totalIncome = event.getParam('totalIncome');
     alert('source component event fired:childcomponent ' + totalIncome);
    // event.stopPropagation();
  
    },
    fireTotalIncomeComponentEvent: function(component,event,helper)
    {
      let incomes = component.get('v.incomes');
      let totalIncome = 0;
      for (let i = 0; i < incomes.length; i++) {
        totalIncome += parseInt(incomes[i].amount);
      } 
      console.log('totalIncome: ' + totalIncome);
     let totalIncomeComponentEvent = component.getEvent('totalIncomeComponentEvent');
     totalIncomeComponentEvent.setParams({
      totalIncome: totalIncome
     });
     totalIncomeComponentEvent.fire();

    }
})