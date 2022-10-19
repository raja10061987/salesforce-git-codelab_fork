import { api, LightningElement } from 'lwc';

export default class Summary extends LightningElement 
{
    @api
    title='Summary Title';
    @api
    description = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.';
    @api
    open = false;

    toggleOpenFlag()
    {
        this.open = !this.open;
        console.log('open flag value: ' + this.open);
    }
   get utilityIcon()
    {
     return this.open?'utility:chevronright':'utility:chevrondown';
    }

    get getClass()
    {
        return this.open?'slds-summary-detail slds-is-open':'slds-summary-detail';
    }



}