import React from "react";
import styles from "./pickupss.module.scss";
import { useTable } from "react-table";
import Image from "next/image";

const MyPickUps = ({ title }) => {
  const FirstColumn = ({ user }) => {
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

  // const EmailColumn = ({ email }) => {
  //   return (
  //     <div className={styles.email_column}>
  //       {email}
  //       <div className={styles.edit_img}>
  //         <Image
  //           src="v1643303089/editing_bbuguz.png"
  //           alt="edit"
  //           layout="fill"
  //         />
  //       </div>
  //     </div>
  //   );
  // };

  const data = React.useMemo(
    () => [
      {
        col1: <FirstColumn user="rassem" />,
        col2: "Admin",
        col3: "date",
        col4: "prix",
      },
      {
        col1: <FirstColumn user="rassem" />,
        col2: "Admin",
        col3: "date",
        col4: "prix",
      },
      {
        col1: <FirstColumn user="rassem" />,
        col2: "Admin",
        col3: "date",
        col4: "prix",
      },
    ],
    []
  );

  const columns = React.useMemo(
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
      {
        Header: "Prix",
        accessor: "col4",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      {/* <button className={styles.btn_request}>New request</button> */}

      <p className={styles.table_title}>Lists of requests</p>

      <table {...getTableProps()} className={styles.table_container}>
        <tbody {...getTableBodyProps()} className={styles.table_body}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()} className={styles.table_users_row}>
                {row.cells.map((cell) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <td {...cell.getCellProps()} className={styles.table_row}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className={styles.btn_add}>See more</button>
    </div>
  );
};

export default MyPickUps;
