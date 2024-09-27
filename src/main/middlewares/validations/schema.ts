import Joi from 'joi';
import { CampaignStatus } from '../../../domain/interfaces/campaign.interface';

const name = Joi.string().min(3).required();
const startDate = Joi.date().required();
const endDate = Joi.date().required();
const campaignStatus = Joi.string().valid(...Object.values(CampaignStatus)).required();
const categoryId = Joi.number().required();
const campaignId = Joi.number().required();

export const createCampaingSchema = Joi.object({
  name,
  startDate,
  endDate,
  campaignStatus,
  categoryId,
});

export const deleteCampaingSchema = Joi.object({
  campaignId,
});

export const updateCampaingSchema = Joi.object({
  name,
  startDate,
  endDate,
  campaignStatus,
  categoryId,
  id: campaignId,
});
