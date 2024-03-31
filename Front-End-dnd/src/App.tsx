import { Provider as ReduxProvider } from 'react-redux'
import MainRoutes from "@/routes/MainRoutes";
import { store } from '@/store/store'

const App = () => {

  return (
    <ReduxProvider store={store}>
      <MainRoutes />
    </ReduxProvider>
  );
}

export default App;