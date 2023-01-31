public with sharing class ContactController 
{
    @AuraEnabled(Cacheable = true)
    public static List<Contact> retriveContacts()
    {
        List<Contact> contList = [select Id,FirstName, LastName, Phone,Email from Contact WITH SECURITY_ENFORCED];
        System.debug('contList: ' + contList);
        return contList;
    }

    @AuraEnabled
    public static string saveContact(Contact conObj)
    {
        try {
            insert as user conObj;
            system.debug('conObj id: ' + conObj.Id);
            return conObj.Id;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}