import Image from "next/image";
import React from "react";
import styles from "./settingspage.module.scss";
import { useTable } from "react-table";

interface Props {
  title: string
}

const SettingsPage = ({ title } : Props) => {


  const FirstColumn = ({ user } : any) => {
    return (
      <div className={styles.user_column}>
        <div className={styles.avatar_img}>
          <Image
            src="v1643303089/user-avatar_uhwgwg.png"
            alt="avatar"
            layout="fill"
          />
        </div>
        {user}
      </div>
    );
  };

  const EmailColumn = ({ email } : any) => {
    return (
      <div className={styles.email_column}>
        {email}
        <div className={styles.edit_img}>
          <Image
            src="v1643303089/editing_bbuguz.png"
            alt="edit"
            layout="fill"
          />
        </div>
      </div>
    );
  };

  const data = React.useMemo(
    () => [
      {
        col1: <FirstColumn user="rassem" />,
        col2: "Admin",
        col3: <EmailColumn email="Rassem.sassi@aleia.io" />,
      },
      {
        col1: <FirstColumn user="rassem" />,
        col2: "Admin",
        col3: <EmailColumn email="Rassem.sassi@aleia.io" />,
      },
      {
        col1: <FirstColumn user="rassem" />,
        col2: "you want",
        col3: <EmailColumn email="Rassem.sassi@aleia.io" />,
      },
    ],
    []
  );

  const columns : any = React.useMemo(
    () => [
      {
        Header: "Users",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Status",
        accessor: "col2",
      },
      {
        Header: "Email",
        accessor: "col3",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.layout_content}>
        <div className={styles.first_column}>
          <table {...getTableProps()} className={styles.table_container}>
            <thead>
              {headerGroups.map((headerGroup) => (
                // eslint-disable-next-line react/jsx-key
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    // eslint-disable-next-line react/jsx-key
                    <th
                      {...column.getHeaderProps()}
                      className={styles.table_header}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <td
                          {...cell.getCellProps()}
                          className={styles.table_row}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button className={styles.btn_add}>+ add a user</button>
        </div>

        <div className={styles.second_column}>
          <div className={styles.price_container}>
            <div className={styles.price_header}>Price By Km: </div>
            <div className={styles.price_content}>1d/km</div>
            <div className={styles.price_edit}>
              <Image
                src="v1643303089/editing_bbuguz.png"
                alt="edit"
                layout="fill"
              />
            </div>
          </div>

          <div className={styles.price_container}>
            <div className={styles.price_header}>Adress Aleia: </div>
            <div className={styles.price_content}>
              Adress de bureau, adress de bureau, Adresse de bureau.
            </div>
            <div className={styles.price_edit}>
              <Image
                src="v1643303089/editing_bbuguz.png"
                alt="edit"
                layout="fill"
              />
            </div>
          </div>

          <button className={styles.btn_save}>Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
