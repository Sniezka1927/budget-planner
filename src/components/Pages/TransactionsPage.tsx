import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NewTransaction from "../NewTransaction/NewTransaction";
import Button from "../UI/Button";
import Title from "../UI/Title";
import Expenses from "../Expenses/Expenses";
import Select from "../UI/Select";
import Label from "../UI/Label";
import BudgetContext from "../../context/budget-context";
import Transaction from "../../Interfaces/Transaction";
import months from "../../Interfaces/months";
import ListGroup from "react-bootstrap/ListGroup";
import years from "../../Interfaces/years";

const monthsData = [
  { id: 0, title: "January" },
  { id: 1, title: "February" },
  { id: 2, title: "March" },
  { id: 3, title: "April" },
  { id: 4, title: "May" },
  { id: 5, title: "June" },
  { id: 6, title: "July" },
  { id: 7, title: "August" },
  { id: 8, title: "September" },
  { id: 9, title: "October" },
  { id: 10, title: "November" },
  { id: 11, title: "December" },
];
const TransactionsPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const budgetCtx = useContext(BudgetContext);

  const toggleVisibility = (value: boolean) => {
    setIsVisible(value);
  };

  const [tranasctions, setTransactions] = useState<Array<Transaction>>(
    budgetCtx.transactions
  );

  const [selectedMonth, setSelectedMonth] = useState<string>(
    monthsData[0].title
  );

  const [availableYears, setAvailableYears] = useState<Array<years>>([]); //
  const [selectedYear, setSelectedYear] = useState<string>(
    String(new Date().getFullYear())
  );

  const monthHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };
  const yearHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  // set Current month
  useEffect(() => {
    const curMonthId = new Date().getMonth();
    const curMonthData = monthsData.filter(
      (month: months) => month.id === curMonthId
    );
    setSelectedMonth(curMonthData[0].title);
  }, []);

  // set Available years based on transactions range
  useEffect(() => {
    const years = budgetCtx.transactions.map((trans: Transaction) =>
      new Date(trans.date).getFullYear()
    );
    const uniqueYears = [...new Set(years)];
    const yearsRange = uniqueYears.map((y, i) => {
      return { id: i, title: String(y) };
    });

    if (yearsRange.length > 0) setAvailableYears(yearsRange);
    else
      setAvailableYears([{ id: 0, title: String(new Date().getFullYear()) }]);
  }, [budgetCtx.transactions, selectedMonth]);

  // set Transactions after updating select
  useEffect(() => {
    const selectedMonthData = monthsData.filter(
      (month: months) => month.title === selectedMonth
    );
    const monthId = selectedMonthData[0].id;
    const matchingTransactionsByMonth = budgetCtx.transactions.filter(
      (trans: Transaction) =>
        new Date(trans.date).getMonth() === Number(monthId)
    );
    const matchingTransactions = matchingTransactionsByMonth.filter(
      (trans: Transaction) =>
        JSON.stringify(new Date(trans.date).getFullYear()) === selectedYear
    );
    setTransactions(matchingTransactions);
  }, [selectedMonth, selectedYear, budgetCtx.transactions]);

  return (
    <Container>
      {isVisible ? <NewTransaction toggle={toggleVisibility} /> : null}
      <Row>
        <Title>Transactions</Title>
      </Row>
      <Row>
        <Button
          onClickHandler={() => {
            setIsVisible((prevState: boolean) => !prevState);
          }}
        >
          Add new transaction
        </Button>
      </Row>
      <Row>
        <Title>Filter by:</Title>
        <ListGroup horizontal={"sm"}>
          <ListGroup.Item style={{ borderColor: "transparent" }}>
            <Label>Month</Label>
            <br />
            <Select
              options={monthsData}
              placeholder={"filter by month"}
              onChangeHandler={monthHandler}
              value={selectedMonth}
            ></Select>
          </ListGroup.Item>
          <ListGroup.Item style={{ borderColor: "transparent" }}>
            <Label>Year</Label>
            <br />
            <Select
              options={availableYears}
              placeholder={"filter by year"}
              value={selectedYear}
              onChangeHandler={yearHandler}
            ></Select>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal={"sm"}></ListGroup>
      </Row>
      <Row>
        <Expenses transactions={tranasctions} />
      </Row>
    </Container>
  );
};

export default TransactionsPage;
