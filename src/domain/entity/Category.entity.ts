interface CategoryProps {
  id: number;
  name: string;
  createdAt: Date;
}

export class Category {
  private _id: number;

  private _name: string;

  private _createdAt: Date;

  constructor(props: CategoryProps) {
    this._id = props.id;
    this._name = props.name;
    this._createdAt = props.createdAt;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}
