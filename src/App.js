import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Expenses from "./Components/Expenses/Expenses"
import NewExpense from './Components/NewExpense/NewExpense';
import AddExpenseButton from './Components/NewExpense/AddExpenseButton';

const dummyExpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App=()=> {
  const [flag,setFlag]=useState(1);
  const [expenses,setExpense]=useState(dummyExpense)
  const addExpenseHandler=(expense)=>{
      setExpense(preExpnese=>{
        return [expense,...preExpnese];
      });
  }
  const setFlagValue=(value)=>{
    setFlag(value);
  }
  
  return (
    <div>
    {flag?<AddExpenseButton flag={setFlagValue}/>:<NewExpense saveExpenseData={addExpenseHandler} flag={setFlagValue}/>}
    <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
