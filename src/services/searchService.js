import * as request from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        // `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounceValue)}&type=less`
        const res = await request.get('/users/search', {
            params: {
                q,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
