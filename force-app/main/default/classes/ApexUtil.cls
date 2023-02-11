public with sharing class ApexUtil extends VisualEditor.DynamicPickList
{
    @AuraEnabled
    public static List<sObject> getData(String objectApiName){
        try {
            string q1 = String.escapeSingleQuotes('select Id,Name from ');
            string q2 = String.escapeSingleQuotes(objectApiName + ' Limit 10');
            string query = q1 + q2;
            List<SObject> objectList = Database.query(query);
            System.debug('objectList: ' + objectList); // (Account:{Id=001jcnam,Name=ravi},Account:{id=001nmxznc,Name=pavan})
            return objectList;
            //  (Account:{Id=0010l00001XiLM4AAN, Name=praveen}, Account:{Id=0010l00001XbK74AAF, Name=Sample Account for Entitlements})
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public override VisualEditor.DataRow getDefaultValue()
    {
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('Account','Account');
        return defaultValue;

    }

    public override VisualEditor.DynamicPickListRows getValues()
    {
        VisualEditor.DynamicPickListRows dynamicRows = new VisualEditor.DynamicPickListRows();
        List<VisualEditor.DataRow> dataRowList = new List<VisualEditor.DataRow>();
        List<Schema.SObjectType> objectList = Schema.getGlobalDescribe().values(); // (Account,Contact,Contract,....)
        for(Schema.SObjectType eachObject: objectList)
        {
          VisualEditor.DataRow eachObjectRow = new VisualEditor.DataRow(eachObject.getDescribe().getLabel(),eachObject.getDescribe().getName());
          // {DataRow: {Label=account,selected=False,Value=Account}}
          dataRowList.add(eachObjectRow);
        }
        System.debug('dataRowList: ' + dataRowList); // (DataRow:[Label:contact,selected:false,Value=contact],DataRow: [Label=account,selected=False,Value=Account])
        dynamicRows.addAllRows(dataRowList);
        System.debug('dynamicRows: ' + dynamicRows);
        return dynamicRows;
        
    }
}