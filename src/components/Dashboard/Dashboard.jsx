import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, XAxis, YAxis, Tooltip, Legend, Rectangle } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {

    const profitArray = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='dashboard'>

            {/* LineChart */}
            <div>
                <h3>Month Wise Sell</h3>
                <LineChart width={500} height={300} data={profitArray}>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                    <Legend />
                    <Line dataKey="sell" stroke="#8884d8"></Line>
                </LineChart>
            </div>

            {/* AreaChart */}
            <div>
                <h3>Investment vs Revenue</h3>
                <AreaChart width={500} height={300} data={profitArray}>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                    <Legend />
                    <Area dataKey="investment" stroke="#ffc658" fill="#8884d8"></Area>
                    <Area dataKey="revenue" stroke="#82ca9d" fill="#ffc658"></Area>
                </AreaChart>
            </div>

            {/* BarChart */}
            <div>
                <h3>Investment vs Revenue</h3>
                <BarChart width={500} height={300} data={profitArray}>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />}></Bar>
                    <Bar dataKey="revenue" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />}></Bar>
                </BarChart>
            </div>

            {/* PieChart */}
            <div>
                <h3>Investment vs Revenue</h3>
                <PieChart width={500} height={300}>
                    <Tooltip />
                    <Pie data={profitArray}
                        dataKey="investment"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                        fill="#8884d8"
                    ></Pie>
                    <Pie data={profitArray}
                        dataKey="revenue"
                        cx={200}
                        cy={200}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                    ></Pie>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;