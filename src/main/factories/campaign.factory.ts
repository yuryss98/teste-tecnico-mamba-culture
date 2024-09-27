import { PrismaCampaignRepository } from '../../data/repositories/Prisma-campaign.repository';
import { PrismaCategoryRepository } from '../../data/repositories/Prisma-category.repository';
import { CreateCampaignUseCase } from '../../domain/use-case/campaign/create-campaign.use-case';
import { DeleteCampaignUseCase } from '../../domain/use-case/campaign/delete-campaign.use-case';
import { FindAllCampaignUseCase } from '../../domain/use-case/campaign/find-all-campaign.use-case';
import { UpdateCampaignUseCase } from '../../domain/use-case/campaign/update-campaign.use-case';
import { CampaingController } from '../../presentation/controllers/campaing.controller';

export const makeCampaingController = (): CampaingController => {
  const campaignRepository = new PrismaCampaignRepository();
  const categoryRepository = new PrismaCategoryRepository();
  const createCampaignUseCase = new CreateCampaignUseCase(campaignRepository, categoryRepository);
  const deleteCampaignUseCase = new DeleteCampaignUseCase(campaignRepository);
  const findAllCampaignsUseCase = new FindAllCampaignUseCase(campaignRepository);
  const updateCampaignUseCase = new UpdateCampaignUseCase(campaignRepository, categoryRepository);
  return new CampaingController(
    createCampaignUseCase,
    deleteCampaignUseCase,
    findAllCampaignsUseCase,
    updateCampaignUseCase,
  );
};
