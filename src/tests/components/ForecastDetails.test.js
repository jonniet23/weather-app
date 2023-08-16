import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validprops = {
    date: 1111111,
    humidity: "30",
    wind: {
      speed: 13,
      direction: "s",
    },
    temperature: {
      min: 4,
      max: 11,
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validprops.date}
        humidity={validprops.humidity}
        wind={validprops.wind}
        temperature={validprops.temperature}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails
        date={validprops.date}
        humidity={validprops.humidity}
        wind={validprops.wind}
        temperature={validprops.temperature}
      />,
    );

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("30")).toHaveClass("forecast-details__humidity");
    expect(getByTestId("forecast-details")).toHaveClass("forecast-details");
    expect(getByText("11°C")).toHaveClass("forecast-details__max-temperature");
  });
});
