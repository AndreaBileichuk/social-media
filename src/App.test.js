/**
 * @jest-environment node
 */
import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(<div></div>); 
    root.render(<SamuraiJSApp tab="home" />);
    root.unmount();
});