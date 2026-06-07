import { describe, expect, it } from "vitest";
import { createLeadFormSchema, leadFormSchema } from "@/lib/validation";

describe("leadFormSchema", () => {
  it("accepts a complete valid lead", () => {
    const result = leadFormSchema.safeParse({
      name: "Alex Morgan",
      email: "alex@acme.com",
      company: "Acme",
      message: "We want to automate qualification and follow-up for our sales team.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects malformed and incomplete input", () => {
    const result = leadFormSchema.safeParse({
      name: "A",
      email: "not-an-email",
      company: "",
      message: "Short",
    });

    expect(result.success).toBe(false);
  });

  it("returns locale-specific validation messages", () => {
    const schema = createLeadFormSchema({
      name: "Введите ваше имя.",
      email: "Введите корректный рабочий email.",
      company: "Введите название компании.",
      message: "Расскажите подробнее.",
    });

    const result = schema.safeParse({
      name: "",
      email: "invalid",
      company: "",
      message: "",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((issue) => issue.message)).toContain(
        "Введите ваше имя.",
      );
    }
  });
});
