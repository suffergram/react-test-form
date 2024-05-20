import { Form } from "../form/form";

export function App() {
  const handleSubmit = (data) => {
    console.log(data);
    alert("Submitted!");
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
    </>
  );
}
