import { PrismaClient } from '@prisma/client';
import { CampaignRepository } from '../../domain/repository/campaign.repository';
import { Campaign } from '../../domain/entity/Campaign.entity';
import PrismaCampaignMapper from '../mapper/Prisma-campaign.mapper';

export class PrismaCampaignRepository implements CampaignRepository {
  private _prisma: PrismaClient;

  constructor() {
    this._prisma = new PrismaClient({
      log: ['info'],
    });
  }

  async findAll(): Promise<Campaign[]> {
    try {
      const campaings = await this._prisma.campaigns.findMany({
        where: { status: true },
        include: { category: true },
      });
      return campaings.map((campaing) => PrismaCampaignMapper
        .toDomain(campaing, campaing.category));
    } catch (error) {
      console.error(error);
      return [];
    } finally {
      await this._prisma.$disconnect();
    }
  }

  async findById(campaignId: number): Promise<Campaign | null> {
    try {
      const campaign = await this._prisma.campaigns.findUnique({
        where: { id: campaignId, status: true },
        include: {
          category: true,
        },
      });

      if (!campaign) return null;

      return PrismaCampaignMapper.toDomain(campaign, campaign.category);
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      await this._prisma.$disconnect();
    }
  }

  async delete(campaignId: number): Promise<void> {
    try {
      await this._prisma.campaigns.update({
        where: { id: campaignId },
        data: { status: false },
      });
    } catch (error) {
      console.error(error);
    } finally {
      await this._prisma.$disconnect();
    }
  }

  async create(campaign: Campaign): Promise<void> {
    try {
      await this._prisma.campaigns.create({
        data: {
          name: campaign.props.name,
          startDate: new Date(campaign.props.startDate),
          endDate: new Date(campaign.props.endDate),
          categoryId: campaign.props.category.id,
          campaignStatus: campaign.props.campaignStatus,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      await this._prisma.$disconnect();
    }
  }

  async findByName(campaignName: string): Promise<Campaign | null> {
    try {
      const campaign = await this._prisma.campaigns.findUnique({
        where: { name: campaignName, status: true },
        include: {
          category: true,
        },
      });

      if (!campaign) return null;

      return PrismaCampaignMapper.toDomain(campaign, campaign.category);
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      await this._prisma.$disconnect();
    }
  }
}
