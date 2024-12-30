import {
  Button,
  Container,
  Typography,
  Toolbar,
  AppBar,
  Select,
  createTheme,
  ThemeProvider,
  Box,
  SvgIcon,
} from "@mui/material";
import Bar from "./Bar";
import FirstTable from "./FirstTable";
import SecondTable from "./SecondTable";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./Containitems.css";

const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false, // Отключает предустановленные значения
      },
      styleOverrides: {
        root: {
          maxWidth: "1600px", // Ваше значение
        },
      },
    },
  },
});

const Containitems = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgb(237, 243, 248 )",

        minHeight: "100vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <Container>
          <Bar />
          <Box
            sx={{
              border: "1px solid #ddd",
              marginTop: "75px",
              display: "grid",
              paddingBottom: "20px",
              paddingTop: "17px",
              paddingRight: "12px",
              paddingLeft: "17px",
              borderRadius: "17px",
              backgroundColor: "white",
            }}
          >
            <div className="adm-btn">
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: "27.2px" }}
              >
                Администрирование
              </Typography>
              <Button
                sx={{
                  textTransform: "none",
                  backgroundColor: "RoyalBlue",
                  color: "white",
                  fontSize: "11.3px",
                  borderRadius: "5px",
                  height: "30px",
                  width: "7%",
                }}
              >
                Создать роль
              </Button>
            </div>

            <div className="adm-text">
              <Typography
                variant="body1"
                sx={{
                  marginRight: "11px",
                  fontSize: "13px",
                  color: "RoyalBlue",
                }}
              >
                Пользователи
              </Typography>

              <Typography
                variant="body1"
                sx={{ marginRight: "11px", fontSize: "13px", color: "DimGray" }}
              >
                Роли
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "DimGray" }}
                variant="body1"
              >
                Проекты
              </Typography>
            </div>
            <hr
              style={{
                border: "0",
                borderBottom: "1px solid #ddd",
                width: "100%",
                marginBottom: "17px",
              }}
            />

            <div>
              <Button
                startIcon={
                  <SvgIcon sx={{ height: "100px", width: "15.7px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="267 123 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M279.183 127.369C277.025 125.21 273.527 125.21 271.369 127.369C269.21 129.527 269.21 133.025 271.369 135.183C273.527 137.342 277.025 137.342 279.183 135.183C281.342 133.025 281.342 129.527 279.183 127.369ZM280.244 126.308C277.5 123.564 273.052 123.564 270.308 126.308C267.564 129.052 267.564 133.5 270.308 136.244C273.052 138.988 277.5 138.988 280.244 136.244C282.988 133.5 282.988 129.052 280.244 126.308Z"
                        fill="#212121"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M279.18 135.18C279.473 134.887 279.947 134.887 280.24 135.18L283.53 138.47C283.823 138.763 283.823 139.237 283.53 139.53C283.237 139.823 282.763 139.823 282.47 139.53L279.18 136.24C278.887 135.947 278.887 135.473 279.18 135.18Z"
                        fill="#212121"
                      />
                    </svg>
                  </SvgIcon>
                }
                sx={{
                  background: "aliceblue",
                  borderRadius: "8px",
                  color: "black",
                  fontSize: "12px",
                  textTransform: "none",
                  width: "18.5%",
                  paddingRight: "120px",
                  height: "38px",
                  marginRight: "12px",
                  paddingLeft: "0px",
                  backgroundColor: "rgb(245, 247, 249)",
                }}
              >
                ФИО, почта
              </Button>
              <select className="comp-select">
                <option>Компания</option>
              </select>
              <select className="role-select">
                <option>Должность</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "12px",
                marginBottom: "10px",
              }}
            >
              <Typography variant="h6" sx={{ marginRight: "5px" }}>
                Пользователи
              </Typography>
              <Typography variant="h5" sx={{ color: "grey" }}>
                1477
              </Typography>
            </div>
            <div className="buttonss">
              <Button
                sx={{
                  fontSize: "10px",
                  textTransform: "none",
                  background: "aliceblue",
                  borderRadius: "15px",
                  padding: "1px 1px",
                  minWidth: "38px",
                  height: "30px",
                  marginRight: "4px",
                }}
              >
                Все
              </Button>
              <Button
                sx={{
                  fontSize: "10px",
                  textTransform: "none",
                  background: "rgb(245, 247, 249)",
                  borderRadius: "30px",
                  minWidth: "40px",
                  color: "black",
                  marginRight: "4px",
                }}
              >
                Внутренние
              </Button>
              <Button
                sx={{
                  fontSize: "10px",
                  textTransform: "none",
                  background: "rgb(245, 247, 249)",
                  borderRadius: "30px",
                  width: "auto",
                  color: "black",
                }}
              >
                Внешние
              </Button>
            </div>
            <FirstTable />
            <SecondTable />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Containitems;
