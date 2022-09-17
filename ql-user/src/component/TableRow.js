import React, { Component } from 'react'

export default class TableRow extends Component {
    cacQuyen=()=>{
        if (this.props.quyen==1){return "Admin";}
        else if(this.props.quyen==2){return  "Moderetor";}
             else {return "Normal User";}
    }
    editClick=(abc)=>{

      this.props.editFunClick();
      this.props.changEditUserForm();
    }
   
    //hàm lấy id của mãu tin cần xóa để truuyền đi
    deleteUser=(idUser)=>{
      // console.log('id của user'  +idUser);
      this.props.deleteClick(idUser)
    }

  render() {
    return (
        <tr>
        <td scope="row">1</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.cacQuyen()}</td>
        <td>
          <div className="btn-group">
            <div onClick={()=>this.editClick()} className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
            <div onClick={(idUser)=>this.deleteUser(this.props.id)} className="btn btn-danger xoa"><i className="fa-solid fa-xmark" /> - Xóa</div>
          </div>
        </td>
      </tr>
    )
  }
}
