import axios from "axios";
import React,{ createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
//import uuid v4
import { v4 as uuid } from "uuid";
import { getUser } from "../Components/Api/Api";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [auth, setauth] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [user, setUsers] = useState([]);
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [token, settoken] = useState("");

   const handleLogin=(email,pass)=>{
    user?.map((el) => {
        if (el.email == email && el.password == pass) {
          setauth(true);
          setfName(el.firstname);
          setlName(el.lastname);
          setemail(el.email);
          settoken(el.token)
        }
      });
   };

   const handleCreateAccount=(fname, lname, email, pass)=>{
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    axios
      .post(`https://dak-db.herokuapp.com/users`, {
        token: small_id,
        firstname: fname,
        lastname: lname,
        email: email,
        password: pass,
        orderArr: [],
      })
      .then((res) => {
        setauth(true);
        setfName(fname);
        setlName(lname);
        setemail(email);
        settoken(small_id);
      })
      .catch((err) => console.log(err));
   }
   useEffect(() => {
    getUser().then((res) => setUsers(res));
  }, [auth]);

  const value = {
    auth,
    handleLogin,
    fName,
    lName,
    email,
    token,
    handleCreateAccount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}