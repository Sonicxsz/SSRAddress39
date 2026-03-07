import { cartItem } from '@/store/cartSlice';

export interface SavedOrderItem {
    id: number | string;
    name: { EN: string; RU: string };
    img: string;
    price: number;
    variable: string | null;
}

const STORAGE_KEY = 'lastOrder';

export function saveLastOrder(items: cartItem[]): void {
    try {
        const simplified: SavedOrderItem[] = items.map(item => ({
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            variable: item.variable,
        }));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(simplified));
    } catch {
        // localStorage may be unavailable (SSR, private mode, quota)
    }
}

export function getLastOrder(): SavedOrderItem[] | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed) || parsed.length === 0) return null;
        return parsed as SavedOrderItem[];
    } catch {
        return null;
    }
}
