import { Campaign } from '../../entity/Campaign.entity';
import CustomError from '../../error/custom-error';
import { CampaignStatus, IUpdateCampaign } from '../../interfaces/campaign.interface';
import { CampaignRepository } from '../../repository/campaign.repository';
import { CategoryRepository } from '../../repository/category.repository';

export class UpdateCampaignUseCase {
  constructor(
    private campaignRepository: CampaignRepository,
    private categoriesRepository: CategoryRepository,
  ) {}

  async exec(campaign: IUpdateCampaign) {
    const { category, currentCampaign, campaignToUpdate } = await this.validateData(campaign);

    currentCampaign.props = {
      ...campaignToUpdate,
      category,
    };

    return this.campaignRepository.update(currentCampaign);
  }

  async validateData(campaign: IUpdateCampaign) {
    const currentCampaign = await this.campaignRepository.findById(campaign.id);
    if (!currentCampaign) {
      throw new CustomError('NOT_FOUND', 'Campaign Not Found');
    }

    const campaignToUpdate = this.validateDate(campaign, currentCampaign);

    const category = await this.categoriesRepository.findById(campaign.categoryId);
    if (!category) {
      throw new CustomError('NOT_FOUND', 'Category Not Found');
    }

    const campaignFoundByName = await this.campaignRepository.findByName(campaign.name);
    if (campaignFoundByName && campaignFoundByName.id !== campaign.id) {
      throw new CustomError('CONFLICT', 'This campaign already exists');
    }

    return {
      currentCampaign,
      category,
      campaignToUpdate,
    };
  }

  validateDate(campaign: IUpdateCampaign, currentCampaign: Campaign) {
    const startDate = new Date(campaign.startDate);
    const endDate = new Date(campaign.endDate);
    const now = new Date();

    const createdAt = currentCampaign.createdAt?.getTime();
    if (createdAt && startDate.getTime() < createdAt) {
      throw new CustomError('BAD_REQUEST', 'The start date cannot be less than the campaign creation date');
    }

    if (endDate.getTime() < startDate.getTime()) {
      throw new CustomError('BAD_REQUEST', 'The end date must be greater than start date');
    }

    if (endDate.getTime() < now.getTime()) {
      return {
        ...campaign,
        campaignStatus: CampaignStatus.EXPIRED,
      };
    }

    return campaign;
  }
}
