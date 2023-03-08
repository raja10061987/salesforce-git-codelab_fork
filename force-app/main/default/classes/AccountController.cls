public with sharing class AccountController {
   
    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccounts()
    {
        List<Account> actList = [select Id,Name,Phone,Rating,Industry from Account WITH SECURITY_ENFORCED limit 5];
        System.debug('actList: ' + actList); // (Account:{Id=001msnca,Name=raja},Account:{Id=001snmcna,name=pavan})
        return actList;
    }
}