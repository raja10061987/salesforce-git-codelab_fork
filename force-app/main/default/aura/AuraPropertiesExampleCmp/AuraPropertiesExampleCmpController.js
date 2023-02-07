({
    loadData : function(component, event, helper) 
    {
      component.set('v.columns',[
        {label: 'Name', fieldName: 'Name',type: 'text'},
        {label: 'Industry', fieldName: 'Industry', type:'text'},
        {label: 'Type',fieldName: 'Type', type: 'text'}
      ]); 
      helper.helperLoadData(component,event,helper);
    }
})
