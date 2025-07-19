import type { ReactNode } from "react";

export interface NavPage {
  title: string;
  url: string;
  icon?: ReactNode;
  badge?: string;
}

interface PatientSubPage {
  title: string;
  url: string;
  check?: boolean;
}

export interface PatientNavPage extends NavPage {
  items?: PatientSubPage[];
}
