import {
  BellRing,
  Bot,
  ChartNoAxesCombined,
  DatabaseZap,
  MessagesSquare,
  Route,
} from "lucide-react";

export const features = [
  { icon: Bot, accent: "violet" },
  { icon: DatabaseZap, accent: "cyan" },
  { icon: Route, accent: "blue" },
  { icon: MessagesSquare, accent: "violet" },
  { icon: BellRing, accent: "cyan" },
  { icon: ChartNoAxesCombined, accent: "blue" },
] as const;
