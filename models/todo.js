module.exports = function (Sequelize, sequelize, DataTypes) {
  return sequelize.define(
    "todo_data",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      taskName: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      comment: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      date: {
        type: DataTypes.DATEONLY,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW(0),
        field: "createdAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW(0),
        field: "updatedAt",
      },
    },
    {
      tableName: "todo_data",
    }
  );
};
