export const http = () => {

    let request: <T>(url: string, method?: string, body?: null | string, headers?: HeadersInit) => Promise<T>;

    request = async (url, method='GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
        
        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }

            const data = await response.json();

            return data;

        } catch (e) {
            throw e;
        }

    }

    return {request}
}