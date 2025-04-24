import { ProductDetail } from "./product-detail";

export interface GalleryImage {
    src: string;
    alt: string;
    category: string;
    title?: string;
    description?: string;
    detail?: ProductDetail;
}