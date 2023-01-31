@IsTest
public with sharing class ContactControllerTest 
{
    @TestSetup
   public static void makeData()
   {
    Contact conObj = new Contact();
    conObj.FirstName = 'suman';
    conObj.LastName = 'reddy';
    conObj.Phone = '89898899';
    conObj.Email = 'dddf@gmail.com';
    insert conObj;
   }
   @IsTest
   public static void retriveContactsTest()
   {
    test.startTest();
    List<Contact> contList = ContactController.retriveContacts();
    System.debug('contList size: ' + contList.size());
    System.assertEquals(contList.size() > 0, true, 'contact records size should be more than 1');
    test.stopTest();
   }

   @IsTest
   public static void saveContactTest()
   {
    Contact conObj = new Contact();
    conObj.FirstName = 'reddy';
    conObj.LastName = 'kumar';
    conObj.Phone = '01010101';
    conObj.Email = 'ccc@gmail.com';

    Contact contObj1 = new Contact();
    contObj1.FirstName = 'reddy';
    contObj1.LastName = 'kumar';
    contObj1.Phone = '01010101';
    contObj1.Email = 'ccc@gmail.com';

    test.startTest();
    String contactId = ContactController.saveContact(conObj);

    System.debug('contactId: ' + contactId);
    System.assert(contactId != null, 'contactId should not be blank');
    ContactController.saveContact(contObj1);
    test.stopTest();
   }
   
}