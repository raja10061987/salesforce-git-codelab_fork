@isTest
public with sharing class ApexUtilTest 
{
   @testSetUp     
    public static void makeData()
    {
        Account actObj = new Account();
        actObj.Name = 'suman';
        actObj.Rating = 'Hot';
        actObj.Phone = '8309351867';
        insert actObj;
    }

    @isTest
    public static void getDataTest()
    {
       List<SObject> returnedRecords = ApexUtil.getData('Account');
       System.debug('returnedRecords: ' + returnedRecords); // (Account:{Id=001bansb,Name=suman,Rating=Hot},Account:{},..)
       System.assertEquals(returnedRecords.size() > 0, true, 'returnedRecords should not be empty');
       ApexUtil.getData('Account1');
    }

    @isTest
    public static void getValuesTest()
    {
        test.startTest(); 
       ApexUtil obj = new ApexUtil();
       VisualEditor.DynamicPickListRows returnedObjectList = obj.getValues();
       System.assertEquals(returnedObjectList.size() > 0, true, 'returnedObjectList size should not be empty');
       obj.getDefaultValue();
       System.debug('returnedObjectList: ' + returnedObjectList);
       test.stopTest();
 

    }
    
}