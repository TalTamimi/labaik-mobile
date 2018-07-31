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
        icon: "health-stethoscope",
        page: "HealthPage"
    },
    {
        id: 2,
        label: "Security",
        icon: "police-officer-1",
        page: "SecurityPage"
    },
    {
        id: 3,
        label: "Traffic",
        icon: "road-1",
        page: "TrafficPage"
    },
    {
        id: 4,
        label: "Public Services",
        icon: "user-group-circle",
        page: "PublicServicesPage"
    },
    {
        id: 5,
        label: "Food & Drinks",
        icon: "kitchen-fork-knife",
        page: "FoodPage"
    },
    {
        id: 6,
        label: "Dependants",
        icon: "user-group",
        page: "FatwaPage"
    },
    {
        id: 7,
        label: "Metro line",
        icon: "train-tunnel-2",
        page: "MetroLinePage"
    },
    {
        id: 8,
        label: "My Campaign",
        icon: "share-megaphone-1",
        page: "MyCampaignPage"
    },
    {
        id: 9,
        label: "Crowds",
        icon: "user-group",
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
        icon: "eco-throw-trash",
        page: "WastePage"
    }
];

  constructor(public restProvider: RestProvider) {
  }

}
