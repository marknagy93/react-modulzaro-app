import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const CarsTable = ({ rows, edit, deleteElement }) => (
    <div style={{ height: 300, width: '100%' }}>
        <DataGrid style={{backgroundColor: "rgb(255,255,255, 0.8"}} rowHeight={200} autoHeight rows={rows} columns={columns(deleteElement)} onCellEditCommit={edit} />
    </div>
);

const columns = (deleteElement) => {
    return [
        {
            field: 'id',
            headerName: 'Id',
            headerAlign: 'center',
            width: 85,
            align: 'center',
            editable: false
        },
        {
            field: 'imgUrl',
            headerName: 'Image',
            headerAlign: 'center',
            width: 200,
            editable: false,
            renderCell: (params) => <img width={200} height={200} style={{objectFit: 'cover'}} src={params.value} />
        },
        {
            field: 'brand',
            headerName: 'Brand',
            headerAlign: 'center',
            width: 220,
            align: 'center',
            editable: true
        },
        {
            field: 'model',
            headerName: 'Model',
            headerAlign: 'center',
            width: 220,
            align: 'center',
            editable: true,
        },
        {
            field: 'fuel',
            headerName: 'Fuel',
            headerAlign: 'center',
            width: 220,
            align: 'center',
            editable: true,
        },
        {
            field: 'condition',
            headerName: 'Condition',
            headerAlign: 'center',
            width: 180,
            align: 'center',
            editable: true,
        },
        {
            field: 'delete',
            headerName: 'Delete',
            headerAlign: 'center',
            width: 120,
            align: 'center',
            renderCell: (params) => (
                <strong>
                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        style={{ marginLeft: 16 }}
                        id='deleteButton'
                        onClick={(e) => deleteElement(e, params)}
                    >
                        Delete
                    </Button>
                </strong>
            ),
        },

    ]
};

export default CarsTable;