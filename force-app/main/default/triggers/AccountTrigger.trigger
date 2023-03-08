trigger AccountTrigger on Account (after insert) 
{
    if(trigger.isAfter && trigger.isInsert)
    {
        System.debug('trigger called: ' + trigger.isAfter + trigger.isInsert);
        PlatformEventCtrl.publishEvent();
    }

}