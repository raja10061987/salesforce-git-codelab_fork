public with sharing class Calculate2NumbersCtrl 
{
    @AuraEnabled(cacheable=false)
    public static decimal add2Numbers(Decimal firstNumber,decimal secondNumber)
    {
        System.debug('firstNumber: ' + firstNumber);
        System.debug('secondNumber: ' + secondNumber);
        try {
            Decimal result = firstNumber + secondNumber;
            return result;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}