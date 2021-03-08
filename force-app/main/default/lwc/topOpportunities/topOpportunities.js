import { LightningElement, wire } from 'lwc';
import getTopOpportunities from '@salesforce/apex/LTN_TopOpportunities.getTopOpportunities';

export default class TopOpportunities extends LightningElement {
    limit=5;
    @wire(getTopOpportunities,{lim:5})
    opportunities;

    get orderedOpportunities(){
        if(this.opportunities.data){
            return this.opportunities.data.map(x=>x.Id);
        }
        else return [];
    }

    get error(){
        if(this.opportunities.error){
            return JSON.stringify(this.opportunities.error);
        }
    }
}