import { LightningElement } from 'lwc';

export default class Animal extends LightningElement 
{
    name='cat';
    newAge = 0;
    orizonalAge = 1;
    ageUpdate(event)
    {
    this.newAge = event.target.value;
    // console.log('updated age: ' + this.newAge);
    }
    get age()
    {
        console.log('getter called');
        if(this.orizonalAge > 20)
        {
          return this.orizonalAge = 20;
        }
        return this.orizonalAge;
    }
    set age(value)
    {
        console.log('setter called');
        // if(value > 20)
        // {
        //  alert('updated age should not be greatrer than 20');
        //  return;
        // }
       this.orizonalAge = value;
    }
    updateOriginalge()
    {
        this.age = this.newAge;
    }
}