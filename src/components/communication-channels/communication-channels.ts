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
        label: "HEALTH",
        icon: "health-stethoscope",
        page: "HealthPage"
    },
    {
        id: 2,
        label: "SECURITY",
        icon: "police-officer-1",
        page: "SecurityPage"
    },
    {
        id: 3,
        label: "TRAFFIC",
        icon: "road-1",
        page: "TrafficPage"
    },
    {
        id: 4,
        label: "PUBLIC_SERVICES",
        icon: "user-group-circle",
        page: "PublicServicesPage"
    },
    {
        id: 5,
        label: "FOOD_&_DRINKS",
        icon: "kitchen-fork-knife",
        page: "FoodPage"
    },
    {
        id: 6,
        label: "DEPENDANTS",
        icon: "user-group",
        page: "FatwaPage"
    },
    {
        id: 7,
        label: "METRO_LINE",
        icon: "train-tunnel-2",
        page: "MetroLinePage"
    },
    {
        id: 8,
        label: "MY_CAMPAIGN",
        icon: "share-megaphone-1",
        page: "MyCampaignPage"
    },
    {
        id: 9,
        label: "CROWDS",
        icon: "user-group",
        page: "CrowdsPage"
    },
    {
        id: 10,
        label: "HAJJ_GUIDE",
        icon: "kaaba",
        page: "HajjGuidePage"
    },
    {
        id: 11,
        label: "CLEANING",
        icon: "eco-throw-trash",
        page: "WastePage"
    }
];

  constructor(public restProvider: RestProvider) {
  }

}
