interface chartData {
  labels?: Array<string>;
  onLoadLabels?: Array<string>;
  datasets: Array<datasets>;
}

interface datasets {
  backgroundColor: string;
  label: string;
  data: Array<Number>;
}

export default chartData;
