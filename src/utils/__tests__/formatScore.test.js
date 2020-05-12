import { formatScore } from "../formatScore";

describe("formatScore", () => {
  it("should format score correctly", () => {
    const score = "20700";
    const formattedScore = formatScore(score);
    expect(formattedScore).toEqual("20.7k");

    const score2 = "200700";
    const formattedScore2 = formatScore(score2);
    expect(formattedScore2).toEqual("200.7k");
  });
});
