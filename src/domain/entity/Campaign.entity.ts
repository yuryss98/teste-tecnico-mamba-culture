import { CampaignStatus } from '../interfaces/campaign.interface';
import { Category } from './Category.entity';

interface CampaignProps {
  name: string;
  startDate: Date;
  endDate: Date;
  campaignStatus: CampaignStatus;
  category: Category
}

export class Campaign {
  private _props: CampaignProps;

  private _id: number | null;

  private _createdAt: Date | null;

  constructor(props: CampaignProps, id?: number, createdAt?: Date) {
    this._props = { ...props };
    this._id = id || null;
    this._createdAt = createdAt || null;
  }

  get id(): number | null {
    return this._id;
  }

  get props(): CampaignProps {
    return this._props;
  }

  get createdAt(): Date | null {
    return this._createdAt;
  }
}
