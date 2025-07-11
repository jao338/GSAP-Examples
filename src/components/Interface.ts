export type Slide = {
  title: string;
  duration?: number;
};

export interface BounceElement {
  type: string;
  el: HTMLElement;
}
