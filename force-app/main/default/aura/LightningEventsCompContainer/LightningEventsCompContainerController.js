({
    handleTotalIncomeComponentEvent : function(component, event, helper) {
      let totalIncome = event.getParam('totalIncome');
      component.set('v.totalIncome',totalIncome);
      alert('event fired at parent Component: totalIncome: ' + totalIncome);
      // event.stopPropagation();
    }
})
// bubble phase(by default) --> event propagtes from child to parent, it cna be stopped anywhere in hierarchy,
// while moving bottom to top
// capture phase(phase: capture) --> event propagates from parent to child, it can bes stopped anywhere in hierarchy,
// while moving top to bottom
// phase: capture is first priority and then bubble phase is second priority

// source and parent ==> bubble ==> from child to parent
// source and parent --> capture ==> from parent to child
// sourece -- capture --> source fired first
// child  --> bubble
// source --> bubble
// child --> capture --> child fired first

// capture pahse > bubble phase
// event is stop propagating in capture ==> it will not propagte to the bubble too because capture is exected first