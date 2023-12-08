const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Part = ({ title, ex }) => {
  return (
    <>
      <p>
        {title} {ex}
      </p>
    </>
  );
};
const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <>
      <Part title={part1} ex={exercises1}></Part>
      <Part title={part2} ex={exercises2}></Part>
      <Part title={part3} ex={exercises3}></Part>
    </>
  );
};
const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course}></Header>
      <Content
        {...{ part1, part2, part3, exercises1, exercises2, exercises3 }}
      ></Content>
      <Total {...{ exercises1, exercises2, exercises3 }}></Total>
    </>
  );
};

export default App;
