public with sharing class PlatformEventCtrl 
{
    
    public static void publishEvent()
    {
        Account_Creation_Event__e obj = new Account_Creation_Event__e();
        obj.account_Name__c = 'suman';
        obj.Phone__c = Decimal.valueOf('8309351867');
        Database.SaveResult result = EventBus.publish(obj);
        System.debug('result: ' + result);
    }

    
}