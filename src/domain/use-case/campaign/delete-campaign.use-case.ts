import CustomError from '../../error/custom-error';
import { CampaignRepository } from '../../repository/campaign.repository';

export class DeleteCampaignUseCase {
  constructor(
    private campaignRepository: CampaignRepository,
  ) {}

  async exec(campaignId: number) {
    await this.validateData(campaignId);

    return this.campaignRepository.delete(campaignId);
  }

  async validateData(campaignId: number) {
    const campaign = await this.campaignRepository.findById(campaignId);
    if (!campaign) {
      throw new CustomError('NOT_FOUND', 'Campaign Not Found');
    }
  }
}
