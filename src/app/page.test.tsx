import Home from './page';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Home', () => {
    it('renders a dashboard with three buttons', () => {
        render(<Home />);
        expect(screen.getByText('View Current Stock')).toBeInTheDocument();
        expect(screen.getByText('View Audit History')).toBeInTheDocument();
    });
});