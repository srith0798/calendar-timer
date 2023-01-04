import moment from "moment";
import styled from "styled-components";

const CalenderTemplate = styled.section`
  max-width: 750px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-left: 1px solid;
  border-top: 1px solid;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-bottom: 1px solid;
  border-right: 1px solid;
  &:nth-child(3) {
    grid-column: 3 / span 3;
  }
`;

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function About() {
  const month = moment().format("MMMM");
  const startDate = moment().startOf("month").get("date");
  const prefixSpaces = +moment().startOf("month").format("d");
  const endDate = moment().endOf("M").get("D");
  const amountOfDates = endDate - startDate + 1;
  console.log(amountOfDates);
  return (
    <div>
      <h1>Calendar</h1>
      <CalenderTemplate>
        <Cell>&lt;&lt;&lt;</Cell>
        <Cell>&lt;&lt;</Cell>
        <Cell>{month}</Cell>
        <Cell>&gt;&gt;&gt;</Cell>
        <Cell>&gt;&gt;</Cell>
        {days.map((key) => (
          <Cell key={key}>{key}</Cell>
        ))}
        {Array.from({ length: prefixSpaces }).map((x, index) => (
          <Cell key={index} />
        ))}
        {Array.from({ length: amountOfDates }).map((x, index) => (
          <Cell key={index + 1}>{index + 1}</Cell>
        ))}
      </CalenderTemplate>
    </div>
  );
}

export default About;
