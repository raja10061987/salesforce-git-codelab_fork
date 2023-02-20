@isTest
public with sharing class AccountRecordsControllerTest 
{
    @testSetup
    public static void makeData()
    {
        Account actObj = new Account();
        actObj.Name = 'pavan';
        actObj.Rating = 'Hot';
        actObj.Industry = 'Agriculture';
        actObj.Type = 'Prospect';
        insert actObj;
    }

    @isTest
   public static void getRecordsTest()
   {
      test.startTest();
      List<Account> actRecords = AccountRecordsController.getRecords();
       system.debug('actRecords size: ' + actRecords.size());
      System.assertEquals(actRecords.size() > 0, true, 'account Records should not be empty');
      test.stopTest();
   }
   
   @isTest
   public static void getObjectRecordsTest()
   {
    string fields = 'Name,Industry,Type';
    String dummyFields = 'Name,Industry,Type1';
    test.startTest();
   List<SObject> actRecords = AccountRecordsController.getObjectRecords('Account', fields);
   System.assertEquals(!actRecords.isEmpty(), true, 'actRecords should not be empty');
   AccountRecordsController.getObjectRecords('Account', dummyFields);
    test.stopTest();
   }
}