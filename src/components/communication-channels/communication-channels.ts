import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'communication-channels',
  templateUrl: 'communication-channels.html'
})
export class CommunicationChannelsComponent {

  channels = [
    {
        id: 1, 
        label: "Health",
        icon: "health",
        page: "HealthPage"
    },
    {
        id: 2, 
        label: "Security",
        icon: "security",
        page: "SecurityPage"
    },
    {
        id: 3, 
        label: "Traffic",
        icon: "traffic",
        page: "TrafficPage"
    },
    {
        id: 4, 
        label: "Public Services",
        icon: "services",
        page: "PublicServicesPage"
    },
    {
        id: 5, 
        label: "Food & Drinks",
        icon: "food",
        page: "FoodPage"
    },
    {
        id: 6, 
        label: "Fatwa",
        icon: "fatwa",
        page: "FatwaPage"
    },
    {
        id: 7, 
        label: "Metro line",
        icon: "metro",
        page: "MetroLinePage"
    },
    {
        id: 8, 
        label: "My Campaign",
        icon: "campaign",
        page: "MyCampaignPage"
    },
    {
        id: 9, 
        label: "Crowds",
        icon: "crowds",
        page: "CrowdsPage"
    },
    {
        id: 10, 
        label: "Hajj Guide",
        icon: "kaaba",
        page: "HajjGuidePage"
    },
    {
        id: 11, 
        label: "Waste",
        icon: "waste",
        page: "WastePage"
    }
];
  
  constructor(public restProvider: RestProvider) {
  }

}
