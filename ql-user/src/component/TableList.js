import React, { Component } from 'react'
import TableRow from './TableRow'

export default class TableList extends Component {
  mapData=()=>this.props.dataUserProps.map((value,key)=> (
  <TableRow
   STT={key}
    userName={value.name} 
    tel={value.tel} 
    quyen={value.Permission}
    id={value.id}
  editFunClick={(abc)=>this.props.edit(value)}
  changEditUserForm={()=>this.props.changEditUserForm()}
  deleteClick={(idUser)=>this.deleteClick(idUser)}
  />))


  //hàm nhận id từ cần xóa từ con(table) gửi lên 
  deleteClick=(idUser)=>{
  //  console.log(idUser);
 
  this.props.deleteUserInfo(idUser)
  }
  render() {
    // console.log(this.props.dataUserProps);
    return (
        <div className="col">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Họ tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>          
           {this.mapData()}
          </tbody>
        </table>
      </div>
      
    )
  }
}
