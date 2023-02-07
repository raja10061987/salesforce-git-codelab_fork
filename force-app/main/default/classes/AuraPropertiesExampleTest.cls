@isTest
public with sharing class AuraPropertiesExampleTest 
{
    @TestSetup
   public static void makeData()
    {
        Account actObj = new Account();
        actObj.Name = 'suman';
        actObj.Rating = 'Hot';
        actObj.Industry = 'Chemicals';
        actObj.Type = 'Prospect';
        insert actObj; // Account:{Name=suman,Rating=Hot,Industry=Chemicals,Type=Prospect,Id=ajhs}
        
    }

    @isTest
   public static void getDetailsTest()
   {
    test.startTest();
    AuraPropertiesExample obj = AuraPropertiesExample.getDetails();
    System.debug('returned Object: ' + obj);
    System.assertEquals(obj.accountList.size() > 0, true, 'there should be atlease one record');
    test.stopTest();
   }



    
}