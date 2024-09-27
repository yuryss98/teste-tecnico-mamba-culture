import { CampaignRepository } from '../../repository/campaign.repository';

export class FindAllCampaignUseCase {
  constructor(private campaignRepository: CampaignRepository) {}

  exec() {
    return this.campaignRepository.findAll();
  }
}
