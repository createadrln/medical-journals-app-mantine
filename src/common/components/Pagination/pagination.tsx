const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Disable previous and next buttons if on the first or last page
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const range = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
