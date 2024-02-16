public with sharing class awNavigation {
    @AuraEnabled(cacheable=true)
    public static List<Certification__c> getCertifications() {
        return [
                SELECT Id, Name, Number_of_Certified_Professionals__c
                FROM Certification__c
                WITH SECURITY_ENFORCED
                ORDER BY Name
                ];
    }


}