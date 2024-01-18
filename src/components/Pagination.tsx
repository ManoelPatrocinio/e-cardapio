type Prop = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void

}
export const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: Prop) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);


    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages ; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={i === currentPage ? 'text-orange-900 text-lg transition-all hover:text-xl underline hover:font-medium cursor-pointer' : 'text-white text-lg transition-all hover:text-xl hover:underline hover:font-medium cursor-pointer'}
                    onClick={() => onPageChange(i)}
                >
                    <a href="#prodListContainer">

                        {i}
                    </a>

                </li>

            );
        }

        return pageNumbers;
    };

    return (
        <div className="">
            <ul className='w-full flex justify-center items-center py-4 gap-x-4'>{renderPageNumbers()}</ul>
        </div>
    );
};
