export enum CampaignStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  EXPIRED = 'EXPIRED',
}

export interface ICreateCampaign {
  name: string;
  startDate: Date;
  endDate: Date;
  campaignStatus: CampaignStatus;
  categoryId: number;
}

export interface IUpdateCampaign extends ICreateCampaign {
  id: number;
}
