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
            width: 180,
            editable: false
        },
        {
            field: 'imgUrl',
            headerName: 'Image',
            width: 200,
            editable: false,
            renderCell: (params) => <img src={params.value} />
        },
        {
            field: 'brand',
            headerName: 'Brand',
            width: 220,
            editable: true
        },
        {
            field: 'model',
            headerName: 'Model',
            width: 220,
            editable: true,
        },
        {
            field: 'fuel',
            headerName: 'Fuel',
            width: 220,
            editable: true,
        },
        {
            field: 'condition',
            headerName: 'Condition',
            width: 180,
            editable: true,
        },
        {
            field: 'delete',
            headerName: 'Delete',
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