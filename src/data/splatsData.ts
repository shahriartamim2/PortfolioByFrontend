import Runes from "../images/supersplat/runes-poster.webp";

export interface Splat {
  id: string;
  title: string;
  iframe: string;
  url: string;
  thumbnail: string;
  description?: string;
}

export const splatsData: Splat[] = [
  {
    id: "splat-1",
    title: "3D Visualization of Ancient Runic Artifact",
    iframe: "<iframe id=\"viewer\" width=\"100%\" height=\"100%\" allow=\"fullscreen; xr-spatial-tracking\" src=\"https://superspl.at/s?id=5b8892b5\"></iframe>",
    url: "https://superspl.at/s?id=5b8892b5",
    thumbnail: Runes,
    description: "A 3D visualization of an ancient runic artifact generated with Gaussian Splatting technology, showcasing detailed geometry, realistic lighting, and an interactive viewer."
  }
];
