export interface Store {
    id: string;
    name: string;
    imageUrl: string;
}

export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    storeId: string;
    category: Category;
    name: string;
    price: string;
    isfeatured: Boolean;
    size: Size;
    images: Image[];
}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}
