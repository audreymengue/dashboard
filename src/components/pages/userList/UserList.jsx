import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { usersRows } from "../../sampleData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
    const [data, setData] = useState(usersRows);
    
    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'User name', width: 200, renderCell: (params) =>{
            return <div className="userListUser">
                <img src={params.row.avatar} alt="" className="userListImg"/>{params.row.username}
            </div>
        } },
        {
          field: 'email',
          headerName: 'Email',
          width: 130
        },
        { field: 'status', headerName: 'Status', width: 130 },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 200
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 130, renderCell: (params) => {
              return <>

                    <Link to={"/users/"+params.row.id}>
                         <button className="userListEditBtn">Edit</button>
                    </Link>
                 
                  <DeleteOutlineIcon className="userListDelBtn" onClick={() => handleDelete(params.row.id)}/>
              </>
          }
        },
      ];
      
      

  return (
    <div className="userList">
        <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
