import React, {useMemo} from 'react';
import {useTable} from 'react-table';
import {Data} from './data';
import {COLUMNS} from './columns';
import './SpecificationTable.css';
import{
    Styles,
} from './SpecificationElement';

export const SpecificationTable = () => {
   const columns=useMemo(() => COLUMNS, [])
   const data=useMemo(() => Data, [])

   const TableInstance=useTable({
       columns,
       data
   })

   const{
       getTableProps,
       getTableBodyProps,
       headerGroups,
       rows,
       prepareRow,
   }=TableInstance

    return (
        
        <div className="table-container">
            <h1>Course Specification:</h1>
            <Styles>
            <table className="table-wrapper" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>

                                ))}
                            
                        </tr>
                        ))
                    }
                   

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                    rows.map((row)=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell)=>{
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

                                        )
                                    })
                                }
                        
                             </tr>

                        )
                    })
                    }
                
                   

                </tbody>
            </table>
            </Styles>
            
        </div>
        
    )
}
