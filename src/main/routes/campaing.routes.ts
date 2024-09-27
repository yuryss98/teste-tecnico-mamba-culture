import { Router } from 'express';
import { makeCampaingController } from '../factories';
import { validateCreateCampaign, validateDeleteCampaign } from '../middlewares/validations/validate-input-values';

const campaignController = makeCampaingController();

export default (router: Router) => {
  router.post('/campaign/create', validateCreateCampaign, campaignController.createCampaing);
  router.delete('/campaign/delete', validateDeleteCampaign, campaignController.deleteCampaing);
  router.get('/campaign/findAll', campaignController.findAll);
};
