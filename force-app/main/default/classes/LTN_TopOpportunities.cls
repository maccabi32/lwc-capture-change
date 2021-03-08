public with sharing class LTN_TopOpportunities {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getTopOpportunities(Integer lim){
        try {
            String soql = 'SELECT Id, ExpectedRevenue FROM Opportunity WHERE isClosed=false ORDER BY ExpectedRevenue DESC LIMIT '+lim;
            return (List<Opportunity>)Database.query(soql);

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
