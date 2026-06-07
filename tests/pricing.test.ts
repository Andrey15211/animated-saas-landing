import { describe, expect, it } from "vitest";
import { estimateMonthlyCost } from "@/lib/pricing";

describe("estimateMonthlyCost", () => {
  it("returns the base price for low lead volume", () => {
    expect(estimateMonthlyCost(500)).toBe(49);
  });

  it("adds predictable volume pricing above the included allowance", () => {
    expect(estimateMonthlyCost(5000)).toBe(99);
    expect(estimateMonthlyCost(25000)).toBe(229);
  });

  it("clamps invalid values to the supported range", () => {
    expect(estimateMonthlyCost(-20)).toBe(49);
    expect(estimateMonthlyCost(200000)).toBe(649);
  });

  it("uses explicit ruble pricing for the Russian locale", () => {
    expect(estimateMonthlyCost(500, "RUB")).toBe(4_900);
    expect(estimateMonthlyCost(25_000, "RUB")).toBe(22_900);
  });
});
