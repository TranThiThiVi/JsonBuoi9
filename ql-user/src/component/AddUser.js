import React, { Component } from 'react'

export default class AddUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { trangthainutthem: true,
      id:'',
      name:'',
      tel:'',
      Permission:''
     };

  }
  hiennut = () => {
    if (this.state.trangthainutthem === true)
      return (<div onClick={() => this.xulyTrangthai()} className="btn btn-outline-info btn-block" >Thêm mới</div>)
    else
      return <div onClick={() => this.xulyTrangthai()} className="btn btn-outline-secondary btn-block" >Đóng</div>
  }

  xulyTrangthai = () => {
    this.setState({
      trangthainutthem: !this.state.trangthainutthem
    })
  }
  
  // hienForm= ()=>{
  //   if(this.state.trangthainutthem===false)
  //   {
  //     return(
  //       <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
  //       <div className="card-header">Thêm thành viên</div>
  //       <div className="card-body text-primary">
  //         <div className="form-group">
  //           <input type="text" className="form-control" name id placeholder="Tên user" />
  //         </div>
  //         <div className="form-group">
  //           <input type="text" className="form-control" name id placeholder="Số điện thoại" />
  //         </div>
  //         <div className="form-group">
  //           <select className="form-control" name id>
  //             <option selected>Choose...</option>
  //             <option value={1}>Admin</option>
  //             <option value={2}>User</option>
  //             <option value={3}>Modrater</option>
  //           </select>
  //         </div>
  //         <div className="form-group">
  //           <div className="btn btn-block btn-primary">Thêm</div>
  //         </div>
  //       </div>
  //     </div>
  //     )
  //   }
  // }
  kiemTraTrangThai = () => {
    if (this.props.hienThiForm == true)
      return (
        <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">Thêm thành viên</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name ='name'  placeholder="Tên user" />
            </div>
            <div className="form-group">
              <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name='tel'  placeholder="Số điện thoại" />
            </div>
            <div className="form-group">
              <select className="form-control" name='Permission'  onChange={(event) =>this.isChange(event)}>
                <option selected>Choose...</option>
                <option value={1}>Admin</option>
                <option value={2}>User</option>
                <option value={3}>Modrater</option>
              </select>
            </div>
            <div className="form-group">
              <div onClick= {(name,tel,Permission)=>this.props.add(this.state.name,this.state.tel,this.state.Permission)} className="btn btn-block btn-primary">Thêm</div>
            </div>
          </div>
        </div>
      )
  }
//lấy thông tin từ cácc control
  isChange=(event)=>{
    const name =event.target.name;
    const value =event.target.value;
    // console.log(name);
    // console.log(value);
    this.setState({[name]:value})
    var pt={};
    pt.id=this.state.id;
    pt.name=this.state.name;
    pt.tel=this.state.tel;
    pt.Permission=this.state.Permission;
    // console.log(pt);
    
    }
  render() {
    // console.log(this.props.hienThiForm);
    // console.log(this.state);
    
    return (
    <div>
        <div className="col-12">
        {/* {this.hiennut()}
         {this.hienForm()} */}
        {this.kiemTraTrangThai()}
      </div>
    </div>
    )
  }
}

