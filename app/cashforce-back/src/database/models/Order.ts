// module.exports = (Sequelize, DataTypes) => {
//   const Order = Sequelize.define('Order', {
   
//   }, {
//     tableName: 'orders',
//   })
//   Order.associate = (models) => {
//   //   Order.belongsTo(models.cnpjs, {
//   //     foreignKey: 'cnpjId', as: 'cnpj'
//   //   })
//   //   Order.belongsTo(models.users, {
//   //     foreignKey: 'userId', as: 'user'
//   //   })
//     Order.belongsTo(models.Order, {
//       foreignKey: 'buyerId', as: 'buyer'
//     })
//     Order.belongsTo(models.Provider, {
//       foreignKey: 'providerId', as: 'provider'
//     })
//   }

//   return Order
// }

import { Model, DataTypes } from 'sequelize'
import db from '.'
import Buyer from './Buyer'
import Provider from './Provider'

class Order extends Model {
  public id: number
  public orderNfId: string
  public orderNumber: string
  public orderPath: string
  public orderFileName: string
  public orderOriginalName: string
  public emissionDate: string
  public pdfFile: string
  public emitedTo: string
  public nNf: string
  public CTE: string
  public value: string
  public createdAt: Date
  public updatedAt: Date
  public cnpjId: number
  public userId: number
  public buyerId: number
  public providerId: number
  public orderStatusBuyer: string
  public orderStatusProvider: string
  public deliveryReceipt: string
  public cargoPackingList: string
  public deliveryCtrc: string
}

Order.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderPath: {
    type: DataTypes.STRING,
    defaultValue: null,
    unique: true
  },
  orderFileName: {
    type: DataTypes.STRING,
    defaultValue: null,
    unique: true
  },
  orderOriginalName: {
    type: DataTypes.STRING,
    defaultValue: null,
    unique: true
  },
  emissionDate: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  pdfFile: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  emitedTo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nNf: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  CTE: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  value: {
    type: DataTypes.STRING,
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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  providerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  orderStatusBuyer: {
    type: DataTypes.STRING,
    defaultValue: '0'
  },
  orderStatusProvider: {
    type: DataTypes.STRING,
    defaultValue: '0'
  },
  deliveryReceipt: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  cargoPackingList: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  deliveryCtrc: {
    type: DataTypes.STRING,
    defaultValue: null
  }
}, {
  sequelize: db,
  modelName: 'orders',
});

Order.belongsTo(Buyer, {foreignKey: 'buyerId', as: 'buyer'})
Order.belongsTo(Provider, {foreignKey: 'providerId', as: 'provider'})

export default Order

