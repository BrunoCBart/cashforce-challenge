import { Model, DataTypes } from 'sequelize'
import db from '.'
class Provider extends Model {
  public id: number
  public name: string
  public tradingName: string
  public cashforceTax: string
  public responsibleName: string
  public responsibleEmail: string
  public responsiblePosition: string
  public responsiblePhone: string
  public responsibleMobile: string
}
Provider.init({
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
  }
}, {
  sequelize: db,
  modelName: 'buyers',
});

export default Provider