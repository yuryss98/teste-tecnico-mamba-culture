import { Request, Response } from 'express';
import { CreateCampaignUseCase } from '../../domain/use-case/campaign/create-campaign.use-case';

export class CampaingController {
  constructor(
    private createCampaingUseCase: CreateCampaignUseCase,
  ) { }

  createCampaing = async (req: Request, res: Response) => {
    await this.createCampaingUseCase.exec(req.body);

    return res.status(201).json({
      message: 'Campaign created successfully',
    });
  };
}
