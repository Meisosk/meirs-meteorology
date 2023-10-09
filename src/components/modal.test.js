import React from "react";
import { render } from "@testing-library/react";
import WeatherMoreInfo from "./WeatherMoreInfo";

describe("WeatherMoreInfo", () => {
  it("does not render the modal when 'modalVisible' is false", () => {
    const testData = {
      1: {
        vis: 10,
        precip: 0.2,
        uv: 5,
        wind_spd: 8,
        rh: 60,
        sunrise_ts: 1633699200,
        sunset_ts: 1633731600,
      },
    };

    const { queryByText } = render(
      <WeatherMoreInfo
        data={{ data: testData }}
        day={1}
        unit="imperial"
        show={false}
      />
    );

    expect(queryByText("Visibility: 10 mph")).toBeNull();
    expect(queryByText("Precipitation: 0.2 inches")).toBeNull();
    expect(queryByText("UV index: 5")).toBeNull();
    expect(queryByText("Wind: 8 mph")).toBeNull();
    expect(queryByText("Humidity: 60%")).toBeNull();
    expect(queryByText("Sun: Rise: 08:00 AM")).toBeNull();
    expect(queryByText("Set: 04:00 PM")).toBeNull();
  });
});
