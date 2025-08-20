import { NextResponse } from "next/server";

export async function GET() {
  const plans = [
    {
      id: "basic",
      title: "Basic",
      desc: "For individuals getting started.",
      cost: "$9",
    },
    {
      id: "pro",
      title: "Pro",
      desc: "For professionals who need more.",
      cost: "$29",
    },
    {
      id: "enterprise",
      title: "Enterprise",
      desc: "For teams and large companies.",
      cost: "$99",
    },
  ];

  return NextResponse.json(plans);
}
