<aura:application extends="force:slds">
    <aura:registerEvent name="cmpEvent" type="c:selectedValEvent"></aura:registerEvent>
    <!-- <aura:handler name="cmpEvent" event="c:selectedValEvent" action="{!c.handlerootAppEvent}" ></aura:handler>    -->
<c:ComboBoxContainerComponent cmpEvent="{!c.handlerootAppEvent}"></c:ComboBoxContainerComponent>
</aura:application>	
