import { Campaigns, Categories } from '@prisma/client';
import { Campaign } from '../../domain/entity/Campaign.entity';
import { Category } from '../../domain/entity/Category.entity';
import { CampaignStatus } from '../../domain/interfaces/campaign.interface';

export default class PrismaCampaignMapper {
  static toDomain(campaignLine: Campaigns, categoryLine: Categories): Campaign {
    return new Campaign({
      name: campaignLine.name,
      campaignStatus: campaignLine.campaignStatus as CampaignStatus,
      endDate: campaignLine.endDate,
      startDate: campaignLine.startDate,
      category: new Category({
        id: categoryLine.id,
        name: categoryLine.name,
        createdAt: categoryLine.createdAt,
      }),
    });
  }
}
