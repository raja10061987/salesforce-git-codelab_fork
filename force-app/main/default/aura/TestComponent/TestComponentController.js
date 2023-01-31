({
	sum2Numbers : function(component, event, helper) {
		let fNumber = parseInt(component.get('v.fNumber'));
        let sNumber = parseInt(component.get('v.sNumber'));
        console.log('fNumber: ' + fNumber  +'<==>' + 'sNumber: ' + sNumber);
        component.set('v.result', fNumber + sNumber);
        let result = component.get('v.result');
        console.log('result: ' + result);
        
        
	}
})