import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table';
import styled from 'styled-components'; // Import styled-components
import { colors } from '../../styles/Theme/colors'; // Import color chart

// Define a default UI for filtering
const GlobalFilterContainer = styled.div`
  margin-bottom: 10px;
`;

const GlobalFilterInput = styled.input`
  font-size: 1.1rem;
  border: 0;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: ${colors.headerBg}; /* Set background color */
  color: ${colors.headerText}; /* Set text color */
`;

const TableCell = styled.td`
  padding: 8px;
`;

const PaginationContainer = styled.div`
  margin-top: 10px;
`;

const PaginationButton = styled.button`
  margin-right: 5px;
  background-color: ${colors.buttonBg}; /* Set button background color */
  color: ${colors.buttonText}; /* Set button text color */
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const MyDataTable = () => {
  const employees = useSelector((state) => state.employee.employees);

  const columns = useMemo(() => [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Start Date',
      accessor: 'startDate',
    },
    {
      Header: 'Department',
      accessor: 'department',
    },
    {
      Header: 'Date of Birth',
      accessor: 'dateOfBirth',
    },
    {
      Header: 'Street',
      accessor: 'street',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'State',
      accessor: 'state',
    },
    {
      Header: 'Zip Code',
      accessor: 'zipCode',
    },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    setPageSize,
  } = useTable(
    { columns, data: employees },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <GlobalFilterContainer>
        <GlobalFilterInput
          value={state.globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value || undefined)}
          placeholder={`${preGlobalFilteredRows ? preGlobalFilteredRows.length : 0} records...`}
        />
      </GlobalFilterContainer>
      <TableContainer>
        <DataTable {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <TableHeader {...column.getHeaderProps(column.getSortByToggleProps())} key={index}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                  </TableHeader>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => (
                    <TableCell {...cell.getCellProps()} key={index}>{cell.render('Cell')}</TableCell>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </DataTable>
      </TableContainer>
      <PaginationContainer>
        <PaginationButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </PaginationButton>
        <PaginationButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </PaginationButton>
        <PaginationButton onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </PaginationButton>
        <PaginationButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </PaginationButton>
        <span>
          Page{' '}
          <strong>
            {state.pageIndex + 1} of {pageCount}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={state.pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: '100px' }}
          />
        </span>
        {' | '}
        <select
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </PaginationContainer>
    </>
  );
};
