@isTest
public with sharing class Calculate2NumbersCtrlTest 
{

    @isTest
    public static  void add2NumbersTest()
    {
        test.startTest();
      decimal result  = Calculate2NumbersCtrl.add2Numbers(10, 20);
      system.debug('result_test:'+  result);
      System.assertEquals(result, 30, 'sum should be 10 + 20 = 30');
        test.stopTest();
    }
    
}