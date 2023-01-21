
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import * as ProductService from './service/ProductService';

export const Table: React.FC <any> = ({filters}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      ProductService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <div>
        <div className="datatable-filter-demo">
            <div className="card">
                <h5>Filter Row</h5>
                <p>Filters are displayed inline within a separate row.</p>
                <DataTable 
                  value={products} 
                  paginator 
                  className="p-datatable-products" 
                  rows={10}
                  dataKey="id" 
                  filterDisplay="row" 
                  responsiveLayout="scroll"
                  globalFilterFields={['name', 'price']} 
                  emptyMessage="No products found."
                >
                    {filters.map((filter: any) => (
                      <Column 
                        field={filter.field} 
                        header={filter.header} 
                        filter 
                        filterPlaceholder="Search by name" 
                        style={{ minWidth: '12rem' }}
                        columnKey={filter.field}
                      >
                        </Column>
                    ))}
                </DataTable>
            </div>
        </div>
      </div>
    );
}