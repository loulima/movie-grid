import { ReactElement } from "react";
import { notFound } from "next/navigation";
import { Homepage } from "../screens/homepage";
import { Series } from "../screens/series";
import { Sobre } from "../screens/sobre";

const screens: Record<string, ReactElement> = {
  homepage: <Homepage />,
  series: <Series />,
  sobre: <Sobre />,
};

export default function Page({ params }: { params: { screen: string } }): ReactElement {
  return screens[params.screen] || notFound();
}
