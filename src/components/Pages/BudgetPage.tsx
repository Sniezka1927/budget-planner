import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Title from "../UI/Title";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import BudgetContext from "../../context/BudgetContext";
import chartData from "../../Interfaces/chartData";
import Category from "../../Interfaces/Category";
import Spinner from "react-bootstrap/Spinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

const BudgetPage: React.FC = () => {
  const budgetCtx = useContext(BudgetContext);
  const [budget, setBudget] = useState<Number>(budgetCtx.budget);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const options = {
    responsive: true,
    // plugins: {
    // legend: {
    // position: "top" as const,
    // },
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart",
    // },
    // },
  };

  const onLoadLabels = budgetCtx.categories.map((cat: Category) => cat.title);
  const [data, setData] = useState<chartData>({
    onLoadLabels,
    datasets: [
      {
        label: "Expenses Total Amount",
        data: budgetCtx.categories.map((cat) => Number(cat.totalSpend)), // SUM of total expenses in a month
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  useEffect(() => {
    const labels = budgetCtx.categories.map((cat) => cat.title);
    setIsLoading(true);
    const chartData = {
      labels,
      datasets: [
        {
          label: "Expenses Total Amount",
          data: budgetCtx.categories.map((cat) => Number(cat.totalSpend)), // SUM of total expenses in a month
          backgroundColor: "rgba(255, 99, 132, 0.8)",
        },
      ],
    };
    setIsLoading(false);
    setData(chartData);
  }, [budgetCtx]);

  const budgetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };
  const onSave = () => {
    budgetCtx.setBudget(budget);
  };

  return (
    <Container>
      <Row>
        <Title>Your Income</Title>
      </Row>
      <Row>
        <Input
          value={budget}
          type="number"
          onChangeHandler={budgetHandler}
          placeholder={"write your income"}
        ></Input>
      </Row>
      <Row>
        <Button onClickHandler={onSave}>Save</Button>
      </Row>

      <Row>
        <Title>Expenses Chart</Title>
      </Row>
      <Row>
        {isLoading ? (
          <Col>
            <Spinner
              animation="border"
              style={{
                color: "#9f146e",
                width: "4rem",
                height: "4rem",
                marginTop: "3rem",
              }}
            />
          </Col>
        ) : (
          <Bar options={options} data={data} />
        )}
      </Row>
    </Container>
  );
};

export default BudgetPage;
