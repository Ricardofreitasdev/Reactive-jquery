import Ajax from './Ajax';

describe('Ajax', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue({}),
        });
    });

    afterEach(() => {
        global.fetch.mockClear();
        delete global.fetch;
    });

    test('ajax sends a request with the provided options', async () => {
        const options = {
            url: 'https://api.example.com/data',
            method: 'POST',
            headers: { 'Authorization': 'Bearer token' },
            data: JSON.stringify({ name: 'John' }),
        };

        await Ajax.ajax(options);

        expect(fetch).toHaveBeenCalledWith(options.url, {
            method: options.method,
            headers: options.headers,
            body: options.data,
        });
    });

    test('ajax throws an error for non-ok responses', async () => {
        global.fetch.mockResolvedValueOnce({ ok: false, status: 404 });

        await expect(Ajax.ajax({ url: 'https://api.example.com/data' })).rejects.toThrowError('404');
    });

    test('ajax resolves with response data for ok responses', async () => {
        const responseData = { id: 1, name: 'John' };
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValue(responseData),
        });

        const result = await Ajax.ajax({ url: 'https://api.example.com/data' });

        expect(result).toEqual(responseData);
    });
});
