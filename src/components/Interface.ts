export type Slide = {
  title: string;
  duration?: number;
  path: Path;
};

export type EasingItem = {
  key: string
  ease: string
  color: string
}

type Path = {
  name: string
  path: string
}
