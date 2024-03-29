import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider as ReduxProvider } from 'react-redux'
import MainRoutes from "@/routes/MainRoutes";
import { store } from '@/store/store'

const App = () => {

  return (
    <ReduxProvider store={store}>
        <DndProvider backend={HTML5Backend}>
          <MainRoutes />
        </DndProvider>
    </ReduxProvider>

  );
}

export default App;