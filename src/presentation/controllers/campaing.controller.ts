import { Request, Response } from 'express';
import { CreateCampaignUseCase } from '../../domain/use-case/campaign/create-campaign.use-case';
import { DeleteCampaignUseCase } from '../../domain/use-case/campaign/delete-campaign.use-case';

export class CampaingController {
  constructor(
    private createCampaingUseCase: CreateCampaignUseCase,
    private deleteCampaignUseCase: DeleteCampaignUseCase,
  ) { }

  createCampaing = async (req: Request, res: Response) => {
    await this.createCampaingUseCase.exec(req.body);

    return res.status(201).json({
      message: 'Campaign created successfully',
    });
  };

  deleteCampaing = async (req: Request, res: Response) => {
    await this.deleteCampaignUseCase.exec(req.body.campaignId);

    return res.status(204).end();
  };
}
