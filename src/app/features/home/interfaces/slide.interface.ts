
export interface SlideItem {
  image?: string;
  header?: string;
  text?: string;
  button?: SlideButton;
}

export interface SlideButton {
  text: string;
  link: string;
}
