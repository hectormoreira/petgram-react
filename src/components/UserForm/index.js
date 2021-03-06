import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Button, Form, Input, Title, Error } from "./styles";

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          {...email}
          type="text"
          value="test@test.com"
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          {...password}
          type="password"
          value="12345678"
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
