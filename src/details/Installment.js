import React, { useState, useEffect} from 'react';
import "./Installment.css"
import Table from './Table';
import Output from './Output';

const Installment = () => {
    const [oldData, setOldData] = useState([]);
    const [dates, setDates] = useState([]);
    const [emis, setEmis] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [data, setData] = useState({
        amount: "",
        rate: "",
        months: ""
    });

    useEffect(() => {
        let datesArray = [];
        for (let i = 1; i <= data.months; i++) {
            datesArray.push({
                month: i
            })
        }
        setDates(datesArray);

    }, [data.months]);

    const calculate = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecord = { ...data };
        const interests = (data.amount * (data.rate * 0.01)) / data.months;
        const emipermonth = ((data.amount / data.months) + interests).toFixed(2);
        let temperyarray=[];
        for (let i = 1; i <= data.months; i++) {
            temperyarray.push({
                month: emipermonth
            });
        }
        setEmis(temperyarray);

        console.log(emis)
        setOldData([...oldData, newRecord]);
        setData({
            amount: "",
            rate: "",
            months: ""
        })
       
        console.log(emis);
        console.log(dates);
        setToggle(!toggle);
    }
    console.log(emis ,"by using hook")
    let goBack = () => {
        setToggle(!toggle);
      };
    return (
        <div className='BodyContainer'>
            {toggle?(
                <div className="calculator">
                <h1>Emi Calculator</h1>
                <form onSubmit={handleSubmit} id="sample-form" method="post" >
                    <p>Amount (in Rs):
                        <input  type="number" name='amount' value={data.amount} placeholder="Please Enter Your Amount" onChange={calculate} />
                    </p>
                    <p>Interest Rate (in %):
                        <input  type="number" name='rate' value={data.rate} placeholder="Please Enter your Rate" onChange={calculate} />
                    </p>
                    <p>Duration (in Months):
                        <input  type="number" name='months' value={data.months} placeholder="Please Enter your Month" onChange={calculate} />
                    </p>
                    <button type="submit">Submit</button>
                </form>
            </div>
            ):(
                <Table emitable={emis} goBack={() => goBack()} />
            )}
             
            {toggle && (
                <Output list={oldData} emitable={emis} />
            )}
        </div>
    )
}

export default Installment;
