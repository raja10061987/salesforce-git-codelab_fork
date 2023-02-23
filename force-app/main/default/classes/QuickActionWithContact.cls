public with sharing class QuickActionWithContact 
{
    @AuraEnabled
    public static String CreateContactWithAccountDetails(String accountId)
    {
        System.debug('accountId: ' + accountId);
        Account actObj = [select Id,Name,Phone from Account where Id =: accountId];
        Contact conObj = new Contact();
        conObj.FirstName = 'pavan1';
        conObj.LastName = actObj.Name;
        conObj.Email = 'example@gmail.com';
        conObj.Phone = actObj.Phone;
        conObj.AccountId = actObj.Id;
        insert as user conObj;
        return conObj.Id;

    }

    @AuraEnabled
    public static string createContact(Contact conObj){
        try {
            insert as user conObj;
            System.debug('conObj: ' + conObj.Id);
            return conObj.Id;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}