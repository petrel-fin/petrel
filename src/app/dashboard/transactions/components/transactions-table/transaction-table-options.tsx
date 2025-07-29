"use client";

import * as React from "react";
import { IconChevronDown, IconLayoutColumns } from "@tabler/icons-react";
import { type Table } from "@tanstack/react-table";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";
import { Input } from "~/components/ui/input";
import type { schema } from "./types";

interface TransactionsTableProps {
  table: Table<z.infer<typeof schema>>;
}

export default function TransactionsTableOptions({
  table,
}: TransactionsTableProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 px-1">
          <Input type="number" placeholder="Min" className="h-8 w-[100px]" />
          <p className="text-muted-foreground">-</p>
          <Input type="number" placeholder="Max" className="h-8 w-[100px]" />
        </div>
        <Button variant="outline" size="sm">
          <ListFilter />
          <span className="hidden lg:inline">More Filters</span>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <IconLayoutColumns />
              <span className="hidden lg:inline">Customize Columns</span>
              <span className="lg:hidden">Columns</span>
              <IconChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {table
              .getAllColumns()
              .filter(
                (column) =>
                  typeof column.accessorFn !== "undefined" &&
                  column.getCanHide(),
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
