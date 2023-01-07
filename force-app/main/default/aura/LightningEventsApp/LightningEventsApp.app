<aura:application extends="force:slds">
    <aura:handler event="c:LightningApplicationEvent" action="{!c.handleApplicationEvent}" phase="default"></aura:handler>
<div class="slds-box">
    <div class="slds-text-heading_medium slds-text-align_center">Component Event Below</div>
    <c:LightningEventsCompContainer></c:LightningEventsCompContainer>
</div>

<div class="slds-box">
<div class="slds-text-heading_medium slds-text-align_center">Application Event Below</div>
<c:LightningEventsAppContainer id="1"></c:LightningEventsAppContainer>
<br/>
<c:LightningEventsAppContainer id="2"></c:LightningEventsAppContainer>
</div>

</aura:application>