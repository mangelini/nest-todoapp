export type UserModelData = {
  id: number;
  username: string;
};

class UserModel {
  id: number;
  username: string;

  constructor(data: UserModelData) {
    this.id = data.id;
    this.username = data.username;
  }
}

export default UserModel;
