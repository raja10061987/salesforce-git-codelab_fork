public with sharing class MyContactsListController {
    @AuraEnabled
    public static List<Contact> getContacts(List<Id> actids){
        try {
            List<Contact> contList = [select id,FirstName, LastName, Phone, Email,Department,AccountId from contact where AccountId in:actids WITH SECURITY_ENFORCED];
            return contList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
