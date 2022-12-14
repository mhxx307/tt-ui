import { memo } from 'react';
import AccountItem from '~/components/AccountItem/AccountItem';

// tach ra 1 component rieng de render ra list ket qua tim kiem
// de tranh render lai toan bo list khi co 1 ket qua tim kiem moi
function SearchResultList({ searchResult }) {
    return (
        <>
            {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
        </>
    );
}

export default memo(SearchResultList);
