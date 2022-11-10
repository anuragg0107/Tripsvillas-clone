import React from 'react'
import axios from 'axios'
export async function getUser(){
    let res = await axios.get(`https://dak-db.herokuapp.com/users`);
    return res.data;
}