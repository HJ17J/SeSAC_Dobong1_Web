const Visitor = function (Sequelize, DataTypes) {
  // Sequelize: model/index.js의 sequelize
  // DataType: model/index.js의 Sequelize

  // Sequelize.define(name, constructor, options)
  // name: 모델 이름 설정
  // constructor: 컬럼 정의(CREATE TABLE 제약 조건)
  // option: 모델 옵션 정의
  const model = Sequelize.define(
    'Visitor',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT('medium'),
      },
    },
    {
      tableName: 'visitor',
      timestamps: false,
      freezeTableName: true,
    }
  );
  return model;
};

module.exports = Visitor;
