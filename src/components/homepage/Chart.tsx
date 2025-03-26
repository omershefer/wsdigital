"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "ינואר", desktop: 100, mobile: 80 },
  { month: "פברואר", desktop: 305, mobile: 200 },
  { month: "מרץ", desktop: 237, mobile: 120 },
  { month: "אפריל", desktop: 73, mobile: 190 },
  { month: "מאי", desktop: 209, mobile: 130 },
  { month: "יוני", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "דסקטופ",
    color: "#2C3537",
  },
  mobile: {
    label: "נייד",
    color: "#2C3537",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medium">כניסות לאתרי ויצמן-שפר דיגיטל</CardTitle>
        <CardDescription>ינואר - יוני 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          עלייה של 5.2% החודש <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
