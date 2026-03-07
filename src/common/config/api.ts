const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const API = {
    items: `${BASE_URL}/api/v1/items`,
    images: `${BASE_URL}/api/v1/images`,
    mail: `${BASE_URL}/mail`,
} as const;
