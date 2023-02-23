@isTest
public with sharing class QuickActionWithContactTest 
{
         @TestSetup
         public static void makeData()
         {
         Account actObj = new Account();
         actObj.Name = 'pavan';
         actObj.Phone = '99999999';
         actObj.Rating = 'Hot';
         insert actObj;
         }
            @isTest
           public static void createContactWithAccountDetailsTest()
           {
              String accountId = [select Id,Phone,Rating from Account].Id;
              Test.startTest();
              String contactId = QuickActionWithContact.CreateContactWithAccountDetails(accountId);
              System.assert(contactId != null, 'contact should be created');
              Test.stopTest();
           }

           @isTest
         public static void createContactTest()
         {
            String accountId = [select Id,Phone,Rating from Account].Id;
            Contact conObj = new Contact();
            conObj.FirstName = 'tendulkar';
            conObj.LastName = 'reddy';
            conObj.Email = 'aa@gmail.com';
            conObj.AccountId= accountId;

            Contact conObj1 = new Contact();
            conObj1.FirstName = 'tendulkar';
            conObj1.LastName = 'reddy';
            conObj1.Email = 'aa@gmail.com';
            conObj1.AccountId= accountId;

            test.startTest();
            String contactId = QuickActionWithContact.createContact(conObj);
            System.assert(contactId != null, 'contact should be created');
            QuickActionWithContact.createContact(conObj1);
            test.stopTest();
         }    
}