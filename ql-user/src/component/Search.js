import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    // conc
    constructor(props, context) {
        super(props, context);
        this.state={
            trangthainutthem:true,
            nd:'',
            userObj:{}
        };
    }
    hiennut=()=>{
        if(this.state.trangthainutthem===true)
        return(<div onClick={()=>this.props.ketNoi()}className="btn btn-outline-info btn-block" >Thêm mới</div>)
        else  
        return <div onClick={()=>this.xulyTrangthai()} className="btn btn-outline-secondary btn-block" >Đóng</div>
    }
    
    xulyTrangthai=()=>{
      this.setState({
        trangthainutthem:!this.state.trangthainutthem
      })
    }
   
    //hàm lấy thông tin từ textbox
    isChange=(event)=>{
    //  console.log(event.target.value);
     //gsn dữ liệu cho state
     this.setState({nd:event.target.value})
    }
    ///cập nhật thông tin sửa
    getEditInfo=(info)=>{
      this.setState({
        userObj:info
      });
      this.props.getEditInfoApp(info);
    }
    isShowEdit=()=>{
        if(this.props.EditUserStatus===true){
            return <EditUser 
            changEditUserForm={()=>this.props.changEditUserForm()}
            userEditObject ={this.props.userEditObject}
            getEditInfo={(info)=>this.getEditInfo(info)}
            />
        }
    }
    //hàm lấy thông tin
    
    render() {
        return (
            <div className="col-12">
                <div className="col-12">
                    <div className='row'>
                        
                        <div className='col-sm-9'>
                            <div className="searchForm">
                                <div className="input-group mb-3">
                                    <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khóa" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button onClick={(dl)=>this.props.checkConnectProps(this.state.nd)} className="btn btn-primary" type="button" id="button-addon2">Tìm kiếm</button>
                                </div>
                            </div>

                        </div>
                        <div className='col-sm-3'>
                            <div className="btn-group">
                            {this.hiennut()}
                            </div>
                        </div>
                    </div>
                    {/* <EditUser/> */}
                    {this.isShowEdit()}
                </div>
            </div>
        )
    }
}
