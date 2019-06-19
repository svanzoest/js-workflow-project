import future from "@mdx-deck/themes/future";
import highlight from '@mdx-deck/themes/syntax-highlighter-prism'
import aspect from '@mdx-deck/themes/aspect'

export const themes = [future, aspect, highlight];

import { slides as begin } from "./begin.mdx";
import { slides as ide } from "./ide.mdx";
import { slides as transpiling } from "./transpiling.mdx";
import { slides as linting } from "./linting.mdx";
import { slides as pkginit } from "./package/init.mdx";
import { slides as unittesting } from "./testing/unit.mdx";
import { slides as building } from "./building.mdx";
import { slides as integrationtesting } from "./testing/integration.mdx";
import { slides as publishing } from "./package/publishing.mdx";
import { slides as security } from "./security.mdx";
import { slides as end } from "./end.mdx";

export const slides = [
  ...begin,
  ...ide,
  ...transpiling,
  ...linting,
  ...pkginit,
  ...unittesting,
  ...building,
  ...integrationtesting,
  ...publishing,
  ...security,
  ...end
];
