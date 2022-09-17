//import React,{ Component} from 'react';
import React from 'react';
import { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableList from './TableList';
import dataUser from './data.json';





class App extends Component{
  constructor(props, context) {
    super(props, context);
    this.state={
      hienThiForm:false,
      data:dataUser,
      searchNd:'',
      EditUserStatus: false,
      userEditObject :{}
    }
  }
  
  // thongBao=()=>{
  //   alert('đã kết nối');

  // }


  
  doiTrangThai=()=>{
    // sst
    this.setState({hienThiForm:!this.state.hienThiForm});
  }

  checkConnect=(dl)=>{
    // alert('đã kết nối');
    // console.log('dữ liệu nhận được:'+dl);

    
    this.setState({searchNd:dl})
    console.log('dữ liệu bố nhạn đc là ' +this.state.searchNd);
  }
  getNewUser=(name,tel,Permission)=>{
    // console.log(name);
    // console.log(tel);
    // console.log(Permission);
    var item={};//ban đầu là đối tượng rỗng
    item.id='';
    item.name=name;
    item.tel=tel;
    item.Permission=Permission;
    // console.log(item);
    //khai báo một biến mới để lưu dữ liệu
    var newItem=this.state.data;
    newItem.push(item);
    // console.log(newItem);
    this.setState({data:newItem})


  }
editUser=(abc)=>{
  // alert("đã kết nối" +abc);
  this.setState({
    userEditObject:abc
  });
}

changEditUserForm=()=>{
  // sst
  this.setState({
    EditUserStatus:!this.state.EditUserStatus
  });
}

getEditInfoApp=(info)=>{
   console.log('thông tin đx sửa xong' +info.name);
   this.state.data.forEach((value,key)=>{
    if(value.id===info.id){
      value.name=info.name;
      value.tel=info.tel;
      value.Permission=info.Permission;

    }
   })
}


//hàm láy thông tin xóa (id) từ tablelist gửi lên
deleteUserInfo=(idUser)=>{
  //console.log('ID App nhận được '+idUser);
   //cách sử dụng hngf filter : hàm lọc thông tin
   //var manga=[1,2,3,4,5];
   //var x=3;
  // manga=manga.filter(abc=>abc!=x)
  // console.log(manga);
  var temData=this.state.data;
  temData=temData.filter(item=>item.id!=idUser);
  this.setState({
    data:temData
  });
}

  render(){
    // console.log(this.state.data);
    var ketqua=[]//khai báo mảng để lưu kq, ban đầu là mảng rỗng
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchNd)!==-1)
      //indexof lf hàm tìm kiếm
      {
        ketqua.push(item)
      }
    })
    // console.log(ketqua);
    return (
      <div className="App">
        <Header/>
        < div className='container'>
          <div className='row'>
            <Search ketNoi ={()=>this.doiTrangThai()}
            checkConnectProps={(dl)=>this.checkConnect(dl)}
            EditUserStatus={this.state.EditUserStatus}
            changEditUserForm={this.changEditUserForm}
            userEditObject={this.state.userEditObject}
            getEditInfoApp={(info)=>this.getEditInfoApp(info)}
            />
            <TableList dataUserProps={ketqua}
                       edit={(abc)=>this.editUser(abc)}
                       changEditUserForm={()=>this.changEditUserForm()}
                       deleteUserInfo={(idUser)=>this.deleteUserInfo(idUser)}
            />
            <AddUser
             add={(name,tel,Permission)=>this.getNewUser(name,tel,Permission)}
             hienThiForm={this.state.hienThiForm}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;