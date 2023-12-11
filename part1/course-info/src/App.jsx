/* eslint-disable react/prop-types */
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
const Content = ({ parts }) => {
  return (
    <>
      <Part title={parts[0].name} ex={parts[0].exercises}></Part>
      <Part title={parts[1].name} ex={parts[1].exercises}></Part>
      <Part title={parts[2].name} ex={parts[2].exercises}></Part>
    </>
  );
};
const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </>
  );
};

export default App;
