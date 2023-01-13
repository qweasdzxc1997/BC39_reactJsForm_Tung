import { DELETE_USER, EDIT_USER, KEYWORD, SUBMIT } from "./constants";

const initialState = {
  userList: [
    {
      "fullname": "Nguyen Van A",
      "email": "asdqwe@gmail.com",
      "phoneNumber": "phoneNumber 1",
      "maSv": " 1",
      "id": "1"
    },
    {
      "fullname": "Nguyen Van B",
      "email": "asdqwe@gmail.com",
      "phoneNumber": "phoneNumber 2",
      "maSv": "2",
      "id": "2"
    }
  ],
  keyword: "",
  userEdit: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      //clone userList từ state
      let userList = [...state.userList];

      //tìm vị trí
      const index = userList.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        //Xoá phần tử tại vị trí tìm thấy
        userList.splice(index, 1);
      }

      //Cap nhat lai state
      state.userList = userList;

      return { ...state };
    }

    case SUBMIT: {
      let userList = [...state.userList];
      if (action.payload.id) {
        //update
        const index = userList.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          userList[index] = action.payload;
        }
      } else {
        //add
        const userNew = { ...action.payload, id: new Date().getTime() };
        userList.push(userNew);
      }

      state.userList = userList;

      return { ...state };
    }

    case EDIT_USER: {
      state.userEdit = action.payload;

      return { ...state };
    }

    case KEYWORD: {
      state.keyword = action.payload;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
