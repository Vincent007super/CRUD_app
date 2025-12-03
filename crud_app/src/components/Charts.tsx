import {CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

// data
const procData = [
    { 
        name: '',
        uv: 0,
    }, 
    {
        name: '',
        uv: 1,
    },
    {
        name: '',
        uv: 2,
    },
    {
        name: '',
        uv:3,
    }
] 

export function ProcStats() {
    return (
        <LineChart
            style={{ width: '100%', maxWidth: 500}}
            responsive
            data={procData}
            >
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="white" name="Procrastination means no shit gets done" />
                <YAxis dataKey="uv" label={{ value: 'Mounting work', angle: -90, position: 'insideLeft' }} />
                <XAxis dataKey="name" label={{ value: 'Hours procrastinating', position: 'insideRight' }}/>
                <Legend align="right" verticalAlign="top" />
            </LineChart>
    )
}