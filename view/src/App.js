import React, { useState, useEffect } from 'react';
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Container, Grid, Button, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { VictoryPie, VictoryTooltip } from 'victory';
import Modal from './components/Modal';
import ExpenseList from './components/ExpenseList';
import { fetchExpenses, expenseByCategory } from './utils';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date());
  useEffect(() => {
    // update view from model w/ controller
    fetchExpenses().then((res) => setExpenses(res));
  }, []);

  return (
    <Container className="App">
      <h1>Expense Tracker</h1>
      <Grid container>
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: 'space-between',
            padding: '1rem',
          }}
          id="panel"
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Expense"
              value={selectDate}
              minDate={new Date('2017-01-01')}
              onChange={(newValue) => {
                setSelectDate(newValue);
                fetchExpenses(newValue.getTime()).then((res) =>
                  setExpenses(res)
                );
              }}
              slotProps={{ textField: { variant: 'outlined' } }}
            />
          </LocalizationProvider>
          <Button
            variant="outlined"
            onClick={() => {
              setId(null);
              setModal(!modal);
            }}
          >
            <AddCircleOutlineIcon />
          </Button>
        </Grid>
        {Array.isArray(expenses) && expenses.length > 0 && (
          <Grid item xs={12} sm={6} md={6}>
            <Typography>Spending by Category</Typography>
            <VictoryPie
              colorScale="qualitative"
              labelComponent={<VictoryTooltip />}
              innerRadius={100}
              data={expenseByCategory(expenses)}
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={6}>
          <Typography>Expenses on This Date</Typography>
          <ExpenseList
            setExpenses={(expensesList) => setExpenses(expensesList)}
            expenses={expenses}
            setId={(expenseId) => {
              setId(expenseId);
              setModal(!modal);
            }}
          />
        </Grid>
      </Grid>
      {modal && (
        <Modal
          modal
          expenses={expenses}
          refreshExpenses={async () => {
              const res = await fetchExpenses(selectDate.getTime());
              setExpenses(res)
            }}
          _id={id}
          handleClose={() => {
            setModal(!modal);
            setId(null);
          }}
        />
      )}
    </Container>
  );
}

export default App;
