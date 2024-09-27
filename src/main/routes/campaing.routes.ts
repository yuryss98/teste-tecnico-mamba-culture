import { Router } from 'express';
import { makeCampaingController } from '../factories';
import { validateCreateCampaign } from '../middlewares/validations/validate-input-values';

const campaignController = makeCampaingController();

export default (router: Router) => {
  router.post('/campaign/create', validateCreateCampaign, campaignController.createCampaing);
};
