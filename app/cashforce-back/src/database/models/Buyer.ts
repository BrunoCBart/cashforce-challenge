import { Model, DataTypes } from 'sequelize'
import db from '.'
class Buyer extends Model {
  public id: number
  public name: string
  public tradingName: string
  public cashforceTax: string
  public responsibleName: string
  public responsibleEmail: string
  public responsiblePosition: string
  public responsiblePhone: string
  public responsibleMobile: string
  public website: string
  public postalCode: string
  public address: string
  public number: string
  public complement: string
  public neighborhood: string
  public city: string
  public state: string
  public phoneNumber: string
  public situationDate: Date
  public createdAt: Date
  public updatedAt: Date
  public cnpjId: number
  public confirm: number
  public email: string
}

Buyer.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tradingName: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  cashforceTax: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  responsibleName: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  responsibleEmail: {
    type: DataTypes.STRING,
    defaultValue: null,
    unique: true
  },
  responsiblePosition: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  responsiblePhone: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  responsibleMobile: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  website: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  postalCode: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  address: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  number: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  complement: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  neighborhood: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  city: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  phoneNumber: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  situationDate: {
    type: DataTypes.DATE,
    defaultValue: null
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  cnpjId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  confirm: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  email: {
    type: DataTypes.STRING,
    defaultValue: null
  }

}, {
  sequelize: db,
  modelName: 'buyers',
});

export default Buyer