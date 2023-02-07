public with sharing class AuraPropertiesExample 
{
    @AuraEnabled
    public string resourceName {get;set;}

    @AuraEnabled
    public string contactNumber {get;set;}
    @AuraEnabled
    public string email {get;set;}
    @AuraEnabled
    public Decimal income {get;set;}

    @AUraEnabled 
    public List<Account> accountList {get;set;}
    
    @AuraEnabled
    public static AuraPropertiesExample getDetails()
    {
    AuraPropertiesExample obj = new AuraPropertiesExample();
    obj.accountList = new List<Account>();
     

     for(Account actObj: [select Id,Name,Industry, Type from account WITH SECURITY_ENFORCED])
     {
        obj.accountList.add(actObj);
     }
      // accountList:(Account:{Id=sgsg,Name=pavan,Industry=IT,Type=prospect},{id=99909,name=suman})
  
    obj.resourceName = 'rajasekhar';
    obj.contactNumber = '8309351867';
    obj.email = 'reddyy843@gmail.com';
    obj.income = 2300;

    System.debug('obj: ' + obj); // (accountList: (Account:{bjsda=rava},Account:{893oo=pavan}),resourcename=pavan,contactNumber=9889)
    return obj; // aura:[actlisr=(Account:{id=hav,name=ravi},Account:{id=kasdjh,name=kmal}),contactNumber=8843,emali=ksna]
    
    }
}