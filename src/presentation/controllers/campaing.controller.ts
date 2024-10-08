import { Request, Response } from 'express';
import { CreateCampaignUseCase } from '../../domain/use-case/campaign/create-campaign.use-case';
import { DeleteCampaignUseCase } from '../../domain/use-case/campaign/delete-campaign.use-case';
import { FindAllCampaignUseCase } from '../../domain/use-case/campaign/find-all-campaign.use-case';
import { UpdateCampaignUseCase } from '../../domain/use-case/campaign/update-campaign.use-case';

export class CampaingController {
  constructor(
    private createCampaignUseCase: CreateCampaignUseCase,
    private deleteCampaignUseCase: DeleteCampaignUseCase,
    private findAllCampaignUseCase: FindAllCampaignUseCase,
    private updateCampaignUseCase: UpdateCampaignUseCase,
  ) { }

  createCampaing = async (req: Request, res: Response) => {
    await this.createCampaignUseCase.exec(req.body);

    return res.status(201).json({
      message: 'Campaign created successfully',
    });
  };

  deleteCampaing = async (req: Request, res: Response) => {
    await this.deleteCampaignUseCase.exec(req.body.campaignId);

    return res.status(204).end();
  };

  findAllCampaings = async (_req: Request, res: Response) => {
    const campaings = await this.findAllCampaignUseCase.exec();

    return res.status(200).json({
      body: campaings.map((campaign) => ({
        id: campaign.id,
        name: campaign.props.name,
        startDate: campaign.props.startDate,
        endDate: campaign.props.endDate,
        campaignStatus: campaign.props.campaignStatus,
        category: {
          id: campaign.props.category.id,
          name: campaign.props.category.name,
          createdAt: campaign.props.category.createdAt,
        },
        createdAt: campaign.createdAt,
      })),
    });
  };

  updateCampaign = async (req: Request, res: Response) => {
    await this.updateCampaignUseCase.exec(req.body);

    return res.status(204).end();
  };
}
