import {
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Box,
  SvgIcon,
} from "@mui/material";

import * as React from "react";
import "./SecondTable.css";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface User {
  id: number;
  name: string;
  company: string;
  role: string;
  projects: string;
}

const SecondTable: React.FC = () => {
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
    <div className="table2">
      <TableContainer
        component={Paper}
        sx={{ borderRadius: "12px", border: "1px solid #ddd" }}
      >
        <Table
          arial-label="simple table"
          sx={{
            "& .MuiTableCell-root": {
              padding: "12px 15px",
            },
          }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgb(245, 247, 249 )" }}>
              <TableCell sx={{ border: "1px solid #ddd" }}>
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
            {users &&
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell sx={{ border: "1px solid #ddd" }}>
                    <input type="checkbox"></input>
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid #ddd",
                      fontSize: "10.5px",
                    }}
                  >
                    {user.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid #ddd",
                      fontSize: "10.5px",
                    }}
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
                    <Box sx={{ display: "flex" }}>
                      <Button
                        sx={{
                          fontSize: "10px",
                          textTransform: "none",
                          background: "aliceblue",
                          borderRadius: "5px",
                          height: "25px",
                          border: "1px solid #ddd",
                          marginRight: "5px",
                        }}
                      >
                        Редактировать
                      </Button>

                      <Button
                        sx={{
                          minWidth: "35px",
                          maxWidth: "35px",
                          padding: "0px",

                          height: "35px",
                        }}
                        startIcon={
                          <SvgIcon
                            sx={{
                              width: "150px",
                              height: "150px",
                              paddingBottom: "80px",
                              paddingRight: "60px",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 150 150"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M124.696 125.863C124.838 125.71 125.038 125.623 125.247 125.623H138.752C138.961 125.623 139.161 125.71 139.303 125.863C139.444 126.016 139.516 126.222 139.5 126.43L138.534 138.983C138.414 140.546 137.11 141.754 135.542 141.754H128.457C126.888 141.754 125.585 140.546 125.464 138.983L124.499 126.43C124.483 126.222 124.554 126.016 124.696 125.863ZM135.542 140.254C136.327 140.254 136.979 139.65 137.039 138.868L137.942 127.123H126.057L126.96 138.868C127.02 139.65 127.672 140.254 128.457 140.254H135.542Z"
                                fill="#212121"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M123.246 126.373C123.246 125.958 123.582 125.623 123.996 125.623H140.003C140.417 125.623 140.753 125.958 140.753 126.373C140.753 126.787 140.417 127.123 140.003 127.123H123.996C123.582 127.123 123.246 126.787 123.246 126.373Z"
                                fill="#212121"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M129.186 123.746C128.978 123.746 128.81 123.914 128.81 124.122V125.622H135.189V124.122C135.189 123.914 135.02 123.746 134.813 123.746H129.186ZM127.31 124.122C127.31 123.086 128.15 122.246 129.186 122.246H134.813C135.849 122.246 136.689 123.086 136.689 124.122V126.372C136.689 126.787 136.353 127.122 135.939 127.122H128.06C127.646 127.122 127.31 126.787 127.31 126.372V124.122Z"
                                fill="#212121"
                              />
                            </svg>
                          </SvgIcon>
                        }
                      ></Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SecondTable;
