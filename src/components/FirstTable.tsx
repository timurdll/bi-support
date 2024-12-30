import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  rgbToHex,
} from "@mui/material";
import "./FirstTable.css";
import * as React from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface User {
  id: number;
  name: string;
  company: string;
  role: string;
  projects: string;
}

const FirstTable: React.FC = () => {
  const users: User[] = [
    {
      id: 1,
      name: "Усманов Юсупжан",
      company: "BI Stroy TOO",
      role: "Главный специалист BIM отдела",
      projects:
        "Украина, Узбекистан, Алматы, Тараз, Arena City Sport C (Comfort P-)-Кладовка",
    },
    {
      id: 2,
      name: "Шарафеев Юрий",
      company: "Компания не указана",
      role: "Сотрудник BIM отдела",
      projects: "Астана, Алматы, Шымкент, Nexpo Trend - 3",
    },
    {
      id: 3,
      name: "Усманов Юсупжан",
      company: "Каратас Майнинг TOO",
      role: "Директор по развитию бизнеса",
      projects: "Все проекты",
    },
  ];
  return (
    <div className="table">
      <TableContainer
        component={Paper}
        sx={{ borderRadius: "12px", border: "1px solid #ddd" }}
      >
        <Table
          arial-label="simple table"
          sx={{
            "& .MuiTableCell-root": {
              padding: "10px 12px",
            },
          }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgb(245, 247, 249 )" }}>
              <TableCell sx={{ border: "1px solid #ddd", padding: "4px 6px" }}>
                <input type="checkbox"></input>
              </TableCell>
              <TableCell
                size="small"
                sx={{
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                  fontSize: "11px",
                }}
              >
                Пользователь
              </TableCell>
              <TableCell
                size="small"
                sx={{
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                  fontSize: "11px",
                }}
              >
                Компания
              </TableCell>
              <TableCell
                size="small"
                sx={{
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                  fontSize: "11px",
                }}
              >
                Должность
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #ddd",
                  fontWeight: "bold",
                  fontSize: "11px",
                  padding: "4px",
                }}
              >
                Проекты
              </TableCell>
              <TableCell sx={{ border: "1px solid #ddd" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ border: "1px solid #ddd" }}>
                  <input type="checkbox"></input>
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid #ddd", fontSize: "10.5px" }}
                >
                  {user.name}
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid #ddd", fontSize: "10.5px" }}
                >
                  {user.company}
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd" }}>
                  <select className="select-role">
                    <option value={user.role}>{user.role}</option>
                  </select>
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd" }}>
                  {user.projects.split(", ").map((project, index) => (
                    <button key={index} className="select-btn">
                      {project}
                    </button>
                  ))}
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd" }}>
                  <button className="table-btn">...</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FirstTable;
