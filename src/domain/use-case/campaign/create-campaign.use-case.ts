import { Campaign } from '../../entity/Campaign.entity';
import CustomError from '../../error/custom-error';
import { ICreateCampaign } from '../../interfaces/campaign.interface';
import { CampaignRepository } from '../../repository/campaign.repository';
import { CategoryRepository } from '../../repository/category.repository';

export class CreateCampaignUseCase {
  constructor(
    private campaignRepository: CampaignRepository,
    private categoriesRepository: CategoryRepository,
  ) {}

  async exec(campaign: ICreateCampaign) {
    const category = await this.validateData(campaign);

    const newCampaign = new Campaign({
      name: campaign.name,
      category,
      endDate: campaign.endDate,
      startDate: campaign.startDate,
      campaignStatus: campaign.campaignStatus,
    });

    return this.campaignRepository.create(newCampaign);
  }

  async validateData(campaign: ICreateCampaign) {
    this.validateDate(campaign);

    const category = await this.categoriesRepository.findById(campaign.categoryId);
    if (!category) {
      throw new CustomError('NOT_FOUND', 'Category Not Found');
    }

    const campaignFoundByName = await this.campaignRepository.findByName(campaign.name);
    if (campaignFoundByName) {
      throw new CustomError('CONFLICT', 'This campaign already exists');
    }

    return category;
  }

  validateDate(campaign: ICreateCampaign) {
    const startDate = new Date(campaign.startDate);
    const endDate = new Date(campaign.endDate);
    const now = new Date();

    if (endDate.getTime() < startDate.getTime()) {
      throw new CustomError('BAD_REQUEST', 'The end date must be greater than start date');
    }

    if (startDate.getTime() < now.getTime()) {
      throw new CustomError('BAD_REQUEST', 'The start date must be greater than or equal now date');
    }
  }
}
