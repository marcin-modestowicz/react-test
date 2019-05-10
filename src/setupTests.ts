import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

configure({ adapter: new Adapter() });
