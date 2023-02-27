import Category from "./Category";

const DUMMY_CATEGOIRES = [
  {
    id: "1",
    title: "Shopping",
    totalAmount: 300,
  },
  {
    id: "2",
    title: "Home",
    totalAmount: 900,
  },
  {
    id: "3",
    title: "Car & Transport",
    totalAmount: 600,
  },
  {
    id: "4",
    title: "Activities and Travels",
    totalAmount: 300,
  },
  {
    id: "5",
    title: "Finance",
    totalAmount: 500,
  },
  {
    id: "6",
    title: "Else",
    totalAmount: 1200,
  },
];

const Categories = () => {
  return (
    <ul className="list-group">
      {DUMMY_CATEGOIRES.map((categoryItem) => {
        return (
          <Category
            key={categoryItem.id}
            id={categoryItem.id}
            title={categoryItem.title}
            totalAmount={categoryItem.totalAmount}
          />
        );
      })}
    </ul>
  );
};

export default Categories;
