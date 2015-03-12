({    
    jsConvert: function(cmp,aEvent, helper){
        var a = cmp.get("c.convert");        
        var targetId = aEvent.getSource().getLocalId();
       
        a.setParams({
            "val": parseFloat(aEvent.getSource().getElement().value),
            "fromISO": targetId,
            "toISO": (targetId== "USD" ? "EUR" : "USD")
        });
        
        a.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                cmp.find((targetId== "USD" ? "EUR" : "USD")).set("v.value", action.getReturnValue());
            } else {
                alert(action.getState());
            }
        });
        // Add the Apex action to the queue
        $A.enqueueAction(a);
    }
})