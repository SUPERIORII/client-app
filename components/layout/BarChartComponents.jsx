"use client"
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts"

// import 
const data = [
    {name: "Jan", users:400},
    {name: "Feb", users:300},
    {name: "Mar", users:600},
    {name: "Apr", users:800},
]

import React from 'react'

export default function BarChartComponents() {
  return (
<ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} margin={{top:20, right:30, left:20, bottom:5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#8884d8" />
    </BarChart>
</ResponsiveContainer>
  )
}
