public with sharing class MyContactsListController {
    @AuraEnabled
    public static List<Contact> getContacts(List<Id> actids)
    {
        // for (Id actId: actids) {
        //     List<Contact> contList1 = [select id,FirstName, LastName, Phone, Email,Department,AccountId from contact where AccountId in:actids WITH SECURITY_ENFORCED]; 
        // }
        try {
            List<Contact> contList = [select id,FirstName, LastName, Phone, Email,Department,AccountId from contact where AccountId in:actids WITH SECURITY_ENFORCED];
            return contList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Map<string,string> saveContacts(List<Contact> contList)
    {
        Map<String,String> resultMap = new Map<String,String>();
        try {
            System.debug('contList@@@: ' + contList);
            System.debug(LoggingLevel.warn,'some thing wrong');
                // update as user contList;
                update as User  contList;
            resultMap.put('status', 'success');
            resultMap.put('message', 'contact record saved successfully');
            System.debug('resultMap: ' + resultMap);
            return resultMap;
            
        } catch (Exception e) {
            resultMap.put('status', 'error');
            resultMap.put('message', e.getMessage());
            return resultMap;
        }
    }

     @AuraEnabled
     public static Map<String,String> removeContacts(List<Id> contidList)
     {
        Map<String,String> resultMap = new Map<String,String>();
        try {
            System.debug('contidList: ' + contidList);
            List<Contact> contactsToDelete = [select id from contact where id in:contidList WITH SECURITY_ENFORCED];
            // delete as user contactsToDelete;
            delete  contactsToDelete;
            resultMap.put('status', 'success');
            resultMap.put('message', 'contact deleted successfully');
            System.debug('resultMap success: ' + resultMap);
        } catch (Exception e) {
            resultMap.put('status', 'error');
            resultMap.put('message', e.getMessage());
            System.debug('resultMap error: ' + resultMap);
        }
        return resultMap;
     }

     @AuraEnabled
     public static Map<String,String> createContactmyRecord(Contact conObj)
     {
        System.debug('inserted conObj: ' + conObj);
        Map<String,String> resultMap = new Map<String,String>();
        try {
            insert as user conObj;
            resultMap.put('status', 'success');
            resultMap.put('message', 'contact record created successfully');
            System.debug('successresultMap: ' + resultMap);

            
        } catch (Exception e) {
            resultMap.put('status', 'error');
            resultMap.put('message', e.getMessage());
            System.debug('errorresultMap: ' + resultMap);
        }
        return resultMap;
     }

}
