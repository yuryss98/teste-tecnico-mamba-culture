import { PrismaCampaignRepository } from '../../data/repositories/Prisma-campaign.repository';
import { PrismaCategoryRepository } from '../../data/repositories/Prisma-category.repository';
import { CreateCampaignUseCase } from '../../domain/use-case/campaign/create-campaign.use-case';
import { CampaingController } from '../../presentation/controllers/campaing.controller';

export const makeCampaingController = (): CampaingController => {
  const campaignRepository = new PrismaCampaignRepository();
  const categoryRepository = new PrismaCategoryRepository();
  const createCampaignUseCase = new CreateCampaignUseCase(campaignRepository, categoryRepository);
  return new CampaingController(createCampaignUseCase);
};
