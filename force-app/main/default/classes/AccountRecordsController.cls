public with sharing class AccountRecordsController 
{
    @AUraEnabled
    public static List<Account> getRecords()
    {
        return [select Id,Name,Industry, Type from account WITH SECURITY_ENFORCED]; 
    }

    @AuraEnabled
    public static List<sObject> getObjectRecords(String objectName,String fields){
        try {
            return Database.query('select Id,'+String.escapeSingleQuotes(fields)+' from '+String.escapeSingleQuotes(objectName)+' '+ 'Limit 10'+' ');
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}