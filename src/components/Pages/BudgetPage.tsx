import { useContext, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Categories from "../Categories/Categories";
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
import { faker } from "@faker-js/faker";
import BudgetContext from "../../context/BudgetContext";
import chartData from "../../Interfaces/chartData";
import Category from "../../Interfaces/Category";

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
      {/* <Row>
        <Title>Set up budget for each category</Title>
        <Col>
          <Categories />
        </Col>
      </Row> */}
      <Row>
        <Title>Expenses Chart</Title>
      </Row>
      <Row>
        {/* https://github.com/reactchartjs/react-chartjs-2 */}
        <Bar options={options} data={data} />
      </Row>
      {/* <Row>
        <>
          The Budget page would allow the user to set a budget for each category
          and track their progress. The page would display a chart showing the
          user's spending for each category compared to their budget.
        </>
      </Row> */}
      <Row></Row>
    </Container>
  );
};

export default BudgetPage;
