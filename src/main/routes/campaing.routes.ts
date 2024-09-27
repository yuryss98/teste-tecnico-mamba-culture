import { Router } from 'express';
import { makeCampaingController } from '../factories';
import { validateCreateCampaign, validateDeleteCampaign, validateUpdateCampaign } from '../middlewares/validations/validate-input-values';

const campaignController = makeCampaingController();

export default (router: Router) => {
  router.post('/campaign/create', validateCreateCampaign, campaignController.createCampaing);
  router.delete('/campaign/delete', validateDeleteCampaign, campaignController.deleteCampaing);
  router.get('/campaign/findAll', campaignController.findAllCampaings);
  router.put('/campaign/update', validateUpdateCampaign, campaignController.updateCampaign);
};
