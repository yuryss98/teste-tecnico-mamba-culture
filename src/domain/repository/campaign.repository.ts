import { Campaign } from '../entity/Campaign.entity';

export abstract class CampaignRepository {
  abstract create(campaign: Campaign): Promise<void>;
  abstract findByName(campaignName: string): Promise<Campaign | null>;
  abstract findById(campaignId: number): Promise<Campaign | null>;
  abstract delete(campaignId: number): Promise<void>;
}
