import { render, screen } from "@testing-library/react";
import App from "../../components/App";

describe("App", () => {
  it("renders App component correctly", () => {
    const mockData = { location: { city: "Chester" }, forecasts: [] };
    render(<App forecasts={mockData.forecasts} location={mockData.location} />);

    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
