// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "./../redux/store";
// import toast from "react-hot-toast";

// const Header = () => {
//   //global state
//   let isLogin = useSelector((state) => state.isLogin);
//   isLogin = isLogin || localStorage.getItem("userId");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [value, setValue] = useState();
//   //logout
//   const handlelogout = () => {
//     try {
//       dispatch(authActions.logout());
//       toast.success("Logout Successfully");
//       navigate("/login");
//       localStorage.clear();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <AppBar position="sticky">
//         <Toolbar>
//           <Typography variant="h4">Boister</Typography>
//           {isLogin && (
//             <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
//               <Tabs
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, val) => setValue(val)}
//               >
//                 <Tab label="Crafts" LinkComponent={Link} to="/blogs"></Tab>
//                 <Tab
//                   label="My Crafts"
//                   LinkComponent={Link}
//                   to="/my-blogs"
//                 ></Tab>
//                 <Tab
//                   label="Upload Craft"
//                   LinkComponent={Link}
//                   to="/create-blog"
//                 ></Tab>
//               </Tabs>
//             </Box>
//           )}
//           <Box display={"flex"} marginLeft="auto">
//             {!isLogin && (
//               <>
//                 <Button
//                   sx={{ margin: 1, color: "white" }}
//                   LinkComponent={Link}
//                   to="/login"
//                 >
//                   Login
//                 </Button>
//                 <Button
//                   sx={{ margin: 1, color: "white" }}
//                   LinkComponent={Link}
//                   to="/register"
//                 >
//                   Register
//                 </Button>
//               </>
//             )}
//             {isLogin && (
//               <Button onClick={handlelogout} sx={{ margin: 1, color: "white" }}>
//                 LogOut
//               </Button>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./../redux/store";
import toast from "react-hot-toast";

const Header = () => {
  //global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState();

  //logout
  const handlelogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4">Boister</Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: 2, md: 0 },
            }}
          >
            {isLogin && (
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab label="Crafts" LinkComponent={Link} to="/blogs" />
                <Tab label="My_Crafts" LinkComponent={Link} to="/my-blogs" />
                <Tab
                  label="Upload_Craft"
                  LinkComponent={Link}
                  to="/create-blog"
                />
              </Tabs>
            )}
          </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: { xs: 1, md: 2 }, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: { xs: 1, md: 2 }, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
            {isLogin && (
              <Button
                onClick={handlelogout}
                sx={{ margin: { xs: 1, md: 2 }, color: "white" }}
              >
                LogOut
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
