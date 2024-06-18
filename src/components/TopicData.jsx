import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
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


// import Loginform from "./components/Loginform";




// import { Button  } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

// import SelectOption from "./Components/SelectOption";



import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);



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



const [topicData, settopicData] = useState([]);

  const fetchData = () => {
    return fetch(
      `https://ap-south-1.aws.data.mongodb-api.com/app/application-0-eexgfbu/endpoint/v2/list?list=show`
    )
      .then((response) => response.json())
      .then((data) => settopicData(data));
    console.log(topicData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(topicData[1]);



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
            


            <div>
      <h1>topicData List Boxes</h1>
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {topicData &&
          topicData.length > 0 &&
          topicData.map((topicDataObj, index) => (
            <CardContent
              key={index}
              sx={{
                display: "grid",
                boxShadow: 5,
                width: "350px",
                margin: "20px",
              }}
            >
              <Typography variant="h5" component="div">
                Topic : {topicData[index].topic}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Easy :{topicData[index].easy}
                <br></br>
                Medium :{topicData[index].medium}
                <br></br>
                Hard :{topicData[index].hard}
                <br></br>
              </Typography>

              <Typography sx={{ mb: 1.5 }}>
                Total : {topicData[index].total}
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          ))}
      </Box>
    </div>
      
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
