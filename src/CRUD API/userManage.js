import React from 'react';
import { connect } from 'react-redux';
import './userManage.scss'
import {getListPost,getListEx} from '../action/action';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { createUser } from '../services/createUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteUser } from '../services/deleteUser';
import { updateUser } from '../services/updateUser';

class UserManage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      arrUsers:[],
      isOpenModalUser: false,
      isOpenModaEditUser: false,
      userEdit:{},
      pages:[1,2,3,4,5,6,7,8],
      activePage:1,
    }
  }
  componentDidMount() {
    this.props.getListPost();
    this.props.getListEx();
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
      try {
      let response = await createUser(data)
      
      if( response &&(response.status===201 || response.status===200)){
        this.props.getListEx();
        this.setState({
          isOpenModalUser:false,
          activePage:1,
        })
        toast("Add User Success")

      }else{
        this.setState({
          isOpenModalUser:false,
        })
        toast(
      "Add User Failed"
        )
      }
      } catch (error) {
        alert(`${error.response.data[0].field} ${error.response.data[0].message}`);
      }
    };
    //delete user
    handleDeleteUser = async (item)=>{
      try {
        let response= await deleteUser(item.id)
        if(response && (response.status===204 || response.status===200)){
          this.props.getListEx();
          toast("Delete User Success")
        }else{
          toast(
            "Delete User Failed"
          )
        }
      } catch (error) {
        console.log(error)
      }
    }
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
    }
    //update infor
    doEditUser = async (userUpdate) => {
    
     try {
    
      let response= await updateUser(userUpdate)
      if(response && (response.status===201 || response.status===200)){
        this.props.getListEx();
        this.setState({
          isOpenModaEditUser:false,
        })
        toast("Update User Success")

      }else{
        toast(
          "Update User Failed"
        )
      }
      
     } catch (error) {
      console.log(error)
     }
    };
  //change pagination
  handleChangePage=(page)=>{
    this.props.getListEx(page);
    this.setState({
      activePage:page,
    })
   }
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
let {arrUsers,pages,activePage}=this.state;



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
          />
        )}
       <div className="title text-center">
          <span className='content-text'>Manage users</span>
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
          <div className='pagination'>
            {pages && pages.length>0 && pages.map((item,index)=>{
              return(
                <button className={item===activePage?'activePagination':''} value={item} key={item} onClick={()=>this.handleChangePage(item)}>Page {item} </button>
              )
            })}
            
          </div>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </>
)

}

}

const mapStateToProps = (state) => {
return {
dataLong: state.posts.listUserLong,
dataShort:state.posts.listUserShort,
}
}
const mapDispatchToProps = (dispatch) => {
return {
getListPost: () => dispatch(getListPost()),
getListEx:(page)=>dispatch(getListEx(page)),
}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
