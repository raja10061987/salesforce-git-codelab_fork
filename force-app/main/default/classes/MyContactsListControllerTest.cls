@IsTest
public with sharing class MyContactsListControllerTest {
   
    @TestSetup
   public static void makeData()
   {
    Account actObj = new Account();
    actObj.name = 'suman reddy';
    actObj.Rating = 'Hot';
    actObj.Phone = '123456789';
    actObj.Fax = '12333';
    insert actObj;


    Contact conObj = new Contact();
    conObj.FirstName = 'suman';
    conObj.LastName = 'reddy';
    conObj.Email = 'aa@gmail.com';
    conObj.Phone = '8309351867';
    conObj.AccountId = actObj.Id;
    insert conObj;

    Contact conObj1 = new Contact();
    conObj1.FirstName = 'kumar';
    conObj1.LastName = 'sankar';
    conObj1.Email = 'bb@gmail.com';
    conObj1.Phone = '111111';
    insert conObj1;

    Case caseObj = new Case();
    caseObj.Priority = 'High';
    caseObj.Status = 'New';
    caseObj.Origin = 'Email';
    caseObj.ContactId = conObj1.Id;
     
   }

   @IsTest
   public static void getContactsTest()
   {
    List<Id> actidsList = new List<Id>();
    for(Account actObj: [select id,Name,Rating,Phone from Account])
    {
      actidsList.add(actObj.Id);
    }
    test.startTest();
    List<Contact> returnedContacts = MyContactsListController.getContacts(actidsList);
    System.debug('returnedContacts: ' + returnedContacts);
    System.assert(returnedContacts.size() > 0, 'returned contacts count should be greater than one');

    
    test.stopTest();
   }
   @IsTest
   public static void saveContactsTest()
   {
  
   List<Contact> contList = [select id,FirstName,LastName,Email from Contact];

   test.startTest();
    contList[0].FirstName = 'suman_changed';
    System.debug('contList[0]: ' + contList[0]);
   Map<String,String> returnedMap =  MyContactsListController.saveContacts(contList);
   contList[0].LastName = '';
   System.debug('contList[0]:@@: ' + contList[0]);
   Map<String,String> returnederrorMap = MyContactsListController.saveContacts(contList);
   System.debug('returnederrorMap: ' + returnederrorMap);
   System.debug('returnedMap@@: ' + returnedMap);
   System.assertEquals(returnedMap.get('status'), 'success','status should be success');
   test.stopTest();
  



   }


   @isTest
   public static  void removeContactsTest()
   {
    List<Id> conIdsList = new List<Id>();

    List<Contact> contList = [select id,LastName from Contact];
    for(Contact conObj: [select id,LastName from Contact])
    {
       conIdsList.add(conObj.Id);
    }
    System.debug('conIdsList: ' + conIdsList);

    List<Id> removecontidList = new List<Id>();
    List<Contact> contidList1 = [select id,LastName from contact where LastName = 'sankar' ];
    System.debug('contidList1: ' + contidList1);
    for(Contact conObj: contidList1)
    {
        removecontidList.add(conObj.Id);
    }
   System.debug('removecontidList: ' + removecontidList);
  
    test.startTest();
    Map<String,String> returnedResult = MyContactsListController.removeContacts(conIdsList);
    Map<String,String> returnedResult1 = MyContactsListController.removeContacts(removecontidList);
    system.debug('returnedResult1: ' + returnedResult1);
    System.debug('returnedResult: ' + returnedResult);
    System.assertEquals(returnedResult.get('status'), 'success', 'it should be success');
    test.stopTest();
   }

   @IsTest
   public static void createContactmyRecordTest()
   {
    Contact conObj = new Contact();
    conObj.FirstName = 'suman';
    conObj.Lastname = 'reddy';
    conObj.Email = 'aa@gmail.com';
    conObj.Phone = '8309351867';

    Contact conObj1 = new Contact();
    conObj1.FirstName = 'sakunthar';
    conObj1.Lastname = 'pavan';
    conObj1.Email = 'fff123@gmail.com';
    conObj1.Phone = '9999999';

    test.startTest();
    Map<String,String> errorReturnedResult = MyContactsListController.createContactmyRecord(conObj);
    Map<String,String> successReturnedResult = MyContactsListController.createContactmyRecord(conObj1);
    System.debug('errorReturnedResult: ' + errorReturnedResult); // {message=ansca,status= error}
    System.debug('successReturnedResult: ' + successReturnedResult);
    System.assertEquals(errorReturnedResult.get('status'), 'error', 'error shuold come');
    System.assertEquals(successReturnedResult.get('status'), 'success', 'contact record should insert successfully');
    test.stopTest();

   }
}