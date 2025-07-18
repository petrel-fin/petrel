"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { GiHummingbird } from "react-icons/gi";

export default function NavHeader() {
  return (
    <Link href="/" className="flex items-center justify-between px-2 pt-2">
      <div className="flex items-center gap-2">
        <GiHummingbird className="h-6 w-6" />
        <span className="text-md font-bold">Petrel</span>
      </div>
      <Badge
        variant="secondary"
        className="bg-blue-100 text-blue-500 dark:bg-blue-500/15"
      >
        BETA
      </Badge>
    </Link>
  );
}
