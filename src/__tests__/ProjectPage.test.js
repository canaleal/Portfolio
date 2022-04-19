import {render, screen, cleanup} from '@testing-library/react';
import ProjectsPage from '../pages/projects/ProjectsPage';


test('Should render Project Page', () => {
 render(<ProjectsPage />); 
 const pageElement = screen.getByTestId('main-page');

 expect(pageElement).toBeInTheDocument();

});