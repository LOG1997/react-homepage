import React from 'react'
import { Table } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { generateColumns } from './columns'
export default function TableContainer<T extends { id: string }>(props:any): React.ReactElement {
    const { data, constant, title } = props;
    const columns: ColumnType<T>[] = generateColumns<T>(constant)

    return (
        <div>
            <h1>{title}</h1>
            {/* fixed属性与ColumnType类型不兼容 */}
            <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />;
        </div>
    )
}
