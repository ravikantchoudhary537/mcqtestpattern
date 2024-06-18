import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


import Loginform from "./components/Loginform";




import { Button  } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

// import SelectOption from "./Components/SelectOption";

const drawerWidth = 240;

export default function Form() {
  const [data, setData] = useState("");
  const [submitbtn,setsubmitbtn]=useState(false);

  const navbar = ["MCQ","Hard","Medium","Difficult"];
//   const components = [];

// const dataHandle = (index) => {
//   setsubmitbtn(true);
//   if (index >= 0 && index < components.length) {
//     setData([...data, components[index]]);
//   }
// }

const [allData,setAllData]=useState('');
const submitFormHandle=()=>{
  setAllData(data);
  console.log("data",data);
  console.log("all data",allData)


}




  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MCQ Test Platform
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box className="flex justify-center items-center flex-col">{data}

          {  submitbtn  ?
            <button className="bg-blue-500 text-white p-2 rounded font-semibold mt-4 hover:bg-blue-300 hover:text-gray-400 mb-52" onClick={submitFormHandle}>SUBMIT</button>:"" }

            {/* <AllDatac allData={allData}/> */}
            <Loginform/>
      
        </Box>

      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <List>
          {navbar.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text}
                //   onClick={() => dataHandle(index)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
