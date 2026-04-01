export interface Splat {
  id: string;
  title: string;
  iframe: string;
  url: string;
  thumbnail: string;
  description?: string;
}
import Runes from "../images/supersplat/RunesSplat.png"

export const splatsData: Splat[] = [
  {
    id: "splat-1",
    title: "3d visualization of ancient runic artifact",
    iframe: "<iframe id=\"viewer\" width=\"100%\" height=\"100%\" allow=\"fullscreen; xr-spatial-tracking\" src=\"https://superspl.at/s?id=5b8892b5\"></iframe>",
    url: "https://superspl.at/s?id=5b8892b5",
    thumbnail: Runes,
    description: "3d visualization of ancient runic artifact, generated using Gaussian Splatting technology. This splat showcases intricate details and realistic lighting, providing an immersive experience for viewers interested in historical artifacts and 3D rendering techniques."
  }
];
