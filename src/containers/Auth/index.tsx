import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Text from '../../shared/Text';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Header from '../../shared/Header';
import Button from '../../shared/Button';

import { useAuth } from '../../context/auth';
import { RegisterCredentialsType } from '../../types/auth';

export default function Auth() {
  const { pathname } = useLocation();
  const { register, login, isAuthenticating } = useAuth();
  const [credentials, setCredentials] = useState<RegisterCredentialsType>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const isRegisterPage = pathname === '/register';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegisterPage && !credentials.name) {
      alert('Please insert name');
    } else if (!credentials.email) {
      alert('Please insert email');
    } else if (!credentials.password) {
      alert('Please insert password');
    } else if (
      isRegisterPage &&
      !(credentials.password === credentials.confirmPassword)
    ) {
      alert('Please insert matching passwords');
    } else {
      isRegisterPage ? register(credentials) : login(credentials);
    }
  };

  if (isAuthenticating) return <h1>Loading...</h1>;

  return (
    <div style={{ display: 'flex' }}>
      <Form handleSubmit={handleSubmit}>
        <Header>{isRegisterPage ? 'Register' : 'Login'}</Header>
        {isRegisterPage && (
          <Input
            name="name"
            placeholder="Name"
            handleChange={handleChange}
            value={credentials?.name}
          />
        )}

        <Input
          name="email"
          placeholder="Email"
          handleChange={handleChange}
          value={credentials?.email}
        />
        <Input
          name="password"
          placeholder="Password"
          handleChange={handleChange}
          value={credentials?.password}
        />
        {isRegisterPage && (
          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            handleChange={handleChange}
            value={credentials?.confirmPassword}
          />
        )}
        <Button>{isRegisterPage ? 'Register' : 'Login'}</Button>
        <Text
          withLink
          linkComponent={
            isRegisterPage ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/register">Register</Link>
            )
          }
        >
          Go to
        </Text>
      </Form>
    </div>
  );
}
