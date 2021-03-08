import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue} from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { subscribe, unsubscribe, onError, setDebugFlag, isEmpEnabled } from 'lightning/empApi';

export default class OpportunityCard extends LightningElement {
    channelName = '/data/OpportunityChangeEvent';
    @api recordId;

    @wire(getRecord, {recordId:"$recordId", layoutTypes:"Full"})
    opportunity;

    get name(){
        return getFieldValue(this.opportunity.data,'Opportunity.Name');
    }

    get account(){
        return getFieldValue(this.opportunity.data,'Opportunity.Account.Name')
    }

    get stage(){
        return getFieldValue(this.opportunity.data,'Opportunity.StageName');
    }

    get expectedRevenue(){
        return getFieldValue(this.opportunity.data, 'Opportunity.ExpectedRevenue');
    }

    get quantity(){
        return getFieldValue(this.opportunity.data, 'Opportunity.TotalOpportunityQuantity');
    }
}