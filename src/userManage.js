import React from 'react';
import { connect } from 'react-redux';
import './userManage.scss'
import {getListPost,getListEx} from './action/action';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';

class UserManage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      arrUsers:[],
      isOpenModalUser: false,
      isOpenModaEditUser: false,
      userEdit:{}
    }
  }
  componentDidMount() {
    this.props.getListPost();
    this.props.getListEx();
    // this.setState({arrUsers:this.props.dataShort.data})
    }
    componentDidUpdate(prevProps, prevState, snapshot){
      if(this.props.dataShort !==prevProps.dataShort){
        this.setState({
          arrUsers:this.props.dataShort.data,
        })
      }
    }
    //create user from modaluser
    createNewUser = async (data) => {
     
    };
    //add user button
    handleAddNewUser=()=>{
      this.setState({
        isOpenModalUser:true,
      })
    }
    //edit user button
    handleEditUser=(user)=>{
      this.setState({
        isOpenModaEditUser:true,
        userEdit:user
      })
      // console.log(user.id)
    }
    //update infor
    doEditUser = (userUpdate) => {
     let id=userUpdate.id;
     let copyArrUsers={...this.state.arrUsers};
      copyArrUsers[id]=userUpdate;
      this.setState({
        arrUsers:copyArrUsers,
      })
    };
    //toggle modal
    toggleUserModal = () => {
      this.setState({
        isOpenModalUser: !this.state.isOpenModalUser,
      });
    };
    toggleUserEditModal = () => {
      this.setState({
        isOpenModaEditUser: !this.state.isOpenModaEditUser,
      });
    };
render() {
console.log(this.state)
let {arrUsers}=this.state;



return (
    <>
    <ModalUser
     // truyen 1 state thong thuong
     isOpen={this.state.isOpenModalUser}
     // truyen 1 function
     toggleFromParent={this.toggleUserModal}
     createNewUser={this.createNewUser} />
     {/* khi nao an vao nut sua thi moi mount component modaledituser, de su dung duoc ham component didmount ben modaledituser */}
     {this.state.isOpenModaEditUser && (
          <ModalEditUser
            isOpen={this.state.isOpenModaEditUser}
            toggleUserEditModal={this.toggleUserEditModal}
            currentUser={this.state.userEdit}
            editUser={this.doEditUser}
            // toggleFromParent={this.toggleUserModal}
            // createNewUser={this.createNewUser}
          />
        )}
       <div className="title text-center">
          Manage users
          <div className="mx-1 ">
            <button
              className="btn btn-primary px-3"
              onClick={() => this.handleAddNewUser()}
            >
              <i class="fa fa-plus px-3"></i>Add new user
            </button>
          </div>
          </div>
          <div className="users-table mt-4 mx-4 ">
            <table id="customers">
              <tbody>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
               
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
                {arrUsers &&
                  arrUsers.length > 0 &&
                  arrUsers.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td> {item.email}</td>
                        <td>{item.name}</td>
                       
                          {item.gender==="male"?<td>Male</td>:<td>Female</td>}
                          {item.status==="active"?<td>Active</td>:<td>InActive</td>}
                        
                        
                        <td>
                          <button
                            className="btn-edit"
                            onClick={() => this.handleEditUser(item)}
                          >
                            <i class="fa fa-wrench"></i>
                          </button>
                          <button
                            className="btn-delete"
                            onClick={() => this.handleDeleteUser(item)}
                          >
                         <i class="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
    </>
)

}

}

const mapStateToProps = (state) => {
return {
dataLong: state.posts.listUserLong,
dataShort:state.posts.listUserShort,

// data2:state.posts.data2,
}
}
const mapDispatchToProps = (dispatch) => {
return {
getListPost: () => dispatch(getListPost()),
getListEx:()=>dispatch(getListEx()),
}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
