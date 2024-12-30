import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Avatar,
  SvgIcon,
} from "@mui/material";
import "./FirstTable.css";
import bell from "../assets/bell.svg";
import "./Bar.css";

import { deepOrange } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Bar = () => {
  return (
    <div className="toolbar">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Button
            sx={{
              width: "165px",
              height: "43px",
              marginRight: "30px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          ></Button>

          <Typography
            className="text"
            variant="body1"
            sx={{
              fontSize: "18px",
              color: "black",
              paddingLeft: "5px",
              fontWeight: "200",
            }}
          >
            Инициация
          </Typography>
          <Typography
            className="text"
            variant="body1"
            sx={{ fontSize: "18px", color: "black", fontWeight: "200" }}
          >
            Проектирование
          </Typography>
          <Typography
            className="text"
            variant="body1"
            sx={{ fontSize: "18px", color: "black", fontWeight: "200" }}
          >
            СМР
          </Typography>
          <Button
            sx={{
              marginLeft: "650px",
              height: "28px",
              width: "11%",
              border: "1px solid #ddd",
              borderRadius: "9px",
              marginRight: "1px",
              backgroundColor: "rgb(245, 247, 249)",
            }}
          ></Button>
          <Button>
            <img src={bell} alt="Bell" />
          </Button>
          <Avatar
            sx={{ bgcolor: deepOrange[500], height: "30px", width: "30px" }}
          ></Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bar;
