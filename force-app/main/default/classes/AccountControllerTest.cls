@isTest
public with sharing class AccountControllerTest 
{
    @testSetup
    public static void makeData()
    {
        Account actObj = new Account();
        actObj.Name = 'Raja';
        actObj.Phone = '8309351867';
        actObj.Rating = 'Hot';
        actObj.Industry = 'Agriculture';
        insert actObj;

    }
    @isTest
    public static void getAccountsTest()
    {
      test.startTest();
      List<Account> returnedAccountList =  AccountController.getAccounts();
      System.assert(returnedAccountList.size() > 0, 'actList should not be empty');
      test.stopTest();
    }
    
}