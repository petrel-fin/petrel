// app/components/CashFlowSankey.tsx
"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { sankey as d3Sankey, sankeyLinkHorizontal } from "d3-sankey";
import { cn } from "~/lib/utils"; // Assuming you have ShadCN's cn utility for classnames

interface SankeyNode {
  name: string;
}

interface SankeyLink {
  source: string;
  target: string;
  value: number;
}

interface SankeyData {
  nodes: SankeyNode[];
  links: SankeyLink[];
}

const totalInflow = 100000 + 5000 + 20000 + 2000;
const totalTaxes = 20000 + 1000 + 3000 + 100;
const numExpenseSubs = 8;
const numDebtSubs = 2;
const numInvestSubs = 2;
const numSavingsSubs = 1;
const numGoalsSubs = 1;
const totalOutflowSubs =
  numExpenseSubs + numDebtSubs + numInvestSubs + numSavingsSubs + numGoalsSubs;
const vOut = totalInflow / totalOutflowSubs;
const vTax = totalTaxes / 2;

const data: SankeyData = {
  nodes: [
    // Level 1: All Sources
    { name: "Salary" },
    { name: "Bonus" },
    { name: "Rental Income" },
    { name: "Freelance" },
    // Level 2: Grouped Sources
    { name: "Total Inflow" },
    { name: "Taxes" },
    // Level 3: Grouped Expenses
    { name: "Expenses" },
    { name: "Debt Payments" },
    { name: "Investments" },
    { name: "Savings" },
    { name: "Goals" },
    // Level 4: Detailed Expenses
    { name: "Groceries" },
    { name: "Dining Out" },
    { name: "Transportation" },
    { name: "Entertainment" },
    { name: "Utilities" },
    { name: "Housing" },
    { name: "Insurance" },
    { name: "Charity" },
    { name: "Cyber Truck Payment" },
    { name: "Home Loan" },
    { name: "Index Funds" },
    { name: "Retirement Account" },
    { name: "Emergency Fund" },
    { name: "Hawaii Trip" },
    { name: "Federal Taxes" },
    { name: "State Taxes" },
  ],
  links: [
    // Level 1-2
    { source: "Salary", target: "Total Inflow", value: 100000 },
    { source: "Bonus", target: "Total Inflow", value: 5000 },
    { source: "Rental Income", target: "Total Inflow", value: 20000 },
    { source: "Freelance", target: "Total Inflow", value: 2000 },
    { source: "Salary", target: "Taxes", value: 20000 },
    { source: "Bonus", target: "Taxes", value: 1000 },
    { source: "Rental Income", target: "Taxes", value: 3000 },
    { source: "Freelance", target: "Taxes", value: 100 },
    // Level 2-3/4
    {
      source: "Total Inflow",
      target: "Expenses",
      value: numExpenseSubs * vOut,
    },
    {
      source: "Total Inflow",
      target: "Debt Payments",
      value: numDebtSubs * vOut,
    },
    {
      source: "Total Inflow",
      target: "Investments",
      value: numInvestSubs * vOut,
    },
    { source: "Total Inflow", target: "Savings", value: numSavingsSubs * vOut },
    { source: "Total Inflow", target: "Goals", value: numGoalsSubs * vOut },
    // Level 3-4
    { source: "Expenses", target: "Groceries", value: vOut },
    { source: "Expenses", target: "Dining Out", value: vOut },
    { source: "Expenses", target: "Transportation", value: vOut },
    { source: "Expenses", target: "Entertainment", value: vOut },
    { source: "Expenses", target: "Utilities", value: vOut },
    { source: "Expenses", target: "Housing", value: vOut },
    { source: "Expenses", target: "Insurance", value: vOut },
    { source: "Expenses", target: "Charity", value: vOut },
    { source: "Debt Payments", target: "Cyber Truck Payment", value: vOut },
    { source: "Debt Payments", target: "Home Loan", value: vOut },
    { source: "Investments", target: "Index Funds", value: vOut },
    { source: "Investments", target: "Retirement Account", value: vOut },
    { source: "Savings", target: "Emergency Fund", value: vOut },
    { source: "Goals", target: "Hawaii Trip", value: vOut },
    { source: "Taxes", target: "Federal Taxes", value: vTax },
    { source: "Taxes", target: "State Taxes", value: vTax },
  ],
};

const CashFlowSankey: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const { width, height } = svg.node()?.getBoundingClientRect() || {
      width: 0,
      height: 0,
    };

    // Clear previous content
    svg.selectAll("*").remove();

    // Prepare Sankey generator (increased node padding for better spacing with more nodes)
    const sankey = d3Sankey<SankeyNode, SankeyLink>()
      .nodeWidth(15)
      .nodePadding(15) // Increased from 10 to give more vertical space
      .extent([
        [1, 1],
        [width - 1, height - 6],
      ])
      .nodeId((d) => d.name);

    // Compute the Sankey diagram
    const { nodes, links } = sankey({
      nodes: data.nodes.map((d) => ({ ...d })),
      links: data.links.map((d) => ({ ...d })),
    });

    // Color scale (using Tailwind/ShadCN-inspired colors, e.g., slate for nodes, accents for links)
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Add links (flows)
    svg
      .append("g")
      .selectAll("path")
      .data(links)
      .join("path")
      .attr("d", sankeyLinkHorizontal())
      .attr(
        "stroke",
        (d) =>
          d3
            .color(color((d.source as any).name))
            ?.copy({ opacity: 0.5 })
            .toString() || "#94a3b8",
      ) // slate-400 opacity
      .attr("stroke-width", (d) => Math.max(1, d.width || 0))
      .attr("fill", "none")
      .attr("class", "transition duration-300 ease-in-out");

    // Add nodes (rectangles)
    svg
      .append("g")
      .selectAll("rect")
      .data(nodes)
      .join("rect")
      .attr("x", (d) => d.x0 || 0)
      .attr("y", (d) => d.y0 || 0)
      .attr("height", (d) => (d.y1 || 0) - (d.y0 || 0))
      .attr("width", (d) => (d.x1 || 0) - (d.x0 || 0))
      .attr("fill", (d) => color(d.name))
      .attr("class", "rounded-sm"); // ShadCN-like subtle rounding

    // Add node labels
    svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", (d) => (d.x0 || 0) - 6)
      .attr("y", (d) => ((d.y1 || 0) + (d.y0 || 0)) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text((d) => d.name)
      .attr("class", "text-xs font-medium text-foreground fill-current") // ShadCN text styles
      .filter((d) => (d.x0 || 0) < width / 2)
      .attr("x", (d) => (d.x1 || 0) + 6)
      .attr("text-anchor", "start");
  }, []);

  return (
    <div className="p-4">
      <svg ref={svgRef} className="min-h-[400px] min-w-[1100px]" />
    </div>
  );
};

export default CashFlowSankey;
