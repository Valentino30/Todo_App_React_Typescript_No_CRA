import Text from '../../shared/Text';
import Button from '../../shared/Button';
import Header from '../../shared/Header';

import TodoList from '../../components/TodoList';

import { useAuth } from '../../context/auth';
import { TodoProvider } from '../../context/todo';

export default function Dashboard() {
  const { logout, user } = useAuth();

  return (
    <TodoProvider>
      <Button handleClick={logout}>Logout</Button>
      <Header>Dashboard</Header>
      <Text>{`id: ${user?.id}`}</Text>
      <Text>{`email: ${user?.email}`}</Text>
      <Text>{`token: ${user?.token}`}</Text>
      <TodoList />
    </TodoProvider>
  );
}
